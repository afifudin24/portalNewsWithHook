import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NewsList from './components/NewsList';

function App() {
  return (
    <div>
      <NavbarComponent />
      <NewsList />
   </div>
  );
}

export default App;
