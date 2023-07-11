import { useState } from 'react';
import './app.css';


function App() {
  const [result, setResult] = useState([]);

  const handleSubmit = (e) => {
    setResult(result.concat(e.target.name));
  };

  const Hclear = () => {
    setResult([]);
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const findResult = (e) => {
    setResult([eval(result.join(''))]);
  };

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result.join('')} />
        </form>

        <div className="keypad">
          <button className="highlight" onClick={Hclear} id="clear">
            Clear
          </button>
          <button className="highlight" onClick={backspace} id="backspace">
            C
          </button>
          <button className="highlight" name="/" onClick={handleSubmit}>
            /
          </button>
          <button name="7" onClick={handleSubmit}>
            7
          </button>
          <button name="8" onClick={handleSubmit}>
            8
          </button>
          <button name="9" onClick={handleSubmit}>
            9
          </button>
          <button className="highlight" name="*" onClick={handleSubmit}>
            *
          </button>
          <button name="4" onClick={handleSubmit}>
            4
          </button>
          <button name="5" onClick={handleSubmit}>
            5
          </button>
          <button name="6" onClick={handleSubmit}>
            6
          </button>
          <button className="highlight" name="-" onClick={handleSubmit}>
            -
          </button>
          <button name="1" onClick={handleSubmit}>
            1
          </button>
          <button name="2" onClick={handleSubmit}>
            2
          </button>
          <button name="3" onClick={handleSubmit}>
            3
          </button>
          <button className="highlight" name="+" onClick={handleSubmit}>
            +
          </button>
          <button name="0" onClick={handleSubmit}>
            0
          </button>
          <button name="." onClick={handleSubmit}>
            .
          </button>
          <button className="highlight" name="=" onClick={findResult} id="result">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
