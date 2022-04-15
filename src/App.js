import './App.css';
import Users from './Users'
import Posts from './Posts'
import { useState } from 'react';


function App() {

  const [selectedUser, setSelectedUser] = useState(null)

  return (
    <div className="App">
      <Users selectUser={setSelectedUser} />
      <Posts user={selectedUser} />
    </div>
  );
}

export default App;
