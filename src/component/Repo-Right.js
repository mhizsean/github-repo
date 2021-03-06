import React,{useState} from 'react';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap'
import moment from 'moment';
import SearchFilter from './Search';


/**
* @author
* @function RightRepo
**/

const RightRepo = (props) => {

    const { repos } = props;
    const [input, setInput ] = useState("");
const handleChange= (e) => {
    e.preventDefault()
    setInput(e.target.value);
}

   if (!repos || repos.length  === 0) return <p>No repo found</p>
    else {
    return(
        <div>
            <div className="section-1">
                <div className="row">
                    
                    <div className="col-md-8 filter-search">
                                                
                       <SearchFilter handleChange={handleChange} input={input}/>

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
            {repos.filter(repo=>repo.name.toLowerCase().includes(input.toLowerCase())).map(repo => 
            <div className="section-2" key={repo.id}>
                <div className="repo-data">
                    <div className="repo-name">
                        <h2>{repo.name}</h2>
                                               
                        {/* {isPrivate} */}

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
                                <svg aria-label="star" className="octicon octicon-star" viewBox="0 0 16 16" version="1.1" width="16" height="12" role="img"><path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>{repo.stars}
                            </div>
                            <div className="fork mx-1">
                                <svg aria-label="fork" className="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>{repo.forks}
                            </div>
                            <div className="created-at">
                                Updated {moment(repo.updated_at).fromNow()}

                            </div>

                            
                        </div>
                    </div>
                    
                    <div className="stats">
                        <button className="star">
                            <svg className="octicon octicon-star mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>  star
                        </button>
                    
                    </div>
                </div>


            </div> 
            )};
        </div>
    )
    }   
 }

export default RightRepo