/* eslint-disable prettier/prettier */
import React from 'react';

import { StyleSheet } from 'react-native';
import { List, ListItem, Text, Left, Right, Button, Icon, Radio } from "native-base";

class BookService extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			selectedAddress: null,
			selectedCard: null,
		}
	}
	
	addNewAddress() {

	}

	addNewCreditCard() {

	}

	confirmSend() {

	}

  render() {
		const { addresses, creditCards } = this.props.user;
		return (
			<>
				<List>
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

