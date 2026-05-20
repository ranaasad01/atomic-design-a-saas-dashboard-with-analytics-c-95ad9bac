"use client";

import Link from "next/link";
import { BarChart2, Users, DollarSign, TrendingUp, ArrowRight, Sparkles, Shield, Zap, Globe, Star, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: BarChart2,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
    title: "Real-Time Analytics",
    desc: "Monitor MRR, ARR, churn, and user growth with live-updating charts powered by your data pipeline.",
  },
  {
    icon: Users,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    title: "User Intelligence",
    desc: "Segment users by plan, activity, and lifecycle stage. Identify at-risk accounts before they churn.",
  },
  {
    icon: DollarSign,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    title: "Revenue Tracking",
    desc: "Track MRR expansion, contraction, and net revenue retention across all subscription tiers.",
  },
  {
    icon: TrendingUp,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    title: "Growth Forecasting",
    desc: "AI-powered projections for revenue and user growth based on historical trends and seasonality.",
  },
  {
    icon: Shield,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
    title: "Churn Prevention",
    desc: "Automated alerts and health scores help your team intervene before customers cancel.",
  },
  {
    icon: Globe,
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/20",
    title: "Traffic Attribution",
    desc: "Understand which channels drive the highest-value customers with multi-touch attribution.",
  },
];

const stats = [
  { label: "Monthly Active Users", value: "7,850", change: "+10.6%" },
  { label: "Monthly Recurring Revenue", value: "$105K", change: "+7.4%" },
  { label: "Annual Recurring Revenue", value: "$1.26M", change: "+7.4%" },
  { label: "Churn Rate", value: "1.1%", change: "-0.1%" },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Head of Growth, Launchpad SaaS",
    avatar: "SC",
    quote:
      "PulseAI cut our time-to-insight from days to minutes. We spotted a churn spike in our enterprise tier and saved $40K MRR in a single week.",
  },
  {
    name: "Marcus Webb",
    role: "CEO, Stackflow",
    avatar: "MW",
    quote:
      "The revenue breakdown by plan tier finally gave us the clarity to double down on our Pro tier. ARR grew 34% in the quarter after we switched.",
  },
  {
    name: "Priya Nair",
    role: "VP Product, Orbitly",
    avatar: "PN",
    quote:
      "Every SaaS team needs a dashboard this clean. The active user area chart alone changed how we think about engagement and retention.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$29",
    desc: "Perfect for early-stage startups tracking core metrics.",
    features: ["Up to 1,000 tracked users", "5 dashboards", "30-day data history", "Email reports"],
    cta: "Start free trial",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$79",
    desc: "For growing teams that need deeper analytics and collaboration.",
    features: ["Up to 10,000 tracked users", "Unlimited dashboards", "1-year data history", "Slack & email alerts", "Custom segments"],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$1,200",
    desc: "Full-featured analytics for large-scale SaaS businesses.",
    features: ["Unlimited users", "Unlimited dashboards", "Full data history", "SSO & SAML", "Dedicated CSM", "SLA guarantee"],
    cta: "Contact sales",
    highlight: false,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              Pulse<span className="text-indigo-400">AI</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#metrics" className="hover:text-white transition-colors">Metrics</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Customers</a>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="text-sm text-slate-300 hover:text-white transition-colors hidden sm:block"
            >
              Sign in
            </Link>
            <Link
              href="/dashboard"
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
            >
              Get started free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-slate-950 to-purple-950/30 pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 text-indigo-300 text-sm font-medium mb-6">
            <Zap className="w-3.5 h-3.5" />
            Now with AI-powered churn prediction
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            The analytics dashboard
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              your SaaS deserves
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            PulseAI gives you a real-time view of MRR, churn, user growth, and revenue attribution — all in one beautifully designed dashboard built for modern SaaS teams.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 text-base"
            >
              Open live dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#features"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-3.5 rounded-xl transition-all text-base"
            >
              See all features
            </a>
          </div>
          <p className="text-slate-600 text-sm mt-5">No credit card required · 14-day free trial · Cancel anytime</p>
        </div>
      </section>

      {/* Live Stats Bar */}
      <section id="metrics" className="py-12 px-6 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-white">{s.value}</p>
              <p className="text-slate-400 text-sm mt-1">{s.label}</p>
              <p className="text-emerald-400 text-xs font-semibold mt-1">{s.change} this month</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything you need to grow faster</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              From acquisition to retention, PulseAI covers every metric that matters for SaaS growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/8 transition-all duration-200 group"
              >
                <div className={["w-11 h-11 rounded-xl border flex items-center justify-center mb-4", f.bg].join(" ")}>
                  <f.icon className={["w-5 h-5", f.color].join(" ")} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-950/50 to-purple-950/50 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">See it in action — right now</h2>
          <p className="text-slate-400 mb-8 text-lg">
            Explore the full interactive dashboard with live charts, KPI cards, user tables, and revenue breakdowns. No signup needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-600/25">
              <BarChart2 className="w-4 h-4" /> Dashboard overview
            </Link>
            <Link href="/analytics" className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-3.5 rounded-xl transition-all">
              <TrendingUp className="w-4 h-4" /> Analytics deep-dive
            </Link>
            <Link href="/revenue" className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-3.5 rounded-xl transition-all">
              <DollarSign className="w-4 h-4" /> Revenue metrics
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by fast-growing SaaS teams</h2>
            <p className="text-slate-400 text-lg">Real results from teams that made the switch to PulseAI.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-white/[0.02] border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-slate-400 text-lg">Start free. Scale as you grow. No hidden fees.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={[
                  "rounded-2xl border p-6 flex flex-col",
                  plan.highlight
                    ? "border-indigo-500/50 bg-indigo-600/10 shadow-xl shadow-indigo-600/10"
                    : "border-white/10 bg-white/5",
                ].join(" ")}
              >
                {plan.highlight && (
                  <div className="text-xs font-bold text-indigo-300 bg-indigo-500/20 border border-indigo-500/30 rounded-full px-3 py-1 w-fit mb-4">
                    Most popular
                  </div>
                )}
                <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-slate-500 text-sm">/month</span>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/dashboard"
                  className={[
                    "text-center font-semibold py-3 rounded-xl transition-all text-sm",
                    plan.highlight
                      ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30"
                      : "bg-white/10 hover:bg-white/15 text-white border border-white/10",
                  ].join(" ")}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-white">
              Pulse<span className="text-indigo-400">AI</span>
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
            <Link href="/analytics" className="hover:text-white transition-colors">Analytics</Link>
            <Link href="/users" className="hover:text-white transition-colors">Users</Link>
            <Link href="/revenue" className="hover:text-white transition-colors">Revenue</Link>
            <Link href="/settings" className="hover:text-white transition-colors">Settings</Link>
          </div>
          <p className="text-slate-600 text-sm">© 2024 PulseAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
