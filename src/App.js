import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from './contacts/ContactList'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
          <ContactList />
      </header>
    </div>
  )
}
