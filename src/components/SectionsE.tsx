'use client';

import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const PRIMARY = '#1B5680';
const PRIMARY_LIGHT = '#B0CEE4';
const PRIMARY_DARK = '#133f60';
const SUCCESS = '#16a34a';
const ACCENT = '#7c3aed';
const ACCENT_LIGHT = '#ede9fe';

/* ─── Data ──────────────────────────────────────────── */

const impactData = [
  { feature: 'Smart Pricing', impact: 92, effort: 55 },
  { feature: 'Guest Comms AI', impact: 78, effort: 30 },
  { feature: 'Call Centre Assist', impact: 85, effort: 45 },
  { feature: 'Occupancy Forecast', impact: 88, effort: 60 },
  { feature: 'NL Search', impact: 90, effort: 75 },
  { feature: 'Review Responses', impact: 65, effort: 20 },
  { feature: 'Revenue Intelligence', impact: 86, effort: 65 },
  { feature: 'Fraud Detection', impact: 72, effort: 50 },
];

const radarData = [
  { subject: 'Revenue Growth', legacy: 20, withAI: 85 },
  { subject: 'Guest Experience', legacy: 35, withAI: 90 },
  { subject: 'Operational Efficiency', legacy: 30, withAI: 88 },
  { subject: 'Pricing Accuracy', legacy: 25, withAI: 82 },
  { subject: 'Fraud Protection', legacy: 15, withAI: 78 },
  { subject: 'Competitive Edge', legacy: 20, withAI: 88 },
];

const phases = [
  {
    phase: 'Phase A',
    timeline: 'Months 1–6 · Post-Rebuild',
    color: SUCCESS,
    icon: '↗',
    label: 'Quick Wins',
    desc: 'Low effort, high-value automations that run on top of the new platform immediately.',
    features: [
      {
        title: 'AI Guest Communications',
        desc: 'Automatically generate personalised booking confirmations, pre-arrival briefings, and post-stay thank-you messages. Each message is tailored to the guest\'s name, stay details, and the establishment\'s tone, not generic templates.',
        value: 'Reduces manual email time. Increases 5-star review rates.',
        icon: '▷',
      },
      {
        title: 'Review Response Generator',
        desc: 'AI drafts responses to Booking.com and Google reviews, both positive and negative, for a staff member to approve and post. Responses reflect the establishment\'s voice and address specific points in each review.',
        value: 'Increases review engagement. Improves OTA ranking signals.',
        icon: '✦',
      },
      {
        title: 'Listing Optimiser',
        desc: 'AI analyses each establishment\'s property description, photo count, and amenity listing against top-performing competitors on Booking.com. Produces a ranked list of specific improvements with suggested copy.',
        value: 'Higher click-through and conversion rate on OTA channels.',
        icon: '▤',
      },
    ],
  },
  {
    phase: 'Phase B',
    timeline: 'Months 6–12',
    color: PRIMARY,
    icon: '◈',
    label: 'Intelligence Layer',
    desc: 'Data-driven features that learn from Booksure\'s booking history and surface actionable insights.',
    features: [
      {
        title: 'Smart Pricing Suggestions',
        desc: 'AI analyses historical occupancy patterns in Convex, upcoming local events, and seasonal demand to suggest optimal nightly rates per establishment. Alerts are sent when a property appears under- or over-priced relative to its own history.',
        value: 'Direct revenue uplift. Properties typically see 8–15% RevPAR improvement.',
        icon: '◇',
      },
      {
        title: 'Call Centre AI Assist',
        desc: 'A real-time assistant panel for call centre agents. As a call is in progress, the AI surfaces the caller\'s booking history, suggests availability options, and drafts hold messages or follow-up emails. Agents confirm and send instead of typing from scratch.',
        value: 'Reduces average handling time. Improves first-call resolution rate.',
        icon: '◎',
      },
      {
        title: 'Occupancy Forecasting',
        desc: 'Predicts 30, 60, and 90-day occupancy for each establishment based on historical data, current booking pace, and seasonal patterns. Establishments can use forecasts to trigger early-bird promotions or adjust staffing before the need arises.',
        value: 'Smarter staffing and marketing spend decisions made weeks in advance.',
        icon: '▥',
      },
    ],
  },
  {
    phase: 'Phase C',
    timeline: 'Months 12–24',
    color: ACCENT,
    icon: '▸',
    label: 'Competitive Edge',
    desc: 'Platform-level AI features that differentiate Booksure from other booking management systems.',
    features: [
      {
        title: 'Natural Language Booking Search',
        desc: 'Guests type a plain-language request like "a quiet guest house near the Drakensberg for two adults, private bathroom, under R1,200 a night" and the platform returns ranked, matching properties. No form fields, no filters to configure.',
        value: 'Material improvement in guest conversion. A feature no South African competitor currently offers.',
        icon: '◎',
      },
      {
        title: 'Revenue Intelligence Dashboard',
        desc: 'Each establishment receives a monthly AI-generated performance summary: occupancy vs comparable properties, revenue per available room, channel performance breakdown, and 2–3 specific action recommendations, all in plain language, not raw data.',
        value: 'Turns Booksure into a strategic partner for establishments, not just a booking tool.',
        icon: '▥',
      },
      {
        title: 'Anomaly & Fraud Detection',
        desc: 'Continuous monitoring of booking and payment patterns. Flags unusual activity like a sudden spike in same-day cancellations, repeated card failures from the same device, or booking patterns inconsistent with a property\'s history, before losses occur.',
        value: 'Reduces chargeback exposure. Protects both Booksure and its establishments.',
        icon: '◆',
      },
    ],
  },
];

