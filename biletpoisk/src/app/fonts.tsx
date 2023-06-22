import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['cyrillic'],
    variable: '--font-roboto',
});

const sfpro = localFont({
    src: [
        {
            path: '../assets/SFPro/SFProText-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/SFPro/SFProText-Medium.ttf',
            weight: '600',
            style: 'normal',
        },
    ],
    variable: '--font-sfpro',
});

export { roboto, sfpro };
