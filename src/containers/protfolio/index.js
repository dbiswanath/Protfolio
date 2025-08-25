import React, { useState } from "react";
import { MdComputer } from "react-icons/md";
import PageHeaderContent from '../../components/PageHeaderContent';
import Ecommerce from '../../images/Ecommerce.jpg';
import FlowTT from '../../images/FlowTT.jpg';
import textutilities from '../../images/textutilities.jpg';
import game1 from '../../images/game1.png';
import game2 from '../../images/game2.png';
import './style.css';



const protfolioData = [
    {
        id : 1,
        name : 'Ecommerce',
        image : Ecommerce
    },
    {
        id : 1,
        name : 'FlowTT',
        image : FlowTT
    },
    {
        id : 1,
        name : 'Textutilities',
        image : textutilities
    },
    {
        id : 1,
        name : 'Tic-Tac',
        image : game1
    },
    {
        id : 1,
        name : 'Calculator',
        image : game2
    },
] 


const filterData = [
    { filterId: 1, label: "Web Development" },
  ];

const Protfolio = () =>{

    const [filteredValue,setFilteredValue] = useState(1);
    const [hoveredValue,setHoveredValue] = useState(null);


    function handleFilter(currentId){
        setFilteredValue(currentId)
    }

    function handleHover(index){
        setHoveredValue(index)
    }
    
const filterItems = filteredValue === 1 ? protfolioData : protfolioData.filter(item=>item.id===filteredValue)



    return(
         <section id="protfolio" className="protfolio">
            <PageHeaderContent headerText = "My Protfolio" icon={<MdComputer size={40}/>}/>
            <div className="protfolio_content">

                <ul className="protfolio_content-filter">
                    {
                        filterData.map((item)=>(
                            <li className={item.filterId === filteredValue ? 'active' : ''} onClick={()=>handleFilter(item.filterId)} key={item.filterId}>{item.label}</li>
                        ))
                    }
                </ul>
                <div className="protfolio_content_cards">
                    {
                        filterItems.map((item,index)=>(
                            <div className="protfolio_content_cards_item" key={`cardItem${item.name.trim()}`}
                            onMouseEnter={()=>handleHover(index)}
                            onMouseLeave={()=>handleHover(null)}>
                                <div className="protfolio_content_cards_item_img-wrapper">
                                <a>
                                    <img src={item.image} alt="Dummy Data"/>
                                </a>
                                </div>

                                <div className="overlay">
                                    {
                                        index === hoveredValue && (<div>
                                            <p>
                                                {item.name}
                                            </p>
                                            <button>Visit</button>
                                        </div>)
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}
export default Protfolio;