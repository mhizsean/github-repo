import React, { Component } from 'react';
import {Tabs, Tab, } from 'react-bootstrap'; 

class NavTab extends Component {
    render() {
        return (
            <div className="tab-position"> 
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="tabs">
                    <Tab eventKey="home" title="Overview">
                       
                    </Tab>
                    <Tab eventKey="profile" title="Repositories" className="active"> 
                        
                    </Tab>
                    <Tab eventKey="contact" title="Projects" >
                       
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default NavTab;
