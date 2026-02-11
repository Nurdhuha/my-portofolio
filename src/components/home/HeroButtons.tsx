"use client";

import { Button } from "@/components/ui/Button";

export const HeroButtons = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex gap-4">
            <Button size="lg" onClick={() => scrollToSection('projects')}>
                View Projects
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('about')}>
                About Me
            </Button>
        </div>
    );
};
