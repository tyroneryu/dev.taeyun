import React from 'react';
import Link from 'next/link';
import styles from './Navigation.module.scss';

const Navigation: React.FC = () => {
    return (
        <nav className={`${styles.navigation} navigation`}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/blog'>Blog</Link>
                </li>
                <li>
                    <Link href='/projects'>Projects</Link>
                </li>
                <li>
                    <Link href='/docs/taeyun-ryu-developer-resume.pdf'>Resume</Link>
                </li>
                <li>
                    <Link href='//github.com/tyroneryu'>GitHub</Link>
                </li>
                <li>
                    <Link href='//www.linkedin.com/in/ryu-tyrone-3a2a36320'>LinkedIn</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
