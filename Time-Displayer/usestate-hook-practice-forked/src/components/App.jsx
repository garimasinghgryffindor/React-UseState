import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  const time = new Date().toLocaleTimeString();
  console.log(time);
  const [now, getTime] = useState(time);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    console.log(newTime);
    getTime(newTime);
  }

  return (
    <div className="container">
      <h1>{now}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
