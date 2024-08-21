import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './index.css';

function EmployeeForm() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [jobPosition, setJobPosition] = useState('');
  const [teams, setTeams] = useState('');
  const [designation, setDesignation] = useState('');
  const [billableHours, setBillableHours] = useState('');
  const [isBillable, setIsBillable] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation here
    // if (!firstName || !lastName || !birthDate || !email || !phoneNumber || !gender || !startTime || !endTime || !jobPosition) {
    //   alert('Please fill in all required fields');
    //   return;
    // }
    if (billableHours && !isBillable) {
      alert('Billable hours must be set to "Yes" if you enter a value.');
      return;
    }
    // Submit form data
    console.log('Form data:', {
      firstName,
      middleName,
      lastName,
      birthDate,
      email,
      phoneNumber,
      gender,
      startTime,
      endTime,
      jobPosition,
      teams,
      designation,
      billableHours,
      isBillable,
    });
  };

  return (
    <div id='totaldiv'>
    <form onSubmit={handleSubmit} id='form'>
      <div>
    
      <div>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </div>
      <div>
        <label>Middle Name:</label>
        <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </div>
      <div>
        <label>Birth Date:</label>
        <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      </div>
      <div>
      <div>
        <label>Phone Number:</label>
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
      </div>
      <div>
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label>Start Time:</label>
        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
      </div>
      <div>
        <label>End Time:</label>
        <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
      </div>
      <div>
        <label>Job Position:</label>
        <input type="text" value={jobPosition} onChange={(e) => setJobPosition(e.target.value)} required />
      </div>
      </div>
      <div>
      <div>
        <label>Select Teams:</label>
        <select value={teams} onChange={(e) => setTeams(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div>
        <label>Select Designation:</label>
        <select value={designation} onChange={(e) => setDesignation(e.target.value)}>
          <option>Manager</option>
          <option>Helper</option>
          <option>HR</option>
        </select>
      </div>
      <div>
        <label>Billable Hours:</label>
        <input type="number" value={billableHours} onChange={(e) => setBillableHours(e.target.value)} />
      </div>
      <div>
        <label>Is Billable:</label>
        <input type="checkbox" checked={isBillable} onChange={() => setIsBillable(!isBillable)} />
      </div>
      </div>
      
    </form>
    <button type="submit">Submit</button>
    </div>
  );
}
ReactDom.render(<EmployeeForm/>,document.getElementById('root'));
