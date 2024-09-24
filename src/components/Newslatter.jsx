import React from 'react'

function Newslatter() {
  return (
    <div>
      <section id="newslatter" className="section-p1 section-m1">
        <div className="news">
            <h4>SignUp for newslatter</h4>
            <p>get E-mail update for about your latest shop and <span>speacial offers.</span> </p>

        </div>
        <div className="form">
            <input type="text" placeholder="Your E-mail address" name="E-mail" id="inpit-email"/><button className="normal">Sign Up</button>
        </div>
    </section>
    </div>
  )
}

export default Newslatter
