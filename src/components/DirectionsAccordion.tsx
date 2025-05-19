'use client';

import React, { useState } from 'react';

interface AccordionProps {
    title: string;
    description: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

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
                    <p>{formattedDescription}</p>
                </div>
            
            {/* <style jsx>{`
                .accordion {
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    margin-bottom: 10px;
                }
                .accordion-header {
                    background: #f7f7f7;
                    border: none;
                    padding: 10px;
                    width: 100%;
                    text-align: left;
                    font-size: 16px;
                    cursor: pointer;
                }
                .accordion-content {
                    padding: 10px;
                    background: #fff;
                    border-top: 1px solid #ccc;
                }
            `}</style> */}
        </div>
    );
};

export default Accordion;