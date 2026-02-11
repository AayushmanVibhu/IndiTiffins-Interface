import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import BrandLogo from '@/components/BrandLogo';

export default function HomePage() {
  const trustFeatures = [
    { icon: '�', title: 'Student-Friendly', description: 'Made for ASU life' },
    { icon: '🔄', title: 'Weekly Rotation', description: 'New menu every week' },
    { icon: '⏸️', title: 'Flexible Pause', description: 'Pause up to 2x/month' },
    { icon: '🚚', title: 'Fast Delivery near ASU', description: 'Free within 2 miles' },
  ];
  
  const howItWorksSteps = [
    {
      step: '1',
      title: 'Choose Your Plan',
      description: 'Campus Plus: Breakfast + Dinner, Mon–Sat. Perfect for ASU students.',
    },
    {
      step: '2',
      title: 'Customize Preferences',
      description: 'Set your spice level and dietary preferences. Vegetarian options available.',
    },
    {
      step: '3',
      title: 'Get Fresh Meals',
      description: 'Delivered daily around Tempe campus. Breakfast: 7:30am–10am, Dinner: 6–9pm.',
    },
  ];
  
  const featuredMenuItems = [
    {
      id: 1,
      name: 'Paneer Tikka Masala',
      description: 'Creamy tomato curry with cottage cheese',
      type: 'veg',
      spiceLevel: 2,
      calories: 420,
    },
    {
      id: 2,
      name: 'Dal Makhani',
      description: 'Black lentils in butter and cream',
      type: 'veg',
      spiceLevel: 1,
      calories: 340,
    },
    {
      id: 3,
      name: 'Palak Paneer',
      description: 'Spinach curry with cottage cheese',
      type: 'veg',
      spiceLevel: 2,
      calories: 380,
    },
    {
      id: 4,
      name: 'Aloo Gobi',
      description: 'Potato and cauliflower with turmeric',
      type: 'veg',
      spiceLevel: 2,
      calories: 280,
    },
  ];
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${process.env.NODE_ENV === 'production' ? '/IndiTiffins-Interface' : ''}/photos/food.jpeg)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-cream" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <Badge variant="warning" className="mb-6 bg-brand-saffron/90 backdrop-blur-sm">
                Now Serving ASU Tempe Campus
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
                Home-style Indian tiffins,
                <span className="text-brand-saffron"> made for ASU life.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl drop-shadow-lg">
                Breakfast + dinner delivered Mon–Sat around Tempe campus. Simple subscriptions. Real food.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="shadow-xl">
                  <Link href="/plans">View Plans</Link>
                </Button>
                <Button variant="ghost" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                  <Link href="/menu">Explore Menu</Link>
                </Button>
              </div>
            </div>
            
            {/* Right Logo - Show on mobile above, desktop on right */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="backdrop-blur-sm bg-white/10 p-6 rounded-3xl">
                <BrandLogo variant="full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Row */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-text mb-2">{feature.title}</h3>
                <p className="text-sm text-text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text mb-4">
              How It Works
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Get started with fresh homemade meals in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3">{step.title}</h3>
                  <p className="text-text-muted">{step.description}</p>
                </div>
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Plan - Campus Plus */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="warning" className="mb-4">
              MOST POPULAR
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-text mb-4">
              Campus Plus Plan
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Our signature plan designed specifically for ASU students
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto border-2 border-primary shadow-card-hover">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold text-text">$200</span>
                  <span className="text-text-muted ml-2">/month</span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-text-muted">
                    <span className="text-primary mr-2">✓</span>
                    <span>≈ $50/week</span>
                  </div>
                  <div className="flex items-center text-text-muted">
                    <span className="text-primary mr-2">✓</span>
                    <span>~$4.15 per meal (48 meals/month)</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-text mb-4">What you get:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-muted">Breakfast + Dinner, Mon–Sat</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-muted">Free delivery near campus (2-mile radius)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-muted">Choose spice + dietary preferences</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-muted">Pause anytime (2x/month)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-muted">Weekly rotating menu</span>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <Button variant="primary" size="lg" className="w-full">
                    <Link href="/plans">Choose Campus Plus</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-text-muted text-center">
                <strong>Note:</strong> Menu rotates weekly; you set preferences. Sunday off.
              </p>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Featured Menu */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text mb-4">
              Sample Weekly Menu
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Fresh homemade dishes rotating weekly
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMenuItems.map((item) => (
              <Card key={item.id} hover className="flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant={item.type === 'veg' ? 'success' : 'danger'}>
                    {item.type === 'veg' ? '🌿 Veg' : '🍗 Non-Veg'}
                  </Badge>
                  <Badge variant="default">
                    {'🌶️'.repeat(item.spiceLevel)}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-semibold text-text mb-2">{item.name}</h3>
                <p className="text-sm text-text-muted mb-4 flex-grow">{item.description}</p>
                
                <div className="flex items-center justify-between text-sm text-text-muted">
                  <span>{item.calories} cal</span>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="primary" size="lg">
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready for Home-Cooked Meals at ASU?
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Join students enjoying breakfast + dinner 6 days a week. Start with Campus Plus today.
          </p>
          <Button variant="ghost" size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/plans">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
