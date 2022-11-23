import React, { Component } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons"; 
import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {useRef } from "react";
import  './home.css'
import img1 from '../images/image1.jpg'



export default class FirstComponent extends Component{
  render(){
    return(
    <div>
     <NavBar/>
     <Main/>
    </div>
    )
  }
}

 function NavBar() {
      const navRef = useRef();
      const showNavBar = () => {
        navRef.current.classList.toggle('responsive-nav');
      }

    return(
      <header>
     <h1>~~Onyinye</h1>
        <nav ref={navRef}>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="mailto:onyinyepatrick84@gmail.com">Contact</a>
         <button className="nav-btn close" onClick={showNavBar} ><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></button> 
        </nav>
        <button className=" responsive-nav nav-btn open" onClick={showNavBar}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
      </header>
    )
  }

  function Main() {
    return(
      <div className="container">
        <div className="main">
            <h3>Hello,</h3>
            <h1>I am Onyinye Patrick</h1>
            <p>I am a frontend developer with passion for designing responsive websites. <br/> Welcome to my portfolio website, where I put my work related to my designs and many more.</p>
            <button><a href="#">Contact Me</a></button>
            <div className="icons">
            <a href="https://github.com/Onyinye-Patrick"><FontAwesomeIcon className="icon" icon={faGithub}></FontAwesomeIcon></a> 
            <a href="https://www.linkedin.com/in/onyinye-patrick-b72159242/"><FontAwesomeIcon className="icon" icon={faLinkedin}></FontAwesomeIcon></a> 
            <a href=""><FontAwesomeIcon className="icon" icon={faTwitter}></FontAwesomeIcon></a> 
            </div>
        </div>
        <div id="about" className="about">
        <h1>About Me</h1>
         <div className="info">
            <img  src={img1}/>
        <p className="profile">I am a young passionate Front-End Developer with good knowledge of HTML, CSS, Javascript and Reactjs. <br/> Building and designing responsive web applications  with captivating landing pages is my forte. <br/> I can also redesign and restructure already built websites and give it a modern but simple look. <br/> I believe in building websites that suites the client's preferences with a simple look as I am a firm believer in the saying <br/> "Less is More"</p>
        </div>
        </div>
        
        

      <div id="projects" className="projects">
        <h1>Projects</h1>
        <div>
          <h5>Splosh Budgeting</h5>
          <p>An app that helps you save  money</p>
          <a href="https://github.com/Onyinye-Patrick/Splosh-budgeting.git"><FontAwesomeIcon className="icon" icon={faGithub}></FontAwesomeIcon></a>
        </div>

        <div>
          <h5>La Caille Restuarant</h5>
          <p>A restuarant website where you can order for food</p>
          <a href="https://github.com/Onyinye-Patrick/mandy-eats.git"><FontAwesomeIcon className="icon" icon={faGithub}></FontAwesomeIcon></a>
        </div>

        <div>
          <h5>Astrantia Gardens</h5>
          <p>A gardener's website where he sells plants and flowers</p>
          <a href="https://github.com/Onyinye-Patrick/Astrantia-garden.git"><FontAwesomeIcon className="icon" icon={faGithub}></FontAwesomeIcon></a>
        </div>
      </div>
        <div id="contact" className="contact">
          <h1>Contact Me</h1>
          <p> I am interested in freelance opportunities and up for collaborations with companies, agencies and individuals. <br/>Need my services? Get in touch, Let's make something great!</p>
          <a href="mailto:onyinyepatrick84@gmail.com"><button>Send a message</button></a> 
        </div>

        <div className="icons">
            <a href="https://github.com/Onyinye-Patrick"><FontAwesomeIcon className="icon" icon={faGithub}></FontAwesomeIcon></a> 
            <a href="https://www.linkedin.com/in/onyinye-patrick-b72159242/"><FontAwesomeIcon className="icon" icon={faLinkedin}></FontAwesomeIcon></a> 
            <a href="https://twitter.com/OnyinyePqtrick"><FontAwesomeIcon className="icon" icon={faTwitter}></FontAwesomeIcon></a> 
            </div>
      </div>

      
    )
  }

 
  