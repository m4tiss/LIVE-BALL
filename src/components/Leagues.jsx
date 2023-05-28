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
            data.map((data)=>(
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