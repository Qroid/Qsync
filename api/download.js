import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY
const APK_BUCKET = 'apk'
const APK_FILE = 'qsync-latest.apk'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { reference, email } = req.query

  if (!reference || !email) {
    return res.status(400).json({ error: 'Missing reference or email' })
  }

  try {
    const verifyRes = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET}`,
        },
      }
    )

    const { data, status } = await verifyRes.json()

    if (status !== true) {
      return res.status(400).json({ error: 'Payment not verified' })
    }

    if (data.status !== 'success') {
      return res.status(400).json({ error: 'Payment was not successful' })
    }

    const payerEmail = data.customer?.email?.toLowerCase()
    if (payerEmail !== email.toLowerCase()) {
      return res.status(403).json({ error: 'Email does not match payment' })
    }

    const { data: downloadData, error: downloadError } = await supabase.storage
      .from(APK_BUCKET)
      .createSignedUrl(APK_FILE, 300)

    if (downloadError) {
      return res.status(500).json({ error: 'Failed to generate download link' })
    }

    await supabase.from('downloads').insert({
      reference,
      email: email.toLowerCase(),
      plan: data.metadata?.plan_name || 'unknown',
      amount: data.amount,
    })

    return res.redirect(302, downloadData.signedUrl)
  } catch (err) {
    return res.status(500).json({ error: 'Download failed' })
  }
}
