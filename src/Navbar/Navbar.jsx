
import styled from "styled-components";
import {Link} from "react-router-dom";

const Nav=styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 2rem;
`;

export default function Navbar(){

    return (
        <Nav>
            <Link to="/"> Home </Link>
        </Nav>
    )
}