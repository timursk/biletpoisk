import styles from './questions.module.css';
import { QUESTIONS_ANSWERS } from '@/utils/constants';
import { Questions } from '@/components/Questions/Questions';

export default function QuestionsPage() {
    return (
        <>
            <div className={styles.titleContainer}>Вопросы и ответы</div>
            <div className={styles.accordionContainer}>
                <Questions data={QUESTIONS_ANSWERS} />
            </div>
        </>
    );
}
