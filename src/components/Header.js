import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default function Header() {

    const user = {
        token: true,
        avatar: '/avatar.png',
        first_name: 'user'
    }

    const { token, avatar, first_name } = user;

    function logout() { }

    return (
        <header>

            <Link to="/">
                <img src={logo} className="logo" alt="logo" />
            </Link>

            {token && (
                <div className="nav">
                    <Link to="/profile">
                        <img
                            src={avatar}
                            alt={`${first_name} avatar`}
                            className="avatar"
                        />
                    </Link>
                    <button onClick={logout}>logout</button>
                </div>
            )}

        </header>
    )
}