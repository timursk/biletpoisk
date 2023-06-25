import { selectBasketModule } from '@/store/features/basket/selectors';
import { useSelector } from 'react-redux';

export const useGetBasketTotalAmount = () => {
    const basket = useSelector(selectBasketModule);
    const generalCount = Object.values(basket).reduce((prev, curr) => prev + curr, 0);
    return generalCount;
};
