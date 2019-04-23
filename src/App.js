import React, {Component} from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';
import Header from './components/header_footer/Header';
import Featured from './components/feature';
import VenueNFO from './components/venueinfo';
import Highlight from './components/highlight/';
import Pricing from './components/pricing/';
import Location from './components/location/';
import Footer from './components/header_footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>

                <Element name="featured">
                <Featured/>
                </Element>

                <Element name="venuenfo">
                <VenueNFO/>
                </Element>

                <Element name="highlights">
                    <Highlight/>
                </Element>

                <Element name="pricing">
                <Pricing/>
                </Element>

                <Element name="loction">
                <Location/>
                </Element>

                <Footer/>
            </div>
        );
    }
}
export default App;
