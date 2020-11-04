import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/person1.jpg';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='avatar' />
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						Bùi Anh Duy
					</span>
					<p>Front End Developer</p>
				</div>
			</div>
		</div>
	);
}
