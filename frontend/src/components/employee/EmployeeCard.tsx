import React from 'react';

const EmployeeCard = ({ name, role }: { name: string, role: string }) => {
    return (
        <div className="employee-card">
            <h4>{name}</h4>
            <p>{role}</p>
        </div>
    );
};

export default EmployeeCard;
