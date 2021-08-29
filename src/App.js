import './App.css';
import Profile from './components/Profile';
import { name, tag, location, avatar, stats } from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
import FriendList from './components/FriendList';
import friendListData from './components/FriendList/friend-list.json';
import TransactionHistory from './components/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile name={name} tag={tag} location={location} avatar={avatar} statistics={stats} />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friendListData} />

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
