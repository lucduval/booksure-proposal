# Booksure Proposal — Plain-English Explainer

---

## Part 1: Technical Terms, Simply Explained

### The Platforms & Frameworks

**ASP.NET MVC 5 / .NET Framework 4.7.2**
Microsoft's older web technology used to build the current Booksure website. Think of it as the "engine" the site runs on. Version 4.7.2 was released in 2017 and is no longer being improved — it's like running a 2017 model car when 2026 models exist.

**Razor Views (313 of them)**
The individual "page templates" that make up the current site. Each one defines what a page looks like. 313 is a large number — it means making a visual change to the site requires touching many files.

**jQuery Plugins (70+)**
Small third-party add-ons bolted onto the current site to add buttons, calendars, pop-ups etc. Each plugin is a separate dependency that can break or become a security risk over time.

**Windows Server (IIS)**
A physical or virtual machine running Microsoft Windows that the current site lives on. Requires ongoing patching, monitoring, and manual maintenance by a developer.

**SQL Server**
Microsoft's database software — where all Booksure's data (bookings, customers, payments) is stored. Requires a separate paid licence and a developer to administer it.

**Redis**
A small, fast memory store used to keep track of logged-in user sessions. Another server that needs to be hosted, monitored, and maintained.

**Hangfire (60 background workers)**
A job-scheduling system that runs tasks in the background (e.g. sending confirmation emails, syncing with Booking.com). 60 workers means 60 simultaneous background processes running — all requiring a server.

**Rackspace CDN**
A Content Delivery Network — a service that speeds up the website by storing copies of images and files closer to the visitor. Rackspace is the company providing this. This can be replaced by the new platform at no extra cost.

**MailBee SMTP Queue**
The current system for sending emails (booking confirmations, invoices). SMTP is the technical protocol for sending email. MailBee is a paid library that manages the queue.

---

### The New Stack (Rebuilt Platform)

