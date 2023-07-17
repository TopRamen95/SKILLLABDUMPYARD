import React from "react";

const Navbar = () =>{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className = "container-fluid">
                <link className="navbar-brand" to="/">
                    My Website
                </link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <link className="nav-link" to="/">
                                Home
                            </link>
                        </li>
                        <li className="nav-item">
                        <link className="nav-link"  to="about">
                            About
                        </link>  
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}