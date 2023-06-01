import React from 'react'
import CL_LOGO from '../assets/cl.png'
import CL_LOGOB from '../assets/clBlack.png'
import EL_LOGO from '../assets/l3.png'
import CONF_LOGO from '../assets/conf2.png'
import ARROW from '../assets/arrow2.png'
import DOUBLEARROW from '../assets/arrow3.png'


const MobileLegend = () => {


    const LegendTable = [
        {
            id:1,
            style: {background: 'blue'},
            child: (
                <>
                CL
                <img src={CL_LOGO} alt="#"style={{ width: '30px', paddingRight: '10px',}} />
                </>
            )
        },
        {
            id:2,
            style: {background: 'lightskyblue', color:'black'},
            child: (
                <>
                CL Q
                <img src={CL_LOGOB} alt="#" style={{ width: '30px', paddingRight: '10px',}}/>
                </>
            ),
        },
        {
            id:3,
            style:{background:'orangered' },
            child:(
                <>
                EL
                <img src={EL_LOGO} alt='#'style={{ width: '20px', paddingRight: '10px',}}/>
                </>
            ),
        },
        {
            id:4,
            style:{background:'orange',color:'black' },
            child:(
                <>
                EL Q
                <img src={EL_LOGO} alt='#'style={{ width: '20px', paddingRight: '10px' }}/>
                </>
            ),
        },
        {
            id:5,
            style:{background:'green'},
            child:(
                <>
                ECL
                <img src={CONF_LOGO} alt='#' style={{ width: '20px', paddingRight: '10px' }}/>
                </>
            ),
        },
        {
            id:6,
            style:{background:'lightgreen',color:'black'},
            child:(
                <>
                ECL Q
                <img src={CONF_LOGO} alt='#' style={{ width: '20px', paddingRight: '10px' }}/>
                </>
            ),
        },
        {
            id:7,
            style:{background:'rgb(211, 28, 135)'},
            child:(
                <>
                RELEG-PFF
                <img src={ARROW} alt='#'style={{ width: '15px', paddingRight: '5px' }}/>
                </>
            ),
        },
        {
            id:8,
            style:{background:'red'},
            child:(
                <>
                RELEG
                <img src={DOUBLEARROW} alt='#'style={{ width: '20px', paddingRight: '5px' }}/>
                </>
            ),
        },
    ]
  return (
    <div className='mobile-legend'>
        <ul className='list-mobile-legend'>
            {LegendTable.map(({id,style,child})=>(
                <li key={id} className='legend-panel-mobile' style={style}>
                    {child}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default MobileLegend