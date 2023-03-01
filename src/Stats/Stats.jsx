import React from "react";
import "./Stats.css";
import { useEffect, useState } from "react";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '63eec5a4afmsh6264f7af73b4a41p1846c0jsn356a6c62f728',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

  

const Stats = () => {
    useEffect(() => {
        const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2020&from=2021-01-01&to=2021-04-07';
    
        const fetchData = async () => {
          try {
            const response = await fetch(url, options);
            const json = await response.json();
            console.log(json);
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);


    return(
        <div className="stats-body">
        <h1>Today's matches</h1>
        <h2>Man City - Man U</h2>
        <h2>12 PM</h2>
        <button>Place prediction</button>
        <h3>Our AI score this game 5 - 0</h3>

        <h1>Today's matches</h1>
        <h2>Man City - Man U</h2>
        <h2>12 PM</h2>
        <button>Place prediction</button>
        <h3>Our AI score this game 5 - 0</h3>

        <h1>Today's matches</h1>
        <h2>Man City - Man U</h2>
        <h2>12 PM</h2>
        <button>Place prediction</button>
        <h3>Our AI score this game 5 - 0</h3>
    </div>
    );
    
}

export default Stats;

