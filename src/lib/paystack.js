const PAYSTACK_PUBLIC_KEY = (import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || '').trim()

export const plans = {
  Weekly: {
    name: 'Weekly',
    price: 300,
    priceFormatted: '$3',
    period: '/week',
    periodLabel: 'weekly',
    note: '30-min free trial',
  },
  Monthly: {
    name: 'Monthly',
    price: 850,
    priceFormatted: '$8.50',
    period: '/mo',
    periodLabel: 'monthly',
    note: 'Most popular',
  },
  Yearly: {
    name: 'Yearly',
    price: 6500,
    priceFormatted: '$65',
    period: '/yr',
    periodLabel: 'yearly',
    note: 'Save 33%',
  },
  QidMonthly: {
    name: 'Qid Monthly',
    price: 500,
    priceFormatted: '$5',
    period: '/mo',
    periodLabel: 'monthly',
    note: 'Kid monitoring',
  },
  QidYearly: {
    name: 'Qid Yearly',
    price: 9900,
    priceFormatted: '$99',
    period: '/yr',
    periodLabel: 'yearly',
    note: 'Save 17%',
  },
}

export function initializePaystack() {
  return new Promise((resolve, reject) => {
    if (window.PaystackPop) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = 'https://js.paystack.co/v1/inline.js'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load Paystack script'))
    document.head.appendChild(script)
  })
}

export function openPaystackCheckout({ email, plan, onSuccess, onClose }) {
  const planData = plans[plan]
  if (!planData) return

  if (!PAYSTACK_PUBLIC_KEY) {
    alert('Payment is not configured. Please contact support.')
    return
  }

  const baseUrl = window.location.origin

  const handler = window.PaystackPop.setup({
    key: PAYSTACK_PUBLIC_KEY,
    email,
    amount: planData.price,
    currency: 'USD',
    metadata: {
      plan_name: planData.name,
      custom_fields: [
        {
          display_name: 'Plan',
          variable_name: 'plan',
          value: planData.name,
        },
      ],
    },
    callback: function(response) {
      onSuccess(response)
    },
    onClose: function() {
      onClose?.()
    },
  })

  handler.openIframe()
}
