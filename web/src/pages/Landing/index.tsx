import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.svg";
import ladingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./style.css";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Plataforma de estudos online.</h2>
        </div>

        <img
          src={ladingImg}
          alt="Plataforma de estudos online."
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Professor
          </Link>
        </div>
        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração Púrpura" />
        </span>
        <span className="logged-as">
          Logged as {"Guest"}
          <img src={purpleHeartIcon} alt="Coração Púrpura" />
          <button>sign out</button>
        </span>
      </div>
    </div>
  );
}

export default Landing;
