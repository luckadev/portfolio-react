import React from 'react'

const Skills = () => {
  return (
    <div className='container'>
      <div className='title-content'>
        <h1>Skills<span>.</span></h1>
        <p>Quais tecnologias eu tenho experiência e uso hoje em dia.</p>
      </div>
      <div className='tech-container'>
        <div className='tech-col'>
          <a target='blank' href="https://react.dev/" title='React'><i className="fa-brands fa-react"></i><span>React</span></a>
          <a target='blank' href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" title='Javascript'><i className="fa-brands fa-js"></i><span>JS</span></a>
          <a target='blank' href="https://styled-components.com/" title='Styled components'><img src="./assets/icon-styled.png" alt="Styled components" /><span>Css-in-Js</span></a>
          <a target='blank' href="https://sass-lang.com/documentation/" title='Sass'><i className="fa-brands fa-sass"></i><span>Sass</span></a>
          <a target='blank' href="https://developer.mozilla.org/en-US/docs/Web/CSS" title='Css'><i className="fa-brands fa-css3-alt"></i><span>Css</span></a>
          <a target='blank' href="https://getbootstrap.com/" title='Bootstrap'><i className="fa-brands fa-bootstrap"></i><span>Bootstrap</span></a>
          <a target='blank' href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" title='Html'><i className="fa-brands fa-html5"></i><span>Html</span></a>
          <a target='blank' href="https://firebase.google.com/?hl=pt-br" title='Firebase'><i className="fa-solid fa-database"></i><span>Firebase</span></a>
          <a target='blank' href="https://www.figma.com/" title='Figma'><i className="fa-brands fa-figma"></i><span>Figma</span></a>
          <a target='blank' href="https://git-scm.com/" title='Git'><img src="./assets/icon-git.png" alt="Git" width='48' /><span>Git</span></a>
          <a target='blank' href="https://www.npmjs.com/" title='Npm'><img src="./assets/icon-npm.png" alt="npm" width='48' /><span>Npm</span></a>
        </div>
      </div>
    </div>
  )
}

export default Skills;