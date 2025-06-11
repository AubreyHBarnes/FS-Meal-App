'use client';
import React, { useState, useEffect } from 'react';

type InfiniteSliderProps = {
    categories: { strCategory: string; strCategoryThumb: string }[];
    interval?: number;
};

const SLIDES_TO_SHOW = 3;

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({ interval = 0 }) => {
    const [categories, setCategories] = useState<{ strCategory: string; strCategoryThumb: string }[]>([]);
    const [startIdx, setStartIdx] = useState(0);

    useEffect(() => {
        const fetchCategories = async () => {
            const categoryData = await fetch(`https://www.themealdb.com/api/json/v2/${process.env.MEALDB}/categories.php`);
            const data = await categoryData.json();
            setCategories(data.categories || []);
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        if (!interval || categories.length === 0) return;
        const id = setInterval(() => {
            setStartIdx((prev) => (prev + SLIDES_TO_SHOW) % categories.length);
        }, interval);
        return () => clearInterval(id);
    }, [interval, categories.length]);

    const prevSlide = () => {
        setStartIdx((prev) => (prev - SLIDES_TO_SHOW + categories.length) % categories.length);
    };

    const nextSlide = () => {
        setStartIdx((prev) => (prev + SLIDES_TO_SHOW) % categories.length);
        console.log(categories.length)
    };

    if (!categories.length) return null;

    // Get the three slides, wrapping around if needed
    const visibleSlides = Array.from({ length: SLIDES_TO_SHOW }, (_, i) =>
        categories[(startIdx + i) % categories.length]
    );

    return (
        <div style={{ position: 'relative', width: 400, margin: 'auto' }}>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
                {visibleSlides.map((cat, idx) => (
                    <div key={cat.strCategory} style={{ flex: 1, textAlign: 'center' }}>
                        <img
                            src={cat.strCategoryThumb}
                            alt={cat.strCategory}
                            style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 8 }}
                        />
                        <h4>{cat.strCategory}</h4>
                    </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white border-none rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                aria-label="Previous Slides"
            >
                &#8592;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white border-none rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                aria-label="Next Slides"
            >
                &#8594;
            </button>
            <div className="text-center mt-2">
                {Array.from({ length: Math.ceil(categories.length / SLIDES_TO_SHOW) }).map((_, idx) => {
                    const isActive = Math.floor(startIdx / SLIDES_TO_SHOW) === idx;
                    return (
                        <span
                            key={idx}
                            className={`inline-block w-2 h-2 mx-1 rounded-full ${isActive ? 'bg-gray-800' : 'bg-gray-300'}`}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default InfiniteSlider;