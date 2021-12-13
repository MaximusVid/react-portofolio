import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        {
          id: 1,
          title: "Education",
          desc:
            <text>Currently studying Computer Science at Bina Nusantara University @Bandung<br />Alumni of SMA Santa Angela Bandung</text>,
        },
        {
          id: 2,
          title: "About",
          desc:
            "Hello, my name is David Permana, an Undergraduate Computer Science Student at Bina Nusantara University Bandung. I'm also a technology enthusiast, gamer, and content creator. Always willing to learn new things to improve my skills, abilities, and knowledge. Volunteering in some organization to lead, educate, and exchange ideas with each other.",
          featured: true,
        },
        {
          id: 3,
          title: "Hobbies",
          desc:
            "Related to Technology, Gaming, All Kinds of Sports"
        },
    ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>About Me</h1>
            <div className="container">
                {data.map(d=>(
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="left">
                            <h2>{d.title}</h2>
                        </div>
                        <div className="right">
                            {d.desc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
