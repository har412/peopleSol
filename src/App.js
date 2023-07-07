import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom"
import Dashboard from './Components/Dashboard';
import List from './Components/List';

function App() {


  var data = [
    {
      id: 1,
      requestNumber: 302,
      status: "incompleted",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Maharashtra",
      assignedTo: "Mohammad",
      createdOn: "19/06/2023"
    },
    {
      id: 2,
      requestNumber: 303,
      status: "imcomplete",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },
    {
      id: 3,
      requestNumber: 303,
      status: "imcomplete",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },
    {
      id: 4,
      requestNumber: 303,
      status: "completed",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },
    {
      id: 5,
      requestNumber: 303,
      status: "completed",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },
    {
      id: 6,
      requestNumber: 303,
      status: "completed",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },
    {
      id: 7,
      requestNumber: 303,
      status: "imcomplete",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },
    {
      id: 8,
      requestNumber: 303,
      status: "imcomplete",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },
    {
      id: 9,
      requestNumber: 303,
      status: "imcomplete",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },
    {
      id: 10,
      requestNumber: 303,
      status: "imcomplete",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },
    {
      id: 11,
      requestNumber: 303,
      status: "imcomplete",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },
    {
      id: 12,
      requestNumber: 303,
      status: "imcomplete",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },
    {
      id: 13,
      requestNumber: 303,
      status: "imcomplete",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },
    {
      id: 14,
      requestNumber: 303,
      status: "imcomplete",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },

    {
      id: 15,
      requestNumber: 303,
      status: "completed",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },
    {
      id: 16,
      requestNumber: 303,
      status: "imcomplete",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },
    {
      id: 17,
      requestNumber: 303,
      status: "completed",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },
    {
      id: 18,
      requestNumber: 303,
      status: "completes",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },
    {
      id: 19,
      requestNumber: 303,
      status: "imcomplete",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },
    {
      id: 20,
      requestNumber: 303,
      status: "imcomplete",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },
    {
      id: 21,
      requestNumber: 303,
      status: "imcomplete",
      serviceType: "Request for Server Access",
      serviceCategory: "SERVER",
      description: "Test1234",
      location: "Ludhiana",
      assignedTo: "Harkirat",
      createdOn: "19/07/2023"
    },
  ]


  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/list' element={<List data={data}></List>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