**Next.js**
A modern web framework built on React (Facebook's open-source technology). It's used by Airbnb, Netflix, and Vercel themselves. It compiles pages faster, handles real-time updates, and requires far less boilerplate code.

**React / Component-based UI**
Instead of 313 separate page templates, the new platform uses reusable "components" — building blocks like a LEGO set. Change a button once, it updates everywhere.

**Vercel**
The hosting platform for the new site. Instead of a Windows Server that you manage, Vercel runs the site automatically, scales it when traffic spikes, and handles patching with zero involvement from a developer. No server to maintain.

**Vercel Edge Network**
Vercel's global network of servers that automatically serves the site from the location closest to each visitor — replacing Rackspace CDN. Included in the Vercel subscription.

**Convex**
A managed database and real-time backend. It replaces SQL Server, Redis, and Hangfire all in one. "Managed" means Convex's team handles all the database administration, backups, and scaling — not Booksure's developers.

**Convex Scheduled Functions**
Convex's replacement for Hangfire background workers. Instead of 60 manually managed workers, scheduled functions are defined in code and run automatically.

**Clerk**
A managed authentication service. It handles login, registration, password resets, multi-factor authentication, and session management — replacing all the custom-written auth code in the current platform. It is built with tenant isolation (see Security terms) by default.

**Resend / SendGrid**
Managed email delivery services that replace MailBee. No email infrastructure to run — just an API.

**Serverless**
An architecture where there are no servers to manage. The code runs on demand in the cloud, scales automatically, and you only pay for what you use. Opposite of the current setup where a Windows Server runs 24/7 whether it's busy or idle.

**TanStack Table**
A single, modern library for building data tables in the UI. Replaces 4 separate table libraries currently used.

**iVeri / PayFast**
South African payment gateways — services that process credit card transactions. iVeri is the current one; PayFast is a fallback option being investigated.

**Booking.com Integration**
A connection between Booksure and Booking.com's platform so that availability is kept in sync automatically. Currently a risk because it requires near-real-time updates.

**BulkSMS**
A service for sending SMS messages to guests and staff.

---

### Security Terms

**Cross-Tenant Vulnerability**
The most critical issue found. Booksure serves multiple "establishments" (tenants) — guest houses, hotels etc. A cross-tenant vulnerability means one establishment can, due to a bug, read or modify the data of a completely different establishment. Like one hotel guest being able to open another guest's room.

**SQL Injection**
An attack where a hacker types database commands into a form field (like a search box). If the application doesn't defend against this, the commands get executed directly on the database. With the current `sa` account (see below), a successful SQL injection gives the attacker full control of the entire server.

**`sa` (Superadmin) Database Account**
The database is currently connected using the `sa` account — the highest-privilege account in SQL Server. It can do anything: read all data, delete all data, execute server commands. Best practice is to use a restricted account that can only do exactly what the application needs. Using `sa` means any security flaw anywhere in the application is catastrophic.

**Plaintext Secrets in Source Control**
The application's passwords and API keys (for payments, email, etc.) are stored directly in the code repository. Anyone with access to the Git repository has access to all production credentials. This is a critical exposure.

**Credential Rotation**
The process of changing all passwords and API keys that may have been exposed. Because the secrets have been in the code repository (potentially for years), all of them must be treated as compromised and replaced.

**Brute-Force Protection**
A defence that locks an account or slows down login attempts after too many failed tries. The current platform has none — an attacker can try millions of password combinations without being stopped.

**MFA (Multi-Factor Authentication)**
Requiring a second proof of identity at login beyond a password — typically a one-time code sent by email or SMS. Currently absent from the platform.

**OTP (One-Time Password)**
A temporary, single-use code (usually 6 digits) sent to a user's phone or email to verify their identity for sensitive actions.

**WAF (Web Application Firewall)**
A service that sits in front of the website and automatically blocks known attack patterns before they even reach the application. Cloudflare provides this.

**IIS Hardening**
Configuring the Windows Server web server (IIS) to reduce the attack surface — disabling unnecessary features, setting strict security headers, and restricting what information the server reveals about itself.

**Security Headers**
Instructions the server sends to a visitor's browser telling it how to behave securely (e.g. "don't load content from untrusted sources", "always use HTTPS"). Missing headers are a common audit finding.

**Audit Logging**
A record of who did what and when. Currently absent — there is no log of login attempts, data access, or admin actions. This makes it impossible to detect or investigate an attack.

**Penetration Testing (Pen Test)**
A professional security engagement where an ethical hacker attempts to break into the system to find vulnerabilities before real attackers do.

---

### Architecture Terms

**Legacy Stack**
The current collection of technologies Booksure runs on — Windows Server, SQL Server, ASP.NET, Redis, Hangfire etc. "Legacy" means it is old, accumulating debt, and increasingly costly to maintain.

**Technical Debt**
Work that hasn't been done but will eventually need to be — outdated dependencies, workarounds, missing tests, inconsistent patterns. Like financial debt, it accumulates interest: the longer it's left, the more expensive it becomes to fix.

**CDN (Content Delivery Network)**
A global network of servers that stores copies of static assets (images, CSS, JavaScript) and serves them from the location nearest to each visitor, making the site load faster.

**DDoS Protection**
Defence against a Distributed Denial of Service attack — where thousands of computers flood a website with requests to overwhelm it. Vercel and Cloudflare provide this automatically.

**SSL (Secure Sockets Layer)**
The technology behind the padlock in a browser's address bar. It encrypts data between the visitor's browser and the server so it cannot be intercepted. Also referred to as TLS.

**API Routes**
Endpoints in the application that other systems (like Booking.com) can call to exchange data. Like a service window — you send a request in, you get data back.

**Managed Services**
Software run and maintained by a specialist provider (Vercel, Convex, Clerk) rather than by Booksure's own team. The provider handles uptime, security patches, backups, and scaling.

**Tenant Isolation**
Ensuring that each establishment's data is completely separate and inaccessible to other establishments — enforced at the platform level, not just in application code.

**Feature Parity**
Building the new platform so it does everything the current one does before going live. No features removed; the rebuild delivers the same functionality on modern infrastructure.

**Development Velocity**
How fast the development team can ship new features and fixes. Legacy codebases slow velocity down — more files to understand, more things that can break. Modern stacks speed it up.

---

## Part 2: How the Legacy Stack TCO Was Calculated

### What is Cumulative TCO?

"Cumulative Total Cost of Ownership" means the *running total* of all money spent on the legacy platform, year by year. It doesn't reset — each year's costs are added on top of all previous years.

---

### The Annual Cost Components

The legacy TCO is based entirely on the direct, monthly infrastructure bills to keep the current platform running. No developer costs are included.

| Cost Item | Monthly | Annual |
|---|---|---|
| Windows Server (IIS) | R4,000 | R48,000 |
| SQL Server Licensing | R3,000 | R36,000 |
| Redis Hosting | R750 | R9,000 |
| Rackspace CDN | R750 | R9,000 |
| Server Maintenance | R1,500 | R18,000 |
| **Total** | **~R10,000** | **~R120,000** |

These costs are treated as flat year-on-year (i.e. no price escalation assumed), making this a conservative, honest estimate.

---

### Year-by-Year Breakdown

| Year | **Annual Cost** | **Cumulative Total** |
|---|---|---|
| Year 1 | R120,000 | **R120,000** |
| Year 2 | R120,000 | **R240,000** |
| Year 3 | R120,000 | **R360,000** |
| Year 4 | R120,000 | **R480,000** |
| Year 5 | R120,000 | **R600,000** |

---

### How This Compares to the Rebuilt Stack

The rebuilt stack's Year 1 total of **R84,000** = R50,000 (one-off rebuild investment) + R34,000 (12 months of managed platform running costs at ~R2,800/month).

From Year 2 onwards, the rebuilt platform runs at **~R34,000/year** — just the managed service subscriptions (Vercel, Convex, Clerk, Resend, Cloudflare).

| Year | Legacy Cumulative | Rebuilt Cumulative | **Cumulative Saving** |
|---|---|---|---|
| Year 1 | R120,000 | R84,000 | **+R36,000** |
| Year 2 | R240,000 | R118,000 | **+R122,000** |
| Year 3 | R360,000 | R152,000 | **+R208,000** |
| Year 4 | R480,000 | R186,000 | **+R294,000** |
| Year 5 | R600,000 | R220,000 | **+R380,000** |

---

### The Key Takeaway

The legacy stack costs **R120,000 every year** just to keep the lights on. The rebuild costs **R50,000 once** and then **~R34,000/year** — less than one third of the legacy running cost. The rebuilt platform is cheaper from Year 1, and saves over **R380,000 across 5 years** on infrastructure alone.

---

## Part 3: Presenter's Guide — Section by Section

Use this as your talking notes when walking a client through the proposal. Each section has a simple explanation of what you're showing and how to answer likely questions.

---

### Section 1 — Cover & Executive Summary

**What you're showing:** The four headline takeaways: security hardening, platform rebuild, monthly savings, and 5-year ROI.

**How to introduce it:**
> "This proposal has two parts. The first is urgent — there are security issues on the current platform that need fixing regardless of anything else. The second is strategic — rebuilding the platform on modern infrastructure that costs significantly less to run."

**Key talking points:**
- The R4k–R10k monthly saving is based purely on infrastructure bills you're already paying — no developer costs factored in.
- The R380k 5-year saving is a conservative estimate. It assumes costs stay flat — in reality, hosting and licensing costs typically go up over time.
- Phase 1 (security) and Phase 2 (rebuild) are independent. The client can do Phase 1 alone if they're not ready for the rebuild.

**Likely question:** *"Do we have to do both phases?"*
> No. Phase 1 is a standalone security fix that takes 1–4 weeks. Phase 2 is a separate, longer project. We recommend both, but Phase 1 is urgent no matter what.

---

### Section 2 — Current Platform Assessment

**What you're showing:** The scale of the current codebase and the security vulnerabilities found during the audit.

**How to introduce it:**
> "Before we recommend anything, we did a thorough review of what's actually running today. Here's what we found."

**Key talking points:**
- The numbers (179 database tables, 313 page templates, 70+ plugins) aren't bad by themselves — but they illustrate that this is a large, complex system. Any change touches a lot of moving parts.
- The severity levels (Critical / High / Medium) follow the industry-standard CVSS scale — the same scale used by security firms and insurers.
- The **cross-tenant vulnerability** is the most important issue to land. Use the hotel room analogy: *"Imagine one guest being able to open another guest's room with their own keycard. That's what's possible right now between different establishments on the platform."*
- The **`sa` database account** means that if any single page on the site is compromised, an attacker has full access to every table in the database. It's like leaving a master key in the front door.

**Likely question:** *"Has anyone actually exploited these vulnerabilities?"*
> We don't know — because there's currently no audit logging. That's one of the things we'd fix in Phase 1. The absence of evidence isn't evidence of absence.

---

### Section 3 — Phase 1: Security Hardening

**What you're showing:** A prioritised action list of security fixes, broken into four urgency tiers (P0 through P3).

**How to introduce it:**
> "This is the fix list. P0 items can be done in a day or two. The rest are done over the following weeks. None of these require rebuilding anything — they're targeted patches to the existing system."

**Key talking points:**
- **P0** (red) = do this week, no debate. Two items: fix the cross-tenant data leaks, and replace the superadmin database account.
- **P1** (orange) = do within the first month. Includes locking down login attempts (brute-force protection), moving passwords out of the code, and enforcing proper password rules on the server side — not just in the browser.
- **P2** (amber) = important improvements. The Cloudflare WAF is particularly valuable — it sits in front of the entire site and blocks known attack patterns automatically.
- **P3** (blue) = best-practice recommendations. Email OTP for sensitive actions (like changing bank details) is especially worth doing.
- All P0 and P1 items are resolved automatically when the platform is rebuilt in Phase 2 — but Phase 1 fixes them now, on the current system, without waiting.

**Likely question:** *"How long does Phase 1 take?"*
> P0 is 1–2 days. Full Phase 1 (P0 through P3) is 3–5 weeks depending on how quickly credentials can be rotated and third-party services updated.

---

### Section 4 — Phase 2: Platform Rebuild

**What you're showing:** What the new technology stack looks like, why each old component is being replaced, and the security and operational benefits of the new platform.

**How to introduce it:**
> "Phase 2 is about replacing 9 separate infrastructure systems with a small number of modern, managed services. The result is a platform that costs less to run, is faster to develop on, and has security built in by default rather than bolted on."

**Key talking points:**
- The **"What Gets Eliminated" table** is the most powerful slide here. Walk through it row by row. Each crossed-out item is something Booksure currently pays for and manages — and it's being replaced by something that manages itself.
- **Serverless** is the big concept to explain here. The current platform has a Windows Server running 24 hours a day, 7 days a week — even at 3am when nobody is using it. The new platform only uses computing resources when someone is actually on the site. Like the difference between leaving all the lights on all night versus using motion-sensor lights.
- The **radar chart** (Security Posture) is a good visual for non-technical clients. Every axis goes from near-zero to near-100 after the rebuild. This isn't an opinion — it's the direct result of Clerk, Convex, and Vercel enforcing security at the platform level.
- The rebuild delivers **feature parity first** — everything the current platform does, the new one will do. New features come after the cutover, not during.

**Likely question:** *"Will anything change for our clients / establishment users?"*
> The functionality stays the same. The experience will be faster and more modern. The login flow will look slightly different because Clerk handles it, but it will be more familiar to users (similar to how they log into Gmail or Airbnb).

---

### Section 5 — Target Architecture

**What you're showing:** The four layers of the new platform — from end users down to the services layer.

**How to introduce it:**
> "This is the blueprint. Don't worry about every service name — the key takeaway is that each layer is handled by a specialist provider, not by us maintaining our own servers."

**Key talking points:**
- Think of it as four floors in a building:
  1. **Ground floor (Users)** — Establishments, guests, call centre staff using the site.
  2. **Entrance (Vercel Edge Network)** — The front door. Handles speed, security, and routing before a request even reaches the application. DDoS attacks and bad traffic are stopped here.
  3. **Main floor (Next.js Application)** — The actual website — dashboards, portals, booking engine, API.
  4. **Back office (Services Layer)** — All the specialist providers doing specific jobs: Clerk for logins, Convex for the database, iVeri/PayFast for payments, Booking.com for OTA sync.
- The arrows between layers show that data flows in both directions — the application talks to the services, and the services can push updates back in real time (this is what enables live availability updates without the page refreshing).
- **iVeri** needs a special mention: there's a technical investigation required in Week 1 of the rebuild to confirm their API works in a serverless environment. There's a fallback (PayFast) if it doesn't.

**Likely question:** *"What happens if Vercel or Convex goes down?"*
> These providers have SLAs (uptime guarantees) of 99.9%+ and their infrastructure is far more redundant than a single Windows Server. The risk of downtime is lower than the current setup, not higher.

---

### Section 6 — Investment & Monthly Savings

**What you're showing:** The one-time rebuild cost (R50,000) versus the ongoing monthly cost comparison between the legacy and rebuilt platforms.

**How to introduce it:**
> "Let's talk money. There are two numbers that matter here: what it costs to do the rebuild, and what it saves every month after that."

**Key talking points:**
- The **R50,000** is the total, fixed cost for the full rebuild. Not a retainer. Not per month. One number.
- The **bar chart** shows the legacy costs on the left (what you currently pay per service) and the rebuilt costs on the right. Most rebuilt bars are zero — because those services no longer exist.
- The rebuilt platform costs **~R2,800/month** in total (Vercel, Convex, Clerk, Resend, Cloudflare subscriptions). This is the only ongoing bill.
- The current legacy infrastructure runs at **~R10,000/month** mid-estimate. The saving is immediate from the month the new platform goes live.
- The **platform costs table** lists every service and what it costs. There are no hidden costs — this is the full bill.

**Likely question:** *"What's included in the R50,000?"*
> The full rebuild of the platform to feature parity — every page, every feature, every integration the current system has, rebuilt on the new stack. It includes the data migration, testing, and cutover. It does not include new features beyond what currently exists.

---

### Section 7 — 5-Year Total Cost of Ownership

**What you're showing:** The cumulative cost of staying on the legacy platform vs. switching to the rebuilt platform, graphed over 5 years.

**How to introduce it:**
> "This chart shows what you spend in total, year by year, on each platform. The legacy line keeps climbing. The rebuilt line flattens out almost immediately after the rebuild cost."

**Key talking points:**
- **Cumulative** means the numbers add up — they don't reset each year. By Year 5, the legacy platform has cost R600,000 in infrastructure alone. The rebuilt platform has cost R220,000 total.
- The rebuilt platform is **cheaper in Year 1** — even including the R50,000 rebuild cost. That's because you save R86,000/year from Year 2 onwards, and the R50k is recovered within the first year of savings.
- The **savings bar chart** (below the line chart) shows this as a single number. Every bar is positive — the rebuilt platform is ahead at every point in time.
- These numbers use **flat, conservative estimates** — no price escalation on the legacy side. If hosting or licensing costs go up (which they typically do), the savings grow larger.

**Likely question:** *"What if we want to switch providers later? Are we locked in?"*
> The new stack uses open standards. Next.js can be hosted anywhere (Vercel, AWS, self-hosted). Convex data can be exported. Clerk data can be migrated. There's no lock-in beyond normal switching costs.

---

### Section 8 — Risk Analysis

**What you're showing:** The risks of doing the rebuild, and the risks of not doing it.

**How to introduce it:**
> "Every project has risks. We've identified the specific ones for this rebuild and have a mitigation plan for each. But there's an important flip side — there are also risks to staying on the current platform."

**Key talking points:**
- Walk through the **risk register** briefly — most items have clear mitigations. The one to highlight is iVeri: *"If iVeri's SDK doesn't work in a serverless environment, we switch to PayFast. We find out in Week 1."*
- The **"Risk of NOT Rebuilding"** box at the bottom is often the most persuasive part of the document for clients who are hesitant. Spend time here.
  - **Security exposure**: Every month on the current platform is another month with known, unpatched vulnerabilities. The cross-tenant issue alone is a data breach waiting to happen.
  - **Rising costs**: Infrastructure bills tend to increase. The longer you stay, the more you pay.
  - **Competitive disadvantage**: Competitors on modern platforms ship features faster. Over 3–5 years this becomes a significant gap.
- The rebuild is framed correctly: it is not a risk — **it is the risk mitigation strategy**.

**Likely question:** *"What's the risk of data loss during migration?"*
> We run both systems in parallel until we're confident. No data is deleted from the old system until the new one is fully verified. The cutover is gradual — we don't flip a single switch.

---

### Section 9 — Recommendation

**What you're showing:** A three-step action plan — what to do this week, this month, and over the next 6 months.

**How to introduce it:**
> "This is the 'what now' section. It's broken into three time horizons so there's no ambiguity about what happens when."

**Key talking points:**
- **This week (red):** Two P0 security fixes. 1–2 days of work. These should happen regardless of the rebuild decision. No proposal acceptance needed — this is just good hygiene.
- **Next 4 weeks (orange):** Complete Phase 1 in full. Engage TCG for the security hardening if doing it in-house isn't viable. Run a penetration test after the fixes are in to validate them.
- **Following 5–6 months (blue):** The Phase 2 rebuild. Phase 1 and Phase 2 run in parallel from Week 3. The business is not disrupted — the current platform stays live until the deliberate cutover.
- The **Bottom Line box** is a clean summary to close on. Three numbers: R380k saved over 5 years, R4k–R10k saved every month, 10 of 10 security vulnerabilities resolved.

**Likely question:** *"When would the new platform go live?"*
> The rebuild timeline is 5–6 months. The new platform goes live at the end of that period after a parallel-running validation period. The exact cutover date is agreed closer to launch.

**Likely question:** *"What do we need from Booksure to get started?"*
> Access to the current codebase and database for the migration analysis, sign-off on the feature scope, and a point of contact for decisions during the build. We handle the rest.
