'use client';

import { useState } from 'react';

const navSections = [
  { id: 'cover', label: 'Overview', icon: '◇' },
  { id: 'assessment', label: 'Platform Assessment', icon: '◎' },
  { id: 'security', label: 'Security Hardening', icon: '◆' },
  { id: 'rebuild', label: 'Platform Rebuild', icon: '▸' },
  { id: 'architecture', label: 'Target Architecture', icon: '△' },
  { id: 'investment', label: 'Investment & ROI', icon: '◈' },
  { id: 'tco', label: '5-Year Cost Analysis', icon: '▥' },
  { id: 'risk', label: 'Risk Analysis', icon: '◬' },
  { id: 'recommendation', label: 'Recommendation', icon: '✓' },
  { id: 'ai', label: 'AI Strategy', icon: '✦' },
];

interface SidebarProps {
  activeSection: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Hamburger – mobile only */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{
          position: 'fixed', top: '1rem', left: '1rem',
          zIndex: 100, padding: '0.5rem',
          background: 'var(--color-ink)', color: 'white',
          borderRadius: '0.5rem', border: 'none', cursor: 'pointer',
          display: 'none',
        }}
        className="lg:hidden hamburger-btn"
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
            zIndex: 49,
          }}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`sidebar ${mobileOpen ? 'open' : ''}`}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {/* Logo area */}
        <div style={{ padding: '1.5rem 1.5rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <p className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', letterSpacing: '-0.01em' }}>
              Booksure
            </p>
            <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Investment Proposal
            </p>
          </div>
        </div>

        {/* Nav */}
        <div style={{ padding: '1rem 0.75rem', flex: 1 }}>
          {navSections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.625rem 0.875rem',
                  borderRadius: '0.5rem', border: 'none', cursor: 'pointer',
                  marginBottom: '0.125rem',
                  background: isActive ? 'var(--color-primary)' : 'transparent',
                  color: isActive ? 'white' : 'rgba(255,255,255,0.55)',
                  fontSize: '0.8125rem', fontWeight: isActive ? 600 : 400,
                  transition: 'all 0.15s ease',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-ink-light)';
                  if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.85)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                  if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.55)';
                }}
              >
                <span style={{ fontSize: '0.9rem', minWidth: '1.2rem' }}>{section.icon}</span>
                <span style={{ lineHeight: 1.3 }}>{section.label}</span>
                {isActive && (
                  <span style={{
                    marginLeft: 'auto', width: 4, height: 4, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.8)',
                  }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div style={{
          padding: '1rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)',
          fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)',
        }}>
          <p>Prepared 26 March 2026</p>
          <p style={{ marginTop: '0.25rem' }}>Version 1.0</p>
        </div>
      </nav>
    </>
  );
}
