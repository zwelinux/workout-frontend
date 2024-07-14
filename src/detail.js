import React from "react"
import './detail.css'

const Detail = () => {
    return(
        <div className="main">

            <div className="title">
                <h1 className="title-h1">Lesson 1</h1>
                <h2 className="title-h2">Push Up x 20</h2>
            </div>
    
            <div className="demo">
                <img src="pushup.png" className="demo-img" />
            </div>
    
    
            <div className="controls">
                <a href="#">
                    <img src="https://www.svgrepo.com/show/512685/previous-999.svg" alt="photo-1" className="controls-img" />
                </a>
                <a href="#">
                    <img src="https://www.svgrepo.com/show/527319/play.svg" className="controls-img" alt="photo-2" />
                </a>
                <a href="#">
                    <img src="https://www.svgrepo.com/show/512548/next-998.svg" className="controls-img" alt="photo-3" />
                </a>
            </div>

        </div>
    )
}

export default Detail