import React, { useState } from 'react';
//use interface to define structure of properties
interface AppProps {
    color?: string;
}

const url = import.meta.env.VITE_TODO_URL;

class App extends React.Component {
    render() {
        return <div>{url}</div>;
    }
}
export default App;
