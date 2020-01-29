/* eslint-disable prettier/prettier */
import React from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    FlatList
  } from 'react-native';

class JobPosting extends React.Component {

	constructor(props) {
		super(props);
	}
	
	renderList(posting) {
		const { name, job_type, job_description, price_high, price_low, start_time, finish_time, date } = posting;
		return (
			<View style={styles.card}>
				<View style={styles.cardRow}>
					<Text style={styles.cardLargeText}>{job_description}</Text>
					<Text style={styles.cardLargeText}>{`$${price_low} - $${price_high}`}</Text>
				</View>
				<View style={styles.cardRow}>
					<View style={styles.imageIcon}></View>
					<View>
						<Text style={styles.contentText}>{name}</Text>
						<Text style={styles.timeText}>{`${start_time} - ${finish_time}`}</Text>
						<Text style={styles.timeText}>{date}</Text>
					</View>
					<Text style={styles.contentText}>{job_type}</Text>
				</View>
			</View>
		);
	}

	render() {
		const { postings } = this.props;
		return (
			<>
				<FlatList 
					data={postings}
					renderItem={({ item }) => this.renderList(item)}
					keyExtractor={item => item.id}
				/>
			</>
		);

	}
}

const styles = StyleSheet.create({
	card: {
		marginHorizontal: 8,
		marginTop: 8,
		padding: 6,
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
		width: '12%',
		padding: 10
	},

	contentText: {
		fontSize: 16,
	},

	timeText: {
		fontSize: 16,
		color: '#999',
	}

});

export default JobPosting;
