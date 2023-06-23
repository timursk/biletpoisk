import { AcceptBtn } from '@/components/AcceptBtn/AcceptBtn';
import { Accordion } from '@/components/Accordion/Accordion';
import { CountBtn } from '@/components/CountBtn/CountBtn';
import { FilterInput } from '@/components/FilterInput/FilterInput';
import { FilterItem } from '@/components/FilterItem/FilterItem';

export default function Home() {
    return (
        <div>
            test
            <FilterItem />
            <FilterInput />
            <CountBtn isPlus={true} />
            <CountBtn isPlus={false} />
            <AcceptBtn isAccept={true} />
            <AcceptBtn isAccept={false} />
            <Accordion question={'some qiestion'} answer={'answer bla bla'} />
            <Accordion question={'some qiestion'} answer={'answer bla bla'} />
            <Accordion question={'some qiestion'} answer={'answer bla bla'} />
        </div>
    );
}
