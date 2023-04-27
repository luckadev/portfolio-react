import React, { useEffect } from 'react'

const Projetos = () => {

  let projetos = [
    {
      titulo: 'Check ToDo',
      site: 'https://checktododevlucas.netlify.app/',
      repositorio: 'https://github.com/devlucaspro/checkToDo',
      capa: '/assets/checktodo.png',
    },
    {
      titulo: 'Prime flick',
      site: 'https://primeflick.netlify.app/',
      repositorio: 'https://github.com/devlucaspro/primeflick',
      capa: '/assets/primeflick.png',
    },
    {
      titulo: 'Dev Front',
      site: 'https://devfrontchallenges.netlify.app/',
      repositorio: 'https://github.com/devlucaspro/devfrontchallenges',
      capa: '/assets/devfront.png',
    },
    {
      titulo: 'Card Details',
      site: 'https://carddetails-devfrontchallenges.vercel.app/',
      repositorio: 'https://github.com/devlucaspro/card-details-devfront',
      capa: '/assets/cardDetails.png',
    },
  ]

  useEffect(() => {
    function capa() {
      projetos.map((item, index) => {
        let div = document.getElementById(index)
        div.style.backgroundImage = `url(${item.capa})`
        div.style.backgroundSize = 'cover'
        div.style.backgroundPosition = 'center'
      })
    }
  
    capa()
  }, [])

  

  return (
    <div className='container container-col'>
      <div className='title-content'>
        <h1>Projetos que desenvolvi.</h1>
        <p>Websites, Aplicações web, SPA's, Sistemas interessantes.</p>
      </div>

      <div className='projects-div'>
        {projetos.map((item, index) => {
          return(
            <div key={index} className='project' id={index}>
              <h1>{item.titulo}</h1>
              <div>
                <a href={item.site} className='btn-ver'>Ver</a>
                <a href={item.repositorio} className='btn-repo'>Repositório</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projetos;