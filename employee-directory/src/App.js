import React, { useState, useEffect } from "react";
import { EmployeeList, EmployeeListItem } from "./components/EmployeeList";
import { Container, Row, Col } from "./components/Grid";
import Button from "./components/Button"
import API from"./utils/API"
import Input from "./components/Input"
function App() {
  const [employees, setEmployees] = useState([]);
  const[sorted,setSorted]=useState(false)
  const[filter,setFilter]=useState("")
  useEffect(()=>{
    API.getUsers().then(res=>{
      setEmployees(res.data.results)
      console.log(res.data.results)
    })
  },[])
  
    
  

  console.log(employees.map(x => <EmployeeListItem
    name = {x.name}
    email = {x.email}
    phone = {x.phone}
    img = {x.img} /> ))
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
              <Container>
                <Row>
                  <Col size="xs-4 sm-4">
                    <h1>Employee Directory</h1>
                  </Col>
                  <Col size="xs-4 sm-4">
                    <Button 
                    onClick = {()=>{
                      (sorted ===false?setSorted(true):setSorted(false))
                      
                    }}/>
                  </Col>
                  <Col size="xs-4 sm-4">
                    <Input
                    name="stateFilter"
                    type="number"
                    value={filter}
                    onChange={
                      event=>{
                        setFilter(event.target.value)
                        console.log(filter)
                      }
                      
                    }
                    placeholder="Filter by Phone Number"
                    />
                  </Col>
                </Row>
              </Container>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <EmployeeList>
              {
              (sorted===false)?
              employees.filter(x=>x.phone.includes(filter)).map(x => <EmployeeListItem
              key = {employees.indexOf[x]}
              name = {x.name.first +" "+ x.name.last}
              email = {x.email}
              phone = {x.phone}
              img = {x.picture.medium}/>):
              employees.filter(x=>x.phone.includes(filter)).sort((a,b)=>a.name.first>b.name.first?1:-1).map(x => <EmployeeListItem
                key = {employees.indexOf[x]}
                name = {x.name.first +" "+ x.name.last}
                email = {x.email}
                phone = {x.phone}
                img = {x.picture.medium}/>)}
            </EmployeeList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default App;
