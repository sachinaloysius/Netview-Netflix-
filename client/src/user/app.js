import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import Footer from './Footer'
import RowPoster from './RowPoster'
import {newrelease,popularonNetflix,trendingNow,tvComdey,netflixOrginals} from './url'
import './App.css'

export default function app() {
 
  return (
    <div className='user_container'>
      <div className='header'>{<Navbar/>}</div>
      <div className='main'>
       <Banner/>
       <RowPoster url={newrelease} title='New Releases' />
       <RowPoster url={netflixOrginals} title='Netflix Orginals' />
       <RowPoster url={popularonNetflix} title='Popular on Netflix' />
       <RowPoster url={trendingNow} title='Trending Now' />
       <RowPoster url={tvComdey} title='TV Comedies' />
      </div>
      <div className='footer'>{<Footer/>}</div>
    </div>
  )
}
