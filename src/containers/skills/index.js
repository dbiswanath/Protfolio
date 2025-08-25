import React from "react";
import { GiSkills } from "react-icons/gi";
import PageHeaderContent from '../../components/PageHeaderContent';
import  {skillsData}  from './utilis.js';
import {Animate, AnimateKeyframes} from 'react-simple-animate';
import {Line} from 'rc-progress';
import './style.css';

const Skills = () =>{
    return(
    <section id="skills" className="skills">
        <PageHeaderContent headerText = "My Skills" icon={<GiSkills size={40}/>}/>

        <div className="skills_content-wrapper">
            {
            skillsData.map((item,i)=>(
            <div key={i} className="skills_content-wrapper_inner-content">
                <Animate play duration={1} delay={.3} start={{
                        transform : 'translateX(-200px)'
                    }}  end={{
                        transform : 'translatex(0px)'
                    }}>
                        <h3 className="skills_content-wrapper_inner-content_category-text">{item.label}</h3>
                        <div className="div">
                            {
                            item.data.map((skillItem,j)=>
                            (<AnimateKeyframes play duration={1} keyframes={["opacity : 1" , "opacity : 0"]} iterationCount={1}>
                                <div className="progressbar-wrapper" key={j}>
                                <p>{skillItem.skillName}</p>
                                <Line percent ={skillItem.percentage} strokeWidth="2" strokeColor="var( --blue-theme-main-color)" trailWidth="2" strokeLinecap="square"/>
                                </div>
                            </AnimateKeyframes>))
                            }
                            </div>
                </Animate>
            </div>
        ))
            }

        </div>
    </section>
    )
}
export default Skills;