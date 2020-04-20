import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

import { ThemeContext } from "../../context/theme/ThemeContext";
import { AboutMe } from "../AboutMe/AboutMe";
import { Banner } from "../Banner/Banner";
import { Header } from "../Header/Header";

export const Home = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <div id="public">
        <Parallax pages={2}>
          <ParallaxLayer offset={1} speed={1} />
          <Header onClick={toggleTheme} />
          <ParallaxLayer factor={1} offset={0.2} speed={1}>
            <Banner />
          </ParallaxLayer>

          <ParallaxLayer factor={0.5} offset={0.9} speed={1.5}>
            <AboutMe />
          </ParallaxLayer>
        </Parallax>
      </div>
    </React.Fragment>
  );
};
