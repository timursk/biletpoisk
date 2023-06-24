import { FC } from 'react';
import styles from './comment.module.css';
import { BoxWrapper } from '../BoxWrapper/BoxWrapper';
import Image from 'next/image';
import avatar from '../../assets/icons/photo.svg';

export const Comment: FC = () => {
    return (
        <BoxWrapper>
            <div className={styles.container}>
                {false ? (
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

                <div>
                    <div className={styles.userContentContainer}>
                        <h4 className={styles.bold}>Роман</h4>
                        <span>
                            Оценка: <span className={styles.bold}>8</span>
                        </span>
                    </div>

                    <p>
                        По счастью мне довелось посмотреть фильм раньше, чем прочесть книгу. Это
                        было около четырех лет назад, но тот момент я вспоминаю и по сей день. До
                        него я не был фанатом Джона Толкина, как впрочем, и всего фентези в целом,
                        однако стоило мне посмотреть первые десять минут фильма и оставшиеся
                        пролетели на одном дыхании. Я словно погрузился в необычайный мир, где добро
                        борется со злом, где зеленые рощи перемежаются с поросшими мхом статуями и
                        древними развалинами, в мир, где пробираясь лесною тропой можно встретить
                        остроухих неувядающих эльфов или мерзких орков – кому как повезет...
                    </p>
                </div>
            </div>
        </BoxWrapper>
    );
};
