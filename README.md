# IndiTiffins - Modern Tiffin Subscription Service

A premium, modern web interface for IndiTiffins - an authentic Indian home-style tiffin subscription service for students. Built with Next.js 14 (App Router), React, and Tailwind CSS.

## 🎨 Design System

### Color Palette
- **Primary (Saffron)**: #F59E0B
- **Primary Dark**: #B45309
- **Secondary (Deep Green)**: #166534
- **Accent (Tomato Red)**: #EF4444
- **Background**: #FFFBF5 (Warm Off-White)
- **Surface**: #FFFFFF
- **Text**: #111827 (Charcoal)
- **Muted Text**: #6B7280
- **Borders**: #E5E7EB

### Typography
- Headings: font-semibold, tracking-tight
- Body: Clean, readable, system fonts
- Mobile-first responsive sizing

## 🚀 Features

### Pages Implemented
1. **Home (/)** - Hero, trust features, how it works, featured menu, testimonials, CTA
2. **Menu (/menu)** - Tabbed menu with filters (Veg/Non-Veg/Jain/High-Protein)
3. **Plans (/plans)** - Three subscription tiers with pricing toggle and comparison table
4. **How It Works (/how)** - Detailed process steps, delivery info, FAQ
5. **Delivery Areas (/areas)** - Searchable area list with request form
6. **Sign In (/signin)** - Clean authentication UI with social login options
7. **Sign Up (/signup)** - Registration form with validation
8. **Checkout (/checkout)** - Multi-step checkout with order summary
9. **Dashboard (/dashboard)** - User account management, preferences, order history

### UI Components
- **Button** - Primary, secondary, ghost, accent variants
- **Badge** - Status and category indicators
- **Card** - Content containers with hover effects
- **Input** - Form inputs with validation states
- **Select** - Dropdown selects
- **Tabs** - Tabbed content navigation
- **Toggle** - On/off switches
- **Modal** - Dialog overlays
- **Navbar** - Sticky navigation with mobile menu
- **Footer** - Multi-column footer with links

## 📁 Project Structure

```
IndiTiffins-Interface/
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── menu/page.tsx       # Menu page
│   ├── plans/page.tsx      # Plans page
│   ├── how/page.tsx        # How It Works page
│   ├── areas/page.tsx      # Delivery Areas page
│   ├── signin/page.tsx     # Sign In page
│   ├── signup/page.tsx     # Sign Up page
│   ├── checkout/page.tsx   # Checkout page
│   └── dashboard/page.tsx  # Dashboard page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       ├── Select.tsx
│       ├── Tabs.tsx
│       ├── Toggle.tsx
│       └── Modal.tsx
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
└── next.config.js          # Next.js configuration
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 🎯 Key Features

### Design Highlights
- **Premium Layout**: Inspired by Stripe/Airbnb - big hero typography, calm backgrounds, strong CTA hierarchy
- **Mobile-First**: Fully responsive design for all screen sizes
- **Smooth Interactions**: Hover states, transitions, and focus rings throughout
- **Consistent Design System**: Reusable components with unified styling
- **Accessibility**: Semantic HTML, keyboard navigation, proper ARIA labels

### Functionality (UI Only)
- Form validation with visual feedback
- Interactive tabs and filters
- Modal dialogs
- Responsive navigation with mobile menu
- Sticky header
- Dynamic content rendering
- Search and filter functionality

## 🎨 Component Usage Examples

### Button
```tsx
<Button variant="primary" size="lg">
  Get Started
</Button>
```

### Card
```tsx
<Card hover>
  <h3>Card Title</h3>
  <p>Card content...</p>
</Card>
```

### Badge
```tsx
<Badge variant="success">Active</Badge>
```

### Input
```tsx
<Input
  label="Email"
  type="email"
  placeholder="you@example.com"
  error={errors.email}
/>
```

## 📱 Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Customization

All design tokens are centralized in `tailwind.config.ts`. Update colors, spacing, and other design values there to maintain consistency across the application.

## 📝 Notes

- This is a UI-only implementation - no backend or API integration
- All form submissions are console.log only
- Uses local gradient placeholders for images
- Authentication flows are UI-only (non-functional)
- All data is static/dummy data for demonstration

## 🌟 Best Practices

- Component-based architecture
- TypeScript for type safety
- Tailwind CSS for consistent styling
- Semantic HTML structure
- Proper form validation patterns
- Accessible design principles

## 📄 License

This is a demonstration project for IndiTiffins.

---

Built with ❤️ using Next.js, React, and Tailwind CSS
