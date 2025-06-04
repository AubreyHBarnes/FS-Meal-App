'use client';

import React, { useState, useEffect } from 'react';

interface AccordionProps {
    title: string;
    description: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Tailwind's md: is 768px and up
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        if (mediaQuery.matches) {
            setIsOpen(true);
        }
        // Optional: Listen for screen size changes
        const handler = (e: MediaQueryListEvent) => setIsOpen(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const formattedDescription = description.replace(/(STEP)/g, '\n$1');

    return (
        <div className="accordion bg-indigo-50 rounded-lg shadow-md p-4">
            <button
                onClick={toggleAccordion}
                className="accordion-header w-full text-left font-semibold text-lg"
                aria-controls="ingredients-accordion-content"
                aria-expanded={isOpen}
            >
                <h3>Directions</h3>
            </button>
            
            <div className={`accordion-content transition-[max-height] duration-300 overflow-hidden ease-in-out ${isOpen ? "max-h-96 overflow-scroll" : "max-h-0"}`}>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Accordion;