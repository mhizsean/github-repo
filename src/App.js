import { Component } from 'react';
import './App.css';
import Footer from './component/Footer';
import Main from './component/Main';
import NavBar from './component/NavBar';
import NavTab from './component/NavTab';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: null,
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch("https://api.github.com/users/mhizsean/repos")
        .then(res => res.json())
        .then(repos => {
            this.setState({
                isLoaded: true,
                repos: repos,
            });
            console.log(this.state.repos)
        });
    }



    render() {

        const { isLoaded, repos } = this.state;
        
        if (!isLoaded) {
            return <div>Loading...</div>
        }


        else {
            return (
                <div className="app">
                    <NavBar/>
                    <NavTab/>
                        <Main
                            repos={this.state.repos}
                        />
                  
                    
                    <Footer/>
                </div>
            )
        }
    }
}


export default App;

