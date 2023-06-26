import { FC } from 'react';
import styles from './comment.module.css';
import { BoxWrapper } from '../BoxWrapper/BoxWrapper';
import Image from 'next/image';
import avatar from '@/icons/photo.svg';
import { Review } from '@/utils/types';

interface Props {
    review: Review;
}

const HAS_AVATAR = false; // на бэке нет аватарок

export const Comment: FC<Props> = ({ review }) => {
    const { id, name, text, rating } = review;

    return (
        <BoxWrapper>
            <div className={styles.container}>
                {HAS_AVATAR ? (
                    <Image src={''} alt={''} width={100} height={100} />
                ) : (
                    <div className={styles.avatarContainer}>
                        <Image
                            className={styles.avatar}
                            src={avatar}
                            alt={'avatar'}
                            width={32}
                            height={32}
                        />
                    </div>
                )}

                <div className={styles.contentContainer}>
                    <div className={styles.userContentContainer}>
                        <h4 className={styles.bold}>{name}</h4>
                        <span>
                            Оценка: <span className={styles.bold}>{rating}</span>
                        </span>
                    </div>

                    <p>{text}</p>
                </div>
            </div>
        </BoxWrapper>
    );
};
