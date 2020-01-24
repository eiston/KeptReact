/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import { SearchBar } from 'react-native-elements';

import { Container, Header, Content, Footer, FooterTab, Title, Left, Right, Button, Icon } from 'native-base';

import JobPosting from './components/JobPosting';
import SideBar from './components/SiderBar';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pageTab: 0,
      showSearchBar: false,
      showOptions: false,
    }
  }

  render() {
    return (
      <>
        <Container>
          <Header style={styles.headerView}>
            <Left>
              <Title>Kept</Title>
            </Left>
            <Right>
              <Button transparent>
                <Icon name='switch' />
              </Button>
              <Button transparent onPress={() => {this.setState({ showSearchBar: !this.state.showSearchBar })}}>
                <Icon name='search' />
              </Button>
              <Button transparent onPress={() => {this.setState({ showOptions: !this.state.showOptions })}}>
                <Icon name='list-box' />
              </Button>
            </Right>
          </Header>
          <Content>
            {this.state.showSearchBar &&
              <SearchBar 
                cancelIcon
                lightTheme
                placeholder="Type Here..."
              />}
            {this.state.showOptions && <SideBar />}
            {this.state.pageTab === 1 && <JobPosting postings={post} />}
          </Content>
          <Footer>
            <FooterTab>
              <Button vertical style={styles.footerIcon} onPress={() => this.setState({ pageTab: 1 })}>
                <Icon name='paper' />
                <Text style={styles.footerText}>Postings</Text>
              </Button>
              <Button vertical style={styles.footerIcon} onPress={() => this.setState({ pageTab: 2 })}>
                <Icon name='list-box' />
                <Text style={styles.footerText}>Contact</Text>
              </Button>
              <Button vertical style={styles.footerIcon} onPress={() => this.setState({ pageTab: 3 })}>
                <Icon name='time' />
                <Text style={styles.footerText}>Schedule</Text>
              </Button>
              <Button vertical style={styles.footerIcon} onPress={() => this.setState({ pageTab: 4 })}>
                <Icon name='person' />
                <Text style={styles.footerText}>Profile</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </>
    );
  }
}

const post = [
  {
    id: 1,
    job_type: 'House Cleaning',
    name: 'test users',
    job_description: 'House Cleaning',
    price_high: 35,
    price_low: 15,
    start_time: '08:10:00',
    finish_time: '12:00:00',
    date: '2019-12-12'
  },
  {
    id: 2,
    job_type: 'Snow Plowing',
    name: 'react dev',
    job_description: 'Snow Plowing',
    price_high: 25,
    price_low: 10,
    start_time: '06:10:00',
    finish_time: '09:00:00',
    date: '2019-12-19'
  }
];

const styles = StyleSheet.create({
  headerView: {
    paddingLeft: 16,
  },

  searchBoxContainer: {
    backgroundColor: '#F5F5F5'
  },

  searchContainer: {
    backgroundColor: '#ffffff',
  },

  footerIcon: {
    paddingVertical: 4
  },

  footerText: {
    color: '#ffffff'
  }
});

export default Home;
