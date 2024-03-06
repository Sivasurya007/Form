import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/page3.scss';

function EmployeeTable() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get("https://form-3.onrender.com/employees");
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    return (
        <div>
            <h1>Employee Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee ID</th>
                        <th>Department</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.employeeidnumber}>
                            <td>{employee.employeename}</td>
                            <td>{employee.employeeidnumber}</td>
                            <td>{employee.department}</td>
                            <td>{new Date(employee.dateofbirth).toLocaleDateString()}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.phone_number}</td>
                            <td>{employee.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeTable;

