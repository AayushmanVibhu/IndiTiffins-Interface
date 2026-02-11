'use client';

import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function DeliveryAreasPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [requestArea, setRequestArea] = useState('');
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  
  const deliveryAreas = [
    { name: 'Near ASU Tempe (Core Zone)', zip: '85281-85287', deliveryDays: 'Mon-Sat', status: 'active' },
    { name: 'University Dr corridor', zip: 'Tempe', deliveryDays: 'Mon-Sat', status: 'active' },
    { name: 'Apache Blvd corridor', zip: 'Tempe', deliveryDays: 'Mon-Sat', status: 'active' },
    { name: 'Rural Rd corridor', zip: 'Tempe', deliveryDays: 'Mon-Sat', status: 'active' },
    { name: 'Mill Ave / Downtown Tempe', zip: 'Tempe', deliveryDays: 'Mon-Sat', status: 'active' },
    { name: 'Tempe Marketplace area', zip: 'Tempe', deliveryDays: 'Mon-Sat', status: 'active' },
    { name: 'Tempe Town Lake vicinity', zip: 'Tempe', deliveryDays: 'Mon-Sat', status: 'active' },
    { name: 'South Tempe (limited)', zip: 'Tempe', deliveryDays: 'Mon-Sat', status: 'active' },
  ];
  
  const filteredAreas = deliveryAreas.filter(
    (area) =>
      area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.zip.includes(searchQuery)
  );
  
  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSubmitted(true);
    setTimeout(() => {
      setRequestSubmitted(false);
      setRequestArea('');
    }, 3000);
  };
  
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Delivery Areas
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            We deliver fresh homemade meals across ASU Tempe campus and nearby Tempe neighborhoods.
          </p>
        </div>
        
        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <Input
            type="text"
            placeholder="Search by area or corridor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-lg"
          />
        </div>
        
        {/* Pickup Note */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="bg-gradient-to-br from-secondary/5 to-primary/5 border-primary/20">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="font-semibold text-text mb-1">Pickup Option Available</h3>
                <p className="text-sm text-text-muted">
                  <strong>Note:</strong> Exact pickup points coming soon. For now, pickup locations are intentionally vague and will be confirmed after launch.
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredAreas.map((area, index) => (
            <Card key={index} hover>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-text">{area.name}</h3>
                  <p className="text-text-muted text-sm">{area.zip}</p>
                </div>
                <Badge
                  variant={area.status === 'active' ? 'success' : 'warning'}
                >
                  {area.status === 'active' ? 'Active' : 'Coming Soon'}
                </Badge>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-text-muted">
                  <span className="font-medium text-text">Delivery Days:</span>{' '}
                  {area.deliveryDays}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        {filteredAreas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-text-muted mb-4">
              No delivery areas found matching "{searchQuery}"
            </p>
            <p className="text-text-muted">
              Try searching with a different term, or request your area below.
            </p>
          </div>
        )}
        
        {/* Request Area Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <h2 className="text-2xl font-bold text-text mb-4">
              Don't See Your Area?
            </h2>
            <p className="text-text-muted mb-6">
              We're focused on ASU Tempe and nearby neighborhoods. Let us know if we missed your area!
            </p>
            
            {requestSubmitted ? (
              <div className="bg-secondary/10 border border-secondary text-secondary px-4 py-3 rounded-button">
                <p className="font-medium">
                  ✓ Thanks! We'll notify you when we start delivering to your area.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRequestSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Enter your area or corridor name"
                  value={requestArea}
                  onChange={(e) => setRequestArea(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Request This Area
                </Button>
              </form>
            )}
          </Card>
        </div>
        
        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card>
            <div className="text-3xl mb-3">🚚</div>
            <h3 className="text-lg font-semibold text-text mb-2">
              Free Delivery Near Campus
            </h3>
            <p className="text-text-muted text-sm">
              No delivery fees within 2 miles of ASU Tempe. Small fee applies beyond.
            </p>
          </Card>
          
          <Card>
            <div className="text-3xl mb-3">⏰</div>
            <h3 className="text-lg font-semibold text-text mb-2">
              Flexible Time Windows
            </h3>
            <p className="text-text-muted text-sm">
              Lunch: 11:30am–2pm, Dinner: 6–9pm. Choose what works for your schedule.
            </p>
          </Card>
          
          <Card>
            <div className="text-3xl mb-3">📍</div>
            <h3 className="text-lg font-semibold text-text mb-2">
              Pickup Options Coming
            </h3>
            <p className="text-text-muted text-sm">
              Will offer on-campus and near-campus pickup points. Details finalized soon.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
