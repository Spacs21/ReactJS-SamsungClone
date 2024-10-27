import React from 'react'
import "./Banner.scss"

const Banner = () => {
  return (
    <article>
        <div className="container">
            <div className="banner">
                <div className="banner__text">
                    <h2>Black Friday is coming</h2>
                    <p>You can grab an amazing deal now.</p>
                    <button>Shop now</button>
                </div>
            </div>
        </div>
    </article>
  )
}

export default Banner