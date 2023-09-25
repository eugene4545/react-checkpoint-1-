// we import all our src components to display in the app
import React from "react";
import Navigation from "./Navigation";
import Heading from "./heading";
import Exc from "./card"
import Bform from "./form"
import CarouselComponent from "./carousel";

// here we put the jsx for each components.
function App() {
    return(
        <>
        <div className="App">   
        <Navigation />
        <Heading />
        <CarouselComponent />
        <Exc />
        <Bform />
        </div>
        </>
    )

    
}

export default App