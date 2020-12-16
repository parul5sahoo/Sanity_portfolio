import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact 
                      activeClassName="text-white"
                      className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-wides"
                    >
                        Parul
                    </NavLink>

                    
                    <NavLink to="/post" 
                      activeClassName="text-red-100 bg-red-700"
                     className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                      Blog Posts
                    </NavLink>

                    <NavLink to="/project" 
                     activeClassName="text-red-100 bg-red-700"
                     className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        Projects
                    </NavLink>

                    <NavLink to="/about" 
                     activeClassName="text-red-100 bg-red-700"
                     className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        About Me!
                    </NavLink>


                </nav>
                <div className="inline-flex py-7 px-3">
                <SocialIcon url="https://www.linkedin.com/in/parul-sahoo-4bb8301a0/" className="mr-4" targets="_blank" fgcolor="#fff" style={{ height: 35, width: 35}} />
                <SocialIcon url="https://twitter.com/ParulSahoo" className="mr-4" targets="_blank" fgcolor="#fff" style={{ height: 35, width: 35}} />
                <SocialIcon url="https://github.com/parul5sahoo" className="mr-4" targets="_blank" fgcolor="#fff" style={{ height: 35, width: 35}} />

            </div>
                
            </div>
            
        </header>
    )
}