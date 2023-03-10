import React from "react";
import { useState, useEffect } from "react";
import { getInitialData } from "./data";
import List from "./List";
import "./styles.css";

const Leaderboard = () => {
    const [data, setData] = useState(getInitialData());
  const doSwitch = () => {
    setData(d => {
      [d[0], d[1]] = [d[1], d[0]];
      d[0].score += 1000;
      d[1].score += 2000;
      return [...d];
    });
  };
  useEffect(() => {
    // const timer = setInterval(() => setData(genNextData()), 1000);
    // return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <h1>Leaderboard</h1>
      <button onClick={doSwitch}>switch</button>
      <List data={data} />
    </div>
  );
}

export default Leaderboard;