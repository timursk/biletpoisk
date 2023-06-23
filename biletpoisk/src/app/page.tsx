import { AcceptBtn } from '@/components/AcceptBtn/AcceptBtn';
import { Accordion } from '@/components/Accordion/Accordion';
import { CountBtn } from '@/components/CountBtn/CountBtn';
import { FilterInput } from '@/components/FilterInput/FilterInput';
import { FilterItem } from '@/components/FilterItem/FilterItem';
import { TicketCard } from '@/components/TicketCard/TicketCard';

export default function Home() {
    return (
        <div>
            test
            <FilterItem />
            <FilterInput />
            {/* <CountBtn isPlus={true} callback={() => {}} /> */}
            {/* <CountBtn isPlus={false} callback={() => {}} /> */}
            <AcceptBtn isAccept={true} />
            <AcceptBtn isAccept={false} />
            <Accordion question={'some qiestion'} answer={'answer bla bla'} />
            <Accordion question={'some qiestion'} answer={'answer bla bla'} />
            <Accordion question={'some qiestion'} answer={'answer bla bla'} />
            <TicketCard />
        </div>
    );
}
