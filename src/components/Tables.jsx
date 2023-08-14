import React, { useEffect, useState } from 'react'
import { LineWave } from 'react-loader-spinner'
import axios from 'axios'
import Legend from './Legend';
import MobileLegend from './MobileLegend';

const Tables = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState("eng.1")
  const [selectedYear, setSelectedYear] = useState("2022")

  useEffect(() => {
    setLoading(true);
    axios(`https://api-football-standings.azharimm.dev/leagues/${selectedLeague}/standings?season=${selectedYear}`).then(
      (res) => {
        console.log(res.data.data.standings)
        setData(res.data.data.standings);
      }
    ).finally(() => setLoading(false));
  }, [selectedLeague, selectedYear])

  return (
    <div className='main-div'>
      <MobileLegend/>
      <div className="select-container">
        <select
          name="select-league"
          id="select-league"
          defaultValue={selectedLeague}
          onChange={(e) => setSelectedLeague(e.target.value)}>
          <option value="arg.1">Argentine Liga Profesional de Fútbol</option>
          <option value="aus.1"> Australian A-League</option>
          <option value="bra.1">Brazilian Serie A</option>
          <option value="chn.1">Chinese Super League</option>
          <option value="ned.1">Dutch Eredivisie</option>
          <option value="eng.1">English Premier League</option>
          <option value="fra.1">French Ligue 1</option>
          <option value="ger.1">German Bundesliga</option>
          <option value="ita.1">Italian Serie A</option>
          <option value="jpn.1">Japanese J League</option>
          <option value="mex.1">Mexican Liga BBVA MX</option>
          <option value="por.1">Portuguese Liga</option>
          <option value="rus.1">Russian Premier League</option>
          <option value="esp.1">Spanish Primera División</option>
          <option value="tur.1">Turkish Super Lig</option>
        </select>
        <select
          name="selected-year"
          id="selected-year"
          onChange={(e) => setSelectedYear(e.target.value)}
          defaultValue={selectedYear}>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2022">2023</option>
        </select>
      </div>
      <div className="tables-container">
        {loading ? <LineWave color='#38003C' /> : (
          <div className="phone-container">
            <div className="table-info">
              <div className="index-name">
                <span className="data">
                  #
                </span>
                <span className="data">Name</span>
              </div>
              <div className="stats">
                <span className="data data-info">M</span>
                <span className="data data-info">W</span>
                <span className="data data-info">D</span>
                <span className="data data-info">L</span>
                <span className="data data-info">GD</span>
                <span className="data data-info">P</span>
              </div>
            </div>
            {data.map((data, index) => (
              <div key={data.team.id} 
              className={`table-pos 
              ${data.note && (data.note.description === "Champions League" || data.note.description === "Champions League ")? "champions-league" : ""}
              ${data.note && (data.note.description === "Champions League qualifying" ? "champions-league-qualifying" : "")}
              ${data.note && (data.note.description === "Europa League" || data.note.description === "Europa League ")? "europa-league" : ""}
              ${data.note && data.note.description === "Europa League qualifying" ? "europa-league-qualifying" : ""}  
              ${data.note && data.note.description === "Europa Conference League" ? "conference-league" : ""} 
              ${data.note && data.note.description === "Europa Conference League qualifying" ? "conference-league-qualifying" : ""}  
              ${data.note && (data.note.description === "Relegation playoff" || data.note.description === "Relegation playoffs") ? "relegation-playoff" : ""}
              ${data.note && (data.note.description === "Relegation" || data.note.description === "Relegated") ? "relegation" : "" } `}>
                <div className="index-name">
                  <span className="data">
                    {`${index + 1}.`}
                  </span>
                  <img src={data.team.logos[0].href} alt="#" className="logos" />
                  <span className="data">{data.team.shortDisplayName}</span>
                </div>
                <div className="stats">
                  <span className="data">{data.stats[0].displayValue}</span>
                  <span className="data">{data.stats[7].displayValue}</span>
                  <span className="data">{data.stats[6].displayValue}</span>
                  <span className="data">{data.stats[1].displayValue}</span>
                  <span className="data">{data.stats[2].displayValue}</span>
                  <span className="data">{data.stats[3].displayValue}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Legend/>
    </div>
  )
}

export default Tables