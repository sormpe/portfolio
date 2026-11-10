---
name: Peter Sormunen Portfolio
description: A clean, conventional developer portfolio at high craft, flat and ruled on white and light grey with one vermilion accent.
colors:
  accent: "#c42f17"
  accent-soft: "#fbe9e5"
  on-accent: "#ffffff"
  bg: "#ffffff"
  bg-alt: "#f1f1ef"
  text: "#0e0e0e"
  muted: "#525250"
  line: "#e4e4e1"
  line-strong: "#cdcdc9"
  dark-accent: "#ff7a5c"
  dark-accent-soft: "#2c1a15"
  dark-on-accent: "#0c0c0c"
  dark-bg: "#0c0c0c"
  dark-bg-alt: "#171716"
  dark-text: "#ededeb"
  dark-muted: "#adadaa"
  dark-line: "#2a2a28"
  dark-line-strong: "#42423f"
  contact-bg: "#0e0e0e"
  contact-muted: "#b5b5b2"
  contact-surface: "#242423"
  dark-contact-bg: "#000000"
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.4rem, 5.4vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.03
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.85rem, 3.6vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  layer-title:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 1.9rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  project-lead:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.4rem, 2.2vw, 1.65rem)"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  callout:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 2vw, 1.4rem)"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "-0.015em"
  lede-hero:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.6
  summary:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  ui:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.6
  meta:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 500
    lineHeight: 1.6
rounded:
  highlight: "2px"
  focus: "4px"
  sm: "8px"
  md: "12px"
  circle: "50%"
spacing:
  gutter: "1rem"
  control-gap: "0.75rem"
  row: "1.75rem"
  entry-gap: "clamp(2rem, 4vw, 2.75rem)"
  layer: "clamp(1.75rem, 4vw, 3rem)"
  heading-gap: "clamp(2rem, 4vw, 3rem)"
  column-gap: "clamp(2rem, 5vw, 4rem)"
  hero-gap: "clamp(2.5rem, 6vw, 5rem)"
  section: "clamp(4.5rem, 10vw, 8rem)"
components:
  button-primary:
    backgroundColor: "{colors.text}"
    textColor: "{colors.bg}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 1.4rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  button-secondary:
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 1.4rem"
    height: "3rem"
  button-secondary-hover:
    backgroundColor: "{colors.bg-alt}"
    textColor: "{colors.text}"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "0 0.8rem"
    height: "2.75rem"
  nav-link-hover:
    backgroundColor: "{colors.bg-alt}"
    textColor: "{colors.text}"
  nav-link-active:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent}"
  nav-contact:
    backgroundColor: "{colors.text}"
    textColor: "{colors.bg}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "0 1rem"
    height: "2.75rem"
  nav-contact-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  icon-button:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    size: "2.75rem"
  icon-button-hover:
    backgroundColor: "{colors.line}"
  portrait:
    backgroundColor: "{colors.bg-alt}"
    rounded: "{rounded.md}"
    width: "14rem"
  portrait-small:
    backgroundColor: "{colors.bg-alt}"
    rounded: "{rounded.circle}"
    size: "4.5rem"
  entry-arrival:
    backgroundColor: "{colors.accent-soft}"
    rounded: "{rounded.highlight}"
  skip-link:
    backgroundColor: "{colors.text}"
    textColor: "{colors.bg}"
    rounded: "{rounded.sm}"
    padding: "0.6rem 1rem"
---

# Design System: Peter Sormunen Portfolio

## Overview

**Creative North Star: "Flat, Ruled, One Vermilion"**

This is a clean, conventional developer portfolio, chosen on purpose as the category standard and held to a very high level of craft. The name is a plain description of the system: flat surfaces, 1px rules for structure, and one vermilion accent on white and light grey sections. The quality bar is the craft of Brittany Chiang's portfolio, Josh Comeau's site and Linear. None of them is a template to copy.

Because the form is familiar, finish does the work: heavy, tightly tracked headings, a shared column split, consistent control heights, considered states. Density is comfortable and made for scanning, with the detail available to anyone who reads on. The few distinctive behaviours all help navigation: a layer name that stays in view, a project highlighted once on arrival, and a nav wordmark that waits until the hero has scrolled away.

Light is the default and the reference. Dark is an opt-in preference, saved in the browser and never taken from the operating system, and it keeps the same structure. The system rejects eyebrows above headings, generic stat rows and walls of tags.

**Key Characteristics:**
- Flat surfaces, structured by 1px rules and whitespace, with no cards
- One vermilion accent, on white and light grey by default
- One typeface, Schibsted Grotesk, with heavy, tightly tracked headings
- The statement is the largest thing on the page, and the name stays small
- Behaviour that helps orientation: the layer rail, the arrival highlight, the deferred wordmark
- One scroll-driven moment: the stack band, with faint logos that never sit behind reading text

