
import './App.css';
import Navbar from './components/Navbar';
// import PropTypes from 'prop-types'
import TextInput from './components/TextInput';



function App() {
  return (
   <div>
  <Navbar title="WordTurn" aboutinfo="About" Homeinfo="Home"/>
  <div className="container my-5 mx-10 " >
  
  <TextInput heading="Let's play with your words" />
  </div>
  </div>
  );
}

export default App;
