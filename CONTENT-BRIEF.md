# Metro Electric Services & Consulting — Content Brief
**QuickFlip Sites | Build Log**
Date: 2026-06-05
Prospect: https://metroelectricservices.com/
Template: Unclog-Template
Reference site: OConnor-Sons-Electric-V2 (structural reference for electrician service pages)

---

## Source Material Summary

- **Business name**: Metro Electric Services & Consulting
- **Phone**: (561) 366-2200 / 1-833-636-3876
- **Address**: 1750 Osceola Drive, Suite #4, West Palm Beach, Florida 33409
- **Hours**: Mon–Fri, 8:00 AM – 4:30 PM
- **Founded**: 2003 (20+ years in business)
- **Service area**: All South Florida — Palm Beach County, Broward County, Miami-Dade County
- **Languages**: English & Spanish (Se habla español)
- **Social**: Facebook (https://www.facebook.com/Metro-Electric-Service-2313802875525383/), Instagram (https://www.instagram.com/metroelectricservice/)
- **Differentiators**: "We Care / We Are Trusted / We Are Fast"; exclusive contractor for top GCs & developers; $99 first service discount (min $300); accepts credit cards; bilingual
- **Testimonials**: Testimonials page only showed videos — no extractable text reviews. All reviews in build are generated.

---

## Service Inventory

### Residential (extracted from site)
1. New Construction & Renovations (Custom and Tract Homes)
2. Home Generator Service & Installation
3. Landscape Lighting
4. Spa, Pool & Hot Tub Wiring
5. Fixture Upgrades & Chandeliers (all sizes)
6. Design, Electrical Calculations & City Permit Processing
7. Electrical Home Safety Checks (for realtors / new buyers)
8. Smart Home Automation — Nest, Lutron (Cat5/Cat6), Ring
9. Electrical Troubleshooting & Repairs
10. Panel Upgrades & Updates
11. Data & Low-Voltage Installations (WiFi, USB, TV, high-speed data)

### Commercial (extracted from site)
12. Commercial New Construction & Renovations
13. LED Lighting System Upgrades / Load Service Upgrades
14. Site Lighting & Parking Lot Installations and Repairs
15. Backup Power / ATS & Generator Hookup
16. Hotels
17. Medical & Dental Centers
18. Restaurants & Supermarkets

### Industrial (extracted from site)
19. Industrial New Construction, Improvements & Additions
20. Gas Station Electrical
21. Car Wash Electrical
22. Control Panels
23. Industrial Pump Installations

---

## Services Consolidated

The 23 individual services were consolidated into 6 service pages to fit the template's structure. Each page covers a logical grouping and links back via the sidebar to all 6 pages. No services were dropped — all are represented within their respective page's "What We Do" bullets.

| Page | Services Covered |
|------|-----------------|
| Residential Electrical | Items 1–11 above |
| Commercial Electrical | Items 12–18 above |
| Industrial Electrical | Items 19–23 above |
| Panel Upgrades | Subset of residential + commercial panel work (item 10, 13) |
| Smart Home Automation | Item 8 — expanded to full smart home page |
| Generator Services | Items 2, 15 — consolidated to generator/backup power page |

---

## Pages Built & Content Decisions

| Page | Decision |
|------|---------|
| Homepage | Removed PricingSection (Metro Electric doesn't advertise specific prices publicly). Removed TrustedLogos (no partner logos available from prospect site). |
| /residential-electrical | New page — covers all 11 residential services |
| /commercial-electrical | New page — covers all 7 commercial services including vertical markets |
| /industrial-electrical | New page — covers all 5 industrial services |
| /panel-upgrade | Standalone page — panel upgrades are a major service and SEO target |
| /smart-home-automation | Standalone page — smart home is a high-value service for affluent South Florida market |
| /generator-services | Standalone page — generators/backup power are critical in South Florida (storm season) |
| /blog | Renamed from /blog-unclogme — 2 generated placeholder posts |
| /become-an-unclogger | Repurposed to careers page using real Metro Electric job posting data |
| Removed pages | All 5 original drain/grease trap service pages removed |

---

## Navigation Changes

Template default nav had drain-specific service pages. Simplified to 5-item flat nav:
- Home → Services (6 children) → About → FAQ → Contact

Footer updated to match, with "Our Services" column listing all 6 service pages.

---

## Copy Generation Log

All of the following was generated (no extractable copy from prospect site for these items):

- **Testimonials** — 6 reviews generated (prospect testimonials page showed only video embeds with no text). Avatar colors set to dark blue (#1a3a5c) to match electrician brand feel.
- **Blog posts** — 2 generated article titles and excerpts on electrician topics relevant to South Florida
- **Become/Careers page intro** — rewritten from template; Metro Electric job posting provided location and pay range ($14–$25/hr) which was incorporated
- **Service page copy** — intro paragraphs, "What We Do" and "Why Choose Us" bullets for all 6 service pages generated from the Trade Content Library (Electrician section) and Metro Electric's stated differentiators

---

## SEO Scaffolding

| Item | Status | Notes |
|------|--------|-------|
| robots.ts | Created — disallows all (staging block) | TODO: flip to allow when live |
| sitemap.ts | Created — covers all 6 service slugs + standard routes | TODO: add production domain |
| LocalBusiness JSON-LD | Added to app/layout.tsx | Schema type: `Electrician` |
| Root metadata (title, description, OG, Twitter) | Done | Template pattern set |
| Production domain | TODO: confirm | |
| Business hours | TODO: confirm exact hours — currently "Mo-Fr 08:00-16:30" based on site copy | |
| OG image (1200×630) | TODO: provide image | No suitable image extracted from prospect site |

---

## TODOs for Client Before Launch

| Item | File | Notes |
|------|------|-------|
| Logo (header) | `/public/logo.png` | Replace with Metro Electric logo |
| Logo (footer) | `/public/images/logo-image-50.png` | Replace with Metro Electric logo (dark bg version) |
| Hero video or still | `HeroSection.tsx` | Replace `/videos/hero.mp4` and `/images/hero-poster.jpg` with actual electrician footage or branded still |
| Equipment/team photos (×3) | `FleetSection.tsx` | Replace `/images/equipment-1.jpg`, `equipment-2.jpg`, `equipment-3.jpg` with real photos |
| About section photo | `AboutSection.tsx` | Replace `/images/about-row.webp` with Metro Electric team/work photo |
| Service card images (×4) | `data/services.ts` | Replace `/images/service-1.png` through `service-4.webp` |
| OG image | `/public/og-image.jpg` | 1200×630px image for social sharing |
| Production domain | `app/robots.ts`, `app/sitemap.ts`, `app/layout.tsx` | Replace all `[TODO: production-domain]` |
| Business hours (JSON-LD) | `app/layout.tsx` | Confirm exact hours string for schema |
| Email address | `ContactSection.tsx` | Verify `contact@metroelectricservices.com` is correct |
| Google Maps embed | `app/contact-us/page.tsx` | Current embed coordinates are approximate — replace with verified Maps embed URL for 1750 Osceola Dr, Suite #4, West Palm Beach |
| Social links (LinkedIn, TikTok) | `Footer.tsx` | LinkedIn and TikTok slots still point to `#` — add or remove |
| Real testimonials | `data/testimonials.ts` | Replace 6 generated reviews with real Google/Yelp reviews once available |
