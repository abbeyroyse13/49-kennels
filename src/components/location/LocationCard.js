import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const LocationCard = ({ location }) => (
    <section className="location">
        <h3 className="location__name">
            <Link to={`/locations/detail/${location.id}`}>
                {location.name}
            </Link>
        </h3>
        <div className="location__employeeLength">Employees: {location.employee}</div>
        <div className="location__animalLength">Animals: {location.animal}</div>
    </section>
)