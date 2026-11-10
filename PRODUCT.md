# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences of equal weight, both assessing Peter Sormunen as someone to work with:

- People looking to hire a senior consultant for a web project.
- Recruiters and hiring managers filling a full-time senior role.

They arrive through a link, from LinkedIn or a direct referral, and need to decide whether he fits and is worth contacting.

## Product Purpose

A personal portfolio and CV site for Peter Sormunen, a senior full-stack developer and consultant in Espoo, Finland. It shows his work and experience so a visitor can judge fit without a call. Success is a qualified visitor getting in touch about a consulting engagement or a full-time role.

## Positioning

True full-stack range: frontend through backend and cloud, in both React/Node.js and Java/Spring Boot, on greenfield builds and existing systems alike. Ten years of production web work back this up across a product company, a university, and consulting.

## Operating Context

- Shared by link only. The site is not meant to be found through search, so visitors arrive with some context from the person or profile that sent them.
- LinkedIn link previews need to keep working, which is why crawlers are allowed to fetch pages that carry `noindex`.
- Contact happens outside the site: email, LinkedIn, or GitHub.
- Current availability wording: "Open to consulting engagements and new full-time roles".

## Capabilities and Constraints

- Single-page static site, deployed to GitHub Pages at sormpe.fi. Content lives in `src/data/site.ts`.
- Every page stays `noindex`. This is permanent, not a pre-launch setting.
- No client names, client product names, or identifying details. Client work is described by domain only.
- No CV is published, so nothing on the site may imply a CV download.
- No fabricated claims. Everything must trace back to Peter's real work history.

## Brand Commitments

- Name and title: Peter Sormunen, Senior Full-Stack Developer.
- Voice: plain, direct, first person. Top-level copy (hero, highlights, summaries) is short and sellable, one plain sentence per idea with few technologies. Concrete detail belongs in project outcome bullets.

## Evidence on Hand

- Five described projects with roles, outcomes, and stacks, plus experience, education, and skills, all in `src/data/site.ts`.
- Assets: `src/assets/profile.jpg`, and employer and university logos in `public/logos/`. Crowd Collective and Aalto University may be named as employers; their client work may not.
- The only user-response evidence is the programming education platform being in use from the spring 2021 course, with positive feedback.
- No testimonials, client logos, or business metrics exist. Do not invent them.

## Product Principles

1. Real work is the proof. Lead with what was built and what changed, not with self-description.
2. Serve both audiences at once. Don't frame the site so that it reads as only for clients or only for employers.
3. Show range through evidence. Full-stack is demonstrated across projects and stacks, not just asserted.
4. Sellable first, detail on demand. A quick scan should land the point; specifics are there for anyone who reads on.
5. Discretion is part of the offer. Leaving client identities out signals how Peter treats client work.
