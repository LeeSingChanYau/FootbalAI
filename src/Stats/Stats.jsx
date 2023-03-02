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
    const [data, setData] = useState(null);

    useEffect(() => {
        let today = new Date();
        let oneWeekFromToday = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
        today = today.toISOString().split('T')[0];
        oneWeekFromToday = oneWeekFromToday.toISOString().split('T')[0];
        console.log(today);
        console.log(oneWeekFromToday);
        const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2022&from='+today+'&to='+oneWeekFromToday;
    
        const fetchData = async () => {
          try {
            const response = await fetch(url, options);
            const json = await response.json();
            setData(json.response);
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


    return(
        <div className="stats-body">
        <h1>Next 7 Days matches</h1>
        {data ? data.map((match, index) => {
            return(
                <div key={index}>
                    <h2>{match.teams.home.name} - {match.teams.away.name}</h2>
                    <h2>{weekday[new Date(match.fixture.date).getDay()] + " " + new Date(match.fixture.date).toLocaleString()}</h2>
                    <button>Place prediction</button>
                    <h3>Our AI score this game 5 - 0</h3>
                    <hr />
                </div>
            )
        }) : <div></div>
        
        }

    </div>
    );
    
}

export default Stats;

