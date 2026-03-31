'use client';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend, AreaChart, Area, ReferenceLine,
} from 'recharts';

const PRIMARY = '#1B5680';
const PRIMARY_LIGHT = '#B0CEE4';
const PRIMARY_DARK = '#133f60';
const GREY = '#A3A3A3';
const SUCCESS = '#16a34a';
const DANGER = '#dc2626';
const ZAR = (n: number) => `R${n.toLocaleString('en-ZA')}`;

/* ─── Investment Section ────────────────────────────── */
const monthlyCostData = [
  { name: 'Windows\nServer', legacy: 4000, rebuilt: 0 },
  { name: 'SQL Server\nLicensing', legacy: 3000, rebuilt: 0 },
  { name: 'Redis\nHosting', legacy: 750, rebuilt: 0 },
  { name: 'Rackspace\nCDN', legacy: 750, rebuilt: 0 },
  { name: 'Server\nMaintenance', legacy: 1500, rebuilt: 0 },
  { name: 'Platform\nServices', legacy: 0, rebuilt: 2800 },
];

const platformCosts = [
  { service: 'Vercel', plan: 'Pro', monthly: '$20/dev/month' },
  { service: 'Convex', plan: 'Pro', monthly: '$25/month' },
  { service: 'Clerk', plan: 'Pro', monthly: '$25/month + $0.02/MAU' },
  { service: 'Resend', plan: 'Pro', monthly: '$20/month' },
  { service: 'Cloudflare', plan: 'Pro', monthly: '~$25/month' },
];