## Colors

Plain, colourless neutrals with a single warm vermilion. Each token has one light value and one dark counterpart, switched by `data-theme="dark"` on the root element.

### Primary
- **Vermilion** (#c42f17): The one accent, used sparingly. List markers, the active nav link's text, hover on buttons and links, focus rings and text selection.
- **Vermilion Soft** (#fbe9e5): The accent's tint, used in exactly two places: behind the active nav link and in the arrival highlight.
- **On Accent** (#ffffff): Text on an accent fill.

### Neutral
- **Page** (#ffffff): The page, the nav bar and the icon buttons.
- **Page Alt** (#f1f1ef): The ground of the two tone sections, Experience and Skills and education, plus the Work Switch track, hover fill for secondary controls and the portrait's placeholder.
- **Ink** (#0e0e0e): Headings and primary text, the resting fill of the Contact control, and the skip link.
- **Muted** (#525250): Supporting text such as descriptions, work bullets, periods and metadata.
- **Line** (#e4e4e1): Lighter rules, between experience rows, under reference headings, and under the nav. Inside a tone section this role uses Line Strong, so rules stay visible on the grey.
- **Line Strong** (#cdcdc9): Structural rules above each layer, around the work call to action and above the contact details, plus secondary button and icon button borders.

### Dark Theme
Each light role has one counterpart: **Dark Page** (#0c0c0c), **Dark Page Alt** (#171716), **Dark Ink** (#ededeb), **Dark Muted** (#adadaa), **Dark Line** (#2a2a28), **Dark Line Strong** (#42423f), **Dark Accent** (#ff7a5c), **Dark Accent Soft** (#2c1a15) and **Dark On Accent** (#0c0c0c). The accent lightens on hover here, so "strong" means stronger against the page in both themes.

### Contact Section
The Contact section is the page's one full-width colour field: **Contact Ground** (#0e0e0e, or #000000 in dark theme) with white headings, **Contact Muted** (#b5b5b2) for supporting text, a white primary button, and the lighter vermilion (#ff7a5c) on hover.

### Named Rules
**The One Accent Rule.** Vermilion is the only accent hue in the system. It marks list markers, current location and hover, and at rest it never fills a button, a link or a section. Actions are ink, so the red stays rare. A new meaning gets a neutral treatment, not a second accent.

**The Opt-in Dark Rule.** Light is what every visitor sees first. Dark appears only after a visitor chooses it with the toggle, and any new colour is defined for both themes.

## Typography

**Display Font:** Schibsted Grotesk Variable, self-hosted (with Helvetica Neue, Arial, sans-serif)

**Character:** One grotesque across the whole range. At weight 800 with tight tracking it gives the headings density and confidence, and at weight 400 it stays plain and readable in running text.

### Hierarchy
- **Display** (800, clamp 2.4–4.5rem, 1.03, -0.035em): The hero statement, balanced across lines. The closing contact heading takes the same size at the headline's line height and tracking.
- **Headline** (800, clamp 1.85–2.75rem, 1.1, -0.03em): Section headings, balanced across lines.
- **Layer Title** (800, clamp 1.5–1.9rem, 1.15, -0.025em): Frontend, Backend and Cloud. Fixed at 1.9rem once the columns stack.
- **Project Lead** (800, clamp 1.4–1.65rem, 1.25, -0.025em): The name of a project that spans all three layers, at its first mention only.
- **Title** (800, 1.2rem, 1.25, -0.015em): Other project names and employers, with employers at a 1.3 line height.
- **Callout** (700, clamp 1.15–1.4rem, 1.6, -0.015em): The one-line prompt in the work call to action.
- **Lede Hero** (400, 1.15rem, 1.6): The availability line under the statement, in muted.
- **Lede** (400, 1.1rem, 1.6): The identity line above the statement at a 1.35 line height, section descriptions capped at 38rem, and About copy at a 1.7 line height capped at 40rem.
- **Summary** (400, 1.05rem, 1.6): A project's one-sentence summary.
- **Body** (400, 1rem, 1.6): Work bullets and experience summaries, both capped at 40rem. Buttons use this size at weight 700.
- **UI** (600, 0.95rem, 1.6): Nav links and the Contact control, the latter at weight 700. The reference block uses the same size at body weight.
- **Meta** (500, 0.92rem, 1.6): Project category, role and stack lines, in muted.

Periods use tabular numerals. Headings balance and paragraphs use pretty wrapping.

### Named Rules
**The Statement Over Name Rule.** The largest type states what Peter does. His name and title sit above it at lede size, as a plain byline in sentence case, with the name in weight 800 and the title in muted.

**The No Eyebrow Rule.** No heading has a small label above it, in any form: no kickers, no tracked uppercase, no section numbers. A heading starts its own section, and any supporting line goes below it. The hero byline is the single identity line named by the rule above and is not a pattern to repeat.

**The Heavy Heading Rule.** Headings are weight 800 with negative tracking, tighter as they get larger. Tracking is never positive, and nothing is set in uppercase.

**The One Typeface Rule.** Schibsted Grotesk is the only family. Hierarchy comes from size, weight and the ink and muted pair.

## Layout

One centered column, capped at 1120px with a 1rem gutter each side, under a sticky 4rem nav. Sections are separated by large vertical space (clamp 4.5–8rem), and Experience, Skills and education, and Contact also change the ground. Layering uses two values: the nav at 100 and the skip link at 200.

The hero is a two-column grid with the statement on the left and a 14rem portrait on the right. The portrait spans the byline and statement rows, so its top meets the byline and its bottom meets the statement. Availability and actions run below both.

Layers, experience rows and About share one split of 0.7 to 1.6 with a column gap of clamp 2–4rem, so the content column holds one left edge down the page. The reference block uses 1.3 to 1 and contact details use three equal columns. Bullets, experience summaries and About copy are capped at 40rem.

At 860px and below the splits stack and contact details become one column. At 800px the nav links collapse into a menu, or stay inline without JavaScript, in which case the nav stops being sticky. At 760px the portrait becomes a 4.5rem circle beside the byline, with the statement full width below. At 520px the primary button takes a full row and secondary buttons share the next one. At 380px the nav wordmark is removed to make room. In windows 480px tall or shorter, the nav and layer titles stop pinning to leave room for content. Print removes the nav, portrait, actions, work call to action and cross-links, and keeps entries whole.

### Named Rules
**The Layer Rail Rule.** A layer's name is always visible while its projects scroll. On wide screens the header sticks in the left column, 1.5rem below the nav. Once stacked, the title alone pins directly under the nav on a page-coloured strip, and entries get a scroll margin so a jump lands clear of it.

**The First Mention Rule.** A project's summary, metadata and stack appear once, under the first layer it belongs to. Later layers show only what was done in that layer, with links back to its other layers.

## Elevation & Depth

The system is flat. Structure comes from 1px rules and whitespace, and content never lifts off the page. There is one blurred shadow, on the only element that actually floats over content, the open mobile menu. The arrival highlight also uses `box-shadow`, but with no blur or offset, only as a spread that extends its tint around the entry.

### Shadow Vocabulary
- **Mobile menu** (`box-shadow: 0 16px 32px rgba(14, 14, 14, 0.1)`): The open menu panel only.
- **Arrival spread** (`box-shadow: 0 0 0 0.6rem`, in Vermilion Soft): Extends the highlight's tint beyond the entry's text so the text doesn't touch its edge, without shifting layout.

### Named Rules
**The Flat And Ruled Rule.** Content has no cards, boxes, or resting shadows. When two things need separating, use space first, then a 1px rule. A blurred shadow is only for something that floats above the content. Section grounds are the one exception: Experience and Skills and education sit on Page Alt, and Contact is a full-width field of ink that closes the page. Between white and Page Alt the page ground fades over 0.5s when a tone section reaches mid-screen, including the nav. Contact is always a sharp edge, because text has to flip from dark to light there. With reduced motion or no JavaScript, tone sections stay as sharp bands.

## Shapes

Small, consistent corners. Every control has gently curved 8px corners (buttons, nav links, icon buttons, the skip link). The portrait uses 12px on wide screens and becomes a circle when small. The Work Switch track uses 12px. Focus outlines use 4px. An entry has a 2px corner so its arrival highlight reads as rounded once the spread is applied. Lines are always 1px, and there are no pills.

## Components

### Buttons
Solid and direct, with a clear difference between the one main action and everything else.
- **Shape:** 8px corners, at least 3rem tall, weight 700, a transparent 1px border so both variants match in size.
- **Primary:** Ink fill with page-coloured text, used for "Email me" in each place it appears. Hover moves to the accent. On the black Contact section it inverts to a white fill.
- **Secondary:** No fill, with a strong line border and ink text. Hover darkens the border to ink and adds the alternate page fill.
- **Press / Focus:** Pressing moves the button down 1px. Focus shows a 2px accent outline, offset 3px, across the whole site.

### Navigation
- **Style:** A sticky 4rem bar on the page colour with a 1px bottom line. Wordmark at left, section links and theme toggle at right, then Contact.
- **Links:** Muted at UI size, at least 2.75rem tall. Hover moves to ink on the alternate page fill. The current section shows accent text on the soft accent.
- **Contact control:** An ink fill with page-coloured text, so it stays distinct from the links and matches the primary button. Hover switches to the accent, and its active state is an underline, so red never sits on it at rest.
- **Theme toggle:** A 2.75rem icon button with a strong line border, showing a moon in light and a sun in dark. It's hidden without JavaScript, since it can't work.
- **Mobile:** A "Menu" button with a rotating chevron opens a full-width panel of 3rem links, with the toggle labelled in text. Escape, an outside click, or following a link closes it.

**The Deferred Wordmark Rule.** The hero already names Peter, so the nav wordmark stays hidden while the hero byline is on screen and fades in once it has scrolled under the nav. Without JavaScript the wordmark is always visible.

### Project Entry
Text directly on the page with no container. The name, then on first mention a meta line and summary, then accent-marked bullets of the layer's work, then a foot line with the stack and "Also under" links. A project spanning all three layers takes the Project Lead size and says so in its meta line.

### Arrival Highlight
The signature interaction. Each "Also under" link jumps to the same project in another layer, and the target entry lights up in the soft accent. The tint holds for the first 38% of a 2.2s animation so that it's still visible when smooth scrolling lands, then fades to nothing. With reduced motion, the tint simply stays while the entry remains the link target.

**The Once Only Rule.** The highlight plays once per arrival and never loops, pulses or responds to hover. It exists to confirm where a jump landed.

### Experience Row
A 1px line above each row, with the period in the narrow column and employer, title and summary in the wide one. An employer's projects follow as year and name links, and each row of that list is one link. Rows are otherwise static.

### Work Switch
A two-button control above Work: "By layer", the default, and "By date". It sits on a Page Alt track, and the active button takes the ink fill. It needs JavaScript, so it is hidden without it and the layer view remains. Switching changes the view without moving the page, and a link into the layer view reveals that view first.

### Date Row
The By date view lists each project once, newest first, with its years in the left column and its name, summary, per-layer bullets and stack on the right, using the same split as Experience.

### Experience Projects
Under each employer's summary, a compact list of that employer's projects, each row a single link holding its years and name, going to its first entry in Work. It holds no project detail of its own.

### Reference List
Skills and education at 0.95rem, as a heading over a 1px line and then term and description pairs, with skills written as comma-separated text. Terms use weight 600 and descriptions are muted.

### Stack Band
A short band of Contact ink between the hero and Work. Short vermilion strokes turn with scroll behind a row of the stack's logos and names, which slides sideways, on a soft dark strip that keeps the names readable. It is decorative and hidden from assistive technology, because the stack is listed in Skills. With reduced motion the strokes are drawn once and the row stays still. Without JavaScript the band is plain ink with the row, and it is removed in print. Logos come from Simple Icons; AWS and Playwright publish no free logo, so they appear as names only.

### Logo Fields
Very faint stack logos at 3.5% of the text colour (5% on dark), in three rows drifting sideways at different speeds behind the hero. The field is fixed behind the page and fades out with scroll, so it is gone before the band's lower edge reaches mid-screen. Contact closes with one row of white logos at 7% along its bottom edge, drifting as the section scrolls in and kept below the contact details. The hero field exists only when the page animates. Both are removed in print.

### Layer Marks
On wide screens each layer's rail holds one plain shape at 6% under its intro: a browser window for Frontend, a server stack for Backend, a cloud for Cloud. They are generic on purpose so the three match, and they tilt slightly as the layer passes. Narrow screens have no rail and no marks.

**The Clear Column Rule.** Decoration lives in the hero, the band, the empty rail and the bottom of Contact. It never sits behind a project's text, Experience, About or Skills.

### Portrait
The only image on the page. Filled with the alternate page colour while loading, cropped to keep the face in frame, and removed in print.

## Do's and Don'ts

### Do:
- **Do** separate content with whitespace and 1px rules, using Line Strong for structure and Line within a block.
- **Do** align new labelled content to the 0.7 to 1.6 split so the content column keeps its left edge.
- **Do** define every new colour for both themes.
- **Do** use the shared 0.2s ease-out for state changes, and keep hover to colour and border.
- **Do** make every button and nav control at least 2.75rem tall, and give every new motion a reduced-motion fallback.
- **Do** keep the page working without JavaScript, as the nav links and wordmark do today.

### Don't:
- **Don't** put an eyebrow, kicker or small label above a heading.
- **Don't** put content in cards or give it a resting shadow.
- **Don't** add a second accent or typeface.
- **Don't** make dark the default or follow the operating system's theme.
- **Don't** make the name larger than the statement, or show the nav wordmark while the hero byline is on screen.
- **Don't** add a generic stat row or a wall of tags. Skills stay as plain text.
- **Don't** lift or move anything on hover. Controls respond with colour and border, plus a 1px press.
- **Don't** repeat a project's summary and stack in a later layer, or loop the arrival highlight.
- **Don't** put logos or patterns behind reading text, or mix brand logos and generic shapes in one set.
