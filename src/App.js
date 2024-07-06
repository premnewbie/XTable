import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData] =useState(
  [
  
      { date: "2022-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-02", views: 150, article: "Article 2" },
  
      { date: "2023-09-02", views: 120, article: "Article 3" },
  
      { date: "2020-09-03", views: 200, article: "Article 4" }
  
  ]);

  const handleSortByDate = () => 
  {
    let sortedData = data.sort((a, b) => {
      if(new Date(a.date)===new Date(b.date)){
        return b.views-a.views;
      } else{
        return new Date(b.date)-new Date(a.date);
      }
    })
    setData(()=>[...sortedData]);
  }


  const handleSortByViews = () => {
    let sortedData = data.sort((a, b) => 
      {      
      if (a.views === b.views) {
        return new Date(b.date) - new Date(a.date);
      } else {
        return b.views - a.views;
      }
    })
    setData(()=>[...sortedData]);
  }
  
  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={handleSortByDate}>Sort by Date</button>
      <button onClick={handleSortByViews}>Sort by Views</button>
      <table>
        <thead>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </thead>       
        {data?.map((datum) => ( <tr><td>{datum.date}</td><td>{datum.views}</td><tr>{datum.article}</tr></tr>))}        
      </table>
    </div>
  );
}

export default App;
