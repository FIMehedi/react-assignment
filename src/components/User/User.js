import React, { useState, useEffect } from 'react';
import Profile from '../Profile/Profile';
import Aside from '../Aside/Aside';
import './User.css'

const User = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/FIMehedi/c94a90bcac9e25e8d8f720f233a01520/raw/f2ef4fc4a976103318110953749576f27eb4d5c0/users.json')
            .then(response => response.json())
            .then(data => setUser(data.slice(0, 15)));
    }, []);

    const [addedUser, setAddedUser] = useState([]);

    const handleAdd = user => {
        const newUser = [...addedUser, user];
        setAddedUser(newUser);
    }
    
    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-md-10 user-container">
                    <div className="row">
                        {
                            user.map(user => <Profile user={user} handleAdd={handleAdd}></Profile>)
                        }
                    </div>
                </div>
                {/* <!--  --> */}
                <Aside addedUser={addedUser}></Aside>
                {/* <!--  --> */}
                
            </div>
        </div>
    );
};

export default User;