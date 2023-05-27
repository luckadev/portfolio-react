import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 

const Home = () => {
  return (
    <div className='container'>
        <h1>Frontend Software Developer, Creator, e Criativo<span>.</span></h1>
        <p>
          Eu me chamo Lucas Ribeiro, atualmente atuo na área de Desenvolvimento Frontend, porém gosto de entender sobre UI Design também. Construo aplicações web avançadas e focadas em performance.
        </p>
        <div className='links'>
          <a href="https://github.com/devlucaspro" target='blank'><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/devlucaspro" target='blank'><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://www.instagram.com/devcodepro" target='blank'><i className="fa-brands fa-instagram"></i></a>
        </div>

        <section className='box'>
          <div>
            <h3>Conheça mais sobre mim!</h3>
            <p>
              Conheça um pouco da minha história e porquê eu decidi querer virar programador.
            </p>
            <Link to='/sobre'>Ver mais <FontAwesomeIcon className='iconBox' icon={faArrowRight} /></Link>
          </div>
          <div>
            <h3>O que eu já desenvolvi?</h3>
            <p>
              Conheça dos novos até mais antigos projetos que eu desenvolvi como programador.
            </p>
            <Link to='/projetos'>Ver mais <FontAwesomeIcon className='iconBox' icon={faArrowRight} /></Link>
          </div>
          <div>
            <h3>Eu ouvi falar em comunidade?!</h3>
            <p>
              Minha comunidade que está crescendo cada dia mais, compartilho dicas e conhecimentos.
            </p>
            <Link to='/posts'>Ver mais <FontAwesomeIcon className='iconBox' icon={faArrowRight} /></Link>
          </div>
        </section>
    </div>
  )
}

export default Home;