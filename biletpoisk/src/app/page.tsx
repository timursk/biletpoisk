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
        </div>
    );
}
