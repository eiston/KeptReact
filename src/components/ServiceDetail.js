/* eslint-disable prettier/prettier */
import React from 'react';
import StarRating from 'react-native-star-rating';

import {
	StyleSheet,
	TouchableOpacity,
  View,
  Text,
} from 'react-native';
	
class ServiceDetail extends React.Component {
	constructor(props) {
		super(props);
	}

	renderStars() {
		const { rating } = this.props.posting;
		return (
			<StarRating 
				disabled={true}
				starSize={15}
				fullStarColor={'#0000FF'}
				halfStarColor={'#0000FF'}
				emptyStarColor={'#0000FF'}
				maxStars={5}
				rating={rating * 5}
			/>
		)
	}

	renderInfoCard() {
		const { name, job_type, job_description, start_time, finish_time, date } = this.props.posting;
		return (
			<View style={styles.card}>
				<View style={styles.cardRow}>
					<Text style={styles.cardLargeText}>{job_type}</Text>
				</View>
				<View style={styles.cardRow}>
					<View style={styles.imageIcon}></View>
					<View>
						<Text style={styles.contentText}>{name}</Text>
						<Text style={styles.timeText}>{`${start_time} - ${finish_time}`}</Text>
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
		return (
			<>
				{this.renderInfoCard()}
			</>
		);
	}
}

const styles = StyleSheet.create({
	card: {
		marginHorizontal: 8,
		marginTop: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: '#F5F5F5'
	},

	cardRow: {
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
	},

	timeText: {
		fontSize: 16,
		color: '#999',
	},

	clickableText: {
		color: '#0000FF',
		textAlign: 'right'
	}
});

export default ServiceDetail;