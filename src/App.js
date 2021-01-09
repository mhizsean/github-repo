// import './App.css';
// import Footer from './component/Footer';
// import Main from './component/Main';
// import NavBar from './component/NavBar';

// function App() {
//   return (
//     <div className="app">
//       <NavBar/>
//       <Main/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;

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
            console.log(this.state.repos)
        });
    }

    // so we are going to imagine that alot of dat is going to be coming from the repo endpoint and then saved in the stat
    //the nect line of codes will just create a constant// so now iwant to imagine that three thngs came with the data which is title, description, forkDetails
    //so i want to name thedummy constants below 

    render() {

        const { isLoaded, repos } = this.state;
        
        if (!isLoaded) {
            return <div>Loading</div>
        } 
        else {
            return (
                <div className="app">
                    <NavBar/>
                    <NavTab/>
                    {repos.map(repo => 
                        <Main
                          key={repo.id}  
                          name={repo.name}
                          description={repo.description}
                          updated_at={repo.updated_at}
                          language={repo.language}
                        //   avatar={repos.owner.avatar_url}
                          forks={repo.forks}
                          stars={repo.stargazers_count}
                        />
                    )}
                    
                    <Footer/>
                </div>
            )
        }
    }
}


export default App;
