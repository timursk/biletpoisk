'use client';

import { FC } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import basket from '@/icons/basket.svg';
import { BasketCounter } from '../BasketCounter/BasketCounter';

export const Header: FC = () => {
    const pathname = usePathname();

    return (
        <header className={styles.container}>
            <nav className={styles.nav}>
                <div className={styles.titleContainer}>
                    {pathname === '/' ? (
                        <h1 className={styles.title}>Билетпоиск</h1>
                    ) : (
                        <Link href={'/'} className={styles.title}>
                            Билетпоиск
                        </Link>
                    )}
                </div>

                <div className={styles.basketContainer}>
                    {pathname === '/basket' ? (
                        <>
                            <BasketCounter />
                            <Image src={basket} alt={'basket'} width={32} height={32}></Image>
                        </>
                    ) : (
                        <Link href={'/basket'} className={styles.basketLink}>
                            <Image src={basket} alt={'basket'} width={32} height={32}></Image>
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
};
