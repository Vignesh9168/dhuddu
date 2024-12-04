import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div className="App">
      <ProfileCard
        avatar="https://via.placeholder.com/100"
        name="John Doe"
        position="Software Engineer"
        description="Passionate developer with a love for creating intuitive user experiences."
      />
    </div>
  );
}

export default App;
