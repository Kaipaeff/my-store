import userLogo from '../../assets/img/icons/user_logo.png';
import { IUserItemProps } from '../../types/Types';
import styles from './UserItem.module.css';

function UserItem({ user, index }: IUserItemProps) {
  return (
    <li className={styles.user_item}>
      <span className={styles.item_number}>{index + 1}</span>
      <img src={userLogo} className={styles.item_logo} alt="Иконка пользователя" />
      <div className={styles.item_user_block}>
        <p className={styles.user_block_name}>{user.username}</p>
        <p className={styles.user_block_email}>{user.email}</p>
      </div>
      <span className={styles.item_count}>{user.todoCount}</span>
    </li>
  );
}

export default UserItem;
