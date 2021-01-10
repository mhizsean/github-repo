import React, { useState } from 'react'

/**
* @author
* @function SearchFilter
**/

const SearchFilter = (props) => {

    const { repos } = props;

    const [input, setInput ] = useState("");
    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value);
    }

    // if(input.length > 0) {
    //     repos = repos.filter((i) => {
    //         return i.name.match(input);
    //     })
    // }

    return(
        <div>
             <input 
                type="text" 
                placeholder="Find a repository" 
                onChange={handleChange}
                value={input}

                />
          
            {/* {repos.map((repo, i) => {
                return (
                    <div key={i}>
                        <p>{repo.name}</p>
                    </div>
                )
            })} */}
        </div>
    )

}

export default SearchFilter