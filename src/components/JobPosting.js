/* eslint-disable prettier/prettier */
import React from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    View,
    FlatList
	} from 'react-native';
	

import { Button, Text } from 'native-base';

import ServiceDetail from './ServiceDetail';

class JobPosting extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			detail_index: -1,
		}
	}
	
	renderList(posting) {
		const { index, name, job_type, job_description, price_high, price_low, start_time, finish_time, date, rating } = posting;
		return (
			<TouchableOpacity style={styles.card} onPress={() => this.setState({ detail_index: index })}>
				<View style={styles.cardRow}>
					<Text style={styles.cardLargeText}>{job_type}</Text>
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
			</TouchableOpacity>
		);
	}

	render() {
		const { postings } = this.props;
		const { detail_index } = this.state;
		if (detail_index >= 0) {
			return (<ServiceDetail posting={postings[detail_index]} />)
		}
		return (
			<View style={styles.container}>
				<FlatList 
					style={styles.containerList}
					data={postings}
					renderItem={({ item, index }) => this.renderList({...item, index})}
					keyExtractor={item => item.id}
				/>
				<Button block style={styles.postButton}>
					<Text>Post a Job</Text>
				</Button>
			</View>
		);

	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	containerList: {
		flex: 1,
	},

	card: {
		marginHorizontal: 8,
		marginTop: 8,
		padding: 6,
		borderRadius: 6,
		backgroundColor: '#F2F3F4'
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
		color: '#424949',
	},

	postButton: {
		height: 40,
		marginVertical: 20,
		marginHorizontal: 8,
  }
});

export default JobPosting;
