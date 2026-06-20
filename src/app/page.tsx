"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, LayoutDashboard, LineChart, Globe, Shield, MessageSquare, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-dark)] selection:bg-[var(--color-primary)] selection:text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[var(--color-bg)]/80 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-[var(--color-primary)]">Klaroh.</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-text-muted)]">
            <Link href="#product" className="hover:text-[var(--color-text-dark)] transition-colors">Product</Link>
            <Link href="#features" className="hover:text-[var(--color-text-dark)] transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-[var(--color-text-dark)] transition-colors">Pricing</Link>
          </div>
          <button className="bg-[var(--color-primary)] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[var(--color-primary-light)] transition-all">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold uppercase tracking-wider mb-8 border border-[var(--color-primary)]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary)]"></span>
              </span>
              Klaroh 2.0 is Live
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--color-primary)] leading-[1.1] mb-6">
              Client retention, <br className="hidden md:block" />
              automated.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[var(--color-text-muted)] mb-10 max-w-2xl">
              Turn your agency's execution into undeniable proof. Connect your tools once, and give your clients a beautiful, always-on dashboard that eliminates "what's the status?" emails forever.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4">
              <button className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-primary-light)] transition-all flex items-center gap-2 w-full sm:w-auto justify-center group shadow-lg shadow-[var(--color-primary)]/20">
                Start Building Trust
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-[var(--color-text-dark)] border border-[var(--color-border)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-bg-alt)] transition-all w-full sm:w-auto">
                View Live Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-20 relative mx-auto max-w-5xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent z-10 h-full bottom-0 top-auto"></div>
            <div className="rounded-xl border border-[var(--color-border)] bg-white shadow-2xl overflow-hidden flex flex-col">
              {/* Fake Browser Header */}
              <div className="h-12 border-b border-[var(--color-border)] bg-gray-50 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="mx-auto bg-white border border-[var(--color-border)] rounded-md h-6 w-1/2 flex items-center justify-center text-xs text-gray-400">
                  <Globe className="w-3 h-3 mr-1" />
                  client.youragency.com
                </div>
              </div>
              {/* Dashboard Content Mockup */}
              <div className="p-8 grid grid-cols-4 gap-6 bg-gray-50 h-[400px]">
                {/* Sidebar */}
                <div className="col-span-1 space-y-4 hidden md:block">
                  <div className="h-8 bg-gray-200 rounded w-3/4 mb-8"></div>
                  <div className="h-4 bg-[var(--color-primary)]/10 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
                {/* Main Content */}
                <div className="col-span-4 md:col-span-3 space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-8 bg-gray-200 rounded w-24"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-white border border-[var(--color-border)] rounded-lg shadow-sm p-4 flex flex-col justify-between">
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-6 bg-[var(--color-primary)]/20 rounded w-3/4"></div>
                    </div>
                    <div className="h-24 bg-white border border-[var(--color-border)] rounded-lg shadow-sm p-4 flex flex-col justify-between">
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-6 bg-green-100 rounded w-2/3"></div>
                    </div>
                    <div className="h-24 bg-white border border-[var(--color-border)] rounded-lg shadow-sm p-4 flex flex-col justify-between">
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-6 bg-blue-100 rounded w-4/5"></div>
                    </div>
                  </div>
                  <div className="h-48 bg-white border border-[var(--color-border)] rounded-lg shadow-sm p-4">
                    <div className="h-full w-full bg-gradient-to-r from-gray-100 to-gray-50 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section (Brief) */}
      <section className="py-24 bg-white border-y border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl text-[var(--color-text-muted)] font-medium leading-relaxed">
            "We were doing great work, but clients were churning. Why? Because looking at a Google Sheet isn't communication. 
            <span className="text-[var(--color-primary)] font-bold"> Silence spells the grave for retention.</span>"
          </p>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-primary)] mb-4">Everything your client needs to see.</h2>
            <p className="text-lg text-[var(--color-text-muted)]">Zero manual hours required. Connect once, runs forever.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
            {/* Large Card */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="md:col-span-2 bg-white border border-[var(--color-border)] rounded-2xl p-8 shadow-sm flex flex-col md:flex-row gap-8 overflow-hidden relative group"
            >
              <div className="flex-1 z-10">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-xl flex items-center justify-center mb-6">
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Unified Client Portal</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Give clients a single source of truth. No more digging through email threads or slack channels to find the latest campaign results.
                </p>
              </div>
              <div className="flex-1 relative min-h-[200px]">
                <div className="absolute -right-12 -bottom-12 w-[120%] h-[120%] bg-gray-50 border border-[var(--color-border)] rounded-tl-xl shadow-lg p-4 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-4 border-b pb-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                    <div className="h-3 bg-gray-200 rounded w-24"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-2 bg-gray-200 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Small Card 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white border border-[var(--color-border)] rounded-2xl p-8 shadow-sm group"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Smartlead & Instantly</h3>
              <p className="text-[var(--color-text-muted)] text-sm">
                Live sync of email metrics. Open rates, replies, and meetings booked update automatically.
              </p>
            </motion.div>

            {/* Small Card 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white border border-[var(--color-border)] rounded-2xl p-8 shadow-sm group"
            >
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">DNS Health Monitor</h3>
              <p className="text-[var(--color-text-muted)] text-sm">
                Clients see their domain reputation is safe. DMARC, SPF, and DKIM status visualized.
              </p>
            </motion.div>

            {/* Medium Card */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="md:col-span-2 bg-[var(--color-primary)] text-white rounded-2xl p-8 shadow-sm overflow-hidden relative"
            >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              <div className="relative z-10 w-full md:w-2/3">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">100% White-labeled</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Your logo. Your custom domain. Your brand colors. Clients think you spent months building a custom reporting app just for them.
                </p>
                <button className="bg-white text-[var(--color-primary)] px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                  See Brand Setup
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works workflow */}
      <section className="py-24 bg-white border-y border-[var(--color-border)] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">How it works</h2>
          </div>
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 relative">
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-[var(--color-border)] -z-10"></div>
            
            {[
              { step: 1, title: "Connect", desc: "Link Smartlead, Instantly, or Google Sheets in one click." },
              { step: 2, title: "Collect", desc: "Klaroh pulls live campaign data securely." },
              { step: 3, title: "Share", desc: "Clients get a magic link to their read-only portal." },
              { step: 4, title: "Retain", desc: "Agencies save 4 hours/week and stop churn." }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center w-full md:w-1/4 bg-white"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold flex items-center justify-center text-lg mb-6 shadow-sm">
                  {s.step}
                </div>
                <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                <p className="text-[var(--color-text-muted)] text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Marquee */}
      <section className="py-24 overflow-hidden px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-8">Seamlessly Integrates With</h3>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder integration logos */}
            <div className="text-2xl font-bold font-sans flex items-center gap-2"><Mail className="w-8 h-8"/> Smartlead</div>
            <div className="text-2xl font-bold font-sans flex items-center gap-2"><MessageSquare className="w-8 h-8"/> Instantly</div>
            <div className="text-2xl font-bold font-sans">Google Workspace</div>
            <div className="text-2xl font-bold font-sans text-blue-600">Outlook</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-y border-[var(--color-border)] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-[var(--color-bg)] p-8 rounded-2xl border border-[var(--color-border)]"
            >
              <div className="flex gap-1 mb-6 text-[var(--color-primary)]">
                {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
              </div>
              <p className="text-lg font-medium mb-8 leading-relaxed">
                "If you know it's a client retention risk, it's rarely a reporting problem. It's a retention problem. Klaroh fixed our blind spot."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                <div>
                  <div className="font-bold">Sarah Jenkins</div>
                  <div className="text-sm text-[var(--color-text-muted)]">CEO, GrowthLab</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-[var(--color-bg)] p-8 rounded-2xl border border-[var(--color-border)]"
            >
              <div className="flex gap-1 mb-6 text-[var(--color-primary)]">
                {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
              </div>
              <p className="text-lg font-medium mb-8 leading-relaxed">
                "We were spending 4 hours a week manually entering data into Google Sheets. Klaroh automated everything and our clients love the portal."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                <div>
                  <div className="font-bold">Mike Chen</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Founder, ScaleB2B</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-primary)] mb-4">Pricing that scales with you</h2>
            <p className="text-lg text-[var(--color-text-muted)]">No hidden fees. Cancel anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {/* Starter */}
            <div className="bg-white border border-[var(--color-border)] rounded-2xl p-8 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Starter</h3>
              <div className="text-4xl font-bold mb-6">$79<span className="text-lg text-[var(--color-text-muted)] font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" /> Up to 10 active clients</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" /> 1 integration</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" /> Standard support</li>
              </ul>
              <button className="w-full py-3 rounded-full border border-[var(--color-border)] font-medium hover:bg-[var(--color-bg-alt)] transition-colors">Start Starter</button>
            </div>

            {/* Growth (Recommended) */}
            <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 shadow-xl transform md:scale-105 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-primary-light)] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[var(--color-primary)] shadow-sm">Most Popular</div>
              <h3 className="text-lg font-bold mb-2 text-white/90">Growth</h3>
              <div className="text-4xl font-bold mb-6 text-white">$179<span className="text-lg text-white/60 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400" /> Up to 50 active clients</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400" /> Core integrations</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400" /> White-label dashboard</li>
              </ul>
              <button className="w-full py-3 rounded-full bg-white text-[var(--color-primary)] font-bold hover:bg-gray-100 transition-colors shadow-md">Select Growth</button>
            </div>

            {/* Agency */}
            <div className="bg-white border border-[var(--color-border)] rounded-2xl p-8 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Agency</h3>
              <div className="text-4xl font-bold mb-6">$349<span className="text-lg text-[var(--color-text-muted)] font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" /> Up to 150 active clients</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" /> Custom domains</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" /> Priority support</li>
              </ul>
              <button className="w-full py-3 rounded-full border border-[var(--color-border)] font-medium hover:bg-[var(--color-bg-alt)] transition-colors">Start Agency</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white border-y border-[var(--color-border)] px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How is this different from client portals we've tried?", a: "Unlike traditional portals that require clients to log in and remember yet another password, Klaroh brings the updates directly to them seamlessly." },
              { q: "Can my client break anything?", a: "No. Everything they see is strictly read-only. They can view progress, metrics, and updates, but they cannot modify any underlying data." },
              { q: "How long does setup take?", a: "Most agencies are up and running in under 30 minutes. The integrations are plug-and-play." }
            ].map((faq, i) => (
              <div key={i} className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-bg)]">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left p-6 font-bold flex justify-between items-center"
                >
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeFaq === i ? "rotate-180" : ""}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 text-[var(--color-text-muted)]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto bg-[var(--color-primary)] rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stop losing clients to silence.</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Turn outstanding execution into a rock-solid flow. Secure a space, end the silence.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <input 
                type="email" 
                placeholder="name@agency.com" 
                className="px-6 py-4 rounded-full text-[var(--color-text-dark)] focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-auto min-w-[300px]"
              />
              <button className="bg-white text-[var(--color-primary)] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                Secure Your Spot
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--color-border)] bg-white text-sm text-[var(--color-text-muted)]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="font-bold text-lg text-[var(--color-primary)] mb-4">Klaroh.</div>
            <p>Automated Client Retention Tool</p>
          </div>
          <div>
            <div className="font-bold text-[var(--color-text-dark)] mb-4">Product</div>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-[var(--color-primary)]">Features</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-primary)]">Integrations</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-primary)]">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-[var(--color-text-dark)] mb-4">Company</div>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-[var(--color-primary)]">About Us</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-primary)]">FAQ</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-primary)]">Support</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-[var(--color-text-dark)] mb-4">Legal</div>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-[var(--color-primary)]">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-primary)]">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[var(--color-border)]">
          <div>&copy; 2026 Klaroh Inc. All rights reserved.</div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[var(--color-primary)]">Twitter</Link>
            <Link href="#" className="hover:text-[var(--color-primary)]">LinkedIn</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
