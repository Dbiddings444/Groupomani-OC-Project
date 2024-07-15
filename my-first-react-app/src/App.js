import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AccountCreation from './components/AccountCreation';
import Profile from './components/Profile';
import AccountDeletion from './components/AccountDeletion';
import Forum from './components/Forum';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-account" element={<AccountCreation />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/delete-account" element={<AccountDeletion />} />
                <Route path="/forum" element={<Forum />} />
            </Routes>
        </Router>
    );
};

export default App;
