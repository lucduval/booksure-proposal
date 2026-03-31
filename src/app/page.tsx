'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import { CoverSection, AssessmentSection, SecuritySection } from '@/components/SectionsA';
import { RebuildSection, ArchitectureSection } from '@/components/SectionsB';
import { InvestmentSection, TCOSection } from '@/components/SectionsC';
import { RiskSection, RecommendationSection } from '@/components/SectionsD';
import { AIStrategySection } from '@/components/SectionsE';

const sectionIds = [
  'cover', 'assessment', 'security', 'rebuild',
  'architecture', 'investment', 'tco', 'risk', 'recommendation', 'ai',
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('cover');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
      <Sidebar activeSection={activeSection} />

      <main
        className="main-content"
        style={{ marginLeft: 256, flex: 1, minWidth: 0 }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 2rem 5rem' }}>
          <CoverSection />
          <hr className="divider" />
          <AssessmentSection />
          <hr className="divider" />
          <SecuritySection />
          <hr className="divider" />
          <RebuildSection />
          <hr className="divider" />
          <ArchitectureSection />
          <hr className="divider" />
          <InvestmentSection />
          <hr className="divider" />
          <TCOSection />
          <hr className="divider" />
          <RiskSection />
          <hr className="divider" />
          <RecommendationSection />
          <hr className="divider" />
          <AIStrategySection />

          <footer style={{
            marginTop: '4rem', paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
            fontSize: '0.75rem', color: 'var(--muted-foreground)',
            textAlign: 'center', lineHeight: 1.8,
          }}>
            <p>This proposal is based on a comprehensive analysis of the Booksure codebase as of 26 March 2026.</p>
            <p>Effort estimates assume experienced full-stack developers familiar with Next.js, Convex, and Clerk.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
