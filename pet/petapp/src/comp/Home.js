import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Home () {
  return (
    <>
      <div className='homepage'>
        <Link to="/pastreservation">
          <div className='bene'>
            <p>빠른예약하기(병원 즐겨찾기)</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Home