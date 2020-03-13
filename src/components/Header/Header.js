import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Aside from '../Aside/Aside';


const Header = () => {
    return (
        <div className="sticky-top">
            <div className="w-100 bg-info text-center">
                <h4 className="p-2 text-center text-light font-weight-bold d-inline-block">USER INFO</h4>
                <div className="d-inline-block ml-auto counter">
                    {/* <span>
                        <FontAwesomeIcon icon={faUser} /> : {console.log(Aside)}
                    </span> */}
                </div>
            </div>
        </div>
    );
};

export default Header;