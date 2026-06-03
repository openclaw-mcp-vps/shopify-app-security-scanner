export default function Home() {
  const faqs = [
    {
      q: 'How does the scanner detect malicious apps?',
      a: 'We analyze app permissions, scrape store listing data, and use AI to flag suspicious patterns in descriptions, reviews, and requested API scopes that indicate data theft or malicious behavior.'
    },
    {
      q: 'Which Shopify apps can I scan?',
      a: 'Any app listed on the Shopify App Store. Paste the app URL or name and we return a full security report with a risk score, flagged permissions, and community alerts within seconds.'
    },
    {
      q: 'What happens if I already installed a risky app?',
      a: 'We provide a step-by-step remediation guide, including how to revoke permissions, audit your store data, and safely uninstall the app without disrupting your operations.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          e-commerce security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Shopify Apps for{' '}
          <span className="text-[#58a6ff]">Malicious Code</span>{' '}
          Before Installing
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Protect your store and customer data. Our AI-powered scanner analyzes permissions, reviews, and API calls to give you a security score before you click install.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Scanning — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">Cancel anytime. Instant access.</p>
      </section>

      {/* Trust bar */}
      <section className="border-y border-[#21262d] py-6">
        <div className="max-w-3xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm text-[#8b949e]">
          <span>✓ AI-powered analysis</span>
          <span>✓ Permission risk scoring</span>
          <span>✓ Flagged app database</span>
          <span>✓ Remediation guides</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited app scans',
              'AI permission analysis',
              'Security score reports',
              'Flagged app alerts',
              'Remediation guides',
              'Priority email support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Shopify App Security Scanner. All rights reserved.
      </footer>
    </main>
  )
}
