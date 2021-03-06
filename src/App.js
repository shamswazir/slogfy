import { CallToAction } from "@material-ui/icons";
import React from "react";
import "./App.css";
import CalltoAction from "./Component/CtA/CalltoAction";
import DetailsPage from "./Component/DetailsPage/DetailsPage";
import ImageCard from "./Component/ImageCard/ImageCard";
//import {Route , Switch} from 'react-router-dom';
import Navbar from "./Component/Navbar/Navbar";
import VideoSlider from "./Component/VideoSlider/VideoSlider";
import Whoweare from "./Component/WhoWeAre/Whoweare";
import Footer from "./Component/Footer/Footer";

import IntroPage from "./Component/IntroPage/IntroPage";
import Courses from "./Component/Courses/Courses";

function App() {
  return (
    <div className="App">
      <Navbar />
      <VideoSlider />
      <Whoweare />
      <Courses />
      <DetailsPage />
      <ImageCard />
      <CalltoAction />

      <Footer />
      {/*} <Switch>
            <Route exact path='' component={} />
            <Route exact path='' component={} />
            
        </Switch>*/}
    </div>
  );
}

export default App;
