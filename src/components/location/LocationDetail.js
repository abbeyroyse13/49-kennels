import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    const { getLocationById, closeLocation } = useContext(LocationContext)

    const [location, setLocation] = useState({})

    const {locationId} = useParams();
    const history = useHistory();

    const handleClosure = () => {
        closeLocation(location.id)
        .then(() => {
            history.push("/locations")
        })
    }

    useEffect(() => {
        console.log("useEffect", locationId)
        getLocationById(locationId)
        .then((response) => {
            setLocation(response)
        })
    }, [])

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
            <button onClick={handleClosure}>Close Location</button>
           <h4 className="location__employeeNumber"> {
            location.employees?.map(employee => {
                return (
                    <>
                        <div>{employee.name}</div>
                    </>
                )
            })
        } </h4>
          <h4 className="location__animalNumber"> {
            location.animals?.map(animal => {
                return (
                    <>
                        <div>{animal.name}</div>
                    </>
                )
            })
        } </h4>
        </section>
    )
}