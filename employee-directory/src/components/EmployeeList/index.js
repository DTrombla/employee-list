import React, { Component } from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import API from "../../utils/API"


export function EmployeeList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function EmployeeListItem(props) {
 
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.img} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{props.name}</h3>
            <p>
              {props.email}
            </p>
            <p>
              {props.phone}
            </p>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
