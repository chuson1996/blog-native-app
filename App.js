import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container } from './styles/grid'
import { StackNavigator } from 'react-navigation';
import Login from './screens/Login/Login';
import Blogs from './screens/Blogs/Blogs';
import NewBlog from './screens/NewBlog/NewBlog';

/**
 * To style our app, we will use styled-components. Let's install it.
 * Next create a directory: styles in our root directory.
 * Why?
 * Because all of our styled components will go to that folder.
 */

/**
 * So in the last episode, we covered a bit about styling using styled-components. But, this time, let's get real and get a taste of some navigations.
 * 
 * I welcome you to react-navigation. Apparently it's the best library for navigation. However, this is a bit biased :))))). Let's install it.
 * 
 * We will have a lot of SCREENS. So let's create a folder to contain all of our 'screens' components
 * 
 * Our first screen will be the login screen.
 * 
 * You see that for every screen, I create a specific folder. The reason is some components will have their own styling. To keep them isolated, therefore every component should have its own folder.
 * 
 * Let's talk no more, let's create our first screen.
 */

/**
 * Remember that we have 2 ways of defining navigationOptions. It could be a object OR a function ;). In the navigationOptions function, you get a object containing navigation state or probably more. Not sure, gotta check the documentation:
 * https://reactnavigation.org/docs/navigators/stack
 * 
 * Anyway... let's continue
 * 
 * Perfect. That's it for part 2. Stay tuned for part 3. Byeeeeeeeeee
 */

export default StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
  Blogs: {
    screen: Blogs,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Blogs',
        headerRight: (<Button
          title={'New'}
          onPress={() => navigation.navigate('NewBlog')}
        />)
      };
    },
  },
  NewBlog: {
    screen: NewBlog,
    navigationOptions: {
      title: 'NewBlog'
    }
  },
}, {
  initialRouteName: 'NewBlog'
});
