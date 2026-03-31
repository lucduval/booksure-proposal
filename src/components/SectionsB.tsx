'use client';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, Radar,
  PieChart, Pie, Cell, Legend,
} from 'recharts';

const PRIMARY = '#1B5680';
const PRIMARY_LIGHT = '#B0CEE4';
const PRIMARY_DARK = '#133f60';
const SUCCESS = '#16a34a';

/* ─── Rebuild Section ───────────────────────────────── */
const eliminationsData = [
  { name: 'Windows\nServer', current: 100, rebuilt: 0 },
  { name: 'SQL Server\nLicensing', current: 80, rebuilt: 0 },
  { name: 'Redis\nManagement', current: 30, rebuilt: 0 },
  { name: 'Hangfire\n60 Workers', current: 70, rebuilt: 0 },
  { name: 'CDN\nManagement', current: 40, rebuilt: 0 },
  { name: 'Auth Code\nMaint.', current: 90, rebuilt: 5 },
];

const securityImprovements = [
  { subject: 'Auth Security', legacy: 20, modern: 95 },
  { subject: 'Data Isolation', legacy: 55, modern: 98 },
  { subject: 'Secret Mgmt', legacy: 5, modern: 95 },
  { subject: 'Brute Force Prot.', legacy: 0, modern: 95 },
  { subject: 'MFA Support', legacy: 0, modern: 100 },
  { subject: 'Audit Logging', legacy: 10, modern: 95 },
];

const stackReplacements = [
  { old: 'Windows Server (IIS)', new: 'Vercel (serverless)', saving: 'No patching/monitoring' },
  { old: 'SQL Server + licensing', new: 'Convex (managed)', saving: 'No DB admin' },
  { old: 'Redis (sessions)', new: 'Clerk (managed)', saving: 'No Redis server' },
  { old: 'Hangfire (60 workers)', new: 'Convex scheduled functions', saving: 'No job server' },
  { old: 'Rackspace CDN', new: 'Convex + Vercel Image Opt.', saving: 'No CDN management' },
  { old: '6 chart libraries', new: 'Recharts (one library)', saving: 'Single dependency' },
  { old: '4 table libraries', new: 'TanStack Table', saving: 'Unified API' },
  { old: 'MailBee SMTP queue', new: 'Resend / SendGrid', saving: 'No email infra' },
  { old: 'Custom Forms Auth', new: 'Clerk', saving: 'No auth code' },
];

