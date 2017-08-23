import React from 'react';
import { Text, TextInput, FormControl, Button } from '../../styles'
import { Title, LoginWrapper, FormContainer } from './Login.style';
import registerForPushNotificationsAsync from '../../helpers/registerForPushNotificationsAsync';
import { Notifications } from 'expo';
/**
 * Remember what I wrote about every component has its own styling. Oh yeah.
 */

export default class Login extends React.Component {
  state = {
    notification: {}
  }

  componentWillMount() {
    registerForPushNotificationsAsync();

    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = (notification) => {
    this.setState({ notification: notification });
  };

  render() {
    return (
      <LoginWrapper>
        <Title h4>Sign in to start blogging</Title>
        <FormContainer>
          <FormControl>
            <TextInput
              placeholder={'Email address'}
              keyboardType={'email-address'}
            />
          </FormControl>

          <FormControl>
            <TextInput
              placeholder={'Password'}
              secureTextEntry
            />
          </FormControl>

          <Text>{JSON.stringify(this.state.notification.data)}</Text>
        </FormContainer>

        <Button info title={'Login'}/>
        {/* Please remember that Button from react-native is a NATIVE button. It will look different on iOS and Android. And, you can't style it. To have custom style for buttons, we will have to create them ourselves.*/}
      </LoginWrapper>
    );
  }
}

/**
 * Let's create some buttons
 */
