'use client';

import { QUESTIONS_ANSWERS } from '@/utils/constants';
import { FC } from 'react';
import { QuestionsAccordion } from '../Accordion/Accordion';

interface Props {
    data: typeof QUESTIONS_ANSWERS;
}

export const Questions: FC<Props> = ({ data }) => {
    if (data.length === 0) {
        return null;
    }

    return (
        <QuestionsAccordion>
            {data.map(({ question, answer }, idx) => {
                return (
                    <QuestionsAccordion.Group key={idx} question={question} id={idx}>
                        <QuestionsAccordion.Item answer={answer} />
                    </QuestionsAccordion.Group>
                );
            })}
        </QuestionsAccordion>
    );
};
