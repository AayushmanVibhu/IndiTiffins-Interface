'use client';

import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Select from '@/components/ui/Select';

export default function MenuPage() {
  const [spiceFilter, setSpiceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [mealType, setMealType] = useState('all');
  
  const menuItems = [
    {
      id: 1,
      name: 'Paneer Tikka Masala',
      description: 'Creamy tomato curry with cottage cheese cubes, served with basmati rice',
      category: 'veg',
      mealType: 'dinner',
      spiceLevel: 2,
      protein: 'Medium',
      calories: 420,
    },
    {
      id: 2,
      name: 'Dal Makhani',
      description: 'Black lentils slow-cooked with butter, cream, and aromatic spices',
      category: 'veg',
      mealType: 'dinner',
      spiceLevel: 1,
      protein: 'High',
      calories: 340,
    },
    {
      id: 3,
      name: 'Palak Paneer',
      description: 'Fresh spinach curry with soft cottage cheese, mildly spiced',
      category: 'veg',
      mealType: 'dinner',
      spiceLevel: 1,
      protein: 'Medium',
      calories: 380,
    },
    {
      id: 4,
      name: 'Chole Bhature',
      description: 'Spicy chickpea curry served with fluffy deep-fried bread',
      category: 'veg',
      mealType: 'breakfast',
      spiceLevel: 3,
      protein: 'High',
      calories: 520,
    },
    {
      id: 5,
      name: 'Aloo Gobi',
      description: 'Potato and cauliflower stir-fried with turmeric and spices',
      category: 'veg',
      mealType: 'dinner',
      spiceLevel: 2,
      protein: 'Low',
      calories: 280,
    },
    {
      id: 6,
      name: 'Poha',
      description: 'Flattened rice with peanuts, curry leaves, and spices',
      category: 'veg',
      mealType: 'breakfast',
      spiceLevel: 1,
      protein: 'Low',
      calories: 250,
    },
    {
      id: 7,
      name: 'Masala Dosa',
      description: 'Crispy rice crepe filled with spiced potato, served with chutney',
      category: 'veg',
      mealType: 'breakfast',
      spiceLevel: 2,
      protein: 'Medium',
      calories: 380,
    },
    {
      id: 8,
      name: 'Idli Sambar',
      description: 'Steamed rice cakes with lentil-vegetable stew',
      category: 'veg',
      mealType: 'breakfast',
      spiceLevel: 2,
      protein: 'High',
      calories: 320,
    },
    {
      id: 9,
      name: 'Veg Biryani',
      description: 'Aromatic basmati rice with mixed vegetables and spices',
      category: 'veg',
      mealType: 'dinner',
      spiceLevel: 2,
      protein: 'Medium',
      calories: 450,
    },
    {
      id: 10,
      name: 'Rajma Chawal',
      description: 'Kidney beans curry served with steamed rice',
      category: 'veg',
      mealType: 'dinner',
      spiceLevel: 2,
      protein: 'High',
      calories: 420,
    },
  ];
  
  const filterItems = (items: typeof menuItems) => {
    let filtered = items;
    
    if (mealType !== 'all') {
      filtered = filtered.filter(item => item.mealType === mealType);
    }
    
    if (spiceFilter !== 'all') {
      filtered = filtered.filter(item => item.spiceLevel === parseInt(spiceFilter));
    }
    
    if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'calories') {
      filtered.sort((a, b) => a.calories - b.calories);
    }
    
    return filtered;
  };
  
  const items = filterItems(menuItems);
  
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="success" className="mb-4">
            All Vegetarian Menu
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Breakfast + Dinner Menu
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Fresh, homemade vegetarian dishes prepared daily. Menu rotates weekly. All meals include rice or bread and a side dish.
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <Select
            label="Meal Type"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
            options={[
              { value: 'all', label: 'All Meals' },
              { value: 'breakfast', label: 'Breakfast' },
              { value: 'dinner', label: 'Dinner' },
            ]}
          />
          
          <Select
            label="Spice Level"
            value={spiceFilter}
            onChange={(e) => setSpiceFilter(e.target.value)}
            options={[
              { value: 'all', label: 'All Spice Levels' },
              { value: '1', label: '🌶️ Mild' },
              { value: '2', label: '🌶️🌶️ Medium' },
              { value: '3', label: '🌶️🌶️🌶️ Spicy' },
            ]}
          />
          
          <Select
            label="Sort By"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            options={[
              { value: 'name', label: 'Name' },
              { value: 'calories', label: 'Calories' },
            ]}
          />
        </div>
        
        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card key={item.id} hover>
              <div className="w-full h-48 rounded-xl mb-4 bg-gradient-to-br from-green-400 to-green-600" />
              
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="success">
                  🌿 Vegetarian
                </Badge>
                <Badge variant="default">
                  {'🌶️'.repeat(item.spiceLevel)}
                </Badge>
                <Badge variant="info">
                  {item.mealType === 'breakfast' ? '🌅 Breakfast' : '🌙 Dinner'}
                </Badge>
              </div>
              
              <h3 className="text-lg font-semibold text-text mb-2">{item.name}</h3>
              <p className="text-sm text-text-muted mb-4">{item.description}</p>
              
              <div className="flex items-center justify-between text-sm text-text-muted">
                <span>{item.calories} cal</span>
                <span className="text-text font-medium">{item.protein} Protein</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
