import React from 'react';
import './Nav.css';

function Nav (props) {
	// const { links } = props; // Destructuring
	const links = props.links;
	return (
		<React.Fragment>
			<h1>{props.mensaje}</h1>
			<nav>
				<ul>
					{
						links.map(oneLink => {
							return (
								<li key={oneLink.txt}>
									<a 
										href={oneLink.url}
										target={oneLink.url.includes('http') ? '_blank' : '_self'}
									>{oneLink.txt}</a>
								</li>
							);
						})
					}
				</ul>
			</nav>
		</React.Fragment>
	)
}

export default Nav;

// <React.Fragment>
// 	<h1>{props.mensaje}</h1>
// 	<nav>
// 		<ul>
// 			{
// 				links.map(function (oneLink) {
// 					return (
// 						<li key={oneLink.txt}>
// 							<a
// 								href={oneLink.url}
// 								target={oneLink.url.includes('http') ? '_blank' : '_self'}
// 							>{oneLink.txt}</a>
// 						</li>
// 					);
// 				})
// 			}
// 		</ul>
// 	</nav>
// </React.Fragment>