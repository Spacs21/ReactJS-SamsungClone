import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./Announce.scss"

const Announce = () => {
  return (
    <div className="announce">
        <div className="container">
            <div className="announcment">
                <p>Join VIP Advantage for $149.99 to get free services and more benefits!
                </p>
                <a href="#">LEARN MORE <MdOutlineKeyboardArrowRight/></a>
            </div>
        </div>
    </div>
  )
}

export default Announce