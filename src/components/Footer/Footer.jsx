import React from 'react'
import styled from 'styled-components';
import {Facebook,Instagram,Twitter,Pinterest,Room,Phone,MailOutline} from '@material-ui/icons'
// import { Mobile } from '../responsive';
const Container = styled.div`
display: flex;
border-top: 2px solid #ccc;


`
const Left = styled.div`
/* background-color: ${props=>props.color}; */
padding: 20px;
flex-direction: column;
display: flex;
flex:1;
.socialContainer{
    display: flex;
    .socialIcon{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color:white;
       display: flex;
       align-items: center;
       justify-content: center;
       margin-right: 20px;
    }
}
.desc{
    margin : 20px 0;
}
`
const Center = styled.div`
flex:1;
padding: 20px;

`
const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0%;
padding:0;
list-style: none;
display: flex;flex-wrap:wrap;
`
const ListItem = styled.li`
width : 50%;
margin-bottom: 10px;
`
const Right = styled.div`
flex:1;
padding: 20px;

`
const ContactItem = styled.div`
display: flex;
margin-bottom:20px;
align-items: center;
`
const Payment = styled.img`
width: 200px;
height: 50px;
`
function Footer() {
  return (
    <Container>
        <Left color='red'>
            <h1 className="logo">
                KHAN Pets
            </h1>
            <p className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptate amet quam, consequatur iure quasi sapiente beatae ea suscipit at reiciendis labore maiores delectus corporis officia quidem aperiam facere, ipsum maxime cum?
            </p>
            <div className="socialContainer">
                <div className="socialIcon"  style={{backgroundColor:'#3B5999'}}>
                    <Facebook/>
                </div>
                <div className="socialIcon" style={{backgroundColor :'#E4405F'}} >
                    <Instagram/>
                </div>
                <div className="socialIcon" style={{backgroundColor:'#55ACEE'}} >
                    <Twitter/>
                </div>
                <div className="socialIcon"  style={{backgroundColor :'#E60023'}}>
                    <Pinterest/>
                </div>
            </div>
        </Left>
        <Center>
            <Title>Useful Link</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Lovely Pet</ListItem>
                <ListItem>Pet Food</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Whislist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Term</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:'10px'}}/>
                116/ trai ca , hai ba trung
                </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:'10px'}}/>
                0123123923</ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:'10px'}}/>
                Contact @ducthiennguyen.com</ContactItem>
                <Payment src="https://www.braintreepayments.com/images/features/payment-methods/payment-methods.png"/>
        </Right>
    </Container>
  )
}

export default Footer