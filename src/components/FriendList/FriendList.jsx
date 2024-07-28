import FriendListItem from "../FriendListItem/FriendListItem";
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <li className={styles.friendListItem} key={friend.id}>
          <FriendListItem
            isOnline={friend.isOnline}
            name={friend.name}
            avatar={friend.avatar}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
