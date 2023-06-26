import { FC } from 'react';
import styles from './modal.module.css';
import { BoxWrapper } from '../BoxWrapper/BoxWrapper';
import { AcceptBtn } from '../AcceptBtn/AcceptBtn';
import Image from 'next/image';
import close from '@/icons/close.svg';

interface Props {
    title: string;
    question: string;
    onAccept: () => void;
    onDecline: () => void;
}

export const Modal: FC<Props> = ({ title, question, onAccept, onDecline }) => {
    return (
        <div className={styles.backdrop} onClick={onDecline}>
            <div className={styles.container}>
                <BoxWrapper>
                    <div className={styles.infoContainer}>
                        <h3 className={styles.infoTitle}>{title}</h3>
                        <span className={styles.infoQuestion}>{question}</span>

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
