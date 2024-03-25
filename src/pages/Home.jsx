import React from 'react'
import {products, frontend, backend, web3} from '../components/Data'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'


function Home() {

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Product Design</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>{Object.getOwnPropertyNames(products).length-1}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Frontend Track </h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{Object.getOwnPropertyNames(frontend).length-1}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Backend Track</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>{Object.getOwnPropertyNames(backend).length-1}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Web3 Track</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>{Object.getOwnPropertyNames(web3).length-1}</h1>
            </div>
        </div>

       
    </main>
  )
}

export default Home