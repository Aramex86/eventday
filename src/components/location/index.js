import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12087.555443640455!2d-73.9744877!3d40.7644691!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x61f6aa300ba8339d!2z0J7RgtC10LvRjCDQn9C70LDQt9Cw!5e0!3m2!1sru!2s!4v1556016379529!5m2!1sru!2s"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <div className="location_tag">
                <div>
                    LOCATION
                </div>

            </div>

        </div>
    );
};


export default Location;
