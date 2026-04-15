# Design System Specification: Sovereign Intelligence

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Vault"**

This design system is not a standard SaaS dashboard; it is a high-end editorial experience designed to feel like a private, secure terminal for property intelligence. It breaks the "template" look by moving away from rigid, boxed-in grids toward a **layered, ambient architecture**. 

The system relies on "Atmospheric Security"—the feeling of safety through precision, vast negative space, and a refined hierarchy that prioritizes data integrity. We achieve this by blending "Government-Grade" austerity with "Luxury Minimalist" aesthetics, using intentional asymmetry and sophisticated glassmorphism to create a UI that feels both physically grounded and digitally advanced.

---

## 2. Colors & Surface Philosophy

The color strategy moves away from "flat UI" into a realm of **Tonal Depth**. Every color choice reinforces the feeling of a high-security environment where information is clarity.

### Color Tokens
- **Base Surfaces:** `surface` (#121414) is our deep charcoal anchor.
- **Accents (Trust):** `primary` (#7ad4e5) and `secondary` (#abccd4) provide the sophisticated teal/blue "security glow."
- **Status (Risk):** 
    - **Clear:** `primary` (Utilizing the teal/blue for safety)
    - **Moderate Risk:** `tertiary` (#ffb77c)
    - **High Risk:** `error` (#ffb4ab)

### The "No-Line" Rule
Standard 1px borders are prohibited for sectioning. Structural boundaries must be defined solely through background shifts. To separate a main content area from a sidebar, transition from `surface` to `surface-container-low`.

### The "Glass & Gradient" Rule
Floating elements (Navigation, Modals, Overlays) must use Glassmorphism. Combine `surface-container-high` with a 20% opacity and a 20px-30px backdrop blur. For main Action Buttons or Hero Data points, apply a subtle linear gradient from `primary` to `primary-container` to give the UI a "soul" that flat colors cannot mimic.

---

## 3. Typography: Editorial Authority

We use a dual-font approach to balance modern tech with professional reliability.

- **The Voice (Manrope):** Used for `display` and `headline` scales. Its geometric yet warm curves provide a "Modern Institutional" feel.
- **The Data (Inter):** Used for `title`, `body`, and `label` scales. Inter is the industry standard for legibility in high-density data environments.

### Scale Usage
- **Editorial Impact:** Use `display-lg` for primary property values or status headers. 
- **Intentional Contrast:** Pair a `headline-sm` title with a `label-md` uppercase subtitle to create an "Information Header" feel common in premium financial reports.

---

## 4. Elevation & Depth: Tonal Layering

In this system, depth is not a shadow; it is a **physical layer of glass or stone**.

- **The Layering Principle:** 
    - Background: `surface` (#121414)
    - Section/Container: `surface-container-low` (#1a1c1c)
    - Card/Interaction Element: `surface-container-highest` (#333535)
    - This creates a "soft lift" that feels architectural rather than digital.

- **Ambient Shadows:** Shadows are rarely used. When required (e.g., a floating property document), use a massive blur (40px+) at 6% opacity using `surface-container-lowest`. 

- **The "Ghost Border" Fallback:** If high-contrast separation is required for accessibility, use the `outline-variant` token at **15% opacity**. This creates a "glint" on the edge of the glass rather than a heavy stroke.

---

## 5. Components

### Navigation (The Glass Rail)
The primary navigation must be a floating top bar or sidebar using `surface-container-low` at 70% opacity with a `24px` backdrop blur. Use `xl` (3rem) roundedness for the container.

### Buttons (Tactile Precision)
- **Primary:** Gradient fill (`primary` to `primary-container`). Roundedness: `md`. 
- **Secondary:** Ghost style. Transparent fill with a `ghost border` using `primary`.
- **Tertiary:** Text-only, `label-md` bold, with a slight underline on hover.

### Cards & Lists (Asymmetric Geometry)
- **Rules:** Forbid divider lines. 
- **Layout:** Use vertical white space (32px+) to separate list items. 
- **Property Cards:** Use `lg` (2rem) corner radius. The background should be `surface-container-low`. On hover, shift to `surface-container-high`.

### Input Fields (Integrated Security)
Inputs should not look like "boxes." They should be `surface-container-lowest` with a subtle `outline-variant` at 10% opacity. Focus state transitions the border to a 100% `primary` teal "glow."

### Status Chips (Risk Indicators)
- **Shape:** Pill-shaped (`full` roundedness).
- **Styling:** Use a low-opacity background of the status color (e.g., 10% `error`) and high-saturation text (`error_container`). This ensures readability without "vibrating" against the dark background.

---

## 6. Do’s and Don’ts

### Do:
- **Embrace Asymmetry:** Place a large `display-md` headline on the left with a massive `body-lg` paragraph on the right, leaving the center space empty to create a premium, gallery-like feel.
- **Use "Micro-Copy":** Use `label-sm` in `outline` color for metadata. It adds a layer of "technical detail" that feels professional.
- **Nesting Surfaces:** Place a `surface-container-highest` card inside a `surface-container-low` section to create hierarchy without lines.

### Don't:
- **Don't use pure white:** The `on-surface` (#e2e2e2) is an off-white to prevent eye strain and maintain the "dark mode" sophistication.
- **Don't use standard icons:** Use "Thin" or "Light" weight icons (1.5px stroke) to match the elegance of the Manrope typeface.
- **No 90-degree corners:** Except for the screen itself, everything has a radius. Even a `sm` (0.5rem) radius is required for small elements to maintain the "Soft Minimalist" feel.
- **Never use "Drop Shadows":** Use "Ambient Glows" or "Tonal Shifts" only.

---

## 7. Spacing Scale
Maintain "Government-Grade" order by adhering to a strict 8px grid, but emphasize **Large-Scale Breathing Room**:
- **Section Gaps:** 80px, 120px, or 160px.
- **Component Gaps:** 24px, 32px, or 48px.
- **Text Leading:** Use 1.5x to 1.6x line height for body copy to ensure a premium editorial feel.