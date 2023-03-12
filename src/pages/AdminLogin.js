import React, { useState, useEffect } from "react";
import iconLogo from '../media/logo/svg/sdIconWhite.svg';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// our endpoint
import { dashboardURL } from "../components/getAPI";

export default function AdminLogin() {
    // for fetching
    const [data, setData] = useState([]);

    // Our endpoint
    const url = dashboardURL;

    // fetch starts here
    useEffect(() => {
        async function getData() {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        }
        getData();
    }, [url]);

    // fetch prefix
    const adminDash = data?.content;

    // navigation
    const navigate = useNavigate();

    // empty state to store user login inputs
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    // input error state used for styling
    const [formError, setFormError] = useState(false);

    const loggedIn = localStorage.getItem("loggedIn");
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // console.log(formData);
        setFormError(false);
    };

    // Handle signin with the submit btn
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validate empty input
        if (!formData.username || !formData.password) {
            toast("Please fill out the login information.", { type: "error" });
        }

        // Temp username - not optimal at all - until login system is up in the backend
        if(formData.username==="admin"&&formData.password==="1234"){          
            localStorage.setItem("loggedIn", true);
            console.log(loggedIn);
            navigate("/admin/dashboard");
            toast("You are now logged in 🚀", { type: "success" });
        }

        // Login fail
        else {
            toast("User not registered. Please try again 😪", { type: "error" });
            setFormError(true);
        }
    }

    const handleEnterSubmit = (e) => {
        e.preventDefault();
        if (e.key === "Enter") {
            // Simple validate empty input
            if (!formData.username || !formData.password) {
                toast("Please fill out the login information.", { type: "error" });
                setFormError(true);
            }

            // Temp username - not optimal at all - until login system is up in the backend
            if(formData.username==="admin"&&formData.password==="1234"){          
                localStorage.setItem("loggedIn", true);
                console.log(loggedIn);
                navigate("/admin/dashboard");
                toast("You are now logged in 🚀", { type: "success" });
            }

            // Login fail
            else {
                toast("User not registered. Please try again 😪", { type: "error" });
                setFormError(true);
            }
        }
    }

    return (
        <section className='h-[100vh] pt-24 flex flex-col gap-24'>
            <div className='flex justify-center items-center flex-col gap-3'>
                <img className='h-10 w-10' src={iconLogo} alt='Space Debris Logo Icon'></img>
                <p className='text-primaryGray-200'>
                    Welcome to the administrator page
                </p>
            </div>

            <div className='flex items-center justify-center'>
                <div className='flex flex-col gap-14 bg-primaryGray-900 rounded-2xl py-14'>
                    <h3 className='text-4xl xl:text-5xl font-spaceMedium text-center max-w-[18ch]'>
                        {adminDash?.loginHeadline}
                    </h3>
                    <div className='flex flex-col gap-6 w-full items-center px-12 mb-14'>
                        <form className='flex flex-col gap-3 w-full'>
                            {formError ? <label className="text-states-error">User not registrered. Please try again.</label> : <label>Admin login</label>}
                            <input 
                                className='py-3 px-3 rounded-xl  bg-observableBlack'
                                type="text"
                                name="username"
                                placeholder="Admin ID or email"
                                value={formData.username}
                                aria-label="Username"
                                onChange={(e) => handleChange(e)}
                                onKeyUp={(e) => handleEnterSubmit(e)}
                            >
                            </input>

                            <input 
                                className='py-3 px-3 rounded-xl bg-observableBlack active:border-galaxyPurple'
                                type="password"
                                name="password"
                                aria-label="Password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={(e) => handleChange(e)}
                                onKeyUp={(e) => handleEnterSubmit(e)}
                            >
                            </input>
                        </form>
                        <div className='flex gap-3 w-full'>
                            <input className="w-full cursor-pointer bg-galaxyPurple rounded-2xl px-10 py-3 hover:border-galaxyPurple hover:bg-transparent hover:border-2 hover:text-galaxyPurple font-spaceRegular border-2 border-galaxyPurple active:scale-95 active:ease-in duration-150 uppercase" onClick={handleSubmit} type="submit" value="SIGN IN" aria-label="Click here to login"/>
                            {/* <Button className='mt-10' buttonColor="purple" btnText="Sign In" link="" onClick={handleSubmit}/>
                            <Button className='mt-10' buttonColor="filled-white" btnText="Register" link="/dashboard" /> */}
                        </div>
                    </div>

                    <div className='flex items-center flex-col'>
                        <p className='font-spaceMedium text-primaryGray-200'>Having trouble signing in?</p>
                        <a href='tel:+45123123123' className='font-spaceRegular text-primaryGray-300'>Get in touch with a manager</a>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
