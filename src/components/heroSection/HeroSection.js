import React from 'react'
import "./heroSection.css"
import { useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'

const MAX_COUNT_ALLOWED = 1

export const HeroSection = () => {

const [count, setCount] = useState(0)

const handleError = useErrorHandler()

const handleClick = () => {
    try {
        if (count === MAX_COUNT_ALLOWED){
            throw new Error('Count limit exceeded')
        }else{
            setCount((c) => c + 1)
        }
    } catch (e) {
        // console.log('Clickcounter error', e)
        handleError(e)
    }
}

  return (
    <div className='sectionContainer'>
        <div className='leftSection'>
            <div className='together'>Together</div>
            <div className="vct">
                    <img src="./images/swash.png" alt="" />
            </div>
            <div className='caption'>
                <h2>Get to Know Your Favorite Film Stars around the Globe</h2>
                <h5>You can communicate with your preferred Movie Stars whenever you want, anywhere, Thanks to the portal Pmovies.</h5>
                <div className='profilePics'>
                    <img src="./images/profilePics.png" alt="" />
                </div>
            </div>
            <button className='btnLearn' onClick={handleClick}>Double Click</button>
            {/* <div className='aboutUs'>About us</div> */}
        </div>
        <div className='rightSection'>
            <img src="./images/heroSection.png" alt="" />
        </div>
    </div>
  )
}
