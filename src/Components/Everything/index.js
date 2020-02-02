import React from 'react';
import Content from '../Content';
import Footer from '../Footer';
import Header from '../Header';


export default function Everything() {

	return (
		<React.Fragment>
			<Header />
			<main>
				<Content />
			</main>
			<Footer />
		</React.Fragment>
	);
}
