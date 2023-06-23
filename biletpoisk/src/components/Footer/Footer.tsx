'use client';

import { FC } from 'react';
import styles from './footer.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Footer: FC = () => {
    const pathname = usePathname();

    return (
        <footer className={styles.container}>
            <div className={styles.item}>
                {pathname === '/question' ? (
                    <span>Вопросы-ответы</span>
                ) : (
                    <Link href={'/questions'}>Вопросы-ответы</Link>
                )}
            </div>

            <div className={styles.item}>
                {pathname === '/about' ? <span>О нас</span> : <Link href={'/about'}>О нас</Link>}
            </div>
        </footer>
    );
};
