import React from 'react'
import logo from './assets/logo.svg'
import Card from './Card';


const Home = ({ property }) => {
    return (
        <div className="page">
            <section>
                <img src={logo} alt="logo" className="App-logo" />
                <h1> React Transition Group breakdown.</h1>
            </section>
            <div className="card-container">
                <Card property={property} />
            </div>
        </div>
    )
}

export default Home;