import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js'
import Test from './components/Test'
import Draw from './components/Draw'


function App() {
  return (
    <div className="App">
      <p
        style={{
          fontWeight: "bold",
          color: "pink",
          fontSize: "3rem",
          fontFamily: "Code"
        }}
      
      >L'Ardoise</p>

      <Draw />

      <div className="form_choice_section">
      </div>
    </div>
  );
}

export default App;
