import React from 'react';
import { Container } from '../ui/Container';

export const Footer = () => {
    return (
        <footer className="border-t border-neutral-200 bg-neutral-50 py-12">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <h3 className="text-lg font-bold text-black">Nur Dhuha</h3>
                        <p className="text-sm text-neutral-500">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/Nurdhuha" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/nur-dhuha" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black transition-colors">LinkedIn</a>
                        <a href="https://www.instagram.com/nurdhuhaam/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black transition-colors">Instagram</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
