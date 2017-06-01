import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Input from 'react-bootstrap/lib/InputGroup';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
require('bootstrap/less/bootstrap.less');


function FieldGroup({id, label, help, type, placeholder}) {
    return (
            <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl type={type} placeholder={placeholder}/>
            </FormGroup> 
           );
}

export default class SearchBar extends React.Component {
    render () {
        return (
                <Navbar collapseOnSelect>
                    <Navbar.Collapse>
                        <Navbar.Form>
                            <Row>
                                <Col xs={4} md={2}>
                                <FieldGroup 
                                    id="dep-city"
                                    type="text"
                                    label="From: "
                                    placeholder="Departure City"
                                />
                                </Col>
                                <Col xs={4} md={2}>
                                <FieldGroup 
                                    id="arr-city"
                                    type="text"
                                    label="To: "
                                    placeholder="Arrive City"
                                />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4} md={2}>
                                <FieldGroup 
                                    id="dep-date"
                                    type="text"
                                    label="Departure Date: "
                                    placeholder="DD/MM/YYYY"
                                />
                                </Col>
                                <Col xs={4} md={2}>
                                <FieldGroup 
                                    id="arr-date"
                                    type="text"
                                    label="Arrive Date: "
                                    placeholder="DD/MM/YYYY"
                                />
                                </Col>
                            </Row>
                            <Row>
                                <Button type="submit">Search</Button>
                            </Row>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
               );
    }
}
