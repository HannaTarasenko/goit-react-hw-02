import styles from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <div className={styles.container}>
            <img className={styles.friendAvatar}
            src={avatar} 
            alt= "avatar"
            width="48" />
            <p className={styles.friendName}>{name}</p>
            <p className={`${isOnline ? styles.isOnline : styles.isOffline}`}>
            {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    )
}
export default FriendListItem;