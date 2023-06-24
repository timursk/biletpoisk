import { FilmCard } from '@/components/FilmCard/FilmCard';
import styles from './film.module.css';
import { Comment } from '@/components/Comment/Comment';

export default function Film() {
    return (
        <div className={styles.container}>
            <FilmCard />
            <Comment />
            <Comment />
            <Comment />
        </div>
    );
}
