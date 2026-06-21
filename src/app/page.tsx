"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, LayoutDashboard, LineChart, Globe, Shield, MessageSquare, Mail, Play, XCircle, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Animation Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
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
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--color-primary)] leading-[1.1] mb-6">
              Clients stop asking for updates when they can see them.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[var(--color-text-muted)] mb-10 max-w-2xl">
              Connect Smartlead and Instantly once. Give every client a branded, read-only dashboard showing leads, campaign performance, and domain health in real time.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4">
              <button className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-primary-light)] transition-all flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-[var(--color-primary)]/20">
                Start Free Trial
              </button>
              <button className="bg-white text-[var(--color-text-dark)] border border-[var(--color-border)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-bg-alt)] transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                <Play className="w-4 h-4" /> Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-20 relative mx-auto max-w-6xl"
          >
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
                  portal.youragency.com
                </div>
              </div>
              {/* Dashboard Content Mockup */}
              <div className="p-0 flex bg-gray-50 h-[500px] text-left">
                {/* Sidebar */}
                <div className="w-64 border-r border-[var(--color-border)] bg-white p-6 hidden md:flex flex-col">
                  <div className="font-bold text-lg mb-8 flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                    Acme Corp
                  </div>
                  <div className="space-y-2 flex-1 text-sm font-medium text-gray-600">
                    <div className="p-2 bg-gray-100 rounded text-gray-900 flex items-center gap-2"><LayoutDashboard className="w-4 h-4"/> Overview</div>
                    <div className="p-2 hover:bg-gray-50 rounded flex items-center gap-2"><Mail className="w-4 h-4"/> Smartlead</div>
                    <div className="p-2 hover:bg-gray-50 rounded flex items-center gap-2"><MessageSquare className="w-4 h-4"/> Instantly</div>
                    <div className="p-2 hover:bg-gray-50 rounded flex items-center gap-2"><Shield className="w-4 h-4"/> DNS Health</div>
                  </div>
                </div>
                {/* Main Content */}
                <div className="flex-1 p-8 overflow-hidden flex flex-col gap-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <h2 className="text-2xl font-bold">Campaign Overview</h2>
                      <p className="text-sm text-gray-500">Live data synced from Smartlead and Instantly</p>
                    </div>
                    <div className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Live Sync Active
                    </div>
                  </div>
                  
                  {/* KPI Cards */}
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-white border border-[var(--color-border)] rounded-xl p-4 shadow-sm">
                      <div className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wider">Total Leads</div>
                      <div className="text-3xl font-bold">24,500</div>
                    </div>
                    <div className="bg-white border border-[var(--color-border)] rounded-xl p-4 shadow-sm">
                      <div className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wider">Emails Sent</div>
                      <div className="text-3xl font-bold">12,450</div>
                    </div>
                    <div className="bg-white border border-[var(--color-border)] rounded-xl p-4 shadow-sm border-l-4 border-l-blue-500">
                      <div className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wider">Replies</div>
                      <div className="text-3xl font-bold text-blue-600">342 <span className="text-sm text-gray-400 font-normal">2.7%</span></div>
                    </div>
                    <div className="bg-white border border-[var(--color-border)] rounded-xl p-4 shadow-sm border-l-4 border-l-green-500">
                      <div className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wider">Meetings Booked</div>
                      <div className="text-3xl font-bold text-green-600">18</div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="bg-white border border-[var(--color-border)] rounded-xl p-6 shadow-sm flex-1 relative overflow-hidden">
                    <div className="text-sm font-semibold mb-4">Engagement Timeline</div>
                    <div className="absolute bottom-6 left-6 right-6 top-16 flex items-end justify-between gap-2">
                      {[40, 55, 30, 80, 65, 45, 90, 75, 50, 85, 60, 40, 70].map((h, i) => (
                        <div key={i} className="w-full bg-blue-100 rounded-t-sm relative group">
                          <div className="absolute bottom-0 w-full bg-blue-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stat Row */}
      <section className="py-12 border-y border-[var(--color-border)] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[var(--color-border)]">
            <div className="text-center px-4">
              <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">3-4 hrs</div>
              <div className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">Saved per client / mo</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">$3k-$10k</div>
              <div className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">Revenue protected</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">0</div>
              <div className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">Credentials shared</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">100%</div>
              <div className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">Read-only access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Manifesto Section */}
      <section className="py-32 px-6 bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-24">
            <motion.p variants={fadeUp} className="text-2xl md:text-3xl text-[var(--color-text-muted)] leading-relaxed mb-6">
              Most agencies do great work.
            </motion.p>
            <motion.p variants={fadeUp} className="text-2xl md:text-3xl text-[var(--color-text-dark)] font-medium leading-relaxed mb-6">
              The problem is that clients can't see it.
            </motion.p>
            <motion.p variants={fadeUp} className="text-xl text-[var(--color-text-muted)] leading-relaxed max-w-2xl mx-auto">
              Campaign data lives inside Smartlead.<br/>
              Updates live inside Slack.<br/>
              Reports live inside spreadsheets.<br/><br/>
              <span className="text-[var(--color-text-dark)] font-medium">When visibility disappears, trust disappears.</span><br/><br/>
              Klaroh gives clients one place to understand progress without needing another meeting.
            </motion.p>
          </motion.div>

          {/* Manifesto Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[var(--color-primary)] text-white p-12 md:p-20 rounded-3xl shadow-xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">"One quiet client costs more than a year of Klaroh."</h2>
            <div className="text-lg md:text-xl text-white/80 space-y-4 font-medium">
              <p>Clients rarely leave because of one bad campaign.</p>
              <p>They leave because communication slowly disappears.</p>
              <p className="text-white mt-8 text-2xl font-bold">Visibility creates trust.<br/>Trust creates retention.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Old Way vs Klaroh */}
      <section className="py-24 px-6 bg-white border-y border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">The difference is clear.</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-[var(--color-border)] rounded-2xl p-10">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-8">Old Way</div>
              <ul className="space-y-6">
                {[
                  "Weekly screenshots",
                  "Spreadsheet updates",
                  "Shared logins",
                  "Manual reporting",
                  "Endless status questions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-500 text-lg">
                    <XCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 rounded-2xl p-10">
              <div className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-wider mb-8">With Klaroh</div>
              <ul className="space-y-6">
                {[
                  "Live dashboard",
                  "Read-only access",
                  "Automatic reporting",
                  "Branded experience",
                  "Fewer update requests"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-[var(--color-text-dark)] font-medium text-lg">
                    <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
            
            {/* 01 - Branded Client Portal */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="md:col-span-2 bg-white border border-[var(--color-border)] rounded-2xl p-10 shadow-sm flex flex-col md:flex-row gap-8"
            >
              <div className="flex-1">
                <div className="text-sm font-bold text-[var(--color-text-muted)] mb-4">01</div>
                <h3 className="text-2xl font-bold mb-3">Branded Client Portal</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Give every client a professional reporting experience under your agency's brand.
                </p>
              </div>
              <div className="flex-1 bg-gray-50 border border-[var(--color-border)] rounded-xl flex items-center justify-center p-6 shadow-inner">
                {/* Mockup visual */}
                <div className="w-full bg-white rounded-lg shadow-sm border border-[var(--color-border)] overflow-hidden">
                  <div className="bg-[var(--color-primary)] p-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center font-bold text-[var(--color-primary)] text-xs">Y/A</div>
                    <div className="text-white font-semibold">Your Agency Dashboard</div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-8 bg-gray-100 rounded w-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 02 - Smartlead Reporting */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white border border-[var(--color-border)] rounded-2xl p-10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="text-sm font-bold text-[var(--color-text-muted)] mb-4">02</div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><Mail className="w-5 h-5 text-blue-500"/> Smartlead Reporting</h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                  Campaign performance syncs automatically. No exports. No screenshots.
                </p>
              </div>
            </motion.div>

            {/* 03 - Instantly Reporting */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white border border-[var(--color-border)] rounded-2xl p-10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="text-sm font-bold text-[var(--color-text-muted)] mb-4">03</div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><MessageSquare className="w-5 h-5 text-purple-500"/> Instantly Reporting</h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                  Keep client-facing reporting consistent across every campaign.
                </p>
              </div>
            </motion.div>

            {/* 04 - DNS Health Monitoring */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white border border-[var(--color-border)] rounded-2xl p-10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="text-sm font-bold text-[var(--color-text-muted)] mb-4">04</div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><Shield className="w-5 h-5 text-green-500"/> DNS Health Monitoring</h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                  Spot domain issues before clients notice campaign performance drops.
                </p>
              </div>
            </motion.div>

            {/* 05 - White Label Experience */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="md:col-span-2 bg-[var(--color-primary)] text-white rounded-2xl p-10 shadow-sm flex items-center"
            >
              <div className="flex-1 pr-8">
                <div className="text-sm font-bold text-white/50 mb-4">05</div>
                <h3 className="text-3xl font-bold mb-4">White Label Experience</h3>
                <ul className="space-y-2 text-white/80 font-medium mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Your logo.</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Your domain.</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Your agency.</li>
                </ul>
                <p className="text-white/80">Not another third-party dashboard.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* How it works workflow */}
      <section className="py-32 bg-white border-y border-[var(--color-border)] px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">How it works</h2>
          
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 relative">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gray-100 -z-10"></div>
            
            {[
              { title: "Connect Smartlead", num: "1" },
              { title: "Connect Instantly", num: "2" },
              { title: "Klaroh collects campaign data", num: "3" },
              { title: "Share branded dashboard", num: "4" },
              { title: "Clients stay informed automatically", num: "5" }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center w-full bg-white relative"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white font-bold flex items-center justify-center text-lg mb-6 shadow-md z-10">
                  {s.num}
                </div>
                <h4 className="text-lg font-bold max-w-[150px]">{s.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Marquee */}
      <section className="py-24 bg-[var(--color-bg)] px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-12">Works with the tools agencies already use.</h2>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
            <div className="text-2xl font-bold text-gray-400 hover:text-blue-500 transition-colors cursor-default flex items-center gap-2"><Mail className="w-8 h-8"/> Smartlead</div>
            <div className="text-2xl font-bold text-gray-400 hover:text-purple-500 transition-colors cursor-default flex items-center gap-2"><MessageSquare className="w-8 h-8"/> Instantly</div>
            <div className="text-2xl font-bold text-gray-400 hover:text-red-500 transition-colors cursor-default">Google Workspace</div>
            <div className="text-2xl font-bold text-gray-400 hover:text-blue-600 transition-colors cursor-default">Outlook</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white border-y border-[var(--color-border)] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-gray-50 p-10 rounded-2xl border border-[var(--color-border)] shadow-sm"
            >
              <div className="flex gap-1 mb-8 text-yellow-400">
                {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
              </div>
              <p className="text-xl font-medium mb-10 leading-relaxed text-[var(--color-text-dark)]">
                "Our client retention doubled once we gave them live dashboards. They stopped asking for updates because they could finally see the work happening in real-time."
              </p>
              <div className="flex items-center gap-4 border-t border-[var(--color-border)] pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">JD</div>
                <div>
                  <div className="font-bold">James Doe</div>
                  <div className="text-sm text-[var(--color-text-muted)]">CEO, Outbound Agency</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-gray-50 p-10 rounded-2xl border border-[var(--color-border)] shadow-sm"
            >
              <div className="flex gap-1 mb-8 text-yellow-400">
                {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
              </div>
              <p className="text-xl font-medium mb-10 leading-relaxed text-[var(--color-text-dark)]">
                "We saved 20 hours a month just by killing our weekly spreadsheet routine. The branded portal makes us look like we spent $50k on custom software."
              </p>
              <div className="flex items-center gap-4 border-t border-[var(--color-border)] pt-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">SM</div>
                <div>
                  <div className="font-bold">Sarah Miller</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Operations Lead, LeadGen Co</div>
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-primary)] mb-6">Pricing that pays for itself with one retained client.</h2>
            <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">Most agencies spend more time building reports than they spend reviewing them.</p>
          </div>

          {/* Single simple pricing or 3 tiers depending on previous state. The user didn't request changing the tiers, just headline. I'll keep the 3 tiers. */}
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
              <button className="w-full py-3 rounded-full border border-[var(--color-border)] font-medium hover:bg-gray-50 transition-colors">Start Starter</button>
            </div>

            {/* Growth (Recommended) */}
            <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 shadow-xl transform md:scale-105 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[var(--color-primary)] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">Most Popular</div>
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
              <button className="w-full py-3 rounded-full border border-[var(--color-border)] font-medium hover:bg-gray-50 transition-colors">Start Agency</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[var(--color-bg)] border-y border-[var(--color-border)] px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is the portal completely read-only?", a: "Yes. Clients can view campaign performance, leads, and domain health, but cannot modify any underlying settings in Smartlead or Instantly." },
              { q: "Is the dashboard secure?", a: "We use enterprise-grade encryption. Clients access via secure magic links or standard authentication." },
              { q: "How long does setup take?", a: "Connecting Smartlead or Instantly takes exactly 2 clicks via OAuth or API key." },
              { q: "Can I fully white-label the portal?", a: "Yes. On Growth plans and above, you can use your own domain (portal.youragency.com), your logo, and your brand colors." }
            ].map((faq, i) => (
              <div key={i} className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-white shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left p-6 font-bold flex justify-between items-center hover:bg-gray-50"
                >
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${activeFaq === i ? "rotate-180" : ""}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 text-[var(--color-text-muted)] border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-[var(--color-primary)] rounded-[2rem] p-12 md:p-20 text-center text-white relative shadow-2xl overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stop building reports. Start showing results.</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-medium">Give every client a dashboard they can understand in under 30 seconds.</p>
            <button className="bg-white text-[var(--color-primary)] font-bold px-10 py-5 rounded-full hover:bg-gray-100 transition-transform hover:scale-105 shadow-xl text-lg">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--color-border)] bg-[var(--color-bg)] text-sm text-[var(--color-text-muted)]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="font-bold text-lg text-[var(--color-primary)] mb-4">Klaroh.</div>
            <p>Read-only reporting portals for lead gen agencies.</p>
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
