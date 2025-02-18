import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css"
function Footer() {
  return (
    <div className='footer-outer-container'>
      <div className='footer-inner-container'>
        <div className='footer-icons'>
<FacebookIcon/>
<InstagramIcon/>
<YouTubeIcon/>

        </div>
        <div className='footer-data'>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
<div>
  <ul>
    <li>Help center</li>
    <li>Jobs</li>
    <li>cookie preferences</li>
  </ul>
</div>
<div>
  <ul>
    <li>Gift cards</li>
    <li>Terms of Use</li>
    <li>corporate Information</li>
  </ul>
</div>
<div>
  <ul>
    <li>Media center</li>
    <li>Privacy</li>
    <li>Contactus</li>
  </ul>
</div>
        </div>
        <div className='service-code'>
<p>
  service code
</p>
        </div>
        <div className='copy-write'>
&copy;1997-2024 Netflix,Inc
        </div>
      </div>
    </div>
  )
}

export default Footer