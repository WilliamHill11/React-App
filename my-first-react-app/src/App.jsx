import { useState } from 'react';
import './App.css';

function App() {
  const [showText, SetShowText] = useState(false);

  return (
    <div>
      <button onClick={() => SetShowText(!showText)}>Hide/Show Text</button>
      {showText && <h1>This is a text</h1>}
    </div>
  );
}

export default App;
