import { useState } from 'react';
import PatientForm from './components/PatientForm';
import PatientTable from './components/PatientTable';
import SQLQuery from './components/SQLQuery';

export default function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="container">
      <h1>Patient Registration</h1>
      <PatientForm onRegister={() => setRefresh(!refresh)} />
        <h2>Table</h2>
      <PatientTable refresh={refresh} />
      <h2>Custom SQL Query</h2>
      <SQLQuery />
    </div>
  );  
}