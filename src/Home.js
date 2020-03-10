/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';

import { SearchBar } from 'react-native-elements';

import { 
  Container, 
  Header, 
  Content, 
  Footer, 
  FooterTab, 
  Title, 
  Left, 
  Right, 
  Button, 
  Icon, 
  Text 
} from 'native-base';

import JobPosting from './components/JobPosting';
import SideBar from './components/SiderBar';
import BookService from './components/BookService';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Kept',
      pageTab: 1,
      showSearchBar: false,
      showOptions: false,
    }
  }

  postJob() {
		this.setState({
			pageTab: -1,
		});
	}

  render() {
    return (
      <>
        <Container>
          <Header style={styles.headerView}>
            <Left>
              <Title>{this.state.title}</Title>
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
          <Content contentContainerStyle={{ flexGrow: 1 }}>
              {this.state.showSearchBar &&
                <SearchBar 
                  cancelIcon
                  lightTheme
                  placeholder="Type Here..."
                />}
              {this.state.showOptions && <SideBar />}
              {this.state.pageTab === -1 && <BookService user={user} />}
              {this.state.pageTab === 1 && <JobPosting />}
              <Button block style={styles.postButton} onPress={() => this.postJob()}>
                <Text>Post a Job</Text>
              </Button>
          </Content>
          <Footer>
            
            <FooterTab>
              <Button vertical style={styles.footerIcon} onPress={() => this.setState({ pageTab: 1 })}>
                <Icon name="paper" />
                <Text style={styles.footerText}>Postings</Text>
              </Button>
              <Button vertical style={styles.footerIcon} onPress={() => this.setState({ pageTab: 2 })}>
                <Icon name="list-box" />
                <Text style={styles.footerText}>Contact</Text>
              </Button>
              <Button vertical style={styles.footerIcon} onPress={() => this.setState({ pageTab: 3 })}>
                <Icon name="time" />
                <Text style={styles.footerText}>Schedule</Text>
              </Button>
              <Button vertical style={styles.footerIcon} onPress={() => this.setState({ pageTab: 4 })}>
                <Icon name="person" />
                <Text style={styles.footerText}>Profile</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </>
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
  },

  postButton: {
		height: 40,
		marginVertical: 12,
		marginHorizontal: 8,
  }
});

export default Home;
