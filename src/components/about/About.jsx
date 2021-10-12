import React, { useContext } from 'react'
import "./about.css"
import Award from "../../img/award.png"
import { ThemeContext } from '../../context';

function About() {

    const theme = useContext(ThemeContext)

    return (
        <div className="about">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.pexels.com/photos/9519451/pexels-photo-9519451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 style={{color: theme.state.darkMode ? "white" : "rgb(41, 41, 41)"}} className="a-title">About Me</h1>
                <p className="a-sub">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis cumque, suscipit quisquam optio sequi sunt eos fugiat quae vero
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolorum qui est dolore ullam praesentium alias sapiente itaque cupiditate ex quasi rem fuga labore delectus ab nostrum? Voluptatibus, animi eaque!
                </p>
                <div className="a-award">
                    <img className="a-award-img" src={Award} alt="" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">
                            International Design Award
                        </h4>
                        <p className="a-award-desc" >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius eveniet est itaque, repudiandae rerum quisquam ipsa unde sequi quos, quae provident officia delectus minus eos cumque saepe enim! Magnam, nobis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
