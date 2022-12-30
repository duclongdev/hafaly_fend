import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AuthStatus from 'auth/AuthStatus';

const DefaultLayout = () => {
    return (
        <div>
            <AuthStatus />
            <nav>
                <Link to="public">Public Page</Link><br />
                <Link to="protected">Protected Page</Link>
            </nav>
            <React.Suspense fallback={<h1>loading...</h1>}>
                <Outlet />
            </React.Suspense>
        </div>
    );
}

export default DefaultLayout