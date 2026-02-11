import React from 'react';
import { Container } from './Container';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = '' }) => {
    return (
        <section id={id} className={`py-16 md:py-24 lg:py-32 ${className}`}>
            <Container>
                {children}
            </Container>
        </section>
    );
};
