import React from 'react';

const AccountDeletion = () => {
    const handleDelete = () => {
        // Add account deletion logic here
        console.log('Account deleted');
    };

    return (
        <div>
            <h2>Delete Account</h2>
            <button onClick={handleDelete}>Delete Account</button>
        </div>
    );
};

export default AccountDeletion;
