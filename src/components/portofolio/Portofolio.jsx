import "./portofolio.scss"
import { useEffect,useState } from "react";
import PortofolioList from "../portofolioList/PortofolioList";
import { featuredPortofolio, webPortofolio, mobilePortofolio, iotPortofolio, contentPortofolio } from "../../data";

export default function Portofolio() {
    const [selected,setSelected] = useState("featured");
    const [data,setData] = useState([]);
        const list = [
            {
                id: "featured",
                title: "Featured",
            },
            {
                id: "web",
                title: "Web App",
            },
            {
                id: "mobile",
                title: "Mobile App",
            },
            {
                id: "iot",
                title: "IoT Project",
            },
            {
                id: "content",
                title: "Content",
            },
        ];

    useEffect(()=>{
        
        switch(selected){
            case "featured":
                setData(featuredPortofolio);
                break;
            case "web":
                setData(webPortofolio);
                break;
            case "mobile":
                setData(mobilePortofolio);
                break;
            case "iot":
                setData(iotPortofolio);
                break;
            case "content":
                setData(contentPortofolio);
                break;
            default:
                setData(featuredPortofolio);
        }

    },[selected])

    return (
        <div className="portofolio" id="portofolio">
            <h1>Portofolio</h1>
            <ul>
                {list.map(item=>(
                    <PortofolioList title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                
                {data.map(d=>(
                    <a href={d.link}>
                        <div className="item">
                            <img src={d.img} alt=""/>
                            <h3>{d.title}</h3>
                        </div>
                    </a>
                ))}
                
            </div>
        </div>
    )
}


