import React,{useState} from 'react'
import Leagues from './Leagues'
import Tables from './Tables'



const MainSection = () => {


  
const [active,setActive]= useState(false);

  return (
    <div className='main-section'>
        <div className="switch">
            <div className="switch-field switch-leagues" onClick={()=> setActive(true)}>
              <h2 className="text-up" style={{color: active ? '#00ff85': null}}>Leagues</h2>
            </div>
            <div className="switch-field switch-tabels" onClick={()=> setActive(false)}>
                <h2 className="text-up" style={{color: !active ? '#00ff85': null}}>Tabels</h2>
            </div>
        </div>
        {active ? <Leagues/> : <Tables/>}
    </div>
  )
}

export default MainSection