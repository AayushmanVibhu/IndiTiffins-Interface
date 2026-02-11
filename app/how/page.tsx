import React from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function HowItWorksPage() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Plan',
      description: 'Select from our flexible meal plans - 3, 5, or 7 meals per week. All plans include the freedom to pause or cancel anytime.',
      details: [
        'Compare plans and pricing',
        'No long-term commitment required',
        'Change plans anytime',
      ],
      icon: '📋',
    },
    {
      number: '02',
      title: 'Set Your Preferences',
      description: 'Tell us about your dietary needs, preferred spice level, and any allergies. We\'ll customize your meals accordingly.',
      details: [
        'Veg, Non-Veg, Jain, or High-Protein',
        'Mild, Medium, or Spicy',
        'Allergy and ingredient exclusions',
      ],
      icon: '⚙️',
    },
    {
      number: '03',
      title: 'We Prepare Fresh',
      description: 'Our home cooks prepare your meals fresh using authentic recipes and quality ingredients, just like home.',
      details: [
        'Prepared fresh daily',
        'Traditional recipes & techniques',
        'Quality-checked ingredients',
      ],
      icon: '👨‍🍳',
    },
    {
      number: '04',
      title: 'Delivered to Your Door',
      description: 'Your tiffins arrive at your doorstep on your scheduled delivery days, hot and ready to enjoy.',
      details: [
        'Contactless delivery available',
        'Insulated packaging keeps food hot',
        'Delivered within 2-hour window',
      ],
      icon: '🚗',
    },
  ];
  
  const deliveryInfo = [
    {
      title: 'Delivery Times',
      content: 'We deliver between 11:30 AM - 1:30 PM for lunch and 6:00 PM - 8:00 PM for dinner. You can specify your preference during checkout.',
    },
    {
      title: 'Packaging',
      content: 'All meals come in eco-friendly, reusable steel tiffin containers. Simply rinse and leave outside your door on the next delivery day for pickup and cleaning.',
    },
    {
      title: 'Freshness Guarantee',
      content: 'We prepare meals within 2 hours of delivery to ensure maximum freshness. If you\'re not satisfied with your meal, contact us for a full refund.',
    },
    {
      title: 'Contact-Free Option',
      content: 'Choose contactless delivery and we\'ll leave your tiffin at your doorstep with a notification. Perfect for busy days or when you\'re not home.',
    },
  ];
  
  const faqs = [
    {
      question: 'How does the subscription work?',
      answer: 'After selecting your plan, you\'ll be charged weekly or monthly. You can pause, change, or cancel your subscription anytime from your dashboard with no penalties.',
    },
    {
      question: 'Can I skip certain days?',
      answer: 'Yes! You have full control over your delivery schedule. Skip any day or pause your entire subscription when needed.',
    },
    {
      question: 'What if I don\'t like a meal?',
      answer: 'We offer a 100% satisfaction guarantee. If you\'re not happy with any meal, contact us within 24 hours for a full refund, no questions asked.',
    },
    {
      question: 'Do you accommodate allergies?',
      answer: 'Absolutely. During setup, you can specify any allergies or ingredients you want to avoid. Our cooks will ensure your meals are safe and delicious.',
    },
    {
      question: 'How do I return the tiffin containers?',
      answer: 'Simply rinse the containers and leave them outside your door on your next delivery day. Our delivery person will collect them, sanitize them, and use them for your next meal.',
    },
    {
      question: 'What if I\'m not home during delivery?',
      answer: 'Choose contactless delivery and we\'ll leave your tiffin at your doorstep. The insulated packaging keeps food hot for up to 3 hours.',
    },
  ];
  
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            How It Works
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            From your first order to enjoying delicious homemade meals, we make it simple
          </p>
        </div>
        
        {/* Steps */}
        <div className="space-y-16 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="flex-1">
                <div className="text-6xl mb-4">{step.icon}</div>
                <div className="text-sm font-bold text-primary mb-2">
                  STEP {step.number}
                </div>
                <h2 className="text-3xl font-bold text-text mb-4">
                  {step.title}
                </h2>
                <p className="text-lg text-text-muted mb-6">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text-muted">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex-1">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl h-80 flex items-center justify-center">
                  <span className="text-8xl">{step.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Delivery & Packaging */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-text mb-8 text-center">
            Delivery & Packaging
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {deliveryInfo.map((info, index) => (
              <Card key={index}>
                <h3 className="text-xl font-semibold text-text mb-3">
                  {info.title}
                </h3>
                <p className="text-text-muted">{info.content}</p>
              </Card>
            ))}
          </div>
        </div>
        
        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <h3 className="text-lg font-semibold text-text mb-3">
                  {faq.question}
                </h3>
                <p className="text-text-muted">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of students enjoying fresh, homemade Indian meals every week
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="ghost" size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/plans">View Plans</Link>
            </Button>
            <Button variant="secondary" size="lg">
              <Link href="/menu">See Menu</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
