import React from 'react'
import CL_LOGO from '../assets/cl.png'
import CL_LOGOB from '../assets/clBlack.png'
import EL_LOGO from '../assets/l3.png'
import CONF_LOGO from '../assets/conf2.png'


const Legend = () => {


    const LegendTable = [
        {
            id:1,
            style: {background: 'blue'},
            child: (
                <>
                Champions League
                <img src={CL_LOGO} alt="#" className='logo-legend'/>
                </>
            )
        },
        {
            id:2,
            style: {background: 'lightskyblue', color:'black'},
            child: (
                <>
                Champions League Qualifcation
                <img src={CL_LOGOB} alt="#" className='logo-legend'/>
                </>
            ),
        },
        {
            id:3,
            style:{background:'orangered' },
            child:(
                <>
                Europa League
                <img src={EL_LOGO} alt='#' className='logo-legend' style={{ width: '30px', paddingRight: '10px',}}/>
                </>
            ),
        },
        {
            id:4,
            style:{background:'orange',color:'black' },
            child:(
                <>
                Europa League Qualifcation 
                <img src={EL_LOGO} alt='#' className='logo-legend' style={{ width: '30px', paddingRight: '10px' }}/>
                </>
            ),
        },
        {
            id:5,
            style:{background:'green'},
            child:(
                <>
                Europa Conference League
                <img src={CONF_LOGO} alt='#' className='logo-legend' style={{ width: '28px', paddingRight: '10px' }}/>
                </>
            ),
        },
        {
            id:6,
            style:{background:'lightgreen',color:'black'},
            child:(
                <>
                Europa Conference League Qualifcation
                <img src={CONF_LOGO} alt='#' className='logo-legend' style={{ width: '28px', paddingRight: '10px' }}/>
                </>
            ),
        },
    ]
  return (
    <div className='position-panel'>
        <ul>
            {LegendTable.map(({id,style,child})=>(
                <li key={id} className='legend-panel' style={style}>
                    {child}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Legend