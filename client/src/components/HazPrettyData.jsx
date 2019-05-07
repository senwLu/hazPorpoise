import React, { Component } from 'react';
import {Bar, Doughnut} from 'react-chartjs-2';
import moment from 'moment';

const dataB = {
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		datasets: [
			{
				label: 'Times Sold Out (Last 30 days)',
				backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)',
						'rgba(225, 224, 111, 0.2)',
				],
				borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
						'rgba(225, 224, 111, 1)',
				],
				borderWidth: 1,
				data: []
			}
		]
	};

	const dataD = {
		labels: [
			'Red',
			'Green',
			'Yellow'
		],
		datasets: [{
			data: [300, 50, 100],
			backgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
			],
			hoverBackgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
			]
		}]
	};


class  HazPrettyData extends Component {
	constructor(props) {
			super(props);

	};

	


	render() {

		dataB.datasets[0].data = this.props.soldOut;

		let cirPctArr = []
		for(let i=0; i < this.props.cirLngth; i++) {
			let temp = Math.floor((this.props.cirNum[i]/21)*100);
			cirPctArr.push(temp);
		}

		dataD.labels = this.props.cirLabel;
		dataD.datasets[0].data = cirPctArr;

		let dayOfWeek = moment().format("ddd");
		let pct = 0;
		let strPct = "";



		if(dayOfWeek === "Mon") {
			pct = Math.floor((this.props.soldOut[0]/3)*100);
		}
		if(dayOfWeek === "Tue") {
			pct = Math.floor((this.props.soldOut[1]/3)*100);
		}
		if(dayOfWeek === "Wed") {
			pct = Math.floor((this.props.soldOut[2]/3)*100);
		}
		if(dayOfWeek === "Thu") {
			pct = Math.floor((this.props.soldOut[3]/3)*100);
		}
		if(dayOfWeek === "Fri") {
			pct = Math.floor((this.props.soldOut[4]/3)*100);
		}
		if(dayOfWeek === "Sat") {
			pct = Math.floor((this.props.soldOut[5]/3)*100);
		}
		if(dayOfWeek === "Sun") {
			pct = Math.floor((this.props.soldOut[6]/3)*100);
		}  

		if(pct > 90) {
			strPct = "There is a 90% or greater chance that all doughnuts will be sold out today!";
		}
		if(pct < 40) {
			strPct = "It is highly likely that there will be doughnuts still left unsold when store closes.";
		}else {
			strPct = `There is a ${pct}% that all the doughnuts will be sold out today.`;
		}

		return (
				<div>
						<h1>Today is a {moment().format("dddd")}</h1>
						<h1>{strPct}</h1>
						<div className='chartjsBar'>
							<Bar data={dataB} />
						</div>

						<h1>Doughnuts soldout by the HR (24hr)</h1>
						<div>
							<Doughnut data={dataD} />
						</div>
						<div>
							
						</div>
				</div>
		)
	};

};

export default HazPrettyData;