'use client';
import React, { useState, useEffect } from 'react';

interface HeroSlide {
    id: number;
    image: string;
    title: string;
    subtitle: string;
}

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides: HeroSlide[] = [
        {
            id: 1,
            image: '/images/hero-1.jpg',
            title: 'Luxury Collection',
            subtitle: 'Premium Bio-Metal Solutions'
        },
        {
            id: 2,
            image: '/images/hero-1.jpg', // Using same image until you add more
            title: 'Innovative Design',
            subtitle: 'Cutting-Edge Technology'
        },
        {
            id: 3,
            image: '/images/hero-1.jpg', // Using same image until you add more
            title: 'Exceptional Quality',
            subtitle: 'Crafted to Perfection'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative h-screen w-full overflow-hidden bg-[red]">
           <h1 className="text-green-500 text-4xl font-bold">Hero Component</h1>
        </div>
    );
};

export default Hero;