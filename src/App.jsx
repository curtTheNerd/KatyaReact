import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./RootLayout"
import "./app.css"

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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} >

        <Route index element={<Work />} />
        
        <Route path="work" element={<Work />} />
        
        <Route path='aSongOfUnrequitedLoveForBritain' element={<ASongOfUnrequitedLoveForBritain />} />
        <Route path="atelierByThePoliceBridge" element={<AtelierByThePoliceBridge />} />
        <Route path='familyArchive' element={<FamilyArchive />} />
        <Route path='foundPast-19-22' element={<FoundPast_19_22 />} />
        <Route path='foundPast-22-25' element={<FoundPast_22_25 />} />          
        <Route path='hamlet' element={<Hamlet />} />
        <Route path='whenMyBabushkaJoinedTheReich' element={<WhenMyBabushkaJoinedTheReich />} />
        <Route path='intrudedPicnics' element={<Picnics />} />

        <Route path='about' element={<About />} />
        <Route path='CV' element={<CV />} />
        <Route path='media' element={<Media />} />
        <Route path='artistTalks' element={<ArtistTalks />} />
      </Route>   
    )
  )
  return (
    <RouterProvider router={router} />
  );
};

export default App;
