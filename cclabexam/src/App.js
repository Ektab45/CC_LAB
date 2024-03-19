import React from 'react'; // Import React library if not already imported

function App() {
  const appStyle = {
    backgroundColor: 'black',  // Set background color of the entire screen to black
    height: '100vh',           // Set height to 100% of viewport height
    display: 'flex',           // Use flexbox for centering content vertically
    justifyContent: 'center',  // Center content horizontally
    alignItems: 'center'       // Center content vertically
  };

  const textStyle = {
    fontSize: '36px',          // Set font size to 36 pixels
    color: 'white'             // Set font color to white
  };

  return (
    <div className="App" style={appStyle}>
      <header className="App-header">
        <p style={textStyle}>
          Hello, I am Ekta.
        </p>
      </header>
    </div>
  );
}

export default App;
