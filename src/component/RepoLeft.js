import React, { Component } from 'react'

class Repoleft extends Component {
    render() {
        return (
            <div>
                <div className="avatar">
                    <img src="" alt=""/>
                </div>

                <div className="bio-data">
                    <h1>
                        <span>Adeyi Esther</span>
                        <span>mhizsean</span>
                    </h1>

                    <div className="role">
                        Frontend Developer
                    </div>

                    <button>
                        Edit profile
                    </button>
                </div>

                <div>
                    <span>
                        8 followers
                    </span>

                    <span>
                        12 following
                    </span>

                    <span>
                        *46
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

                <div className="hightlights">
                    <span>
                        Arctiic Code Vault Contributor
                    </span>
                </div>

                <div className="organizations">
                    <span>icon</span>
                </div>
            </div>
        )
    }
}

export default Repoleft
