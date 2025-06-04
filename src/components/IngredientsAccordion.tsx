'use client';
import React, { useState, useEffect } from 'react';

interface IngredientsAccordionProps {
    ingredients: { [key: string]: string };
    measurements: { [key: string]: string };
}

const IngredientsAccordion: React.FC<IngredientsAccordionProps> = ({ ingredients, measurements }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Tailwind's md: is 768px and up
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        if (mediaQuery.matches) {
            setIsOpen(true);
        }
        // Listen for screen size changes
        const handler = (e: MediaQueryListEvent) => setIsOpen(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const combineIngredientsAndMeasurements = () => {
        const combined: string[] = [];
        const ingredientKeys = Object.keys(ingredients);
        const measurementKeys = Object.keys(measurements);

        ingredientKeys.forEach((key, index) => {
            const ingredient = ingredients[key];
            const measurement = measurementKeys[index] ? measurements[measurementKeys[index]] : '';
            combined.push(measurement ? `${measurement} ${ingredient}` : ingredient);
        });

        return combined;
    };

    const combinedList = combineIngredientsAndMeasurements();

    return (
        <div className="accordion bg-indigo-50 rounded-lg shadow-md p-4">
            <button
                onClick={toggleAccordion}
                className="accordion-header w-full text-left font-semibold text-lg"
                aria-controls="ingredients-accordion-content"
                aria-expanded={isOpen}
                >
                <h3>Ingredients</h3>
            </button>
            <div className={`accordion-content transition-[max-height] duration-300 overflow-hidden ease-in-out ${isOpen ? "max-h-96 overflow-scroll" : "max-h-0"}`}>
                <ul>
                    {combinedList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
};

export default IngredientsAccordion;