export function InvestmentSection() {
  return (
    <section id="investment" style={{ marginBottom: '5rem' }}>
      <p className="section-label">Section 6</p>
      <h2 className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>Investment & Monthly Savings</h2>
      <p style={{ fontSize: '0.925rem', color: 'var(--muted-foreground)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: 680 }}>
        At a fixed investment of <strong>R50,000</strong>, the rebuild replaces high-overhead, on-premise infrastructure with lean managed services — cutting monthly operational costs by an estimated R4,000–R10,000 per month and paying back the investment within the first year.
      </p>

      {/* Savings headline */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
        gap: '1rem', marginBottom: '2rem',
      }}>
        {[
          { label: 'Total Rebuild Investment', value: 'R50,000', color: PRIMARY, icon: '△' },
          { label: 'Current Est. Monthly Cost', value: 'R7k–R13k', color: DANGER, icon: '▽' },
          { label: 'Rebuilt Monthly Cost', value: '~R2,800', color: SUCCESS, icon: '▲' },
          { label: 'Monthly Saving', value: 'R4k–R10k', color: PRIMARY, icon: '◈' },
        ].map(item => (
          <div key={item.label} className="stat-card" style={{ borderTop: `3px solid ${item.color}` }}>
            <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
            <p className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: item.color, margin: '0.5rem 0 0.25rem' }}>
              {item.value}
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>{item.label}</p>
          </div>
        ))}
      </div>

      {/* Monthly cost bar chart */}
      <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Monthly Infrastructure Cost Breakdown (ZAR)</h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', marginBottom: '1.25rem' }}>Mid-range estimates for current stack vs rebuilt platform</p>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={monthlyCostData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="name" style={{ fontSize: '0.68rem' }} interval={0} />
            <YAxis tickFormatter={v => `R${v.toLocaleString()}`} style={{ fontSize: '0.72rem' }} />
            <Tooltip formatter={(v: number) => `R${v.toLocaleString('en-ZA')}`} contentStyle={{ borderRadius: '0.5rem', border: '1px solid var(--border)', fontSize: '0.8rem' }} />
            <Legend />
            <Bar dataKey="legacy" name="Legacy Stack" fill={DANGER} radius={[4,4,0,0]} opacity={0.8} />
            <Bar dataKey="rebuilt" name="Rebuilt Stack" fill={SUCCESS} radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Platform costs table */}
      <div className="card" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontWeight: 700, marginBottom: '1.25rem' }}>New Platform — Monthly Service Costs</h3>
        <table className="proposal-table">
          <thead><tr><th>Service</th><th>Plan</th><th>Monthly Cost</th></tr></thead>
          <tbody>
            {platformCosts.map((row, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 500 }}>{row.service}</td>
                <td><span className="phase-badge" style={{ background: `${PRIMARY}12`, color: PRIMARY }}>{row.plan}</span></td>
                <td style={{ fontFamily: 'monospace', fontWeight: 600, color: SUCCESS }}>{row.monthly}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={2} style={{ fontWeight: 700 }}>Total</td>
              <td style={{ fontWeight: 700, color: SUCCESS, fontFamily: 'monospace' }}>~$115–150/month (~R2,800)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ─── 5-Year TCO Section ────────────────────────────── */
const tcoData = [
  { year: 'Year 1', legacy: 120000, rebuilt: 84000 },
  { year: 'Year 2', legacy: 240000, rebuilt: 118000 },
  { year: 'Year 3', legacy: 360000, rebuilt: 152000 },
  { year: 'Year 4', legacy: 480000, rebuilt: 186000 },
  { year: 'Year 5', legacy: 600000, rebuilt: 220000 },
];

const cumulativeSavings = [
  { year: 'Year 1', saving: 36000 },
  { year: 'Year 2', saving: 122000 },
  { year: 'Year 3', saving: 208000 },
  { year: 'Year 4', saving: 294000 },
  { year: 'Year 5', saving: 380000 },
];

export function TCOSection() {
  return (
    <section id="tco" style={{ marginBottom: '5rem' }}>
      <p className="section-label">Section 7</p>
      <h2 className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>5-Year Total Cost of Ownership</h2>
      <p style={{ fontSize: '0.925rem', color: 'var(--muted-foreground)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: 680 }}>
        At a total rebuild investment of <strong>R50,000</strong>, the platform is cheaper than the legacy stack from Year 1 — generating over <strong>R380k in cumulative savings</strong> across 5 years.
      </p>

      {/* 5-year summary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
        {[
          { year: 'Year 1', legacy: 'R120k', rebuilt: 'R84k', note: 'Incl. R50k rebuild' },
          { year: 'Year 2', legacy: 'R120k', rebuilt: 'R34k', note: '↓R86k/year' },
          { year: 'Year 3', legacy: 'R120k', rebuilt: 'R34k', note: '↓R86k/year' },
          { year: 'Year 5', legacy: 'R120k', rebuilt: 'R34k', note: '↓R86k/year' },
        ].map(item => (
          <div key={item.year} className="card" style={{ padding: '1rem' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted-foreground)', marginBottom: '0.5rem' }}>{item.year} Annual Cost</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                <span style={{ color: 'var(--muted-foreground)' }}>Legacy</span>
                <span style={{ fontWeight: 600, color: DANGER }}>{item.legacy}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                <span style={{ color: 'var(--muted-foreground)' }}>Rebuilt</span>
                <span style={{ fontWeight: 600, color: SUCCESS }}>{item.rebuilt}</span>
              </div>
            </div>
            <p style={{ fontSize: '0.7rem', color: PRIMARY, marginTop: '0.5rem', fontWeight: 500 }}>{item.note}</p>
          </div>
        ))}
      </div>

      {/* Cumulative TCO chart */}
      <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Cumulative Total Cost of Ownership (ZAR)</h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', marginBottom: '1.25rem' }}>Rebuilt stack is cheaper from Year 1 — R50k total investment</p>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={tcoData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="legacyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={DANGER} stopOpacity={0.15} />
                <stop offset="95%" stopColor={DANGER} stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="rebuiltGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={SUCCESS} stopOpacity={0.15} />
                <stop offset="95%" stopColor={SUCCESS} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="year" style={{ fontSize: '0.75rem' }} />
            <YAxis tickFormatter={v => `R${(v/1000).toFixed(0)}k`} style={{ fontSize: '0.72rem' }} />
            <Tooltip formatter={(v: number) => `R${v.toLocaleString('en-ZA')}`} contentStyle={{ borderRadius: '0.5rem', border: '1px solid var(--border)', fontSize: '0.8rem' }} />
            <Legend />
            <Area type="monotone" dataKey="legacy" name="Legacy Stack" stroke={DANGER} fill="url(#legacyGrad)" strokeWidth={2} dot={{ r: 4 }} />
            <Area type="monotone" dataKey="rebuilt" name="Rebuilt Stack" stroke={SUCCESS} fill="url(#rebuiltGrad)" strokeWidth={2} dot={{ r: 4 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Cumulative saving chart */}
      <div className="card" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Cumulative Net Saving from Rebuild (ZAR)</h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', marginBottom: '1.25rem' }}>
          Positive return from Year 1. R50k rebuild cost recovered within the first year.
        </p>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={cumulativeSavings} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="year" style={{ fontSize: '0.75rem' }} />
            <YAxis tickFormatter={v => `R${(v/1000).toFixed(0)}k`} style={{ fontSize: '0.72rem' }} />
            <Tooltip formatter={(v: number) => `R${v.toLocaleString('en-ZA')}`} contentStyle={{ borderRadius: '0.5rem', border: '1px solid var(--border)', fontSize: '0.8rem' }} />
            <ReferenceLine y={0} stroke="var(--foreground)" strokeWidth={1.5} />
            <Bar dataKey="saving" name="Net Saving vs Legacy" radius={[4,4,0,0]}>
              {cumulativeSavings.map((entry, index) => (
                <rect key={index} fill={entry.saving >= 0 ? SUCCESS : DANGER} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
