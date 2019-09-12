import React, { useState } from 'react';;
import TeamForm from './Form'

export const people = ['Mysti Dyse','Alley Way','Sun Shine','Pearly Whites','No Name Jenkins',]

function App() {
  const [teamMember, setTeamMember] = useState({});
  
  return (
    <div className="App">
      <header className="App-header">
        <TeamForm>        </TeamForm>
        <ul>
          <li>people.map</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
