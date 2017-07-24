import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, DrawerLayoutAndroid, View, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Item, Input, Card } from 'native-base';
// import logo from '../images'
class Dashboard extends Component {
    openDrawer = () => {
        this.refs['myDrawer'].openDrawer();
    }
    closeDrawer = () => {
        this.refs['myDrawer'].closeDrawer();
    }
    render() {
        var navigationView = (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Image source={{ uri: 'https://www.solutionhive.com/images/portfolioLogo1.png' }}
                    style={{ width: 250, height: 250, marginLeft: 20 }} />
                <Button block success style={{ margin: 5 }}>
                    <Text>Custom Package 1</Text>
                </Button>
                <Button block success style={{ margin: 5 }}>
                    <Text>Custom Package 2</Text>
                </Button>
                <Button block success style={{ margin: 5 }}>
                    <Text>Custom Package 3</Text>
                </Button>
            </View>
        );
        return (
            <Container style={styles.containerStyle}>
                <DrawerLayoutAndroid
                    ref="myDrawer"
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}
                    >

                    <Header style={styles.headerStyle}>
                        <Left>
                            <Button success style={styles.buttonStyle} onPress={this.openDrawer}  >
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Shop</Title>
                        </Body>
                    </Header >
                    <Header searchBar rounded style={styles.headerStyle} >
                        <Item>
                            <Icon name='search' />
                            <Input placeholder=" Smartphone " />
                        </Item>

                    </Header>

                    <View>
                        <TouchableHighlight onPress={this.openDrawer}>
                            <Text>
                            </Text>
                        </TouchableHighlight>

                    </View>
                    <CardItem style={styles.carditemStyle}>
                        <Text style={{ fontSize: 30, color: 'white' }}> Hot SALE {"\n"} </Text>
                        <Text style={{ fontSize: 50, color: 'white', marginLeft: -100 }}> {"\n"}  50% </Text>
                    </CardItem>

                    <Card style={{ margin: 'auto', height: 100, width: 400, marginLeft: 5, marginTop: 5, marginRight: 5 }} >
                        <CardItem style={{ backgroundColor: '#FFCC80', margin: 'auto', height: 100, width: 390, marginLeft: 5, marginTop: 5, marginRight: 5 }}>
                            <Text style={{ fontSize: 50, color: 'white', color: 'black' }}>Package 1</Text>
                        </CardItem>

                        <CardItem style={{ backgroundColor: '#4BB543', margin: 'auto', height: 100, width: 390, marginLeft: 5, marginTop: 5, marginRight: 5 }}>
                            <Text style={{ fontSize: 50, color: 'white', color: 'black' }}>Package 2</Text>

                        </CardItem>

                        <CardItem style={{ backgroundColor: '#FFCC80', margin: 'auto', height: 100, width: 390, marginLeft: 5, marginTop: 5, marginRight: 5 }}>
                            <Text style={{ fontSize: 50, color: 'white', color: 'black' }}>Package 3</Text>

                        </CardItem>

                    </Card>

                </DrawerLayoutAndroid>

            </Container >
        );
    };
}
const styles = {
    containerStyle: {
        marginTop: -65
    },
    headerStyle: {
        backgroundColor: '#4BB543',
    },
    buttonStyle: {
        width: 40,

    },
    carditemStyle: {
        width: 420,
        height: 150,
        backgroundColor: '#FFCC80'
    }
}


export default Dashboard;