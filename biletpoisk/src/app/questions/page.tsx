import { Accordion } from '@/components/Accordion/Accordion';
import styles from './questions.module.css';
import { QUESTIONS_ANSWERS } from '@/utils/constants';

export default function Questions() {
    return (
        <>
            <div className={styles.titleContainer}>Вопросы и ответы</div>
            <div className={styles.accordionContainer}>
                {QUESTIONS_ANSWERS.map(({ question, answer }, idx) => (
                    <Accordion key={idx} question={question} answer={answer} />
                ))}
            </div>
        </>
    );
}
