# WallStory Interiors — Portfolio Website

## Overview
Display-only luxury interior-design portfolio (React + framer-motion + lenis smooth scroll). Dark editorial theme, gold (#C5A059) + ivory on near-black. No auth. Contact form is a client-side demo (no backend persistence). Synced from client GitHub repo: CHIRAGSAHU10/WallStory.

## Section Order (current)
Hero -> EditorialMarquee -> What We Do (Services) -> Selected Work (Projects) -> Founder/About -> The Philosophy (Manifesto) -> Contact/Footer

## Changes implemented (2025-12)
- Hero: reduced "Complete Interior Solution" heading size; added top scrim + logo drop-shadow so gold WallStory logo no longer blends with video; scroll cue now targets services.
- EditorialMarquee: slightly smaller font + tighter padding, slower speed.
- What We Do (Services.jsx): reduced to 3 services (Residential, Commercial, Modular Kitchens); each reveals paragraph + cursor-following floating image on hover (all images pre-mounted for zero lag); mobile shows inline images.
- Moved "The Philosophy" (Manifesto) to end with reduced font sizes.
- Navbar links reordered (What We Do, Projects, About, Philosophy, Contact).
- Tightened vertical spacing across sections (py-24 md:py-32) for breathable premium feel.
- Footer left untouched (client-approved).

## Tech
- Deps added: lenis, react-fast-marquee.
- Assets: hero/project/founder videos from customer CDN; What We Do images from Unsplash.

## Backlog / Next
- P1: Replace Unsplash "What We Do" images with client photography.
- P2: Wire contact form to a real backend/email (currently demo).
- P2: Preloader skip on repeat visits via sessionStorage.
