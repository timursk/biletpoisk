'use client';

import { FC, createContext, useCallback, useContext, useState } from 'react';
import styles from './accordion.module.css';
import Image from 'next/image';
import arrow from '../../assets/icons/arrow.svg';
import classNames from 'classnames';
import { BoxWrapper } from '../BoxWrapper/BoxWrapper';
import { defaultQuestionsContextValue } from '@/utils/constants';

const QuestionsContext = createContext(defaultQuestionsContextValue);

interface QuestionsProps {
    children: React.ReactNode;
}
interface GroupProps {
    children: React.ReactNode;
    question: string;
    id: number;
}
interface ItemProps {
    answer: string;
}

type GroupComponent = FC<GroupProps>;
type ItemComponent = FC<ItemProps>;
type QuestionsAccordionComponent = FC<QuestionsProps> & {
    Group: GroupComponent;
    Item: ItemComponent;
};

export const QuestionsAccordion: QuestionsAccordionComponent = ({ children }) => {
    const [activeGroup, setActiveGroup] = useState(-1);

    const switchGroup = useCallback((id: number) => {
        setActiveGroup((activeGroup) => (activeGroup === id ? -1 : id));
    }, []);

    return (
        <QuestionsContext.Provider value={{ activeGroup, switchGroup }}>
            {children}
        </QuestionsContext.Provider>
    );
};

QuestionsAccordion.Group = function QuestionsGroup({ children, question, id }) {
    const { activeGroup, switchGroup } = useContext(QuestionsContext);
    const isActive = activeGroup === id;

    return (
        <BoxWrapper>
            <button className={styles.btn} onClick={() => switchGroup(id)}>
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

                {isActive && <div className={styles.info}>{children}</div>}
            </button>
        </BoxWrapper>
    );
};

QuestionsAccordion.Item = function QuestionsItem({ answer }) {
    return <span>{answer}</span>;
};
