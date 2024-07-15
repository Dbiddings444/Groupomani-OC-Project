import React, { useState } from 'react';

const Forum = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    const handlePost = () => {
        setPosts([...posts, { content: newPost, unread: true }]);
        setNewPost('');
    };

    const markAsRead = (index) => {
        const updatedPosts = posts.map((post, i) => (i === index ? { ...post, unread: false } : post));
        setPosts(updatedPosts);
    };

    return (
        <div>
            <h2>Forum</h2>
            <div>
                <textarea value={newPost} onChange={(e) => setNewPost(e.target.value)}></textarea>
                <button onClick={handlePost}>Post</button>
            </div>
            <div>
                {posts.map((post, index) => (
                    <div key={index} style={{ background: post.unread ? 'lightyellow' : 'white' }}>
                        <p>{post.content}</p>
                        <button onClick={() => markAsRead(index)}>Mark as Read</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forum;
