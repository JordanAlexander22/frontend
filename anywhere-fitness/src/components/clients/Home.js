import React from 'react';

function Home() {
    return (
        <>
        <h1>Anywhere Fitness</h1>   
        <form>
        
        <input
           type="text" 
          // onChange={handleInputChange}
           //value={search}
           name="name"
           tabIndex="0"
           className="search-bar"
           placeHolder="Search for a class"
           autoComplete="on"
        />
        <ul>
            <li>About</li>
            <li>Welcome, John!</li>
        </ul>
        </form>
          </>
    );
  }
  
  export default Home;