import { Header } from '@/components/Header/Header';
import { roboto } from './fonts';
import './globals.css';
import styles from './layout.module.css';
import { Footer } from '@/components/Footer/Footer';
import { ModalsContainer } from '@/components/PortalContainers/ModalsContainer';
import { DropDownContainer } from '@/components/PortalContainers/DropDownContainer';
import { StoreProvider } from '@/store/StoreProvider';

export const metadata = {
    title: 'Билетпоиск',
    description: 'Biletpoisk app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <StoreProvider>
                    <Header />
                    <main className={styles.main}>{children}</main>
                    <Footer />
                    <ModalsContainer />
                    <DropDownContainer />
                </StoreProvider>
            </body>
        </html>
    );
}
