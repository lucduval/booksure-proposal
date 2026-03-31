'use client';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Legend, AreaChart, Area,
} from 'recharts';

const PRIMARY = '#1B5680';
const PRIMARY_LIGHT = '#B0CEE4';
const PRIMARY_DARK = '#133f60';
const GREY = '#A3A3A3';
const SUCCESS = '#16a34a';
const DANGER = '#dc2626';

/* ─── Cover Section ─────────────────────────────────── */
export function CoverSection() {
  return (
    <section id="cover" style={{ marginBottom: '6rem' }}>
      <div style={{
        background: `linear-gradient(135deg, ${PRIMARY_DARK} 0%, ${PRIMARY} 60%, ${PRIMARY_LIGHT} 100%)`,
        borderRadius: '1rem', padding: '4rem 3rem', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -60, right: -60, width: 300, height: 300,
          borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
        }} />
        <div style={{
          position: 'absolute', bottom: -40, right: 80, width: 180, height: 180,
          borderRadius: '50%', background: 'rgba(255,255,255,0.07)',
        }} />
        <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: PRIMARY_LIGHT, marginBottom: '1rem' }}>
          Technology Roadmap & Investment Proposal
        </p>
        <h1
          className="font-serif"
          style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: '1.5rem' }}
        >
          Building the Future<br />of Booksure
        </h1>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', maxWidth: 560, lineHeight: 1.75, marginBottom: '2rem' }}>
          A two-phase investment plan I am proposing to secure the current platform and rebuild on modern infrastructure, reducing costs, accelerating growth, and eliminating technical debt.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Prepared for', value: 'Booksure' },
            { label: 'Date', value: '26 March 2026' },
            { label: 'Version', value: '1.0' },
          ].map(item => (
            <div key={item.label} style={{
              background: 'rgba(255,255,255,0.12)', borderRadius: '0.5rem',
              padding: '0.625rem 1.25rem', backdropFilter: 'blur(8px)',
            }}>
              <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.label}</p>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'white' }}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Executive summary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem', marginTop: '2rem' }}>
        {[
          { icon: '◆', label: 'Phase 1', title: 'Security Hardening', desc: 'Fix critical vulnerabilities on the current platform immediately', color: DANGER },
          { icon: '▸', label: 'Phase 2', title: 'Platform Rebuild', desc: 'Rewrite on Next.js + Convex + Clerk for the long term', color: PRIMARY },
          { icon: '◈', label: 'Savings', title: 'R4k–R10k/month', desc: 'Estimated monthly operational cost reduction post-rebuild', color: SUCCESS },
          { icon: '△', label: '5-Year', title: 'R380k saved', desc: 'Total cost of ownership advantage over staying on legacy stack', color: PRIMARY_DARK },
        ].map(item => (
          <div key={item.label} className="stat-card" style={{ cursor: 'default' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span style={{
                fontSize: '1.25rem', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: `${item.color}15`, borderRadius: '0.5rem',
              }}>{item.icon}</span>
              <span className="phase-badge" style={{ background: `${item.color}15`, color: item.color }}>{item.label}</span>
            </div>
            <h3 className="font-serif" style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>{item.title}</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Platform Assessment Section ───────────────────── */
const techDebtData = [
  { name: 'DB Tables', value: 179, fill: PRIMARY },
  { name: 'UI Views', value: 313, fill: PRIMARY_LIGHT },
  { name: 'JS Plugins', value: 70, fill: PRIMARY_DARK },
  { name: 'BG Jobs', value: 20, fill: GREY },
];

export function AssessmentSection() {
  return (
    <section id="assessment" style={{ marginBottom: '5rem' }}>
      <p className="section-label">Section 2</p>
      <h2 className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>Current Platform Assessment</h2>
      <p style={{ fontSize: '0.925rem', color: 'var(--muted-foreground)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: 640 }}>
        The existing ASP.NET MVC 5 platform carries significant technical debt across its entire stack. I have identified seven critical or high-severity security vulnerabilities, alongside architectural limitations that slow development velocity.
      </p>

      {/* Scale stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: '0.75rem', marginBottom: '2.5rem' }}>
        {techDebtData.map(d => (
          <div key={d.name} className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Playfair Display',serif", fontSize: '2rem', fontWeight: 700, color: d.fill }}>{d.value}+</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', marginTop: '0.25rem' }}>{d.name}</p>
          </div>
        ))}
      </div>

      {/* Security vulnerabilities */}
      <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>●</span> Security Vulnerabilities Identified
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="proposal-table">
            <thead>
              <tr>
                <th>Issue</th>
                <th>Severity</th>
                <th>Impact</th>
              </tr>
            </thead>
            <tbody>
              {[
                { issue: '4 cross-tenant data access vulnerabilities', sev: 'Critical', impact: 'One establishment can modify another\'s bookings & billing' },
                { issue: 'Database connected with sa (superadmin) account', sev: 'Critical', impact: 'SQL injection anywhere = full server access' },
                { issue: 'All secrets stored in plaintext in source control', sev: 'High', impact: 'Repo access = production database passwords & payment keys' },
                { issue: 'No brute-force protection on login', sev: 'High', impact: 'Unlimited automated login attempts possible' },
                { issue: 'Password complexity enforced in JavaScript only', sev: 'High', impact: 'Server accepts any password, bypassing all client-side rules' },
                { issue: 'No MFA or OTP for sensitive operations', sev: 'Medium', impact: 'Compromised password = full account access' },
                { issue: 'No login attempt auditing', sev: 'Medium', impact: 'No visibility into attack attempts' },
              ].map((row, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500 }}>{row.issue}</td>
                  <td>
                    <span className={`phase-badge ${row.sev === 'Critical' ? 'badge-critical' : row.sev === 'High' ? 'badge-high' : 'badge-medium'}`}>
                      {row.sev}
                    </span>
                  </td>
                  <td style={{ color: 'var(--muted-foreground)', fontSize: '0.8125rem' }}>{row.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tech stack chart */}
      <div className="card" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontWeight: 700, marginBottom: '1.25rem' }}>Platform Scale: Technical Debt Indicators</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={techDebtData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="name" style={{ fontSize: '0.75rem' }} />
            <YAxis style={{ fontSize: '0.75rem' }} />
            <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid var(--border)', fontSize: '0.8rem' }} />
            <Bar dataKey="value" radius={[4,4,0,0]}>
              {techDebtData.map((entry, index) => (
                <Cell key={index} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

/* ─── Security Phase Section ────────────────────────── */
export function SecuritySection() {
  const phases = [
    { label: 'P0: Immediate', color: DANGER, items: ['Fix 4 cross-tenant data access vulnerabilities', 'Replace sa database user with least-privilege account'] },
    { label: 'P1: Critical', color: '#ea580c', items: ['Account lockout & brute-force protection', 'Server-side password validation', 'Move all secrets out of source control & rotate credentials'] },
    { label: 'P2: Important', color: '#d97706', items: ['Cloudflare WAF implementation', 'Security headers & IIS hardening', 'Firewall port restriction'] },
    { label: 'P3: Recommended', color: PRIMARY, items: ['Email OTP for sensitive actions', 'Dependency vulnerability scan & upgrades', 'Endpoint security review', 'Third-party risk documentation'] },
  ];

  return (
    <section id="security" style={{ marginBottom: '5rem' }}>
      <p className="section-label">Section 3</p>
      <h2 className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>Phase 1: Security Hardening</h2>
      <p style={{ fontSize: '0.925rem', color: 'var(--muted-foreground)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: 640 }}>
        I recommend addressing these critical vulnerabilities immediately regardless of the rebuild decision. This phase protects the business and its customers now.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1rem' }}>
        {phases.map((phase) => (
          <div key={phase.label} className="card" style={{ padding: '1.25rem', borderTop: `3px solid ${phase.color}` }}>
            <span className="phase-badge" style={{ background: `${phase.color}15`, color: phase.color, marginBottom: '0.875rem', display: 'inline-block' }}>
              {phase.label}
            </span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {phase.items.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.625rem', fontSize: '0.8125rem', alignItems: 'flex-start' }}>
                  <span style={{ color: phase.color, marginTop: '0.125rem', flexShrink: 0 }}>●</span>
                  <span style={{ lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
