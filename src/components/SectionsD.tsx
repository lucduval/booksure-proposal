'use client';

const PRIMARY = '#1B5680';
const PRIMARY_DARK = '#133f60';
const SUCCESS = '#16a34a';
const DANGER = '#dc2626';

/* ─── Risk Section ──────────────────────────────────── */
const phase2Risks = [
  { risk: 'iVeri SDK has no REST API', likelihood: 'Medium', impact: 'High', mitigation: 'Investigate Week 1. Fallback: .NET microservice proxy or Peach Payments' },
  { risk: 'Booking.com requires sub-minute sync', likelihood: 'High', impact: 'Medium', mitigation: 'Convex self-scheduling functions achieve ~5–10s intervals' },
  { risk: 'Data migration loss or corruption', likelihood: 'Medium', impact: 'High', mitigation: 'Parallel systems, checksums, validation before cutover' },
  { risk: 'Scope creep during rebuild', likelihood: 'High', impact: 'High', mitigation: 'Feature parity first — new features only after launch' },
  { risk: 'Business disruption at cutover', likelihood: 'Medium', impact: 'High', mitigation: 'Gradual traffic migration, instant rollback capability' },
];

function RiskBadge({ level }: { level: string }) {
  const cfg: Record<string, { cls: string; label: string }> = {
    High:   { cls: 'risk-high',   label: 'High' },
    Medium: { cls: 'risk-medium', label: 'Medium' },
    Low:    { cls: 'risk-low',    label: 'Low' },
  };
  const c = cfg[level] || cfg.Medium;
  return <span className={`phase-badge ${c.cls}`}>{c.label}</span>;
}

export function RiskSection() {
  return (
    <section id="risk" style={{ marginBottom: '5rem' }}>
      <p className="section-label">Section 8</p>
      <h2 className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>Risk Analysis</h2>
      <p style={{ fontSize: '0.925rem', color: 'var(--muted-foreground)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: 680 }}>
        Key risks for the rebuild have been identified and mitigated. The greatest risk is <em>not rebuilding</em> — staying on .NET Framework 4.7.2 means mounting technical debt, increasing security exposure, and slower feature delivery every year.
      </p>

      {/* Risk register */}
      <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontWeight: 700, marginBottom: '1.25rem' }}>Phase 2 — Rebuild Risk Register</h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="proposal-table">
            <thead><tr><th>Risk</th><th>Likelihood</th><th>Impact</th><th>Mitigation</th></tr></thead>
            <tbody>
              {phase2Risks.map((row, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500, minWidth: 200 }}>{row.risk}</td>
                  <td><RiskBadge level={row.likelihood} /></td>
                  <td><RiskBadge level={row.impact} /></td>
                  <td style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', minWidth: 240 }}>{row.mitigation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Risk of NOT rebuilding */}
      <div style={{
        background: 'rgba(220,38,38,0.05)', border: '1px solid rgba(220,38,38,0.2)',
        borderRadius: '0.75rem', padding: '1.5rem',
      }}>
        <h3 style={{ fontWeight: 700, color: DANGER, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>⚠️</span> The Risk of NOT Rebuilding
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem' }}>
          {[
            { title: 'Escalating Security Liability', desc: 'Every month on .NET 4.7.2 with custom auth is a month of accumulating exposure. The cross-tenant vulnerabilities will eventually be exploited.' },
            { title: 'Rising Maintenance Costs', desc: 'Maintenance costs grow 10–15% per year as the framework ages. Year 5 maintenance is projected at R140,000 vs R0 on the modern stack.' },
            { title: 'Developer Velocity Decline', desc: 'Every new feature requires understanding 313 Razor views and 70+ jQuery plugins. Development velocity will slow as the team grows.' },
            { title: 'Competitive Disadvantage', desc: 'Competitors on modern stacks ship features in days. The legacy architecture means weeks. Over 5 years this gap becomes existential.' },
          ].map(item => (
            <div key={item.title} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ color: DANGER, flexShrink: 0, marginTop: '0.2rem' }}>●</span>
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.25rem' }}>{item.title}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', lineHeight: 1.55 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Recommendation Section ────────────────────────── */
export function RecommendationSection() {
  const steps = [
    {
      phase: 'This Week',
      color: DANGER,
      icon: '🚨',
      actions: [
        'Execute Phase 1 P0 immediately — fix 4 cross-tenant vulnerabilities and replace sa database user. 1–2 days work.',
        'Begin credential rotation planning — all secrets in git history must be treated as compromised.',
      ],
    },
    {
      phase: 'Next 4 Weeks',
      color: '#ea580c',
      icon: '🔒',
      actions: [
        'Complete Phase 1 security hardening — either in-house or engage TCG with the specific findings from this analysis.',
        'Proceed with penetration testing after fixes are deployed. Validates the hardening work.',
      ],
    },
    {
      phase: 'Following 5–6 Months',
      color: PRIMARY,
      icon: '🚀',
      actions: [
        'Proceed with Phase 2 rebuild — every month of development on the legacy stack is investment into a depreciating asset.',
        'Start with iVeri API investigation in Week 1 — highest-risk unknown that must be resolved to unblock payments.',
        'Run Phase 1 and Phase 2 in parallel from Weeks 3–24. No business disruption until deliberate cutover.',
      ],
    },
  ];

  return (
    <section id="recommendation" style={{ marginBottom: '5rem' }}>
      <p className="section-label">Section 9</p>
      <h2 className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>Recommendation</h2>
      <p style={{ fontSize: '0.925rem', color: 'var(--muted-foreground)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: 680 }}>
        The current platform is operationally viable but financially and technically depreciating. The rebuild is not a risk — it is the risk mitigation strategy.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
        {steps.map((step) => (
          <div key={step.phase} className="card" style={{ padding: '1.5rem', borderLeft: `4px solid ${step.color}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>{step.icon}</span>
              <span className="phase-badge" style={{ background: `${step.color}15`, color: step.color, fontSize: '0.75rem' }}>
                {step.phase}
              </span>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {step.actions.map((action, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  <span style={{ color: step.color, flexShrink: 0, marginTop: '0.25rem' }}>→</span>
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Final summary */}
      <div style={{
        background: `linear-gradient(135deg, ${PRIMARY_DARK}, ${PRIMARY})`,
        borderRadius: '1rem', padding: '2.5rem', color: 'white', textAlign: 'center',
      }}>
        <h3 className="font-serif" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
          The Bottom Line
        </h3>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.8, opacity: 0.9, maxWidth: 560, margin: '0 auto 1.5rem' }}>
          At <strong>R50,000 total investment</strong>, the rebuild pays back within <strong>the first year</strong> through infrastructure savings alone. The elimination of Windows Server, SQL Server licensing, and Redis overhead generates over <strong>R380k in savings</strong> across 5 years.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          {[
            { label: '5-Year Net Saving', value: 'R380k' },
            { label: 'Monthly Saving', value: 'R4k–R10k' },
            { label: 'Security Vulns Fixed', value: '10 of 10' },
          ].map(item => (
            <div key={item.label} style={{
              background: 'rgba(255,255,255,0.12)', borderRadius: '0.5rem',
              padding: '0.875rem 1.5rem', backdropFilter: 'blur(8px)',
            }}>
              <p className="font-serif" style={{ fontSize: '1.5rem', fontWeight: 700 }}>{item.value}</p>
              <p style={{ fontSize: '0.72rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
