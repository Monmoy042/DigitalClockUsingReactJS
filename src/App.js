import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [CTime, setTime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };

  setInterval(UpdateTime, 1000);
  return (
    <>
      <div className="body">
        <h1>{CTime}</h1>
      </div>
    </>
  );
};

export default App;