export function RebuildSection() {
  return (
    <section id="rebuild" style={{ marginBottom: '5rem' }}>
      <p className="section-label">Section 4</p>
      <h2 className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>Phase 2 — Platform Rebuild</h2>
      <p style={{ fontSize: '0.925rem', color: 'var(--muted-foreground)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: 680 }}>
        The rebuild eliminates accumulated technical debt, replaces 9 separate infrastructure systems with managed cloud services, and automatically resolves every security vulnerability found in Phase 1.
      </p>

      {/* Why rebuild callout */}
      <div style={{
        background: `linear-gradient(135deg, ${PRIMARY}08, ${PRIMARY_LIGHT}20)`,
        border: `1px solid ${PRIMARY}30`, borderRadius: '0.75rem',
        padding: '1.5rem', marginBottom: '2rem',
      }}>
        <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: PRIMARY }}>Why Rebuild vs. Stay on Legacy Stack?</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem' }}>
          {[
            { icon: '⚡', title: 'Faster Development', desc: 'Component-based React vs server-rendered Razor — UI changes that take days now take hours' },
            { icon: '🔐', title: 'Security by Default', desc: 'Clerk, Convex, and Vercel enforce tenant isolation, secret management, and MFA at the platform level' },
            { icon: '💸', title: 'Lower Running Costs', desc: 'Serverless eliminates Windows Server, SQL Server licensing, Redis, and CDN infrastructure' },
            { icon: '📱', title: 'Modern UX', desc: 'Real-time updates replace 5-second polling — guests and staff see live availability instantly' },
          ].map(item => (
            <div key={item.title} style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.25rem' }}>{item.title}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', lineHeight: 1.55 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Operational overhead elimination chart */}
      <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Operational Overhead — Legacy vs. Rebuilt</h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', marginBottom: '1.25rem' }}>
          Relative management burden per system (100 = high overhead, 0 = none)
        </p>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={eliminationsData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="name" style={{ fontSize: '0.68rem' }} interval={0} />
            <YAxis domain={[0,100]} style={{ fontSize: '0.75rem' }} />
            <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid var(--border)', fontSize: '0.8rem' }} />
            <Legend />
            <Bar dataKey="current" name="Legacy Stack" fill="#dc2626" radius={[4,4,0,0]} opacity={0.8} />
            <Bar dataKey="rebuilt" name="Rebuilt Stack" fill={SUCCESS} radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Security radar */}
      <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Security Posture — Legacy vs. Rebuilt</h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', marginBottom: '1rem' }}>Score out of 100</p>
        <ResponsiveContainer width="100%" height={280}>
          <RadarChart data={securityImprovements}>
            <PolarGrid stroke="var(--border)" />
            <PolarAngleAxis dataKey="subject" style={{ fontSize: '0.72rem' }} />
            <Radar name="Legacy Stack" dataKey="legacy" stroke="#dc2626" fill="#dc2626" fillOpacity={0.15} />
            <Radar name="Rebuilt Stack" dataKey="modern" stroke={PRIMARY} fill={PRIMARY} fillOpacity={0.2} />
            <Legend />
            <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid var(--border)', fontSize: '0.8rem' }} />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Stack replacement table */}
      <div className="card" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontWeight: 700, marginBottom: '1.25rem' }}>What Gets Eliminated</h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="proposal-table">
            <thead>
              <tr>
                <th>Current Dependency</th>
                <th>Replaced By</th>
                <th>Operational Saving</th>
              </tr>
            </thead>
            <tbody>
              {stackReplacements.map((row, i) => (
                <tr key={i}>
                  <td style={{ color: '#dc2626', fontSize: '0.8125rem', textDecoration: 'line-through', textDecorationColor: '#dc262660' }}>{row.old}</td>
                  <td style={{ fontWeight: 500, color: SUCCESS }}>{row.new}</td>
                  <td style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>{row.saving}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ─── Architecture Section ──────────────────────────── */
export function ArchitectureSection() {
  const layers = [
    { label: 'Users', items: ['Establishments', 'Call Centre Staff', 'Guests'], color: PRIMARY_LIGHT, icon: '👤' },
    { label: 'Vercel Edge Network', items: ['CDN', 'DDoS Protection', 'SSL', 'Image Optimisation'], color: PRIMARY, icon: '🌐' },
    { label: 'Next.js Application', items: ['Public Site', 'Est. Dashboard', 'Guest Portal', 'Call Centre', 'API Routes'], color: PRIMARY_DARK, icon: '⚛️' },
    { label: 'Services Layer', items: ['Clerk (Auth)', 'Convex (DB + Realtime)', 'iVeri + PayFast', 'Booking.com', 'BulkSMS', 'Resend'], color: '#133f60', icon: '🔧' },
  ];

  return (
    <section id="architecture" style={{ marginBottom: '5rem' }}>
      <p className="section-label">Section 5</p>
      <h2 className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>Target Architecture</h2>
      <p style={{ fontSize: '0.925rem', color: 'var(--muted-foreground)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: 640 }}>
        A fully managed, serverless architecture with zero servers to patch, automatic scaling, and built-in security at every layer.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {layers.map((layer, idx) => (
          <div key={layer.label}>
            <div className="card" style={{
              padding: '1.25rem 1.5rem', borderLeft: `4px solid ${layer.color}`,
              display: 'flex', alignItems: 'flex-start', gap: '1rem',
            }}>
              <span style={{ fontSize: '1.5rem', flexShrink: 0, marginTop: '0.125rem' }}>{layer.icon}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 700, fontSize: '0.9375rem', marginBottom: '0.5rem', color: layer.color }}>{layer.label}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                  {layer.items.map(item => (
                    <span key={item} className="phase-badge" style={{ background: `${layer.color}12`, color: layer.color }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {idx < layers.length - 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', padding: '0.25rem 0' }}>
                <span style={{ color: 'var(--muted-foreground)', fontSize: '1.25rem' }}>↕</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
