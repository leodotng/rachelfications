import React, { Component } from 'react';
import '../App.css';
import { Button, Text } from '@chakra-ui/core';

class List extends Component {
    // Initialize the state
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getList();
    }
    // Retrieves the list of items from the Express App
    getList = () => {
        fetch('/getList')
            .then(res => res.json())
            .then(list => this.setState({ list }))
    }
    render() {
        const { list } = this.state;
        return (
            <div className="App">
                <Text textAlign={['left', 'center']}>
                    <h1>List of Items</h1>
                </Text>
                <Button variantColor="teal">My List</Button>

                {/* Check to see if any items are found */}
                {list.length ? (
                    <div>
                        {/* Render the list of items */}
                        {list.map((item) => {
                            return (
                                <div className="size">
                                    {item}
                                </div>

                            );
                        })}
                    </div>
                ) : (
                        <div>
                            <h2>No List Items Found</h2>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default List;