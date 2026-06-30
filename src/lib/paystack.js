const PAYSTACK_PUBLIC_KEY = (import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || '').trim()

export const plans = {
  Weekly: {
    name: 'Weekly',
    price: 300000,
    priceFormatted: '\u20a63,000',
    period: '/week',
    periodLabel: 'weekly',
    note: '30-min free trial',
  },
  Monthly: {
    name: 'Monthly',
    price: 850000,
    priceFormatted: '\u20a68,500',
    period: '/mo',
    periodLabel: 'monthly',
    note: 'Most popular',
  },
  Yearly: {
    name: 'Yearly',
    price: 6500000,
    priceFormatted: '\u20a665,000',
    period: '/yr',
    periodLabel: 'yearly',
    note: 'Save 33%',
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
    currency: 'NGN',
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
