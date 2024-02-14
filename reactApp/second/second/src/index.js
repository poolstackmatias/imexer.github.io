import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {videos} from './data.js';
import { useState } from 'react';
import MyCalendarLibrary from './src'; // 로컬 경로로 라이브러리 임포트

const calendarData = MyCalendarLibrary.generateCalendarData(2024, 2);

const root = ReactDOM.createRoot(document.getElementById('root'));

const VideoList = () => { 
    <h1>My React App with Local Library</h1>
    {/* 라이브러리를 사용한 JSX */}
    <ul>
      {calendarData.map((day, index) => (
        <li key={index}>{day !== null ? day : 'Empty'}</li>
      ))}
    </ul>    
    const [search, setSearch] = useState('')
    return (
        <div className='videoList'>
            <input value={search} onChange={(e)=>{setSearch(e.target.value)}} type='text' className='searchInput' placeholder='Search' ></input>
           {
            videos.map((video) => {
                if(video.title.includes(search)){
                return <Video key={video.id}{...video}></Video>
            } 
            } 
            )
           }
       </div>  
    )
}

const Video = ({id,title,desc,views}) =>{

    const [state, setState] = useState(views)   

    return (
        <div className='video' onClick={()=>{setState(state+1)}} >
            <img src='https://i.ytimg.com/vi/m55PTVUrlnA/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAc1TH1xmf-hB8z41NaU72KrFug_w' alt='shite'></img>
            <div className='videoDesc'>
            <p>{title}</p>
            <p>{desc}</p>
            <p>{state}</p>
            </div>  
        </div>
       
    )
}


root.render(<VideoList></VideoList>);