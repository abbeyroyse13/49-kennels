import React from "react"
import "./Animal.css"

export const Animal = ({ animal, customer, location }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <address className="location__address">{animal.location.name}</address>
        <div className="animal__owner">{animal.customer.name}</div>
    </section>
)