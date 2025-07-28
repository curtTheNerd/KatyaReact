import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './app.css';

import Navbar from "./Components/02 constants/Navbar/Navbar";
import Footer from "./Components/02 constants/Footer/Footer";
// import Home from "./Components/01 pages/Home";
import Work from "./Components/01 pages/Work/Work";
import About from "./Components/01 pages/About";
import CV from "./Components/01 pages/CV";
import Media from "./Components/01 pages/Media";
import ArtistTalks from "./Components/01 pages/ArtistTalks";

import ASongOfUnrequitedLoveForBritain from "./Components/01 pages/Work/Albums/ASongOfUnrequitedLoveForBritain";
import AtelierByThePoliceBridge from "./Components/01 pages/Work/Albums/AtelierByThePoliceBridge";
import FamilyArchive from "./Components/01 pages/Work/Albums/FamilyArchive";
import FoundPast_19_22 from "./Components/01 pages/Work/Albums/FoundPast_19-22";
import FoundPast_22_25 from "./Components/01 pages/Work/Albums/FoundPast_22-25";
import Hamlet from "./Components/01 pages/Work/Albums/Hamlet";
import WhenMyBabushkaJoinedTheReich from "./Components/01 pages/Work/Albums/WhenMyBabushkaJoinedTheReich";
import Picnics from "./Components/01 pages/Work/Albums/Picnics";


const App = () => {
    return (
        <Router>
            <Navbar/>
            
            <Routes>
                
                <Route exact path="/" Component={Work} />
                <Route path="/about" Component={About} />
                <Route path="/cv" Component={CV} />
                <Route path="/media" Component={Media} />
                <Route path="/artistTalks" Component={ArtistTalks} />

                <Route path="/aSongOfUnrequitedLoveForBritain" Component={ASongOfUnrequitedLoveForBritain} />
                <Route path="/atelierByThePoliceBridge" Component={AtelierByThePoliceBridge} />
                <Route path="/familyArchive" Component={FamilyArchive} />
                <Route path="/foundPast_19-22" Component={FoundPast_19_22} />
                <Route path="/foundPast_22-25" Component={FoundPast_22_25} />
                <Route path="/hamlet" Component={Hamlet} />
                <Route path="/whenMyBabushkaJoinedTheReich" Component={WhenMyBabushkaJoinedTheReich} />
                <Route path="/intrudedPicnics" Component={Picnics} />

            </Routes>

            <Footer/>
        </Router>
    )
}

export default App;