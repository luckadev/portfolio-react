import React from 'react'
import "./work.scss";

const Work = () => {

  const projects = [
    {
      image: "./assets/portfolio-moc.png",
      name: "Portfolio website",
      description: "My portfolio website as a frontend developer <span>and ui designer. Here you can see all my projects and ideas coming true</span><span class='dot'>.</span>",
      topic: "Development & Design",
      link: "https://lucasdeveloper.netlify.app",
      id: 1,
      btnText: 'View Work',
    },
    {
      image: "./assets/thirdeye-lp.png",
      name: "ThirdEye landing page",
      description: "A landing page for a company called ThirdEye <span>what the reason to this company is to provide a better way for payments on web3</span><span class='dot'>.</span>",
      topic: "Development & Design",
      link: "https://thirdeye-devlucas.netlify.app/",
      id: 2,
      btnText: 'View Work',
    },
    {
      image: "./assets/frontcode-moc.png",
      name: "Frontcode web platform",
      description: "A web platform for coding challenges and projects <span>for frontend developers try them out and improve their programming skills</span><span class='dot'>.</span>",
      topic: "Development & Design",
      link: "#",
      id: 1,
      btnText: 'Soon',
    },
    {
      image: "./assets/insta-moc.png",
      name: "Social media posts",
      description: "My Instagram account where i post programming <span>content and ui design tips for beginners, however it's in portuguese</span><span class='dot'>.</span>",
      topic: "Design & Content Creation",
      link: "https://www.instagram.com/ribeiroo.dev",
      id: 2,
      btnText: 'View Work',
    },
  ]

  return (
    <div className='work-div' id='work'>
      <h2>Selected <span>Works</span></h2>
      
      {projects.map((value, index) => (
        <div className={`work-div-flex ${value.id === 2 && "row-reverse"} hidden`} key={index}>
          <div className='image-loading'>
            <img src={value.image} alt={value.name} />
          </div>
          <div className='work-details'>
            <h4>{value.name}</h4>
            <p dangerouslySetInnerHTML={{ __html: value.description }}></p>
            <p className='text-small'>{value.topic}</p>
            <a target='blank' href={value.link}><p>{value.btnText}</p> <i className="fa-solid fa-chevron-right"></i></a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Work;