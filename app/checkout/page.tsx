'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deliveryMethod: 'delivery',
    address: '',
    city: '',
    zip: '',
    deliveryInstructions: '',
    pickupLocation: '',
    mealTime: 'both',
    spiceLevel: 'medium',
    dietaryType: 'veg',
    allergies: '',
    noOnionGarlic: false,
    paymentMethod: 'card',
  });
  
  const selectedPlan = {
    name: 'Campus Plus',
    mealsPerDay: 2,
    daysPerWeek: 6,
    totalMealsPerWeek: 12,
    price: 200,
    billing: 'monthly',
  };
  
  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
    // Handle checkout (UI only)
  };
  
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Complete Your Order
          </h1>
          <p className="text-lg text-text-muted">
            You're moments away from authentic home-cooked meals at ASU
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <Card>
                <h2 className="text-2xl font-bold text-text mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-4">
                  <Input
                    type="text"
                    label="Full Name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                  />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      label="Email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                    />
                    
                    <Input
                      type="tel"
                      label="Phone Number"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </Card>
              
              {/* Delivery Address */}
              <Card>
                <h2 className="text-2xl font-bold text-text mb-6">
                  Delivery Method
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-3">
                      Choose Delivery or Pickup
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => handleChange('deliveryMethod', 'delivery')}
                        className={`p-4 border-2 rounded-button transition-colors ${
                          formData.deliveryMethod === 'delivery'
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="text-2xl mb-2">🚚</div>
                        <div className="font-semibold text-text">Delivery</div>
                        <div className="text-xs text-text-muted mt-1">To your address</div>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => handleChange('deliveryMethod', 'pickup')}
                        className={`p-4 border-2 rounded-button transition-colors ${
                          formData.deliveryMethod === 'pickup'
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="text-2xl mb-2">📍</div>
                        <div className="font-semibold text-text">Pickup</div>
                        <div className="text-xs text-text-muted mt-1">At a location</div>
                      </button>
                    </div>
                  </div>
                  
                  {formData.deliveryMethod === 'delivery' ? (
                    <>
                      <Input
                        type="text"
                        label="Street Address"
                        placeholder="123 Main St, Apt 4B"
                        value={formData.address}
                        onChange={(e) => handleChange('address', e.target.value)}
                        required
                      />
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          type="text"
                          label="City"
                          placeholder="Tempe"
                          value={formData.city}
                          onChange={(e) => handleChange('city', e.target.value)}
                          required
                        />
                        
                        <Input
                          type="text"
                          label="ZIP Code"
                          placeholder="85281"
                          value={formData.zip}
                          onChange={(e) => handleChange('zip', e.target.value)}
                          required
                        />
                      </div>
                      
                      <Input
                        type="text"
                        label="Delivery Instructions (Optional)"
                        placeholder="e.g., Leave at door, call on arrival"
                        value={formData.deliveryInstructions}
                        onChange={(e) => handleChange('deliveryInstructions', e.target.value)}
                      />
                      
                      <div className="bg-secondary/10 border border-secondary/30 rounded-button p-3">
                        <p className="text-sm text-text-muted">
                          ✓ Free delivery within 2 miles of ASU Tempe campus. Small fee applies beyond.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <Select
                        label="Pickup Location"
                        value={formData.pickupLocation}
                        onChange={(e) => handleChange('pickupLocation', e.target.value)}
                        options={[
                          { value: '', label: 'Select a pickup point...' },
                          { value: 'on-campus-tbd', label: 'On-campus pickup point (TBD)' },
                          { value: 'near-campus-tbd', label: 'Near-campus pickup point (TBD)' },
                          { value: 'tempe-tbd', label: 'Tempe pickup point (TBD)' },
                        ]}
                        required
                      />
                      
                      <div className="bg-warning/10 border border-warning/30 rounded-button p-3">
                        <p className="text-sm text-text-muted">
                          <strong>Note:</strong> Pickup locations will be confirmed after launch. We'll notify you once finalized.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </Card>
              
              {/* Delivery Preferences */}
              <Card>
                <h2 className="text-2xl font-bold text-text mb-6">
                  Schedule & Preferences
                </h2>
                
                <div className="space-y-4">
                  <div className="bg-primary/5 border border-primary/20 rounded-button p-4">
                    <p className="text-sm font-medium text-text mb-2">
                      Your Campus Plus Schedule:
                    </p>
                    <ul className="text-sm text-text-muted space-y-1">
                      <li>• Breakfast + Dinner, Monday–Saturday</li>
                      <li>• Breakfast: 7:30am–10:00am</li>
                      <li>• Dinner: 6:00pm–9:00pm</li>
                      <li>• Sunday: Off</li>
                    </ul>
                  </div>
                  
                  <Select
                    label="Spice Level"
                    value={formData.spiceLevel}
                    onChange={(e) => handleChange('spiceLevel', e.target.value)}
                    options={[
                      { value: 'mild', label: '🌶️ Mild' },
                      { value: 'medium', label: '🌶️🌶️ Medium' },
                      { value: 'spicy', label: '🌶️🌶️🌶️ Spicy' },
                    ]}
                  />
                  
                  <Select
                    label="Dietary Preference"
                    value={formData.dietaryType}
                    onChange={(e) => handleChange('dietaryType', e.target.value)}
                    options={[
                      { value: 'veg', label: 'Vegetarian (Standard)' },
                      { value: 'jain', label: 'Jain (No Onion/Garlic)' },
                    ]}
                  />
                  
                  <Input
                    type="text"
                    label="Allergies & Exclusions (Optional)"
                    placeholder="e.g., peanuts, dairy, mushrooms"
                    value={formData.allergies}
                    onChange={(e) => handleChange('allergies', e.target.value)}
                    helperText="Separate multiple items with commas"
                  />
                  
                  {formData.dietaryType !== 'jain' && (
                    <div>
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          checked={formData.noOnionGarlic}
                          onChange={(e) => handleChange('noOnionGarlic', e.target.checked)}
                          className="rounded border-border text-primary focus:ring-primary mr-2 mt-0.5"
                        />
                        <span className="text-sm text-text-muted">
                          No onion/garlic (Jain-friendly option)
                        </span>
                      </label>
                    </div>
                  )}
                  
                  <div className="bg-gray-50 border border-border rounded-button p-3 mt-4">
                    <p className="text-xs text-text-muted">
                      <strong>Note:</strong> Menu rotates weekly; you set preferences. You can update these anytime from your dashboard.
                    </p>
                  </div>
                </div>
              </Card>
              
              {/* Payment Method */}
              <Card>
                <h2 className="text-2xl font-bold text-text mb-6">
                  Payment Method
                </h2>
                
                <div className="space-y-4">
                  <Select
                    label="Payment Type"
                    value={formData.paymentMethod}
                    onChange={(e) => handleChange('paymentMethod', e.target.value)}
                    options={[
                      { value: 'card', label: 'Credit/Debit Card' },
                      { value: 'paypal', label: 'PayPal' },
                      { value: 'venmo', label: 'Venmo' },
                    ]}
                  />
                  
                  {formData.paymentMethod === 'card' && (
                    <>
                      <Input
                        type="text"
                        label="Card Number"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          type="text"
                          label="Expiry Date"
                          placeholder="MM/YY"
                          required
                        />
                        
                        <Input
                          type="text"
                          label="CVV"
                          placeholder="123"
                          required
                        />
                      </div>
                    </>
                  )}
                  
                  <div className="bg-gray-50 border border-border rounded-button p-4">
                    <p className="text-sm text-text-muted">
                      🔒 Your payment information is secure and encrypted. 
                      We never store your card details.
                    </p>
                  </div>
                </div>
              </Card>
              
              {/* Submit */}
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Complete Order
              </Button>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <Card>
                <h2 className="text-2xl font-bold text-text mb-6">
                  Order Summary
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-text">
                        {selectedPlan.name}
                      </h3>
                      <p className="text-sm text-text-muted">
                        {selectedPlan.mealsPerDay} meals/day × {selectedPlan.daysPerWeek} days/week
                      </p>
                      <p className="text-xs text-text-muted">
                        ~{selectedPlan.totalMealsPerWeek * 4} meals per month
                      </p>
                    </div>
                    <Badge variant="warning">Most Popular</Badge>
                  </div>
                  
                  <div className="border-t border-border pt-4 space-y-3">
                    <div className="flex justify-between text-text-muted">
                      <span>Subtotal</span>
                      <span>${selectedPlan.price}.00</span>
                    </div>
                    
                    <div className="flex justify-between text-text-muted">
                      <span>
                        {formData.deliveryMethod === 'delivery' ? 'Delivery Fee' : 'Pickup Fee'}
                      </span>
                      <span className="text-secondary font-medium">FREE</span>
                    </div>
                    
                    <div className="flex justify-between text-text-muted">
                      <span>Tax (est.)</span>
                      <span>${(selectedPlan.price * 0.083).toFixed(2)}</span>
                    </div>
                    
                    <div className="border-t border-border pt-3 flex justify-between text-lg font-bold text-text">
                      <span>Total</span>
                      <span>${(selectedPlan.price * 1.083).toFixed(2)}</span>
                    </div>
                    
                    <p className="text-xs text-text-muted">
                      Billed {selectedPlan.billing} • ~${(selectedPlan.price / (selectedPlan.totalMealsPerWeek * 4)).toFixed(2)}/meal
                    </p>
                  </div>
                </div>
                
                <div className="bg-primary/5 border border-primary/20 rounded-button p-4 mb-4">
                  <p className="text-sm text-text font-medium mb-2">
                    What you get:
                  </p>
                  <ul className="text-sm text-text-muted space-y-1">
                    <li>✓ Breakfast + Dinner, Mon–Sat</li>
                    <li>✓ 12 meals/week (~48/month)</li>
                    <li>✓ Free delivery near campus</li>
                    <li>✓ Vegetarian options</li>
                    <li>✓ Pause up to 2x/month</li>
                    <li>✓ Weekly rotating menu</li>
                  </ul>
                </div>
                
                <Button variant="ghost" size="sm" className="w-full">
                  <Link href="/plans">Change Plan</Link>
                </Button>
              </Card>
              
              <div className="mt-6 text-center text-sm text-text-muted">
                <p className="mb-2">Questions? We're here to help!</p>
                <a href="mailto:support@inditiffins.com" className="text-primary hover:text-primary-dark font-medium">
                  support@inditiffins.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
