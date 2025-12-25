
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
<p>Enter your name:</p>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>{name && `Hello, ${name}!`}</p>
    </div>
  )
}

export default App
