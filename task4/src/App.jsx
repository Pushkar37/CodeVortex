import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './cards'
import apj from './apj.png'
import apj2 from './apj2.png'
import apj3 from './apj3.png'
import bg from './bg.png'
function App() {
  let titile=["Books","Achivements","Family"];
  let desc=["A link to books","The achivements of APJ Abdul Kalam","About Family"];
 
  let url=[{apj},{apj3},{apj2}];
  console.log(url)
 return(

   <div >
      <h1>AJP ABDUL KALAM </h1>
      <span className='font'>
        " Missile Man Of India"
        </span>
        <br />
        <br />
        <hr />
        <br />
        <br />
    <div className='image'>
    <img src={bg} alt="" />
    <h4>1931-2015</h4>
    </div>
    <br />
    <br />
    <br />
    <div className='content'>
    <h2 style={{textAlign:'center'}}>Introduction</h2>
    Avul Pakir Jainulabdeen Abdul Kalam , Indian scientist and honorable 11th president (2002-2007) of India stepped to this world on october 15,1931. He played a leading role in devoloping missile and nuclear weapon projects, which rewarded him with a nickname The Missile Man . <br /> <br /> <br />

He was a very simple person who lived an unpretentious lifestyle. He had a keen interest in literature and wrote poems. He never married. He always faced media himself for his failures while let others address for the success. He remained active till the very end. He died while delivering a lecture at the IIM.
<h2 style={{textAlign:'center'}}>Timeline</h2>

1931-Born to a Tamil Muslim family in the pilgrimage centre of Rameswaram on Pamban Island, then in the Madras Presidency and now in the State of Tamil Nadu. <br /> <br />
1954-After completing his education at the Schwartz Higher Secondary School, Ramanathapuram, Kalam went on to attend Saint Joseph's College, Tiruchirappalli, then affiliated with the University of Madras, from where he graduated in physics <br /> <br />
1955-He moved to Madras to study aerospace engineering in Madras Institute of Technology. <br /> <br /> 
1960-After graduating from the Madras Institute of Technology, Kalam joined the Aeronautical Development Establishment of the Defence Research and Development Organisation (DRDO) as a scientist where he started his career by designing a small hovercraft, but remained unconvinced by his choice of a job at DRDO. <br /> <br />
1961-Joined DRDO as a scientist. <br /> <br />
1969-Kalam was transferred to the Indian Space Research Organisation (ISRO) where he was the project director of India's first Satellite Launch Vehicle (SLV-III) which successfully deployed the Rohini satellite in near-earth orbit in July 1980. <br /> <br />
1980-Became the project Director for India's First Indegenous Satellite Program. <br /> <br />
1980-Was involved in the development of several Indegenous Missiles for India like Agni, Prithvi. <br /> <br />
1990-Awarded Padma Vibhushan. <br /> <br />
1992-Kalam started to serve as the Chief Scientific Adviser to the Prime Minister and the Secretary of the Defence Research and Development Organisation. It was this time when the the Pokhran-II nuclear tests were conducted which he played an intensive political and technological role. <br /> <br />
1997-Awarded Bharat Ratna. <br /> <br />
2002-Kalam served as the 11th President of India, succeeding K. R. Narayanan. He won the 2002 presidential election with an electoral vote of 922,884, surpassing the 107,366 votes won by Lakshmi Sahgal. His term lasted from 25 July 2002 to 25 July 2007. <br /> <br />
2012-Kalam launched a programme for the youth of India called the What Can I Give Movement, with a central theme of defeating corruption. <br /> <br />
2015- Kalam travelled to Shillong to deliver a lecture on "Creating a Livable Planet Earth" at the Indian Institute of Management Shillong. While climbing a flight of stairs, he experienced some discomfort, but was able to enter the auditorium after a brief rest.At around 6:35 p.m. IST, only five minutes into his lecture, he collapsed.He was rushed to the nearby Bethany Hospital in a critical condition; upon arrival, he lacked a pulse or any other signs of life.Despite being placed in the intensive care unit, Kalam was confirmed dead of a sudden cardiac arrest at 7:45 p.m IST.His last words, to his aide Srijan Pal Singh, were reportedly: "Funny guy! Are you doing well?" <br /> <br />
    </div>
    <div>

     <Cards titile={titile} desc={desc} url={url}></Cards>
    </div>
    </div>
  );
}

export default App
