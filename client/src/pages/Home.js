import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from '@chakra-ui/core';

class Home extends Component {
    render () {
        return (
            <div className="App">
                <h1>Notifications</h1>
                {/* Link to List.js */}
                <Link to={'./list'}>
                </Link>
            </div>
        );
    }
}
export default Home;