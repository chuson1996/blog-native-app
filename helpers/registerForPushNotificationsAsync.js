import { Permissions, Notifications } from 'expo';

const PUSH_ENDPOINT = 'http://192.168.1.234:3000';

export default async function registerForPushNotificationsAsync() {
  const { existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;
  console.log('existingStatus: ', existingStatus);

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  console.log('finalStatus', finalStatus);

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  console.log('token', token);

  // POST the token to our backend so we can use it to send pushes from there
  return fetch(PUSH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: {
        value: token,
       },
       user: {
        username: 'Brent',
       },
    }),
  });
}