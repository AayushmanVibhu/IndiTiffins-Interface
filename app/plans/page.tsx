'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Toggle from '@/components/ui/Toggle';

export default function PlansPage() {
  const [isMonthly, setIsMonthly] = useState(true);
  
  const plans = [
    {
      id: 'trial',
      name: 'Trial Week',
      description: 'Try us out for a week',
      mealsPerDay: 2,
      daysPerWeek: 6,
      totalMealsPerWeek: 12,
      weeklyPrice: 50,
      monthlyPrice: undefined,
      features: [
        'Breakfast + Dinner, Mon–Sat',
        '12 meals for the week',
        'Free delivery near campus (2-mile radius)',
        'Vegetarian options',
        'Set your spice level',
        'Perfect to try our service',
      ],
      popular: false,
    },
    {
      id: 'campus-plus',
      name: 'Campus Plus',
      description: 'Most popular for ASU students',
      mealsPerDay: 2,
      daysPerWeek: 6,
      totalMealsPerWeek: 12,
      weeklyPrice: undefined,
      monthlyPrice: 200,
      features: [
        'Breakfast + Dinner, Mon–Sat',
        '12 meals per week (~48/month)',
        'Free delivery near campus (2-mile radius)',
        'Vegetarian options with preferences',
        'Pause anytime (2x/month)',
        'Weekly rotating menu',
        'Delivery: Breakfast 7:30am–10am, Dinner 6–9pm',
      ],
      popular: true,
    },
  ];
  
  const comparisonFeatures = [
    { feature: 'Meals per day', trial: '2', campusPlus: '2' },
    { feature: 'Days per week', trial: '6 (Mon–Sat)', campusPlus: '6 (Mon–Sat)' },
    { feature: 'Total meals', trial: '12 (1 week)', campusPlus: '~48/month' },
    { feature: 'Price', trial: '$50/week', campusPlus: '$200/month' },
    { feature: 'Free delivery (2 mi)', trial: '✓', campusPlus: '✓' },
    { feature: 'Vegetarian options', trial: '✓', campusPlus: '✓' },
    { feature: 'Pause allowance', trial: '—', campusPlus: '2x/month' },
  ];
  
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Choose Your Plan
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Flexible meal plans made for ASU Tempe. Free delivery near campus, pause anytime.
          </p>
        </div>
        
        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">{plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative flex flex-col ${
                plan.popular ? 'border-2 border-primary shadow-card-hover' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="warning">Most Popular</Badge>
                </div>
              )}
              
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-text mb-2">{plan.name}</h2>
                <p className="text-text-muted">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-text">
                    ${plan.weeklyPrice ?? plan.monthlyPrice}
                  </span>
                  <span className="text-text-muted ml-2">
                    /{plan.weeklyPrice ? 'week' : 'month'}
                  </span>
                </div>
                <p className="text-sm text-text-muted mt-2">
                  {plan.weeklyPrice
                    ? `~$${((plan.weeklyPrice ?? 0) / plan.totalMealsPerWeek).toFixed(2)} per meal`
                    : `~$${((plan.monthlyPrice ?? 0) / (plan.totalMealsPerWeek * 4)).toFixed(2)} per meal`
                  }
                </p>
                {plan.id === 'campus-plus' && (
                  <p className="text-xs text-text-muted mt-1">
                    ≈ $50/week • ~48 meals/month
                  </p>
                )}
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
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
                    <span className="text-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="/checkout"
                className={`inline-flex items-center justify-center font-semibold rounded-button transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed w-full ${
                  plan.popular
                    ? 'bg-brand-red hover:bg-brand-red2 text-white focus:ring-brand-red shadow-sm px-10 py-5 text-lg min-h-[52px]'
                    : 'bg-transparent hover:bg-gray-200 text-text border-2 border-border focus:ring-gray-300 px-10 py-5 text-lg min-h-[52px]'
                }`}
              >
                Get Started
              </Link>
            </Card>
          ))}
        </div>
        
        {/* Comparison Table */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-text mb-8 text-center">
            Compare Plans
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-surface rounded-2xl shadow-card overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-text">
                    Trial Week
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-text">
                    Campus Plus
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-text">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-muted text-center">
                      {row.trial}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-muted text-center">
                      {row.campusPlus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-surface rounded-2xl p-8 shadow-card">
          <h2 className="text-2xl font-bold text-text mb-6">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-text mb-2">
                Why is Sunday off?
              </h3>
              <p className="text-text-muted">
                We know students need a break! Sunday is off for both plans to give you flexibility on weekends.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-text mb-2">
                What are the delivery windows?
              </h3>
              <p className="text-text-muted">
                Breakfast: 7:30am–10:00am, Dinner: 6:00pm–9:00pm. Choose your preferred window during checkout.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-text mb-2">
                Can I pause during spring break or finals?
              </h3>
              <p className="text-text-muted">
                Absolutely! Campus Plus subscribers can pause up to 2 times per month. Perfect for breaks, trips, or busy exam weeks.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-text mb-2">
                What dietary options are available?
              </h3>
              <p className="text-text-muted">
                We offer delicious vegetarian options with customizable spice levels. You can set your preferences and list any allergies.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-text mb-2">
                Is delivery really free near campus?
              </h3>
              <p className="text-text-muted">
                Yes! Free delivery within a 2-mile radius of ASU Tempe campus. Small fee applies beyond 2 miles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
