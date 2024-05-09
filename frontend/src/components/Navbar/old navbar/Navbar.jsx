// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import Progress from '../Progress/Progress'
// import logo from "../images/logo.png"
// import "../styles/Navbar.css"

// const Navbar = () => {

//     const completion = Progress();
//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [isLoggedIn, setLoggedIn] = useState(false);

//     const toggleMobileMenu = () => {
//         setMobileMenuOpen(!isMobileMenuOpen);
//     };

//     const handleLogout = () => {
//         setLoggedIn(false);
//     };

//     const renderUserControls = () => {
//         if (isLoggedIn) {
//             return (
//                 <div className="hidden sm:ml-6 sm:block">
//                     <button onClick={handleLogout} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
//                         Logout
//                     </button>
//                 </div>
//             );
//         } else {
//             return (
//                 <div className="hidden sm:ml-6 sm:block">
//                     {/* <NavLink to="/Login" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
//                         Login
//                     </NavLink> */}

//                 </div>
//             );
//         }
//     };

//     return (
//         <div>
//             <nav className="bg-gray-800 fixed w-full top-0 z-10">
//                 <div className="hidden sm:ml-6 sm:block">{renderUserControls()}</div>
//                 <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//                     <div className="relative flex h-16 items-center justify-between">
//                         <div className="flex flex-1  items-center justify-center sm:items-stretch sm:justify-start">
//                             <div className="flex flex-shrink-0 items-center">
//                                 <img className="h-8 w-auto" src={logo} alt="Your Company" />
//                             </div>
//                             <div className="hidden sm:ml-6 sm:block">
//                                 <div className="flex space-x-4">
//                                     <NavLink to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</NavLink>
//                                     <NavLink to="/About" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</NavLink>
//                                     <NavLink to="/Contact" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</NavLink>
//                                     <NavLink to="/Gallery" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Gallery</NavLink>
//                                     <NavLink to="/Feature" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Feature</NavLink>
//                                 </div>
//                             </div>
//                             <button
//                                 onClick={toggleMobileMenu}
//                                 className="sm:hidden relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                                 aria-controls="mobile-menu"
//                                 aria-expanded={isMobileMenuOpen}
//                             >
//                                 <span className={`absolute -inset-0.5 ${isMobileMenuOpen ? 'block' : 'hidden'}`} />
//                                 <span className="sr-only">Toggle mobile menu</span>

//                                 <svg className={`block h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                                 </svg>
//                                 <svg className={`hidden h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <span
//                     style={{ transform: `translateX(${completion - 100}%)` }}
//                     className='absolute bg-yellow-400 h-1 w-full bottom-0'
//                 />
//                 <div className="sm:hidden" id="mobile-menu">
//                     <div className={`space-y-1 px-2 pb-3 pt-2 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
//                         <NavLink to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</NavLink>
//                         <NavLink to="/About" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</NavLink>
//                         <NavLink to="/Contact" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</NavLink>
//                         <NavLink to="/Gallery" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Gallery</NavLink>
//                         <NavLink to="/Feature" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Feature</NavLink>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default Navbar



import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Progress from '../Progress/Progress'
import "./Navbar.css"

const Navbar = () => {

    const completion = Progress();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInStatus = sessionStorage.getItem('access_token');
        setLoggedIn(!!loggedInStatus); // Check if access_token is truthy

        // Use event listeners to update state when sessionStorage changes
        const handleStorageChange = () => {
            const updatedLoggedInStatus = sessionStorage.getItem('access_token');
            setLoggedIn(!!updatedLoggedInStatus); // Convert to boolean
        };

        window.addEventListener('storage', handleStorageChange);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };


    const handleLogout = async () => {
        try {
            const token = sessionStorage.getItem('access_token');

            const response = await fetch('/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Include the JWT token in the Authorization header
                },
            });

            const data = await response.json();

            if (data.msg === 'Token has expired') {
                // Token has expired, perform frontend logout
                setLoggedIn(false);
                sessionStorage.removeItem('access_token');
                window.location.href = '/';
                
            } else {
                if (data.access === 'Granted') {
                setLoggedIn(false);
                sessionStorage.removeItem('access_token');
                window.location.href = '/';
            }
            }
        } catch (error) {
            console.error('Logout error:', error);
            // Handle error as needed
        }
    };

    const handleLogin = () => {
        // navigate('/Login');
        window.location.href = '/login';
    };

    return (
        <div>
            <nav className="bg-gray-800 fixed w-full top-0 z-10">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between" style={{ marginRight: "10pc" }}>
                        <div className="flex flex-1  items-center justify-center sm:items-stretch sm:justify-start" >
                            <div className="flex flex-shrink-0 items-center">
                            </div>
                            <div className="hidden sm:ml-6 sm:block" >
                                <div className="flex space-x-4 " >
                                    <NavLink to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</NavLink>
                                    <NavLink to="/ModelGallery" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">ModelGallery</NavLink>
                                    <NavLink to="/MatchFace" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">MatchFace</NavLink>
                                    <NavLink to="/Account" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Account</NavLink>
                                    <NavLink to="/Face" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Face</NavLink>
                                    <NavLink to="/SearchAccount" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">SearchAccount</NavLink>
                                    <NavLink to="/AdminPanel" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">AdminPanel</NavLink>
                                </div>
                            </div>
                            {isLoggedIn ? (
                                <button onClick={handleLogout} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Logout</button>
                            ) : (
                                <button onClick={handleLogin} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Login</button>
                            )}
                            <button
                                onClick={toggleMobileMenu}
                                className="sm:hidden relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded={isMobileMenuOpen}
                            >
                                <span className={`absolute -inset-0.5 ${isMobileMenuOpen ? 'block' : 'hidden'}`} />
                                <span className="sr-only">Toggle mobile menu</span>

                                <svg className={`block h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg className={`hidden h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <span
                    style={{ transform: `translateX(${completion - 100}%)` }}
                    className='absolute bg-yellow-400 h-1 w-full bottom-0'
                />
                <div className="sm:hidden" id="mobile-menu">
                    <div className={`space-y-1 px-2 pb-3 pt-2 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                        <NavLink to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</NavLink>
                        <NavLink to="/About" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</NavLink>
                        <NavLink to="/Contact" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</NavLink>
                        <NavLink to="/Feature" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Feature</NavLink>
                        <NavLink to="/Gallery" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Gallery</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar


// Using String for Session Checking.

// useEffect(() => {
//     const loggedInStatus = sessionStorage.getItem('logged_in');
//     setLoggedIn(loggedInStatus === 'true'); // Checks session, if logged_in = 'true' (string), then it matches it and sets True (boolean) else False (boolean)

//     // Use event listeners to update state when sessionStorage changes
//     const handleStorageChange = () => {
//         const updatedLoggedInStatus = sessionStorage.getItem('logged_in');
//         setLoggedIn(updatedLoggedInStatus === 'true'); // Convert to boolean
//     };

//     window.addEventListener('storage', handleStorageChange);

//     // Clean up the event listener on component unmount
//     return () => {
//         window.removeEventListener('storage', handleStorageChange);
//     };
// }, []);