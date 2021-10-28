import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
	/* margin: 0 auto 0;
	position: absolute; */
`;

const Ul = styled.ul`
	list-style-type: none;
	/* position: relative; */
`;

const Li = styled.li`
	font-size: 20px;
	margin: 10px;
	/* 
	float: left;
	position: relative; */
`;

function NavBar({ handleLogout, user }) {
	return (
		<>
			<Nav>
				<Ul>
					
					{user ? (
						<>
							{/* <Li>
								<Link to="/parent">Parent</Link>
							</Li> */}
							<Li>
								<Link to="/login" onClick={handleLogout}>
									<button>Logout</button>
								</Link>
							</Li>
						</>
					) : (
						<>
							<Li>
								<Link to="/login"><button>Login</button></Link>
							</Li>
							<Li>
								<Link to="/add_new_user"><button>Signup</button></Link>
							</Li>
						</>
					)}
				</Ul>
			</Nav>
		</>
	);
}
export default NavBar;
