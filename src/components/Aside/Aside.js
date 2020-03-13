import React from 'react';
import './Aside.css'

const Aside = (props) => {
    const addedUser = props.addedUser;

    const uniqueAddedUser = Array.from(new Set(addedUser.map(a => a.id)))
        .map(id => {
            return addedUser.find(a => a.id === id)
        });
    
    const totalSalary = uniqueAddedUser.reduce((total, user) => total + user.salary, 0)
    return (
        <div className="col-md-2">
            <div className="w-100 aside">
                <h4 className="text-center">Users Summary</h4>
                <div className="mt-4">
                    <p>Selected user : <span id="counter">{uniqueAddedUser.length}</span></p>
                    <p>Total salary : <span>${totalSalary}</span></p>
                </div>
            </div>
        </div>

    );
};

export default Aside;