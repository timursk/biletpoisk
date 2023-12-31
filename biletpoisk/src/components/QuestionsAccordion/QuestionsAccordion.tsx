'use client';

import { FC, createContext, useCallback, useContext, useState } from 'react';
import styles from './accordion.module.css';
import Image from 'next/image';
import arrow from '@/icons/arrow.svg';
import classNames from 'classnames';
import { BoxWrapper } from '../BoxWrapper/BoxWrapper';
import { defaultQuestionsContextValue } from '@/utils/constants';

const QuestionsContext = createContext(defaultQuestionsContextValue.activeGroup);
const QuestionsSwitcherContext = createContext(defaultQuestionsContextValue.switchGroup);

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
    id: number;
}

interface IconProps {
    id: number;
}

type GroupComponent = FC<GroupProps>;
type ItemComponent = FC<ItemProps>;
type IconComponent = FC<IconProps>;

type QuestionsAccordionComponent = FC<QuestionsProps> & {
    Group: GroupComponent;
    Item: ItemComponent;
    Icon: IconComponent;
};

export const QuestionsAccordion: QuestionsAccordionComponent = ({ children }) => {
    const [activeGroup, setActiveGroup] = useState(-1);

    const switchGroup = useCallback((id: number) => {
        setActiveGroup((activeGroup) => (activeGroup === id ? -1 : id));
    }, []);

    return (
        <QuestionsContext.Provider value={activeGroup}>
            <QuestionsSwitcherContext.Provider value={switchGroup}>
                {children}
            </QuestionsSwitcherContext.Provider>
        </QuestionsContext.Provider>
    );
};

QuestionsAccordion.Group = function QuestionsGroup({ children, question, id }) {
    const switchGroup = useContext(QuestionsSwitcherContext);

    return (
        <BoxWrapper>
            <button className={styles.btn} onClick={() => switchGroup(id)}>
                <div className={styles.questionContainer}>
                    <span className={styles.question}>{question}</span>

                    <QuestionsAccordion.Icon id={id} />
                </div>

                <div className={styles.info}>{children}</div>
            </button>
        </BoxWrapper>
    );
};

QuestionsAccordion.Item = function QuestionsItem({ answer, id }) {
    const activeGroup = useContext(QuestionsContext);
    const isActive = activeGroup === id;

    if (!isActive) {
        return null;
    }

    return <span>{answer}</span>;
};

QuestionsAccordion.Icon = function QuestionsIcon({ id }) {
    const activeGroup = useContext(QuestionsContext);
    const isActive = activeGroup === id;

    return (
        <Image
            src={arrow}
            alt={'arrow'}
            width={32}
            height={32}
            className={classNames(styles.icon, isActive ? styles.rotateIcon : '')}
        ></Image>
    );
};
