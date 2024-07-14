import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingComponent() {
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

  return (
    <div>
      <h1>Data Fetching with Axios</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingComponent;