/* ─── Component ─────────────────────────────────────── */

export function AIStrategySection() {
  return (
    <section id="ai" style={{ marginBottom: '5rem' }}>
      <p className="section-label">Section 10</p>
      <h2 className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
        AI Strategy
      </h2>
      <p style={{ fontSize: '0.925rem', color: 'var(--muted-foreground)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: 680 }}>
        The rebuilt platform is not just a cost reduction. It is the foundation for AI. The legacy stack cannot support these capabilities. I have designed the new stack specifically for them.
      </p>

      {/* Why the rebuilt stack enables AI */}
      <div style={{
        background: `linear-gradient(135deg, ${ACCENT}08, ${PRIMARY_LIGHT}25)`,
        border: `1px solid ${ACCENT}25`,
        borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '2.5rem',
      }}>
        <h3 style={{ fontWeight: 700, color: ACCENT, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>✦</span> Why AI Requires the Modern Stack
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem' }}>
          {[
            { icon: '↗', title: 'Real-Time Data', desc: 'Convex streams live booking data to AI models. The legacy SQL Server cannot stream. It only responds to queries.' },
            { icon: '◎', title: 'API-First Architecture', desc: 'Next.js API routes integrate with OpenAI, Anthropic, and any AI service in minutes. The legacy ASP.NET stack requires weeks of scaffolding.' },
            { icon: '▣', title: 'Vector-Ready Database', desc: 'Convex supports vector search natively, the backbone of semantic search and AI recommendations. SQL Server does not.' },
            { icon: '◆', title: 'Secure by Default', desc: 'AI features require passing guest data to external models. Clerk and Convex enforce data isolation rules that protect this. The legacy stack does not.' },
          ].map(item => (
            <div key={item.title} style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{item.icon}</span>
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.25rem' }}>{item.title}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', lineHeight: 1.55 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap phases */}
      {phases.map((p) => (
        <div key={p.phase} style={{ marginBottom: '2.5rem' }}>
          {/* Phase header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1rem' }}>
            <div style={{
              width: 40, height: 40, borderRadius: '0.625rem',
              background: `${p.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.25rem', flexShrink: 0,
            }}>
              {p.icon}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="phase-badge" style={{ background: `${p.color}15`, color: p.color, fontSize: '0.7rem' }}>
                  {p.phase}
                </span>
                <span className="phase-badge" style={{ background: 'var(--muted)10', color: 'var(--muted-foreground)', fontSize: '0.7rem' }}>
                  {p.timeline}
                </span>
              </div>
              <p style={{ fontWeight: 700, fontSize: '1rem', marginTop: '0.25rem' }}>{p.label}</p>
            </div>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', marginBottom: '1rem', maxWidth: 620 }}>{p.desc}</p>

          {/* Feature cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1rem' }}>
            {p.features.map(f => (
              <div key={f.title} className="card" style={{ padding: '1.25rem', borderTop: `3px solid ${p.color}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.75rem' }}>
                  <span style={{
                    fontSize: '1.1rem', width: 34, height: 34,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `${p.color}12`, borderRadius: '0.5rem', flexShrink: 0,
                  }}>{f.icon}</span>
                  <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>{f.title}</p>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)', lineHeight: 1.65, marginBottom: '0.875rem' }}>{f.desc}</p>
                <div style={{
                  background: `${p.color}08`, borderRadius: '0.5rem',
                  padding: '0.625rem 0.75rem', borderLeft: `3px solid ${p.color}`,
                }}>
                  <p style={{ fontSize: '0.75rem', color: p.color, fontWeight: 500, lineHeight: 1.5 }}>
                    {f.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Charts */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: '1.5rem', marginTop: '1rem' }}>

        {/* Impact vs Effort chart */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontWeight: 700, marginBottom: '0.35rem' }}>Feature Impact Scores</h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', marginBottom: '1.25rem' }}>
            Estimated business impact per AI feature (0–100)
          </p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart
              data={impactData}
              layout="vertical"
              margin={{ top: 0, right: 20, left: 10, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} style={{ fontSize: '0.7rem' }} tickCount={5} />
              <YAxis dataKey="feature" type="category" style={{ fontSize: '0.72rem' }} width={110} />
              <Tooltip
                formatter={(v: number, name: string) => [`${v}/100`, name === 'impact' ? 'Impact' : 'Effort']}
                contentStyle={{ borderRadius: '0.5rem', border: '1px solid var(--border)', fontSize: '0.8rem' }}
              />
              <Bar dataKey="impact" name="Impact" fill={ACCENT} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Radar: competitive position */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontWeight: 700, marginBottom: '0.35rem' }}>Competitive Position with AI</h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', marginBottom: '1rem' }}>
            Booksure today vs. Booksure with full AI roadmap (score 0–100)
          </p>
          <ResponsiveContainer width="100%" height={260}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="var(--border)" />
              <PolarAngleAxis dataKey="subject" style={{ fontSize: '0.68rem' }} />
              <Radar name="Today" dataKey="legacy" stroke="#dc2626" fill="#dc2626" fillOpacity={0.12} strokeWidth={1.5} />
              <Radar name="With AI Roadmap" dataKey="withAI" stroke={ACCENT} fill={ACCENT} fillOpacity={0.18} strokeWidth={2} />
              <Legend wrapperStyle={{ fontSize: '0.75rem' }} />
              <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid var(--border)', fontSize: '0.8rem' }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Priority matrix table */}
      <div className="card" style={{ padding: '1.5rem', marginTop: '1.5rem' }}>
        <h3 style={{ fontWeight: 700, marginBottom: '1.25rem' }}>AI Roadmap: Priority Matrix</h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="proposal-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Phase</th>
                <th>Effort</th>
                <th>Impact</th>
                <th>Key Dependency</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'AI Guest Communications',  phase: 'A', effort: 'Low',    impact: 'High',    dep: 'Resend + Convex booking data' },
                { feature: 'Review Response Generator', phase: 'A', effort: 'Low',    impact: 'Medium',  dep: 'Booking.com review API access' },
                { feature: 'Listing Optimiser',         phase: 'A', effort: 'Low',    impact: 'High',    dep: 'OTA listing data + LLM API' },
                { feature: 'Smart Pricing Suggestions', phase: 'B', effort: 'Medium', impact: 'Very High', dep: 'Historical occupancy data in Convex' },
                { feature: 'Call Centre AI Assist',     phase: 'B', effort: 'Medium', impact: 'High',    dep: 'Real-time Convex queries + LLM API' },
                { feature: 'Occupancy Forecasting',     phase: 'B', effort: 'Medium', impact: 'High',    dep: '12+ months of booking history' },
                { feature: 'Natural Language Search',   phase: 'C', effort: 'High',   impact: 'Very High', dep: 'Convex vector search index' },
                { feature: 'Revenue Intelligence',      phase: 'C', effort: 'High',   impact: 'High',    dep: 'Multi-property aggregated data' },
                { feature: 'Anomaly & Fraud Detection', phase: 'C', effort: 'Medium', impact: 'Medium',  dep: 'Payment + booking event stream' },
              ].map((row, i) => {
                const phaseColors: Record<string, string> = { A: SUCCESS, B: PRIMARY, C: ACCENT };
                const effortColors: Record<string, string> = { Low: SUCCESS, Medium: '#d97706', High: '#dc2626' };
                const impactColors: Record<string, string> = { 'Very High': ACCENT, High: PRIMARY, Medium: '#d97706' };
                return (
                  <tr key={i}>
                    <td style={{ fontWeight: 500 }}>{row.feature}</td>
                    <td>
                      <span className="phase-badge" style={{ background: `${phaseColors[row.phase]}15`, color: phaseColors[row.phase] }}>
                        Phase {row.phase}
                      </span>
                    </td>
                    <td>
                      <span className="phase-badge" style={{ background: `${effortColors[row.effort]}15`, color: effortColors[row.effort] }}>
                        {row.effort}
                      </span>
                    </td>
                    <td>
                      <span className="phase-badge" style={{ background: `${impactColors[row.impact]}15`, color: impactColors[row.impact] }}>
                        {row.impact}
                      </span>
                    </td>
                    <td style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>{row.dep}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
