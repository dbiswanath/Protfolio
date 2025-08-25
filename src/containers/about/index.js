import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from '../../components/PageHeaderContent';
import {Animate} from 'react-simple-animate';
import './style.css';
import {DiApple , DiAndroid} from 'react-icons/di';
import {FaDev , FaDatabase} from 'react-icons/fa';


const personalDetails = [
    {
        label : "Name :",
        value : 'Biswanath Das',
    },
    {
        label : "Age :",
        value : '21',
    },
    {
        label : "Address :",
        value : 'Kolkata',
    },
    {
        label : "Email :",
        value : 'dbiswanath073@gmail.com',
    },
    {
        label : "Contact No. :",
        value : '+91 9733448275',
    }
];

const jobSummary = "Hi, I'm [Your Name], a passionate Frontend Developer eager to craft beautiful, user-friendly web experiences. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React.js, I love transforming ideas into interactive and responsive designs.I am constantly learning and staying updated with the latest trends in web development to build efficient, accessible, and visually appealing applications. My goal is to create seamless user experiences while writing clean and maintainable code.";

const About = () =>{
    return(
        <section id="about" className="about">
        <PageHeaderContent headerText = "About Me" icon={<BsInfoCircleFill size={40}/>}/>

        <div className="about_content">
            <div className="about_content_personalWrapper">

            <Animate play duration={1.5} delay={1} start={{
                        transform : 'translateX(-900px)'
                    }}  end={{
                        transform : 'translatex(0px)'
                    }}>
            <h3>
                Front End Developer
            </h3>
            <p>
                {jobSummary}
            </p>
            </Animate>

            <Animate play duration={1.5} delay={1} start={{
                        transform : 'translateX(500px)'
                    }}  end={{
                        transform : 'translatex(0px)'
                    }}>
           <h3 className="personalInformationHeaderText">Personal Information</h3> 
           <ul>
            {
                personalDetails.map((item,i)=>(
                  <li key={i}>
                        <span className="title">{item.label}</span>
                        <span className="value">{item.value}</span>
                  </li>  
                ))
            }
           </ul>
           <button className="button"><a href="https://drive.google.com/file/d/1Ysvd6axyFcyqr-g-zLkYULDX5UVKFOug/view?usp=sharing">Download My Resume</a></button>
           </Animate>
            </div>
            <div className="about_content_servicesWrapper">
            <Animate play duration={1.5} delay={1} start={{
                        transform : 'translateX(600px)'
                    }}  end={{
                        transform : 'translatex(0px)'
                    }}>
                <div className="about_content_servicesWrapper_innerContent">
                <div>
                <FaDev color="var(--blue-theme-main-color)" size={60}/>
                </div>
                <div>
                <FaDatabase color="var(--blue-theme-main-color)" size={60}/>
                </div>
                <div>
                <DiAndroid color="var(--blue-theme-main-color)" size={60}/>
                </div>
                <div>
                <DiApple color="var(--blue-theme-main-color)" size={60}/>
                </div>
                </div>
                </Animate>
                </div>          
        </div>
        </section>
    )
}
export default About;