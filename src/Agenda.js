import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './agenda.css'

const Agenda = () => {

        const [data, setData] = useState([]);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          // Fetch data from API
          axios.get('https://zinny.pythonanywhere.com/api/agendas')
            .then(response => {
              // Set data to state
              setData(response.data);
              setLoading(false);
            })
            .catch(error => {
              // Handle error
              setError(error);
              setLoading(false);
            });
        }, []); // Empty dependency array ensures this effect runs only once
      
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;
      
        

    return(
        <>

            <div className="container">
                
                <div className="title">
                    <h1 className="title-h1">Home Workout</h1>
                    <h2 className="title-h2">Couch Potato</h2>
                </div>

                <div className="main">

                    
                {data.map(item => (
                    <div className="main-exercise">
                        <div className="main-exercise-content">
                            <p>{item.title}</p>
                        </div>
                        <div className="main-exercise-count">
                            <p className="main-exercise-count-p">{item.count}</p>
                        </div>
                    </div>

                ))}

                    





                </div>

                <div className="footer">

                </div>

            </div>

        </>
    )
}

export default Agenda