'use client';

import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';

export default function DashboardPage() {
  const [preferences, setPreferences] = useState({
    dietaryType: 'veg',
    spiceLevel: '2',
    allergies: '',
    noOnionGarlic: false,
  });
  
  const currentPlan = {
    name: 'Campus Plus',
    mealsPerDay: 2,
    daysPerWeek: 6,
    totalMealsPerWeek: 12,
    price: 200,
    status: 'active',
    nextDelivery: 'Monday, Feb 12, 2026',
    nextMealTime: 'Breakfast (7:30am–10:00am)',
  };
  
  const upcomingDeliveries = [
    { date: 'Feb 12, 2026', meal: 'Poha + Chutney', time: 'Breakfast', dayTime: 'Breakfast' },
    { date: 'Feb 12, 2026', meal: 'Dal Makhani + Roti', time: 'Dinner', dayTime: 'Dinner' },
    { date: 'Feb 13, 2026', meal: 'Masala Dosa + Sambar', time: 'Breakfast', dayTime: 'Breakfast' },
    { date: 'Feb 13, 2026', meal: 'Palak Paneer + Rice', time: 'Dinner', dayTime: 'Dinner' },
    { date: 'Feb 14, 2026', meal: 'Idli Sambar', time: 'Breakfast', dayTime: 'Breakfast' },
  ];
  
  const orderHistory = [
    { id: '#1234', date: 'Feb 8, 2026', plan: 'Campus Plus', amount: 200, status: 'delivered' },
    { id: '#1233', date: 'Jan 8, 2026', plan: 'Campus Plus', amount: 200, status: 'delivered' },
    { id: '#1232', date: 'Dec 8, 2025', plan: 'Campus Plus', amount: 200, status: 'delivered' },
    { id: '#1231', date: 'Nov 8, 2025', plan: 'Starter', amount: 120, status: 'delivered' },
  ];
  
  const handlePreferenceChange = (field: string, value: string | boolean) => {
    setPreferences((prev) => ({ ...prev, [field]: value }));
  };
  
  const handleSavePreferences = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Preferences saved:', preferences);
  };
  
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-text mb-2">
            My Dashboard
          </h1>
          <p className="text-lg text-text-muted">
            Manage your Campus Plus subscription and preferences
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Plan */}
            <Card>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-text mb-2">
                    Current Plan
                  </h2>
                  <Badge variant="success">Active</Badge>
                </div>
                <Button variant="ghost" size="sm">
                  Change Plan
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-text-muted mb-1">Plan Name</p>
                  <p className="text-lg font-semibold text-text">{currentPlan.name}</p>
                  <p className="text-xs text-text-muted">Breakfast + Dinner, Mon–Sat</p>
                </div>
                
                <div>
                  <p className="text-sm text-text-muted mb-1">Meals per Week</p>
                  <p className="text-lg font-semibold text-text">{currentPlan.totalMealsPerWeek} meals</p>
                  <p className="text-xs text-text-muted">{currentPlan.mealsPerDay}/day × {currentPlan.daysPerWeek} days</p>
                </div>
                
                <div>
                  <p className="text-sm text-text-muted mb-1">Monthly Price</p>
                  <p className="text-lg font-semibold text-text">${currentPlan.price}/month</p>
                  <p className="text-xs text-text-muted">~${(currentPlan.price / (currentPlan.totalMealsPerWeek * 4)).toFixed(2)} per meal</p>
                </div>
                
                <div>
                  <p className="text-sm text-text-muted mb-1">Next Delivery</p>
                  <p className="text-lg font-semibold text-text">{currentPlan.nextDelivery}</p>
                  <p className="text-xs text-text-muted">{currentPlan.nextMealTime}</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-3">
                <Button variant="accent" size="sm">
                  Pause Plan
                </Button>
                <Button variant="ghost" size="sm">
                  Update Preferences
                </Button>
                <Button variant="ghost" size="sm">
                  Change Delivery/Pickup
                </Button>
              </div>
              
              <div className="mt-4 bg-secondary/10 border border-secondary/30 rounded-button p-3">
                <p className="text-xs text-text-muted">
                  <strong>Pause Policy:</strong> You can pause your subscription up to 2 times per month. Sunday is always off for Campus Plus.
                </p>
              </div>
            </Card>
            
            {/* Upcoming Deliveries */}
            <Card>
              <h2 className="text-2xl font-bold text-text mb-6">
                Upcoming Deliveries
              </h2>
              
              <div className="space-y-3">
                {upcomingDeliveries.map((delivery, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-button hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-text">{delivery.meal}</p>
                      <p className="text-sm text-text-muted">{delivery.date} • {delivery.dayTime}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Skip
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Meal Preferences */}
            <Card>
              <h2 className="text-2xl font-bold text-text mb-6">
                Meal Preferences
              </h2>
              
              <form onSubmit={handleSavePreferences} className="space-y-6">
                <Select
                  label="Dietary Type"
                  value={preferences.dietaryType}
                  onChange={(e) => handlePreferenceChange('dietaryType', e.target.value)}
                  options={[
                    { value: 'veg', label: 'Vegetarian (Standard)' },
                    { value: 'jain', label: 'Jain (No Onion/Garlic)' },
                  ]}
                />
                
                <Select
                  label="Spice Level"
                  value={preferences.spiceLevel}
                  onChange={(e) => handlePreferenceChange('spiceLevel', e.target.value)}
                  options={[
                    { value: '1', label: '🌶️ Mild' },
                    { value: '2', label: '🌶️🌶️ Medium' },
                    { value: '3', label: '🌶️🌶️🌶️ Spicy' },
                  ]}
                />
                
                <Input
                  type="text"
                  label="Allergies & Exclusions"
                  placeholder="e.g., peanuts, dairy, mushrooms"
                  value={preferences.allergies}
                  onChange={(e) => handlePreferenceChange('allergies', e.target.value)}
                  helperText="Separate multiple items with commas"
                />
                
                {preferences.dietaryType !== 'jain' && (
                  <div>
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        checked={preferences.noOnionGarlic}
                        onChange={(e) => handlePreferenceChange('noOnionGarlic', e.target.checked)}
                        className="rounded border-border text-primary focus:ring-primary mr-2 mt-0.5"
                      />
                      <span className="text-sm text-text-muted">
                        No onion/garlic (Jain-friendly option)
                      </span>
                    </label>
                  </div>
                )}
                
                <div className="bg-primary/5 border border-primary/20 rounded-button p-3">
                  <p className="text-xs text-text-muted">
                    <strong>Delivery Windows:</strong> Breakfast 7:30am–10am, Dinner 6–9pm. Menu rotates weekly based on your preferences.
                  </p>
                </div>
                
                <Button type="submit" variant="primary" size="md">
                  Save Preferences
                </Button>
              </form>
            </Card>
            
            {/* Order History */}
            <Card>
              <h2 className="text-2xl font-bold text-text mb-6">
                Order History
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-border">
                    <tr>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-text">Order ID</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-text">Date</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-text">Plan</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-text">Amount</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-text">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {orderHistory.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-sm font-medium text-primary">{order.id}</td>
                        <td className="py-3 px-4 text-sm text-text-muted">{order.date}</td>
                        <td className="py-3 px-4 text-sm text-text">{order.plan}</td>
                        <td className="py-3 px-4 text-sm text-text">${order.amount}</td>
                        <td className="py-3 px-4 text-sm">
                          <Badge variant="success">
                            {order.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions */}
            <Card>
              <h3 className="text-lg font-semibold text-text mb-4">
                Quick Actions
              </h3>
              
              <div className="space-y-3">
                <Button variant="primary" size="md" className="w-full">
                  View Menu
                </Button>
                <Button variant="ghost" size="md" className="w-full">
                  Update Address
                </Button>
                <Button variant="ghost" size="md" className="w-full">
                  Payment Methods
                </Button>
                <Button variant="ghost" size="md" className="w-full">
                  Refer a Friend
                </Button>
              </div>
            </Card>
            
            {/* Support */}
            <Card>
              <h3 className="text-lg font-semibold text-text mb-4">
                Need Help?
              </h3>
              
              <p className="text-sm text-text-muted mb-4">
                Our support team is here to assist you with any questions.
              </p>
              
              <div className="space-y-3">
                <a
                  href="mailto:support@inditiffins.com"
                  className="block text-sm text-primary hover:text-primary-dark"
                >
                  📧 support@inditiffins.com
                </a>
                <a
                  href="tel:+15551234567"
                  className="block text-sm text-primary hover:text-primary-dark"
                >
                  📞 (555) 123-4567
                </a>
                <Button variant="ghost" size="sm" className="w-full">
                  View FAQ
                </Button>
              </div>
            </Card>
            
            {/* Referral */}
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <h3 className="text-lg font-semibold text-text mb-2">
                Refer & Earn
              </h3>
              <p className="text-sm text-text-muted mb-4">
                Give $10, get $10 when your friends sign up!
              </p>
              <Input
                type="text"
                value="INDITIFFINS10"
                readOnly
                className="mb-3"
              />
              <Button variant="primary" size="sm" className="w-full">
                Share Referral Code
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
