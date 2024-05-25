import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className='Footer_MainContainer'>
      <div className='Fade_Bottom'></div>
      <div className='Holder_footer'> 
        <div className='row_footer'>
          <div>Questions? Call <span style={{textDecoration:'Underline'}}>000-800-919-1694 </span></div>
          <a href="https://help.netflix.com/en/node/412">FAQ</a>
          <a href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relations</a>
          <a href="https://help.netflix.com/legal/privacy">Privacy</a>
          <a href="https://fast.com/">Speed Test</a>
          <button> 开 English</button>
          <div style={{fontSize:'0.85rem'}}>Netflix india</div>
        </div>
        <div className='row_footer'>
        <a href="https://help.netflix.com/en">Help Centre</a>
          <a href="https://jobs.netflix.com/">Jobs</a>
          <a href="">Cookie Preferences</a>
          <a href="https://help.netflix.com/legal/notices">Legal Notices</a>
        </div>
        <div className='row_footer'>
        <a href="/">Account</a>
          <a href="https://help.netflix.com/en/node/14361">Ways to Watch</a>
          <a href="https://help.netflix.com/en/node/134094">Corporate Information</a>
          <a href="https://www.netflix.com/in/browse/genre/839338">Only on Netflix</a>
        </div>
        <div className='row_footer'>
        <a href="https://media.netflix.com/en/">Media Centre</a>
          <a href="https://help.netflix.com/legal/termsofuse">Terms of Uses</a>
          <a href="https://help.netflix.com/en/contactus">Contact Us</a>
        </div>
      </div>
    </div>
  )
}
