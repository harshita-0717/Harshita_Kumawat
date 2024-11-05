import React from 'react';
// import Styles from './Home.css';
function Home() {
    return (
    <div>
        <h2>Welcome to the Home Page</h2>
        <p>This is a protected page accessible after login.</p>
        <div className='cards'>
            <marquee>
                <img src="/" alt="image 1" />
                <img src="/" alt="image 2" />
                <img src="/" alt="image 3" />
                <img src="/" alt="image 4" />
            </marquee>
            
        </div>
    </div>
    );
}
export default Home;