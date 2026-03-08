import React from 'react';

const EmployeeTable = ({ data }: { data: any[] }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {/* Employee rows will go here */}
            </tbody>
        </table>
    );
};

export default EmployeeTable;
