import React from 'react'
import "./work.scss";

const Work = () => {

  const projects = [
    {
      image: "./assets/projeto 1.png",
      name: "Benatural landing page",
      description: "A Landing page for fitness people who <span>love to improve their health and fitness level with a training program that they can follow</span><span class='dot'>.</span>",
      topic: "Landing Page Design",
      link: "https://www.behance.net/gallery/186862223/Benatural-Landing-Page",
      id: 1,
      btnText: 'View Work',
    },
    {
      image: "./assets/projeto 2.png",
      name: "Landing Page",
      description: "A landing page for a online course for <span>people who want to earn and save more money by investing money and knowing the best strategies</span><span class='dot'>.</span>",
      topic: "Landing Page Design",
      link: "https://www.behance.net/gallery/182501207/Landing-Page-Pagina-de-vendas",
      id: 2,
      btnText: 'View Work',
    },
    {
      image: "./assets/projeto 3.png",
      name: "Frontfy Website",
      description: "A Website for a online course for technology lovers <span>who want to improve their skills in front-end development and design</span><span class='dot'>.</span>",
      topic: "Website Design",
      link: "https://www.behance.net/gallery/181847987/Frontfy-Landing-Page",
      id: 1,
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