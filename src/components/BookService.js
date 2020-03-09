/* eslint-disable prettier/prettier */
import React from 'react';

import { StyleSheet } from 'react-native';
import { List, ListItem, Text, Left, Right, Button, Icon, Radio, Form, Picker, Input, Textarea, DatePicker } from "native-base";

import postings from '../api/postings';
import { compareTime } from '../helper';

class BookService extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			name: '',
			description: '',
			chosenDate: new Date(),
			start_time: null,
			finish_time: null,
			maxPrice: 0,
			minPrice: 0,
			selectedAddress: null,
			selectedCard: null,
			job_type: 'Unselected'
		}
	}
	
	addNewAddress() {

	}

	addNewCreditCard() {

	}

	async confirmSend() {
		const { maxPrice, minPrice, start_time, finish_time } = this.state;
		if (maxPrice === 0 || minPrice === 0 || maxPrice < minPrice) {
			this.setState({
				maxPrice: 0,
				minPrice:0
			});
			console.error('Invalid Price');
		}
		if (!compareTime(start_time, finish_time)) {
			this.setState({
				maxPrice: null,
				minPrice: null
			});
			console.error('Invalid time range');
		}
		const post = {
			...this.state,
			author_id : 1,
			housing_id: 1,
			is_provider: false
		}

		await postings.createPosting(post);

	}

	onJobSelect(value) {
		this.setState({
			job_type: value
		});
	}

	renderDatePicker() {
		return (
			<>
				<DatePicker 
					defaultDate={new Date()}
					androidMode={'default'}
					placeHolderText="Select date"
					onDateChange={(newDate) => this.setState({ chosenDate: newDate.toString() })}
				/>
			</>
		)
	}

	renderPicker() {
		const routes = ['Unselected', 'Snow Plowing', 'Leaf Blowing', 'Lawn Mowing', 'House Cleaning', 'Plumbing', 'More'];
		return (
			<Form>
				<Picker
					note
					placeholder="Select Job"
					mode="dropdown"
					selectedValue={this.state.job_type}
					onValueChange={this.onJobSelect.bind(this)}
				>
					{routes.map(route => (<Picker.Item label={route} value={route} />))}
				</Picker>
			</Form>
		);
	}

  render() {
		const { addresses, creditCards } = this.props.user;
		return (
			<>
				<List>
					<ListItem itemDivider>
						<Text style={styles.primText}>Select Your Job</Text>
					</ListItem>
					{this.renderPicker()}
					<ListItem itemDivider>
						<Text style={styles.primText}>Select Time and Date</Text>
					</ListItem>
					<ListItem>
						{this.renderDatePicker()}
					</ListItem>
					<ListItem>
						<Input
							placeholder="Set Start Time"
							value={this.state.start_time}
							onChangeText={(text) => this.setState({ start_time: text })}
						/>
					</ListItem>
					<ListItem>
						<Input
							placeholder="Set End Time"
							value={this.state.finish_time}
							onChangeText={(text) => this.setState({ finish_time: text })}
						/>
					</ListItem>
					<ListItem itemDivider>
						<Text style={styles.primText}>Insert Title</Text>
					</ListItem>
					<ListItem>
						<Input
							placeholder="Enter Title"
							value={this.state.name}
							onChangeText={(text) => this.setState({ name: text })}
						/>
					</ListItem>
					<ListItem itemDivider>
						<Text style={styles.primText}>Insert Descriptions</Text>
					</ListItem>
					<ListItem>
						<Textarea
							rowSpan={5}
							placeholder="Enter Description"
							value={this.state.description}
							onChangeText={(text) => this.setState({ description: text })}
						/>
					</ListItem>
					<ListItem itemDivider>
						<Text style={styles.primText}>Price Your Post</Text>
					</ListItem>
					<ListItem>
						<Input
							placeholder="Maximum Price"
							value={this.state.maxPrice}
							onChangeText={(text) => this.setState({ maxPrice: text })}
						/>
						<Input
							placeholder="Minimum Price"
							value={this.state.minPrice}
							onChangeText={(text) => this.setState({ minPrice: text })}
						/>
					</ListItem>
					<ListItem itemDivider>
						<Text style={styles.primText}>Select Your Location</Text>
					</ListItem>
					<ListItem style={{ paddingRight: 2 }}>
						<Left>
							<Text style={styles.secondText}>Add New Address</Text>
						</Left>
						<Right>
							<Button transparent>
								<Icon name="add" />
							</Button>
						</Right>
					</ListItem>
					{
						addresses.map((item, i) =>(
							<ListItem>
								<Left>
									<Text style={styles.secondText}>{item}</Text>
								</Left>
								<Right>
									<Radio 
										selected={this.state.selectedAddress === item}
										onPress={() => {
												this.setState({ selectedAddress: item });
											}}
									/>
								</Right>
							</ListItem>
						))
					}
					<ListItem itemDivider>
						<Text style={styles.primText}>Select Your Credit Card</Text>
					</ListItem>
					<ListItem style={{ paddingRight: 2 }}>
						<Left>
							<Text style={styles.secondText}>Add New Credit Card</Text>
						</Left>
						<Right>
							<Button transparent>
								<Icon name="add" />
							</Button>
						</Right>
					</ListItem>
					{
						creditCards.map((item, i) =>(
							<ListItem>
								<Left>
									<Text style={styles.secondText}>{item}</Text>
								</Left>
								<Right>
									<Radio 
										selected={this.state.selectedCard === item}
										onPress={() => {
												this.setState({ selectedCard: item });
											}}
									/>
								</Right>
							</ListItem>
						))
					}
				</List>
				<Button block style={styles.confirmBtn} onPress={() => this.confirmSend()}>
					<Text>Confirm</Text>
				</Button>
			</>
		);
  }
}

const styles = StyleSheet.create({
	dropdown: {
		marginLeft: 16,
	},

	primText: {
		fontSize: 18,
		color: '#0000FF',
	},

	secondText: {
		fontSize: 16,
		color: '#424949',
	},

	confirmBtn: {
		height: 40,
		marginVertical: 20,
		marginHorizontal: 8,
	}
});

export default BookService;

