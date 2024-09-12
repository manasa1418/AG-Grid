import React from 'react';
import DataTable from './components/DataTable';

const App = () => {
  const columnDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Age', field: 'age' },
    { headerName: 'Country', field: 'country' }
  ];

  const rowData = [
    { id: 1, name: 'John Doe', age: 25, country: 'USA' },
    { id: 2, name: 'Jane Smith', age: 30, country: 'UK' },
    { id: 3, name: 'Tom Brown', age: 35, country: 'Canada' },
    // Add more sample data
  ];

  return (
    <div className="App">
      <h1>AG Grid Example</h1>
      <DataTable rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default App;
