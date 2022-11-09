import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled.div`
    color: white;
    background-color: black;
`

function NavBar() {
    return (
        <React.Fragment>
            <NavLink to="/" >
                <Link>
                Home
                </Link>
            </NavLink>
            {/* <NavLink to="/discovery" >
                <Link>
                Discovery
                </Link>
            </NavLink> */}
            <NavLink to="/pointguards" >
                <Link>
                PointGuards
                </Link>
            </NavLink>
            <NavLink to="/shootingguards" >
                <Link>
                ShootingGuards
                </Link>
            </NavLink>
            <NavLink to="/powerforwards" >
                <Link>
                PowerForwards
                </Link>
            </NavLink>
            <NavLink to="/smallforwards" >
                <Link>
                SmallForwards
                </Link>
            </NavLink>
            <NavLink to="/centres" >
                <Link>
                Centers
                </Link>
            </NavLink>
        </React.Fragment>
    )
}

export default NavBar;