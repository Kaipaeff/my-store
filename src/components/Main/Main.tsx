import UserItem from '../UserItem/UserItem';
import { IMainProps, IUser } from '../../types/Types';
import styles from './Main.module.css';

function Main({ users = [] }: IMainProps) {
  return (
    <main className={styles.main}>
      <ul className={styles.main_title}>
        <li className={styles.title_number}>#</li>
        <li className={styles.title_name}>USERNAME</li>
        <li className={styles.title_count}>TO-DO COUNT</li>
      </ul>

      <ul className={styles.user_list}>
        {users.map((user: IUser, index: number) => (
          <UserItem key={user.id} user={user} index={index} />
        ))}
      </ul>
    </main>
  );
}

export default Main;
