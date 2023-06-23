'use client';

import { FC, useState } from 'react';
import styles from './accordion.module.css';
import Image from 'next/image';
import arrow from '../../assets/icons/arrow.svg';
import classNames from 'classnames';
import { BoxWrapper } from '../BoxWrapper/BoxWrapper';

interface Props {
    question: string;
    answer: string;
}

export const Accordion: FC<Props> = ({ question, answer }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <BoxWrapper>
            <button className={styles.btn} onClick={() => setIsActive(!isActive)}>
                <div className={styles.questionContainer}>
                    <span className={styles.question}>{question}</span>
                    <Image
                        src={arrow}
                        alt={'arrow'}
                        width={32}
                        height={32}
                        className={classNames(styles.icon, isActive ? styles.rotateIcon : '')}
                    ></Image>
                </div>

                {isActive && (
                    <div className={styles.info}>
                        <span>{answer}</span>
                    </div>
                )}
            </button>
        </BoxWrapper>
    );
};
