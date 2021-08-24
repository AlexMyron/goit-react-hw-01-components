import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => {
        const isOnline = friend.isOnline;
        return (
          <li className={s.item} key={friend.name}>
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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape),
};

export default FriendList;
