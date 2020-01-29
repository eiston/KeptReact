/* eslint-disable prettier/prettier */
import React from 'react';

import {
  Text,
  List,
  ListItem,
  Icon
} from "native-base";
	

const routes = ['Snow Plowing', 'Leaf Blowing', 'Lawn Mowing', 'House Cleaning', 'Plumbing', 'More'];

class SideBar extends React.Component {
	render() {
		return (
			<List
        dataArray={routes}
        renderRow={data => {
          return (
            <ListItem
              button
              onPress={() => this.props.navigation.navigate(data)}
            >
              <Text>{data}</Text>
            </ListItem>
          );
        }}
      />
		)
		
	}
}

export default SideBar;
