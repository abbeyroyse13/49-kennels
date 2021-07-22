import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useParams, useHistory } from "react-router-dom"

export const EmployeeDetail = () => {
  const { getEmployeeById, fireEmployee } = useContext(EmployeeContext)

	const [employee, setEmployee] = useState({})

	const {employeeId} = useParams();
  const history = useHistory();

  const handleDischarge = () => {
    fireEmployee(employee.id)
    .then(() => {
      history.push("/employees")
    })
  }

  useEffect(() => {
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
    .then((response) => {
      setEmployee(response)
    })
  }, [])

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__location"> Location: {employee.location?.name}</div>
      <button onClick={handleDischarge}>Fire Employee</button>
    </section>
  )
}