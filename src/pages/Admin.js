import React, { useEffect } from 'react';
import AdminLogin from './AdminLogin';
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  // TEMP local login until backend is setup
  const loggedIn = localStorage.getItem("loggedIn");

  // Redirect to dashboard if admin is logged in
  useEffect(() => {
    if (loggedIn) {
      navigate("/admin/dashboard");
    }
  }, [loggedIn, navigate])
  
  if (!loggedIn)
  return (
    <main>
      <AdminLogin />
    </main>
  )

  
}
