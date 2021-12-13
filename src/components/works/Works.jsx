import { useState } from "react";
import "./works.scss"

export default function Works() {
    const [currentSlide,setCurrentSlide] = useState(0);
    const data = [
        {
            id: 1,
            icon: "assets/globe.png",
            title: "Docmed Website",
            desc: "This is final exam project for Human Computer Interaction course. This project require students to be able to design and create working website using html, css, and javascript.",
            img: "assets/DocmedWebsite.PNG",
            link: "https://drive.google.com/drive/folders/14LiKjwB8F20ynwcHYyDUvhlWTL93Su4B?usp=sharing"
        },
        {
            id: 2,
            icon: "assets/mobile.png",
            title: "Note App",
            desc: "This is final project for Mobile Object Oriented Programming course. Create note app using Android Studio (java language) and also developed the storage using SharedPreference,",
            img: "assets/Note.png",
            link: "https://drive.google.com/drive/folders/1WdOUoqsVmtJzXCOa4WS5Zj4dip-0o-rW?usp=sharing"
        },
        {
            id: 3,
            icon: "assets/iot.png",
            title: "E-KTP Smart Door Lock",
            desc: "This IoT project was built using Arduino Uno, ESP8266, RFID Reader, etc. Smart Door Lock which can be unlocked using E-KTP or controlled by smartphone.",
            img: "assets/ArduinoSDL.png",
            link: "https://drive.google.com/drive/folders/1DtLB-pR6cxPuhQd-QcKLp9IjUJF0QvDa?usp=sharing"
        },
    ];

    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map(d => ( 
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    <a href={d.link}><span>Projects</span></a>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}   
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")} />
        </div>
    );
}
