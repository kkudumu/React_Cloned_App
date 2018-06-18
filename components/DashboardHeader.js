import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';




export class DashboardHeader extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Dashboard</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

export default DashboardHeader;