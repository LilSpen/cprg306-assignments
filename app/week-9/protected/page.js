"use client"

import { useUserAuth } from("../_utils/auth-context");

export default function ProtectedPage() {

    const {user} = useUserAuth();

    return (
        <main className="m-5">
            <header>
                <h1>Protected Page</h1>
            </header>
            { user ? (
                <div>
                    <p>Your user ID is: {user.id}</p>
                </div>
            ) : (
                <div>
                    <p>You must be logged in to view this page</p>
                    <Link href="/week-9/">Click here to return to the sign in page.</Link>
                </div>
            )}
        </main>
    );
}