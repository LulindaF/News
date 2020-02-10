import React from 'react'
import './error.css'

class Error extends React.Component {
	render() {
		return (
			<div>
				<error className='error404'>404</error><br />
				<text className='errorText'>Sorry page not found</text>
			</div>
		)
	}
}
export default Error
