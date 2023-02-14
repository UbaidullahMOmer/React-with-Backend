import React, { Component } from 'react';
import axios from 'axios';
import ImageResults from "../imageResults/imageResults";
class Search extends Component {
    state = {
        searchText: '',
        apiUrl: 'https://pixabay.com/api',
        apiKey: '17241914-90da7b93c0ccceb734849dcd1',
        images: []
    };
    onTextChange = (e) => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, () => {
            if (val === '') {
                this.setState({ images: [] });
            }
            else {
                axios
                    .get(
                        `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText
                        }&image_type=photo&safesearch=true`
                    )
                    .then(res => this.setState({ images: res.data.hits }))
                    .catch(err => console.log(err));
            }
        });
    };
    render() {
        console.log(this.state.images);
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/">Disabled</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <input type="text"
                    style=
                    {{
                        width: '70%',
                        padding: '12px 20px',
                        alignItems: "center",
                        margin: '30px',
                        boxSizing: 'border-box',
                        border: 'none',
                        backgroundColor: '#393b3b',
                        color: 'white',
                        borderRadius: '4px'
                    }}
                    placeholder="Search for images"
                    name="searchText"
                    value={this.state.searchText }
                    onChange={this.onTextChange}
                />
                <br />
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null}
            </div>

        )
    }
}



export default Search;