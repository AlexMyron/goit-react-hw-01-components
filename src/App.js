import './App.css';
import Profile from './components/Profile';
import { name, tag, location, avatar, stats } from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
import friendListData from './components/FriendList/friend-list.json';
import FriendList from './components/FriendList';

function App() {
  return (
    <div className="App">
      {
        <Profile
          name={name}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
      }
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friendListData} />
    </div>
  );
}

export default App;
