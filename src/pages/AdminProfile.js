import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminProfile() {
    // TEMP local login until backend is setup
    const loggedIn = localStorage.getItem("loggedIn");

    // Redirect to loginpage if admin is not logged in
    const navigate = useNavigate();
    useEffect(() => {
        if (!loggedIn) {
            navigate("/admin");
            toast("Please login first", { type: "error" });
        }
    }, [loggedIn, navigate])
    
    // Show dashboard if admin is logged in
    if (loggedIn)
    return (
        <main className='h-[100vh] bg-galaxyPurple flex justify-center items-center'>
            <h3 className='text-3xl font-medium'>Admin profile is coming soon ...</h3>
        </main>
    )
}
