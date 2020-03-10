/* eslint-disable prettier/prettier */
import React from 'react';

import { StyleSheet } from 'react-native';
import { List, ListItem, Item, Text, Left, Right, Button, Icon, Radio, Form, Picker, Input, Textarea, DatePicker, Toast } from "native-base";

import postings from '../api/postings';
import { compareTime } from '../helper';

class BookService extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			name: '',
			description: '',
			date: new Date(),
			wrong_price: false,
			wrong_time: false,
			price_high: null,
			price_low: null,
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
		const { price_high, price_low, start_time, finish_time, job_type, description, name, date } = this.state;
		if (price_high === 0 || price_low === 0 || price_high < price_low) {
			this.setState({
				price_low: 0,
				price_high: 0,
				wrong_price: true
			});
			return;
		}
		if (!compareTime(start_time, finish_time)) {
			this.setState({
				start_time: null,
				finish_time: null,
				wrong_time: true
			});
			return;
		}
		this.setState({
			start_time: `${this.state.date.toISOString().slice(0, 10)} ${this.state.start_time}`,
			finish_time: `${this.state.date.toISOString().slice(0, 10)} ${this.state.finish_time}`
		});
		const post = {
			name,
			description,
			job_type,
			price_high,
			price_low,
			start_time: `${date.toISOString().slice(0, 10)} ${start_time}`,
			finish_time: `${date.toISOString().slice(0, 10)} ${finish_time}`,
			author : 1,
			housing_id: 1,
			is_provider: false
		};

		const res = await postings.createPosting(post);

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
					onDateChange={(newDate) => this.setState({ date: newDate })}
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
					<Item error={this.state.wrong_time}>
						<Input
							placeholder="Set Start Time"
							value={this.state.start_time}
							onChangeText={(text) => this.setState({ start_time: text })}
						/>
					</Item>
					<Item error={this.state.wrong_time}>
						<Input
							placeholder="Set End Time"
							value={this.state.finish_time}
							onChangeText={(text) => this.setState({ finish_time: text })}
						/>
					</Item>
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
					<Item 
						error={this.state.wrong_price}
					>
						<Input
							placeholder="Maximum Price"
							value={this.state.price_high}
							onChangeText={(text) => this.setState({ price_high: text })}
						/>
						<Input
							placeholder="Minimum Price"
							value={this.state.price_low}
							onChangeText={(text) => this.setState({ price_low: text })}
						/>
					</Item>
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

