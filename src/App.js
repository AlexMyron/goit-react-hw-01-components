import './App.css';
import Profile from './components/Profile';
import { name, tag, location, avatar, stats } from './components/Profile/user.json';

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
    </div>
  );
}

export default App;
