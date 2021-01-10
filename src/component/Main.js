import React from 'react';

import RightRepo from './Repo-Right';
import Repoleft from './RepoLeft';

const Main = (props) => {

           const { repos } = props;
console.log(props)

            return (
                <div className="main-container"> 
                {/* <NavTab/> */}
                    <div className="container main">

                    
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 left">
                              <Repoleft />

                            </div>


                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                                <RightRepo  repos={repos}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }


export default Main;
