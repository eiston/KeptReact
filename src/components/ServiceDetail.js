/* eslint-disable prettier/prettier */
import React from 'react';
import StarRating from 'react-native-star-rating';

import postings from '../api/postings';

import {
	StyleSheet,
	TouchableOpacity,
  View,
} from 'react-native';

import { Button, Text } from 'native-base';
	
class ServiceDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			detail: null
		}
	}

	componentDidMount() {
		this.initDetail(this.props.detailId);
	}

	async initDetail(postId) {
		let res = await postings.getDetails(postId);
		this.setState({
			detail: res.data
		});
	}

	renderStars(rating) {
		return (
			<StarRating 
				disabled={true}
				starSize={20}
				fullStarColor={'#33FFD1'}
				halfStarColor={'#33FFD1'}
				emptyStarColor={'#33FFD1'}
				maxStars={5}
				rating={rating * 5}
			/>
		)
	}

	renderInfoCard(detail) {
		const { date, name, provider, time, rating } = detail;
		return (
			<View style={styles.card}>
				<View style={styles.cardRow}>
					<Text style={styles.cardLargeText}>{name}</Text>
				</View>
				<View style={styles.cardRow}>
					<View style={styles.imageIcon}></View>
					<View>
						<Text style={styles.contentText}>{provider}</Text>
						<Text style={styles.timeText}>{time}</Text>
						<Text style={styles.timeText}>{date}</Text>
					</View>
					<View>
						<View>{this.renderStars(rating)}</View>
						<Text/>
						<TouchableOpacity>
							<Text style={styles.clickableText}>View Reviews</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
		
	}

	render() {
		const { detail } = this.state;
		if (!detail) {
			return (<View />)
		}
		const { type, location, job_description } = detail;
		return (
			<>
				{this.renderInfoCard(detail)}
				<Button block style={styles.primButton}>
          <Text>Book Service</Text>
        </Button>
				<View style={styles.card}>
					<View 
						style={styles.cardBorderRow}
					>
						<Text style={styles.contentText}>Service Type</Text>
						<Text style={styles.timeText}>{type}</Text>
					</View>
					<View style={styles.cardBorderRow}>
						<Text style={styles.contentText}>Location</Text>
						<Text style={styles.timeText}>{simplifyAddress(location)}</Text>
					</View>
				</View>
				<View style={styles.card}>
					<Text style= {styles.contentText}>Service Description</Text>
					<Text style={styles.timeText}>{job_description}</Text>
				</View>
			</>
		);
	}
}

const simplifyAddress = (address) => {
	const str_list = address.split(',');
	return (str_list.length > 3) ? `${str_list[1]}, ${str_list[2]}` : address;
}

const styles = StyleSheet.create({
	card: {
		minWidth: 80,
		marginHorizontal: 8,
		marginTop: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: '#F2F3F4'
	},

	primButton: {
		marginVertical: 8,
		borderRadius: 0
	},

	cardRow: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	cardBorderRow: {
		height: 40,
		paddingTop: 4,
		paddingBottom: 6,
		paddingHorizontal: 8,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	cardLargeText: {
		fontSize: 24
	},

	imageIcon: {
		width: '4%',
		padding: 10
	},

	contentText: {
		fontSize: 16,
		fontWeight: 'bold'
	},

	timeText: {
		fontSize: 16,
		color: '#424949',
	},

	clickableText: {
		color: '#0000FF',
		textAlign: 'right'
	}
});

export default ServiceDetail;
