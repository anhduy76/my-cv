import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Navbar from "../../navbar/Navbar";

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Major</th>
								<th>Time</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Infrastructure Engineering</td>
								<td>Sep 2013 - Jun 2019</td>
								<td>University of Architecture Ho Chi Minh City</td>
							</tr>
							<tr>
								<td>Web Developer</td>
								<td>Oct 2019 - July 2020</td>
								<td>CodersX School</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
