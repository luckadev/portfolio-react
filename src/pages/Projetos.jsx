import React from 'react'

const Projetos = () => {

  function openProject(site) {
    window.open(site, 'blank');
  }

  let projetos = [
    {
      name: 'To Do List',
      desc: 'Projeto desenvolvido com React, Router-dom e Firestore do Firebase.',
      capa: './assets/todoproject.png',
      site: 'https://todo-react-lucasdeveloper.netlify.app/',
      icon: 'fa-solid fa-circle-check'
    },
    {
      name: 'Dashboard',
      desc: 'Dashboard para controle de clientes desenvolvido com React, Router-dom, context-api e Firebase.',
      capa: './assets/dashboard.png',
      site: 'https://dashboard-devlucas.netlify.app/',
      icon: 'fa-solid fa-book-open'
    },
    {
      name: 'Talkioo',
      desc: 'Plataforma educacional de inglês feito com React, Router-dom, context-api e Firebase.',
      capa: './assets/talkioo.png',
      site: 'https://talkioo.netlify.app/',
      icon: 'fa-solid fa-globe'
    },
    {
      name: 'Dev Front',
      desc: 'Plataforma onde ofereço desafios para desenvolvedores frontend, feito com html, css e js.',
      capa: './assets/devfront.png',
      site: 'https://devfrontchallenges.netlify.app/',
      icon: 'fa-solid fa-code'
    },
    {
      name: 'Check To Do',
      desc: 'Uma To Do List simples porém salvando os dados no localStorage do usuário, feito com html, css e js.',
      capa: './assets/checktodo.png',
      site: 'https://checktododevlucas.netlify.app/',
      icon: 'fa-solid fa-list'
    },
  ];

  return (
    <div className='container container-col'>
      <div className='title-content'>
        <h1>Projetos que desenvolvi<span>.</span></h1>
        <p>Websites, Aplicações web, SPA's, Sistemas interessantes.</p>
      </div>

      <div className='div-projects'>
        {projetos.map((item, index) => {
          return(
            <div key={index} className='project'>
              <div className='header-project'>
                <i className={item.icon}></i>
                <a className='a-project' href={item.site} target='blank' title='Ver projeto'>{item.name}</a>
              </div>
              <p>{item.desc}</p>
              <img onClick={() => openProject(item.site)} src={item.capa} alt={item.name} title='Clique para ver projeto' />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projetos;