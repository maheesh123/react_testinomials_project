import React from 'react'
import { useState } from 'react'

const Testinomial = () => {
    const [currentIndex,setCurrentIndex] = useState(0)
    const testinomials =
    [
        {
            quote:"This is the best product i've ever seen",
            author:"Jan doe"
        },
        {
            quote:"I highly recomment this product to everyone",
            author:"Jan smith"
        },
        {
            quote:"This Product has changed my life",
            author:"Latti Maheesh"
        }
    ]
    const handlePrevClick = ()=>{
        setCurrentIndex(
           (currentIndex+testinomials.length-1)%testinomials.length
        )
    }
    const handleNextClick =()=>{
        setCurrentIndex(
            (currentIndex + 1) % testinomials.length
        )
    }
  return (
    <>
    <div className="testinomials">
       <div className="testinomials-quote">{testinomials[currentIndex].quote} </div>
       <div className="testinomials-author">{testinomials[currentIndex].author} </div>
       <testinomials className="testinomials-nav">
        <button onClick={handlePrevClick}>prev</button>
        <button onClick={handleNextClick}>Next</button>
       </testinomials> 
    </div>
    </>
  )
}

export default Testinomial