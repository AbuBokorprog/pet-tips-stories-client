'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input, Select, Button, SelectItem } from '@nextui-org/react';
import jsPDF from 'jspdf';

type FormInputs = {
  petType: string;
  age: number;
  weight: number;
  activityLevel: string;
  healthConditions: string;
};

const NutritionCalculator = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const [petType, setPetType] = useState('');

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const RER = 70 * Math.pow(data.weight, 0.75);
    let MER = RER;

    // Adjusting based on activity level
    switch (data.activityLevel) {
      case 'inactive':
        MER = 1.0 * RER;
        break;
      case 'active':
        MER = 1.6 * RER;
        break;
      case 'growing':
        MER = 2.5 * RER;
        break;
      case 'lactating':
        MER = 3.0 * RER;
        break;
      default:
        MER = 1.0 * RER;
    }

    // Calculate Protein and Fat Requirements
    const proteinPercentage = 0.2;
    const fatPercentage = 0.1;

    const protein = (MER * proteinPercentage) / 4;
    const fat = (MER * fatPercentage) / 9;

    generatePDF(data, { calories: MER, protein, fat });
  };

  const generatePDF = (
    data: FormInputs,
    nutritionData: { calories: number; protein: number; fat: number }
  ) => {
    const doc = new jsPDF('p', 'mm', 'a4');

    // Draw background color
    doc.setFillColor(255, 228, 196); // Light peach background
    doc.rect(0, 0, 210, 297, 'F'); // Full page

    // Add pet image
    // const img = new Image();
    // img.src =
    //   'https://img.freepik.com/free-photo/view-cats-dogs-being-friends_23-2151806250.jpg?t=st=1728289991~exp=1728293591~hmac=fd144c8aaeb2cd4798e940dee041225699f685720ba162cbb908e57489620232&w=1380';
    // img.onload = () => {
    //   doc.addImage(img, 'JPEG', 10, 20, 60, 60); // X, Y, Width, Height
    // };

    // Add Title with Colorful Text
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(50, 50, 255); // Blue
    doc.setFontSize(22);
    doc.text('Pet Nutrition Report', 80, 30);

    // Pet Information Section
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0); // Black text
    doc.text(`Pet Type: ${data.petType}`, 10, 100);
    doc.text(`Age: ${data.age} Months`, 10, 110);
    doc.text(`Weight: ${data.weight} Kg`, 10, 120);
    doc.text(`Activity Level: ${data.activityLevel}`, 10, 130);
    doc.text(`Health Conditions: ${data.healthConditions}`, 10, 140);

    // Add Nutrition Calculations
    doc.setTextColor(255, 0, 0); // Red for emphasis
    doc.text(
      `Calories: ${nutritionData.calories.toFixed(2)} kcal/day`,
      10,
      160
    );
    doc.text(`Protein: ${nutritionData.protein.toFixed(2)} g/day`, 10, 170);
    doc.text(`Fat: ${nutritionData.fat.toFixed(2)} g/day`, 10, 180);

    // Save the PDF
    doc.save('pet_nutrition_report.pdf');
  };

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Pet Nutrition Calculator</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Select
          label="Pet Type"
          value={petType}
          onChange={(e) => setPetType(e.target.value)}
        >
          <SelectItem key="dog" value="dog">
            Dog
          </SelectItem>
          <SelectItem key="cat" value="cat">
            Cat
          </SelectItem>
        </Select>
        {errors.petType && (
          <p className="text-red-500">{errors.petType.message}</p>
        )}

        <div className="flex space-x-2">
          <Input
            type="number"
            label="Age"
            placeholder="Enter age in months"
            {...register('age', { required: 'Age is required', min: 0 })}
          />
        </div>
        {errors.age && <p className="text-red-500">{errors.age.message}</p>}

        <div className="flex space-x-2">
          <Input
            type="number"
            label="Weight"
            placeholder="Enter weight in kg"
            {...register('weight', { required: 'Weight is required', min: 0 })}
          />
        </div>
        {errors.weight && (
          <p className="text-red-500">{errors.weight.message}</p>
        )}

        <Select label="Activity Level" {...register('activityLevel')}>
          <SelectItem key="inactive" value="inactive">
            Inactive
          </SelectItem>
          <SelectItem key="active" value="active">
            Active
          </SelectItem>
          <SelectItem key="growing" value="growing">
            Growing
          </SelectItem>
          <SelectItem key="lactating" value="lactating">
            Lactating
          </SelectItem>
        </Select>

        <Input label="Health Conditions" {...register('healthConditions')} />

        <div className="flex justify-center">
          <Button type="submit" color="primary">
            Calculate Nutrition
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NutritionCalculator;
