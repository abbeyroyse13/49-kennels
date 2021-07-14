import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { LocationForm } from "./location/LocationForm"

export const ApplicationViews = () => {
    return (
        // this is almost like a big if statement
        // when it says "yes this is the route" when the right route is targeted, then it renders said specified route
        <>
            {/* Render the location list when http://localhost:3000/ */}
            {/* Because Home = "/", the link with slash will know to go to home */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            {/* <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route> */}

                {/* animal list */}
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>

                            {/* animal form  */}
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

                {/* customer list  */}
            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

                {/* employee list  */}
            <EmployeeProvider>
                    <LocationProvider>
                            <Route exact path="/employees">
                                <EmployeeList />
                            </Route>

                                {/* employee form  */}
                            <Route exact path="/employees/create">
                                <EmployeeForm />
                            </Route>
                    </LocationProvider>
            </EmployeeProvider>

                {/* location list  */}
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>

                    {/* location form  */}
                <Route exact path="/locations/create">
                    <LocationForm />
                </Route>
            </LocationProvider>

        </>
    )
}