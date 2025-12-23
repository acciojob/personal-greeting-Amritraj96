
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
    <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name && <h2>Hello, {name}!</h2>}
    </div>
  )
}

export default App
