import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Leagues = () => {

const [data,setData] = useState([]);

useEffect(()=>{
    axios('https://api-football-standings.azharimm.dev/leagues').then(
        (res)=>{
            setData(res.data.data)
        }
    )
},[])


  return (
    <div className="leagues-container">
        {
            data.filter((league) => (league.id !== 'idn.1' && league.id !== 'uga.1' && league.id !== 'mys.1' && league.id !== 'sgp.1' && league.id !== 'tha.1')).map((data)=>(
               <div key={data.id} className="league-div">
                <img className="league-photo" src={data.logos.light} alt="#" size={5} />
                <div className="text-div">
                <h1 className='data-name'>{data.name}</h1>
                </div>
               </div>
            ))
        }
    </div>
  )
}

export default Leagues