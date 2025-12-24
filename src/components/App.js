
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
   <input
        type="text"
        value={pname}
        onChange={(e) => setName(e.target.value)}
      />

      {pname && <h2>Hello, {pname}!</h2>}
    </div>
  )
}

export default App
