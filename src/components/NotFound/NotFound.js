import React from 'react'
import { Wrapper, BoxNotFound } from './NotFound.styles'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { Home } from 'react-feather'

const Notfound = () => {
  return (
    <Wrapper>
        <StaticImage 
        style={{
            maxWidth: 350,
            // You can set a maximum height for the image, if you wish.
            // maxHeight: 600,
            }}       
         layout="fullWidth"
        alt="Page No Hero"
        src={ "../../images/not-found.svg"}
        formats={["auto", "webp", "avif"]}
        placeholder= "tracedSVG"
         />
        <BoxNotFound>
            <h4 className="HeadNotFound">ยังไม่มีเนื้อหาในหน้านี้</h4>
            <p>หากคุณต้องการกลับไปหน้าหลัก โปรดคลิกกลับไปที่หน้าหลัก</p>
            <Link to="/" className="ButtonToHome"><Home/>กลับไปหน้าหลัก</Link>
        </BoxNotFound>
    </Wrapper>
  )
}

export default Notfound