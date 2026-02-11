import React from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function DeliveryAreasPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="warning" className="mb-6">
            Coming Soon
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Delivery Areas
          </h1>
          <Card className="text-center">
            <div className="py-12">
              <div className="text-6xl mb-6">📍</div>
              <h2 className="text-2xl font-semibold text-text mb-4">
                We're Finalizing Our Delivery Zones
              </h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto mb-6">
                Delivery areas around ASU Tempe campus will be announced soon. We're working to establish the best pickup and delivery locations for students.
              </p>
              <p className="text-text-muted">
                Check back shortly for updates on available delivery zones and pickup points.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
