import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { AnimalContext } from "./AnimalProvider"
// import { LocationContext } from "../location/LocationProvider"
// import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css" 

export const AnimalList = () => {
  const history = useHistory()
  const { animals, getAnimals } = useContext(AnimalContext)
  // const { locations, getLocations } = useContext(LocationContext)
  // const { customers, getCustomers } = useContext(CustomerContext)

  useEffect(() => {
    console.log("AnimalList: Initial render before data")
      getAnimals()
    // getLocations()
      // .then(getCustomers)
      // .then(getAnimals)
  }, [])


  return (
    <>
      <button onClick={() => { history.push("/animals/create") }}>
        Add Animal
      </button>
      <div className="animals">
        {
          animals.map(animal => {
            return <AnimalCard key={animal.id} animal={animal} />
            // const owner = customers.find(c => c.id === animal.customerId)
            // const location = locations.find(l => l.id === animal.locationId)
            // return <AnimalCard key={animal.id}
            //     location={location}
            //     customer={owner}
            //     animal={animal} />
          })
        }
      </div>
    </>
  )
}