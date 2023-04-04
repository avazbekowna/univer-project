import React from 'react';
import {BsArrowRight} from "react-icons/bs";
import man from "../../../assets/img/man3.jpg"
import woman from "..//..//../assets/img/womans.jpg"
import child from "..//..//../assets/img/chil1.jpg"
import shoe from "..//..//../assets/img/obuv6.jpg"
import pink from "..//..//../assets/img/pink.png"
import {NavLink} from "react-router-dom";


const MainCategory = () => {

    return (
        <>
            <section id="category">
                <div className="container">
                    <div className="category">
                        <h2>Категории</h2>
                        <div className="category--block">

                            <NavLink to={"/man"}>
                                <div className="category--block__man">

                                    <img className="category--block__man--bg" src={man} alt="img"/>

                                    <div className="category--block__man--one">
                                        <p>Мужская</p>
                                        <BsArrowRight className="category--block__man--one__icon"/>
                                    </div>

                                </div>
                            </NavLink>

                            <NavLink to={"/woman"}>
                                <div className="category--block__woman">
                                    <img className="category--block__woman--bg2" src={woman} alt="img"/>
                                    <div className="category--block__woman--two">
                                        <p>Женская</p>
                                        <BsArrowRight className="category--block__woman--two__icon"/>
                                    </div>
                                </div>
                            </NavLink>


                            <NavLink to={"/children"}>
                                <div className="category--block__child">
                                    <img className="category--block__bg3" src={child} alt="img"/>
                                    <div className="category--block__child--three">
                                        <p>Детская</p>
                                        <BsArrowRight className="category--block__child--three__icon"/>
                                    </div>
                                </div>
                            </NavLink>


                            <NavLink to={"/shoe"}>
                                <div className="category--block__shoe">
                                    <img className="category--block__shoe--bg4" src={shoe} alt="img"/>
                                    <div className="category--block__shoe--four">
                                        <p>Обувь</p>
                                        <BsArrowRight className="category--block__shoe--four__icon"/>
                                    </div>
                                </div>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </section>

        </>

    );
};


export default MainCategory;