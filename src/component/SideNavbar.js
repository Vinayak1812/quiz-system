import React from 'react';
import { useState } from 'react';
import './sidenavbar.css';
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import Image from "../asset/logo.png";

const SideNavbar = ({ isOpen }) => {
    const [isClicked, setClick] = useState(false);
    const [isTest, setTest] = useState(false);
    const [isHR, setHR] = useState(false);
    const [data, setData] = useState(null);
    // *************************************
    function handleClick(stateUpdater) {
        stateUpdater(prevState => !prevState);
    }
    const handleSubCategory = async(event, endpoint) =>{
        event.preventDefault();

        try{
            const response = await fetch('http://localhost:8080');
            const result = await response.json();
            setData(result);
        }catch(error){
            console.log('Error fetching data:',error);
        }
        
    }
    return (
        <div className={`${isOpen ? 'sideNav' : 'sideNav-none'} temp`}>
            <div className="logo">
                <img src={Image} alt="QuizTime" width="100px" height="80px"/>
            </div>
            <div className="home">
                <a href="home">Home</a>
            </div>

            {/* **************************** */}
            <hr />
            <div
                onClick={() => handleClick(setClick)}
                className={isClicked ? 'main-category-on' : 'main-category-off'}>
                <div>
                    Aptitude
                </div>
                {isClicked ? <AiFillCaretDown size={20} /> : <AiFillCaretRight size={20} />}

            </div>
            <div className={isClicked ? 'subCategory-visible' : 'subCategory-none'}>
                <a href="#/arithmetic" onClick={(e)=>handleSubCategory(e, 'arithmetic-aptitude')} >Arithmetic Aptitude</a>
                <a href="#/DataInterpretation" onClick={(e)=>handleSubCategory(e, 'data-interpretation')} >Data Interpretation</a>
                <a href="#/VerbalAbility" onClick={(e)=>handleSubCategory(e, 'verble-ability')}>Verbal Ability</a>
            </div>
            <hr />

            {/* **************************** */}
            <div
                onClick={() => handleClick(setTest)}
                className={isTest ? 'main-category-on' : 'main-category-off'}>
                Test Your Self
                {isTest ? <AiFillCaretDown size={20} /> : <AiFillCaretRight size={20} />}
            </div>
            <div className={isTest ? 'subCategory-visible' : 'subCategory-none'}>
                <a href="#/takeTest" onClick={(e)=>handleSubCategory(e, 'take-test')}>Take Test</a>
                <a href="#/generalKnowledge" onClick={(e)=>handleSubCategory(e,'general-knowledge')}>General Knowledge</a>
            </div>
            <hr />

            {/* **************************** */}
            <div
                onClick={() => handleClick(setHR)}
                className={isHR ? 'main-category-on' : 'main-category-off'}>
                HR Prep
                {isHR ? <AiFillCaretDown size={20} /> : <AiFillCaretRight size={20} />}
            </div>
            <div className={isHR ? 'subCategory-visible' : 'subCategory-none'}>
                <a href="#/HRInterview" onClick={(e)=>handleSubCategory(e, 'hr-interview')}>HR Interview</a>
            </div>
            <hr />

        </div>
    )
}

export default SideNavbar