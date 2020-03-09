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
import BookService from './BookService';
import postings from '../api/postings';

class JobPosting extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			detail_index: -1,
			create_new: false,
			postings: [],
		}
	}

	componentDidMount() {
		this.initPosting(2);
	}

	async initPosting(providerId) {
		let res = await postings.getPostings(providerId);
		this.setState({
			postings: res.data
		});
	}

	postJob() {
		this.setState({
			detail_index: -1,
			create_new: true
		});
	}
	
	renderList(posting) {
		const { index, name, type, job_description, price, time, date, provider, rating } = posting;
		return (
			<TouchableOpacity style={styles.card} onPress={() => this.setState({ detail_index: index })}>
				<View style={styles.cardRow}>
					<Text style={styles.cardLargeText}>{name}</Text>
					<Text style={styles.cardLargeText}>{price}</Text>
				</View>
				<View style={styles.cardRow}>
					<View style={styles.imageIcon}></View>
					<View>
						<Text style={styles.contentText}>{provider}</Text>
						<Text style={styles.timeText}>{time}</Text>
						<Text style={styles.timeText}>{date}</Text>
					</View>
					<Text style={styles.contentText}>{type}</Text>
				</View>
			</TouchableOpacity>
		);
	}

	render() {
		const { detail_index, create_new, postings } = this.state;
		if (!postings || postings.length === 0) {
			return (<View />);
		}

		if (detail_index >= 0) {
			return (<ServiceDetail posting={postings[detail_index]} />)
		} else if (create_new){
			return (<BookService user={user} />)
		}
		return (
			<View style={styles.container}>
				<FlatList 
					style={styles.containerList}
					data={postings}
					renderItem={({ item, index }) => this.renderList({...item, index})}
					keyExtractor={item => item.id}
				/>
				<Button block style={styles.postButton} onPress={() => this.postJob()}>
					<Text>Post a Job</Text>
				</Button>
			</View>
		);

	}
}

const user = {
  addresses: [
    '200 University Avenue West',
    '330 Phillip Street',
    '365 Albert Street'
  ],
  creditCards: [
    'c1234 *** 1234',
    'c4321 *** 4321',
  ]
};

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
