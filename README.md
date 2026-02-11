# IndiTiffins - ASU Tempe Tiffin Service

Premium authentic Indian home-style **vegetarian** tiffin subscription service for ASU Tempe students. Breakfast + Dinner delivery, Monday through Saturday.

## 🌐 **Live Site**
**https://aayushmanvibhu.github.io/IndiTiffins-Interface/**

Built with Next.js 14 (App Router), React, and Tailwind CSS.

## 🎨 Brand Identity

### Color Palette
- **Brand Red**: #8B0000 (Dark Red)
- **Brand Red 2**: #B22222 (Firebrick)
- **Saffron**: #F59E0B
- **Cream**: #FFF7ED (Warm Background)
- **Green**: #166534
- **Charcoal**: #111827 (Text)
- **Muted**: #6B7280
- **Border**: #E5E7EB

## 🍛 Service Details

- **Vegetarian Only** - Authentic North Indian home-style cooking
- **Breakfast & Dinner** - Two meals daily
  - Breakfast: 7:30am - 10:00am
  - Dinner: 6:00pm - 9:00pm
- **Monday - Saturday** - Sunday off
- **ASU Tempe Focus** - Pickup near campus zones

## 🚀 Features

### Pages Implemented
1. **Home (/)** - Hero with logo, Campus Plus showcase, featured vegetarian menu
2. **Menu (/menu)** - Vegetarian breakfast and dinner options with filters
3. **Plans (/plans)** - Trial Week ($50) and Campus Plus ($200/month)
4. **How It Works (/how)** - Process steps, delivery info, FAQ
5. **Delivery Areas (/areas)** - Tempe zones with pickup request form
6. **Sign In (/signin)** - Authentication UI
7. **Sign Up (/signup)** - Registration form
8. **Checkout (/checkout)** - Checkout with vegetarian preferences
9. **Dashboard (/dashboard)** - Account management, meal schedule

### UI Components
- **BrandLogo** - Reusable logo component (nav and full variants)
- **Button** - Primary brand-red styling
- **Badge** - Status indicators
- **Card** - Content containers
- **Input** - Form inputs with validation
- **Select** - Dropdowns
- **Navbar** - Sticky navigation with logo
- **Footer** - Multi-column footer

## 📁 Project Structure

```
IndiTiffins-Interface/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page with hero & logo
│   ├── menu/page.tsx       # Vegetarian breakfast/dinner menu
│   ├── plans/page.tsx      # Trial & Campus Plus plans
│   ├── checkout/page.tsx   # Checkout flow
│   └── dashboard/page.tsx  # Dashboard
├── components/
│   ├── BrandLogo.tsx       # Logo component
│   ├── Navbar.tsx          # Navigation with logo
│   └── ui/                 # UI components
├── public/
│   └── photos/logo.jpeg    # IndiTiffins logo
├── .github/workflows/      # GitHub Pages deployment
└── next.config.js          # Static export config
```

## 🛠️ Getting Started

### Installation
```bash
npm install
npm run dev
```

Open http://localhost:3000

### Build for Production
```bash
npm run build
```

Generates static export in `out/` directory.

### Deploy to GitHub Pages
Automatically deploys via GitHub Actions on push to main.

## 🎯 Key Features

- **ASU Tempe Branding** - Burgundy red and cream palette
- **Logo Integration** - BrandLogo component throughout
- **Vegetarian Menu** - Breakfast/dinner options only
- **Two Plans** - Trial Week + Campus Plus
- **Mobile-First** - Fully responsive
- **Jain Options** - Dietary customization support

## 📝 Notes

- UI-only implementation (no backend)
- Static/dummy data for demonstration
- Pickup locations intentionally vague (TBD)
- Vegetarian North Indian cuisine only
- Monday-Saturday service, Sunday off

## 🎓 Target Audience

ASU Tempe students seeking authentic Indian vegetarian home-style meals.

---

Built with ❤️ using Next.js, React, and Tailwind CSS
