import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"

// this is where navbar is displayed on the DOM, as well as application views 
// application views is what renders the Home & the other components (such as animals or locations)
export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)