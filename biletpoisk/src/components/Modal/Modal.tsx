import { FC } from 'react';
import styles from './modal.module.css';
import { BoxWrapper } from '../BoxWrapper/BoxWrapper';
import { AcceptBtn } from '../AcceptBtn/AcceptBtn';
import Image from 'next/image';
import close from '../../assets/icons/close.svg';

interface Props {
    onAccept: () => void;
    onDecline: () => void;
}

export const Modal: FC<Props> = ({ onAccept, onDecline }) => {
    return (
        <div className={styles.backdrop} onClick={onDecline}>
            <div className={styles.container}>
                <BoxWrapper>
                    <div className={styles.infoContainer}>
                        <h3 className={styles.infoTitle}>Удаление билета</h3>
                        <span className={styles.infoQuestion}>
                            Вы уверены, что хотите удалить билет?
                        </span>

                        <button className={styles.infoClose} onClick={onDecline}>
                            <Image src={close} alt={'close'} width={16} height={16} />
                        </button>
                    </div>

                    <div className={styles.acceptContainer}>
                        <AcceptBtn isAccept={true} onClick={onAccept} />
                        <AcceptBtn isAccept={false} onClick={onDecline} />
                    </div>
                </BoxWrapper>
            </div>
        </div>
    );
};
