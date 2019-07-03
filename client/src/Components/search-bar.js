import React from 'react';
import './search-bar.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const SearchBar = () => (
    <div className="col">
        <div className="row" id="title">
            <h2>Search Couch Listings</h2>
        </div>
        <div className="row" id="filters">
                <div className="col">
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">State</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"/>
                </InputGroup>
                </div>
            <div className="col">
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">City</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"/>
                </InputGroup>
            </div>
            <div className="col">
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Zip Code</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"/>
                </InputGroup>
            </div>
        </div>
    </div>
)

export default SearchBar;