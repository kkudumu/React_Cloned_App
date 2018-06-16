import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';




export class TimelineHeader extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Timeline</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

export default TimelineHeader;