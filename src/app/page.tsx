"use client";

import { 
  Compass, 
  Grid, 
  MessageSquare, 
  GitBranch, 
  ChevronRight, 
  Plus,
  Share2,
  ExternalLink,
  RefreshCw,
  Mail,
  ShieldCheck,
  ChevronDown,
  UserPlus
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Week 1', leads: 5 },
  { name: 'Week 2', leads: 25 },
  { name: 'Week 3', leads: 55 },
  { name: 'Week 4', leads: 107 },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA] text-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="w-[68px] bg-[var(--color-primary)] flex flex-col items-center py-6 justify-between shrink-0 fixed h-screen z-10">
        <div className="flex flex-col items-center gap-8 w-full">
          {/* Logo */}
          <div className="text-white font-black text-2xl mb-2">K</div>
          
          {/* Nav Icons */}
          <nav className="flex flex-col gap-6 w-full items-center">
            <button className="text-white/60 hover:text-white transition-colors">
              <Plus className="w-5 h-5" />
            </button>
            <button className="text-white/60 hover:text-white transition-colors">
              <Compass className="w-5 h-5" />
            </button>
            {/* Active Nav Item */}
            <button className="text-white bg-white/10 w-full py-3 flex justify-center border-l-2 border-white relative">
              <Grid className="w-5 h-5" />
            </button>
            <button className="text-white/60 hover:text-white transition-colors">
              <MessageSquare className="w-5 h-5" />
            </button>
            <button className="text-white/60 hover:text-white transition-colors">
              <GitBranch className="w-5 h-5" />
            </button>
            <button className="text-white/60 hover:text-white transition-colors mt-2">
              <ChevronRight className="w-5 h-5" />
            </button>
          </nav>
        </div>

        {/* Bottom Avatar */}
        <div className="mt-auto">
          <div className="w-8 h-8 rounded-full bg-orange-400 overflow-hidden border border-white/20">
            <img src="https://ui-avatars.com/api/?name=User&background=random" alt="User" />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-[68px] p-8 max-w-[1400px]">
        {/* Top Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center text-sm font-medium">
            <span className="text-gray-500">Overview</span>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-blue-600 font-semibold">Codeknot Ai</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium shadow-sm">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Live
              <div className="w-8 h-4 bg-green-500 rounded-full ml-1 relative flex items-center px-0.5 cursor-pointer">
                <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 shadow-sm"></div>
              </div>
            </div>
            <button className="p-1.5 bg-white border border-gray-200 rounded shadow-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="p-1.5 bg-white border border-gray-200 rounded shadow-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Title Area */}
        <div className="mb-6">
          <h1 className="text-[32px] font-semibold text-[#1A202C] tracking-tight mb-2">CodeKnot.ai Performance Dashboard</h1>
          <p className="text-[#4A5568] text-[15px]">
            Track real-time progress across all campaigns currently being executed by Clospect .
          </p>
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-8 border-b border-gray-200 pb-6">
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 text-gray-700 py-1.5 pl-4 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm font-medium">
              <option>All</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
          <button className="bg-white border border-gray-300 text-gray-500 rounded-md w-8 h-8 flex items-center justify-center shadow-sm hover:bg-gray-50">
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-3">
            <div className="w-8 h-8 bg-green-50 text-green-600 rounded flex items-center justify-center mb-1">
              <UserPlus className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[13px] text-gray-500 font-medium mb-1">Leads Generated</div>
              <div className="text-4xl font-bold text-gray-900 tracking-tight">107</div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-3">
            <div className="w-8 h-8 bg-blue-50 text-blue-500 rounded flex items-center justify-center mb-1">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[13px] text-gray-500 font-medium mb-1">Emails Sent</div>
              <div className="text-4xl font-bold text-gray-900 tracking-tight">6,720</div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-3">
            <div className="w-8 h-8 bg-green-50 text-green-600 rounded flex items-center justify-center mb-1">
              <div className="transform -rotate-45 font-bold">↗</div>
            </div>
            <div>
              <div className="text-[13px] text-gray-500 font-medium mb-1">Open Rate</div>
              <div className="text-4xl font-bold text-gray-900 tracking-tight">43.3%</div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-3 relative overflow-hidden">
            <div className="w-8 h-8 bg-gray-100 text-gray-500 rounded flex items-center justify-center mb-1">
              <div className="w-4 h-4 border-2 border-gray-500 rounded-full flex items-center justify-center"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div></div>
            </div>
            <div>
              <div className="text-[13px] text-gray-500 font-medium mb-1">Reply Rate</div>
              <div className="text-4xl font-bold text-gray-900 tracking-tight">8.4%</div>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-blue-600 rounded-l"></div>
          </div>
        </div>

        {/* Tags Row */}
        <div className="grid grid-cols-3 gap-0 bg-white border border-gray-200 rounded-full divide-x divide-gray-200 mb-8 shadow-sm overflow-hidden">
          <div className="flex items-center justify-center py-3 text-[13px] font-semibold text-gray-700 tracking-wide relative group cursor-pointer hover:bg-gray-50">
            <RefreshCw className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-green-600 font-bold mr-1">3,900</span> CAPACITY <span className="text-gray-400 font-medium ml-1 text-[11px]">BASED ON MAILBOXES</span>
            <button className="absolute right-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"><Plus className="w-4 h-4 transform rotate-45"/></button>
          </div>
          <div className="flex items-center justify-center py-3 text-[13px] font-semibold text-gray-700 tracking-wide relative group cursor-pointer hover:bg-gray-50">
            <Mail className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-green-600 font-bold mr-1">6</span> INBOXES <span className="text-gray-400 font-medium ml-1 text-[11px]">CURRENTLY SENDING</span>
            <button className="absolute right-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"><Plus className="w-4 h-4 transform rotate-45"/></button>
          </div>
          <div className="flex items-center justify-center py-3 text-[13px] font-semibold text-gray-700 tracking-wide relative group cursor-pointer hover:bg-gray-50">
            <ShieldCheck className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-green-600 font-bold mr-1">100%</span> HEALTH <span className="text-gray-400 font-medium ml-1 text-[11px]">DMARC/SPF/DKIM</span>
            <button className="absolute right-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"><Plus className="w-4 h-4 transform rotate-45"/></button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-[1.5fr_1fr] gap-6">
          {/* Chart Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-[13px] font-bold text-gray-900 tracking-wider mb-1">CAMPAIGN PERFORMANCE</h3>
                <p className="text-[14px] text-gray-500">Cumulative leads generated</p>
              </div>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 text-gray-700 py-1.5 pl-4 pr-10 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium">
                  <option>Current Month</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 20, left: -20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#6B7280', fontSize: 12, fontWeight: 500 }}
                    dy={15}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#6B7280', fontSize: 12 }} 
                    domain={[0, 150]}
                    ticks={[0, 50, 100, 150]}
                  />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="leads" 
                    stroke="var(--color-primary)" 
                    strokeWidth={2}
                    dot={{ fill: 'var(--color-primary)', strokeWidth: 2, r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Project Status Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-[13px] font-bold text-gray-900 tracking-wider">PROJECT STATUS</h3>
              <button className="text-[var(--color-primary)] hover:text-green-700">
                <Plus className="w-5 h-5" />
              </button>
            </div>

            <div className="inline-block px-3 py-1 bg-[#E8F3EF] text-[var(--color-primary)] text-[12px] font-bold rounded-full mb-4">
              Weekly Review
            </div>

            <h4 className="text-[15px] font-bold text-gray-900 mb-2">Weekly Review — Week 4</h4>
            <p className="text-[14px] text-gray-600 leading-[1.6] mb-3">
              Strong finish to the month. Leads generated hit 62 against a target of 55. Open rate held at 44.3% -- above the 40% benchmark we set at campaign launch. Reply rate at...
            </p>
            
            <div className="text-[13px] text-gray-400 mb-4 font-medium">
              Jun 15, 2026 · 6d ago
            </div>

            <a href="#" className="inline-flex items-center text-[14px] font-bold text-[var(--color-primary)] hover:opacity-80 group mt-1">
              Read more <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
