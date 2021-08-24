import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => {
        const isOnline = friend.isOnline;
        return (
          <li className={s.item}>
            <span
              className={s.isOnline}
              style={isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}
            ></span>
            <img src={friend.avatar} className={s.avatar} alt={friend.name} />
            <span className={s.name}>{friend.name}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
