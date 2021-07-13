import React from 'react';

export default function Home() {

    const user = { first_name: 'test' };
    const { first_name } = user;

    return (
        <div>
            <h1>This is the homepage</h1>
            <p>Hello {first_name}!</p>
        </div>
    )
}