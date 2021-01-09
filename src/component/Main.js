import React, { Component } from 'react';
import NavTab from './NavTab';
import ReactPaginate from 'react-paginate';

import { DropdownButton, Dropdown, Button } from 'react-bootstrap'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch("https://api.github.com/users/mhizsean/repos")
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                repos: json,
            })
        });
    }
    render() {

        const { isLoaded, repos } = this.state;
        
        if (!isLoaded) {
            return <div>Loading</div>
        }

        else {
            return (
                <div className="main-container"> 
                <NavTab/>
                    <div className="container main">

                    
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 left">
                                <div className="avatar">
                                    <img src="https://avatars3.githubusercontent.com/u/49944667?s=460&u=ba1cb9aa44e6cd84b54fe9f10a4974879a93db1e&v=4" alt=""/>
                              
                                   <div className="bio">
                                       <div className="fullname">Adeyi Esther</div>
                                    <div className="username">mhizsean</div>
                                   </div>
                                    
                          

                                  
                                </div> 

                                <div className="status">
                                    <button>working from home</button>
                                </div>
                                 <div className="role">
                                    Frontend Developer
                                </div>

                                <div className="edit-profile">
                                     <button>
                                        Edit profile
                                   </button>
                                </div>
                                   
                                <div>
                                    <span>
                                    <svg class="octicon octicon-people text-gray-light" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path></svg>8 followers
                                    </span>
                                        .
                                    <span>
                                        12 following
                                    </span>
                                        .
                                    <span>
                                        <svg class="octicon octicon-star text-gray-light" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>46
                                    </span>
                                </div>

                                <div className="details">
                                    <div>
                                        <i className="fas fa-map-marker-alt"></i>Lagos, Nigeria
                                    </div>

                                    <div>
                                        <i className="fas fa-envelope"></i>email
                                    </div>

                                    <div>
                                        <i className="fas fa-link"></i>website link
                                    </div>

                                    <div>
                                        <i className="fab fa-twitter"></i>twitter
                                    </div>
                                </div>

                                <div className="highlights">
                                <h4>Highlights</h4>
                                    <span>
                                    <svg class="octicon octicon-north-star text-gray-light mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg> Arctiic Code Vault Contributor
                                    </span>
                                </div>

                            

                            </div>


                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                                <div className="section-1">
                                    <div className="row ">
                                        <div className="col-md-8 filter-search">
                                        
                                            <input type="text" placeholder="Find a repository"/>

                                        </div>
                                        
                                        <div className="col-md-4 filter-btn">
                                        
                                            <DropdownButton id="" title="Type: All">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </DropdownButton>

                                            <DropdownButton id="" title="Language: All">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </DropdownButton>

                                            <Button variant="">New</Button>{' '}

                                        </div>

                                    </div>

                            
                                </div>

                                
                                {repos.map(repo => (
                                    <div className="section-2" key={repo.id}>
                                        <div className="repo-data">
                                            <div className="repo-name">
                                                <h2>{repo.name}</h2> {repo.isPrivate}

                                                <div className="forkedfrom">
                                                    {/* Forked from {} */}
                                                </div>
                                                <div className="description">
                                                    {repo.description}
                                                </div>
                                                
                                                <div className="repo-det">
                                                
                                                    <div className="repo-language">
                                                        {repo.language} 
                                                    
                                                    </div>

                                                   

                                                    <div className="stargazers" style={{marginLeft: "10px"}}>
                                                    <svg aria-label="star" class="octicon octicon-star" viewBox="0 0 16 16" version="1.1" width="16" height="12" role="img"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>{repo.stargazers_count}
                                                    </div>
                                                    <div className="created-at">
                                                        {repo.updated_at}
                                                    </div>

                                                    <div className="fork">
                                                        {repo.forks}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="stats">
                                                <button className="star">
                                                <svg class="octicon octicon-star mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>  star
                                                </button>

                                            
                                            </div>
                                        </div>


                                    </div> 
                                ))};

                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Main;
