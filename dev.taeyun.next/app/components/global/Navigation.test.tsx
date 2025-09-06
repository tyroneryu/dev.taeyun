// Navigation.test.tsx
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';
import styles from './Navigation.module.scss';

// Mock next/link
vi.mock('next/link', () => {
    return {
        default: ({
                      children,
                      href,
                  }: {
            children: React.ReactNode;
            href: string;
        }) => {
            return (
                <a href={href} data-testid='next-link'>
                    {children}
                </a>
            );
        },
    };
});

describe('Navigation', () => {
    it('renders all navigation links correctly', () => {
        render(<Navigation />);

        // Check if all navigation links are present
        const links = screen.getAllByTestId('next-link');

        // Check the number of links
        expect(links).toHaveLength(6);

        // Check each link by href and text
        expect(links[0]).toHaveAttribute('href', '/');
        expect(links[0]).toHaveTextContent('Home');

        expect(links[1]).toHaveAttribute('href', '/blog');
        expect(links[1]).toHaveTextContent('Blog');

        expect(links[2]).toHaveAttribute('href', '/projects');
        expect(links[2]).toHaveTextContent('Projects');

        expect(links[3]).toHaveAttribute(
            'href',
            '/docs/andrew-magill-developer-resume.pdf'
        );
        expect(links[3]).toHaveTextContent('Resume');

        expect(links[4]).toHaveAttribute('href', '//github.com/andymagill');
        expect(links[4]).toHaveTextContent('GitHub');

        expect(links[5]).toHaveAttribute(
            'href',
            '//www.linkedin.com/in/andrew-magill'
        );
        expect(links[5]).toHaveTextContent('LinkedIn');
    });

    it('applies the correct CSS classes', () => {
        const { container } = render(<Navigation />);
        const nav = container.querySelector('nav');

        expect(nav).toHaveClass('navigation');
        expect(nav).toHaveClass(styles.navigation);
    });
});
