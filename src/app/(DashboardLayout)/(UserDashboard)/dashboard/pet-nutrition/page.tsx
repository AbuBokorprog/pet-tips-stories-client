import NutritionCalculator from '@/src/components/modules/dashboard/NutritionCalculator';
import React from 'react';

export default function PetNutritionPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-default-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Pet Nutrition Calculator
      </h1>
      <div className="mb-6">
        <p className="text-default-600 text-center">
          Calculate the perfect nutrition plan for your furry friend! Whether
          you have a playful pup or a curious cat, we've got you covered.
        </p>
      </div>
      <div className="bg-default-200 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2 text-default-800">
          Why is pet nutrition important?
        </h2>
        <ul className="list-disc list-inside text-default-600">
          <li>Promotes healthy growth and development</li>
          <li>Supports a strong immune system</li>
          <li>Maintains optimal weight and energy levels</li>
          <li>Enhances coat health and skin condition</li>
        </ul>
      </div>
      <NutritionCalculator />
    </div>
  );
}
