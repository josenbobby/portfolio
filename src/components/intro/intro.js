import React  from "react";
import './intro.css';
import backgroundImage from '../../assets/8893835.jpg';
import { Link } from "react-scroll";
import buttonImage from '../../assets/briefcase.png';

const Intro = () => {
    return (
        <section id='intro' className='intro'>
            <div className="introContent">
                <span className='introTitle'>Hello,</span>
                <span className='introText'>I'm <span className="introName">Santa</span> <br/>Full-stack developer</span>
                <p className="introPara">Preparing for Christmas</p>
                <Link><button className="introButton"><img src={buttonImage} alt="" className="buttonImage"/>View My Work</button></Link>
            </div>
            <img src={backgroundImage} alt="Profile Santa" className='introImage'/>
        </section>
    )
}

export default Intro;   