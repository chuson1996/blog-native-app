import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from './styles/grid'
/**
 * To style our app, we will use styled-components. Let's install it.
 * Next create a directory: styles in our root directory.
 * Why?
 * Because all of our styled components will go to that folder.
 */
export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Text>So we have covered styling in our app. That's the end of part 1. Part 2 comming very soon. Stay tuned!!!!!</Text>
      </Container>
    );
  }
}
