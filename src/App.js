import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (

    //BEM naming convection
    <div className="app">
      <div className='app_body'>
           <Sidebar/>
           {/* Chat */}

      </div>
    </div>
  );
}

export default App;
