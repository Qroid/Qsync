const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_xxxxxxxxxxxx'

export const plans = {
  Weekly: {
    name: 'Weekly',
    price: 300,
    priceFormatted: '$3',
    period: '/week',
    periodLabel: 'weekly',
    note: '30-min free trial',
    planCode: 'PLN_weekly_qsync',
  },
  Monthly: {
    name: 'Monthly',
    price: 850,
    priceFormatted: '$8.50',
    period: '/mo',
    periodLabel: 'monthly',
    note: 'Most popular',
    planCode: 'PLN_monthly_qsync',
  },
  Yearly: {
    name: 'Yearly',
    price: 6500,
    priceFormatted: '$65',
    period: '/yr',
    periodLabel: 'yearly',
    note: 'Save 33%',
    planCode: 'PLN_yearly_qsync',
  },
}

export function initializePaystack() {
  return new Promise((resolve) => {
    if (window.PaystackPop) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = 'https://js.paystack.co/v1/inline.js'
    script.onload = () => resolve()
    document.head.appendChild(script)
  })
}

export function openPaystackCheckout({ email, plan, onSuccess, onClose }) {
  const planData = plans[plan]
  if (!planData) return

  const handler = window.PaystackPop.setup({
    key: PAYSTACK_PUBLIC_KEY,
    email,
    amount: planData.price,
    currency: 'USD',
    plan: planData.planCode,
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
