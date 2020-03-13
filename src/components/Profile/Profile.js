import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Profile = (props) => {
    
    const {name, email, phone, photo, salary} = props.user
    return (
        <div className="col-sm-6">
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={photo} alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">Name : {name}</h4>
                            <p className="card-text">E-Mail : {email}</p>
                            <p className="card-text">Phone : +{phone}</p>
                            <p className="card-text">Annual Salary : ${salary}</p>
                            <div>
                                <button onClick={() => props.handleAdd(props.user)} className="btn btn-success"><FontAwesomeIcon icon={faUserPlus} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;