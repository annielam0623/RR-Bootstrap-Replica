import './App.css';
import TopBar from './components/TopBar.js'
import Location from './components/Location.js'
import Browse from './components/Browse.js'

function App() {
  return (
    <div className="Main">
      <TopBar />
      <Location />
      <Browse />
    </div>
  );
}

export default App;
