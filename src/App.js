import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await axios.get("http://localhost:5001/");
        setNews(res.data);
     
      } catch (err) {
        console.log(err);
      }
    };
  getNews();

  }, []);
  
  return (
    <div className="App">
          <h1>
            Test App - Scrapper
          </h1>
          <div className='cards-wrapper'>
          {news && news.map(n => {
          return ( <div className='cards'>
            <p>{n.title}</p>
            <p>{n.price}</p>
            </div>)
          })}
          </div>
    </div>
  );
}

export default App;
