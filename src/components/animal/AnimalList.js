import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { Animal } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getLocations()
        .then(getCustomers)
        .then(getAnimals)
    }, [])


  return (
    <div className="animals">
      {console.log("AnimalList: Render", animals)}
      {
        animals.map(animal => {
          const owner = customers.find(customer => customer.id === animal.customerId)
          const clinic = locations.find(location => location.id === animal.locationId)
          return <Animal key={animal.id}
                location={clinic}
                customer={owner}
                animal={animal} />
        })
      }
    </div> 
  )
}