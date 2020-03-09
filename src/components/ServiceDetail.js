/* eslint-disable prettier/prettier */
import React from 'react';
import StarRating from 'react-native-star-rating';

import {
	StyleSheet,
	TouchableOpacity,
  View,
} from 'react-native';

import { Button, Text } from 'native-base';
	
class ServiceDetail extends React.Component {
	constructor(props) {
		super(props);
	}

	renderStars() {
		const { rating } = this.props.posting;
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

	renderInfoCard() {
		const { name, provider, type, job_description, time, date } = this.props.posting;
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
						<View>{this.renderStars()}</View>
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
		const { type, location, job_description } = this.props.posting;
		return (
			<>
				{this.renderInfoCard()}
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
						<Text style={styles.timeText}>{location}</Text>
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
