import React from 'react';
import './About.css';
import Volunteer from '../Volunteer/Volunteer';
import Statistics from '../Statistics/Statistics';
import RecipientMsg from '../RecipientMsg/RecipientMsg';


const About = () => {
    return (
        <div className="text-center">
            <h1 className="big-title">Kalauzan Blood Donor's Association</h1>
            <div className="about-kbda">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, molestias obcaecati expedita suscipit voluptatum doloribus temporibus cum natus id? Quasi magni odit saepe quibusdam architecto porro, itaque necessitatibus dicta illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ea? Porro dolorem et officia perspiciatis eveniet, fugit tenetur soluta nesciunt dicta. A neque alias, exercitationem inventore suscipit magni delectus? Eveniet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt impedit cum possimus mollitia consequatur velit voluptas enim. Consequuntur, provident repellat odit velit iure assumenda est at molestias animi quod soluta.
                </p>
            </div>

            <Volunteer></Volunteer>
            <Statistics></Statistics>
            <RecipientMsg></RecipientMsg>
        </div>
    );
};

export default About;