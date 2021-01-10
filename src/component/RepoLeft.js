import React, { Component } from 'react'

export class Repoleft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            isLoaded: false,
        }
    }

    componentDidMount() {



        fetch("https://api.github.com/users/mhizsean")
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                user: json,
            });
            console.log(this.state.user)
        });


    }

render(){
    const user = this.state.user;
   
        const { isLoaded } = this.state;
        
        if (!isLoaded) {
            return <div>Loading</div>
        }

        else {
            
            return (
                <div>            
                {Object.keys(user).map(key => ( 
                    
                <div key={key} >
                    <div className="avatar">
                        <img src="https://avatars3.githubusercontent.com/u/49944667?s=460&u=ba1cb9aa44e6cd84b54fe9f10a4974879a93db1e&v=4" alt=""/>
                                
                        <div className="bio">
                            <div className="fullname">{user.name}</div>
                            <div className="username">{user.login}</div>
                        </div>                  
                    </div> 

                    <div className="status">
                        <button>working from home</button>
                    </div> 
                        <div className="role">
                        {user.bio}
                    </div>

                    <div className="edit-profile">
                            <button>
                            Edit profile
                        </button>
                    </div>
                                    
                    <div>
                        <span>
                        <svg class="octicon octicon-people text-gray-light" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path></svg>{user.followers} followers
                        </span>
                            .
                        <span>
                            {user.following} following
                        </span>
                            .
                        <span>
                            <svg class="octicon octicon-star text-gray-light" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>46
                        </span>
                    </div>

                    <div className="details">
                        <div>
                            <i className="fas fa-map-marker-alt"></i>{user.location}
                        </div>

                        <div>
                            <i className="fas fa-envelope"></i>email
                        </div>

                        <div>
                            <i className="fas fa-link"></i>{user.blog}
                        </div>

                        <div>
                            <i className="fab fa-twitter"></i>{user.twitter_username}
                        </div>
                    </div>

                    <div className="highlights">
                        <h4>Highlights</h4>
                        <span>
                        <svg class="octicon octicon-north-star text-gray-light mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg> Arctiic Code Vault Contributor
                        </span>
                    </div>


                </div>
                ))};
                </div>
            )
        }
    }
}

export default Repoleft
