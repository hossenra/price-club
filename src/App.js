import logo from './logo.svg';
import './App.css';

import Pricing from './components/NavBar/Pricing/Pricing';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';
import NavBar from './components/NavBar/NavBar';
import PhoneBar from './PhoneBar/PhoneBar';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-4xl font-bold underline'>This is a big Header</h1>
      <p>This is just a Paragraph</p>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
