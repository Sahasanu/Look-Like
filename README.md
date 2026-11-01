# Maison Belle — Luxury Hair, Beauty & Spa Studio

An editorial luxury web application built with **React 19**, **Vite 6**, and **Tailwind CSS v4**, faithfully converted from high-fidelity HTML and Tailwind specifications based on the `DESIGN.md` design system.

---

## 🏛 Architecture & Folder Structure

```text
src/
├── components/
│   ├── common/
│   │   ├── Button.jsx            # Universal button & link with Maison styling variants
│   │   ├── Container.jsx         # 1280px standard container with responsive gutters
│   │   ├── SectionHeading.jsx    # Editorial headings with italic accent typography
│   │   └── Modal.jsx             # Accessible modal dialog with backdrop blur & ESC dismiss
│   ├── layout/
│   │   ├── Navbar.jsx            # Fixed header, branding, desktop nav, and actions
│   │   ├── MobileMenu.jsx        # Slide-over responsive navigation drawer
│   │   ├── Footer.jsx            # Comprehensive footer with journal subscription
│   │   └── PageLayout.jsx        # Global page wrapper with sticky WhatsApp concierge
│   ├── ui/
│   │   └── Toast.jsx             # Action feedback notifications (forms, bookings)
│   └── sections/
│       ├── HeroSection.jsx       # Hero headline, arched photo composition, marquee ticker
│       ├── PartnersSection.jsx   # Curated luxury brand partners strip
│       ├── GallerySection.jsx    # 4 core specialty showcase with arched cards
│       ├── CategoryCard.jsx      # Reusable arched service card with interactive booking trigger
│       ├── ServicesSection.jsx   # Curated service menu & 3-branch booking terminal container
│       ├── ServiceList.jsx       # Tabular service pricing & category treatments
│       ├── BookingForm.jsx       # 4-step interactive branch booking with WhatsApp dispatch
│       ├── AboutSection.jsx      # Atelier philosophy, private suites, and excellence metrics
│       ├── TeamSection.jsx       # Artist team showcase
│       ├── TeamCard.jsx          # Arched artist portrait card
│       ├── VideoTourSection.jsx  # Dark sanctuary tour with 4K video preview modal
│       ├── ContactSection.jsx    # 3-Branch hubs, map locator preview, and quick inquiry form
│       ├── BranchCard.jsx        # Location details & direct WhatsApp consultation button
│       └── InquiryForm.jsx       # Controlled contact note form with feedback state
├── constants/
│   ├── navigation.js             # Nav links, brand logo URL, contact numbers
│   ├── partners.js               # Brand partner names & typography tokens
│   ├── gallery.js                # Core specialties data, pricing, durations & assets
│   ├── services.js               # Menu categories, treatment ledgers & mini cards
│   ├── branches.js               # Branch locations, operating hours & WhatsApp presets
│   └── team.js                   # Artist profiles, video tour assets & hero photography
├── utils/
│   └── cn.js                     # Tailwind class merge utility (clsx + tailwind-merge)
├── pages/
│   └── Home.jsx                  # Single-page layout composition
├── styles/
│   └── global.css                # Centralized design tokens, CSS variables, Tailwind theme & base styles
├── App.jsx                       # Root application component with notification provider
└── main.jsx                      # Vite entry point
```

---

## 🎨 Design System Implementation (`global.css`)

All design tokens from `DESIGN.md` are centrally declared as CSS custom properties and hooked into Tailwind CSS v4:
- **Palette**: Ivory Cream (`#FAF6F2`), Deep Espresso (`#2A1F1B`), Terracotta Rose (`#C4877A`), Rose Gold (`#B8925A`), Blush Mist (`#F3E5DD`), Border Warm (`#E8DDD5`), WhatsApp Green (`#25D366`).
- **Typography**: Playfair Display (couture editorial serif) paired with Plus Jakarta Sans (warm modernist sans-serif) and Material Symbols Outlined.
- **Architectural Curvature**: Signature arch tops (`rounded-[160px_160px_24px_24px]`, `rounded-[140px_140px_16px_16px]`, `rounded-[120px_120px_20px_20px]`).

---

## ⚡ Features & Interactivity

1. **Interactive Multi-Branch Booking Terminal**:
   - **Step 1**: Dynamic branch switcher across City Centre Flagship, Mayfair Studio, and Palm Grove Studio.
   - **Step 2**: Service category selection linked with instant price/duration calculation.
   - **Step 3**: Master artist and creative director selection.
   - **Step 4**: Preferred date and appointment window selection.
   - **WhatsApp Integration**: Formulates a customized, pre-filled WhatsApp booking dispatch message and opens a confirmation summary modal.
2. **Gallery Service Quick-Select**: Clicking "Book Ritual" on any of the 4 showcase cards smoothly scrolls to the booking terminal and pre-selects the corresponding treatment.
3. **Responsive Mobile Navigation**: Slide-over drawer with instant access to all sections, consultation call, and appointment booking.
4. **Cinematic 4K Sanctuary Tour**: Video player preview modal with ambient lighting overlay and VIP suite feature breakdown.
5. **Interactive Inquiries & Newsletter**: Controlled forms with validation and floating Toast notification alerts.
6. **Continuous Marquee Ticker**: CSS hardware-accelerated infinite ticker with hover pause.

---

## 🚀 Running the Project

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```
