/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import firebase from 'react-native-firebase';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }

  // async componentDidMount() {
  //   this.checkPermission();
  //   this.createNotificationListeners(); //add this line
  //    this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(fcmToken => {
  //       // Process your token as required
  //       console.log("ANUJ",fcmToken);
  //   });
  // }
  


  // componentWillUnmount() {
  //    this.onTokenRefreshListener();
  //   this.notificationListener;
  //   this.notificationOpenedListener;
  // }

  // //1
  // async checkPermission() {
  //   const enabled = await firebase.messaging().hasPermission();
  //   if (enabled) {
  //     this.getToken();
  //   } else {
  //     this.requestPermission();
  //   }
  // }

  // async createNotificationListeners() {
  //   /*
  //   * Triggered when a particular notification has been received in foreground
  //   * */
  //   this.notificationListener = firebase.notifications().onNotification((notification) => {
  //     const { title, body } = notification;
  //     console.log('onNotification:');
  //  // this.showAlert(title, body);
  //     //alert('message');

  //     const localNotification = new firebase.notifications.Notification({
  //       sound: 'sampleaudio',
  //       show_in_foreground: true,
  //     })
  //       .setNotificationId(notification.notificationId)
  //       .setTitle(notification.title)
  //       // .setSubtitle(notification.subtitle)
  //       .setBody(notification.body)
  //       // .setData(notification.data)
  //       .android.setChannelId('fcm_default_channel') // e.g. the id you chose above
  //       .android.setSmallIcon('@drawable/ic_launcher') // create this icon in Android Studio
  //       .android.setColor('#000000') // you can set a color here
  //       .android.setPriority(firebase.notifications.Android.Priority.High);
        

  //     firebase.notifications()
  //       .displayNotification(localNotification)
  //       .catch(err => console.error(err));
  //   });


  //   const channel = new firebase.notifications.Android.Channel('fcm_default_channel', 'Demo app name', firebase.notifications.Android.Importance.High)
  //     .setDescription('Demo app description')
  //     .setSound('sampleaudio.mp3');
  //   firebase.notifications().android.createChannel(channel);

  //   /*
  //   * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
  //   * */
  //   this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
  //     const { title, body } = notificationOpen.notification;
  //     console.log('onNotificationOpened:');

  //     Alert.alert('Your child is present Today');
  //   });

  //   /*
  //   * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
  //   * */
  //   const notificationOpen = await firebase.notifications().getInitialNotification();
  //   if (notificationOpen) {
  //     const { title, body } = notificationOpen.notification;
  //     console.log('getInitialNotification:');
  //    this.props.navigation.navigate('Attendance');
  //   }
  //   /*
  //   * Triggered for data only payload in foreground
  //   * */
  //   this.messageListener = firebase.messaging().onMessage((message) => {
  //    var text=JSON.stringify(message);
  //     var text1 = JSON.parse(text)._data.gcm_message;
  //     var text2=JSON.parse(text1).title;
  //     var text3=JSON.parse(text1).body;
     
    
  //     console.log(JSON.stringify(message));
  //     const notification = new firebase.notifications.Notification()
  // .setNotificationId('notificationId')
  // .setTitle(text2)
  // .setBody(text3)
  // .setData({
  //   key1: 'value1',
  //   key2: 'value2',
  // });
  // notification
  // .android.setChannelId('channelId')
  // .android.setSmallIcon('ic_launcher');
  // firebase.notifications().displayNotification(notification);

  //   });
  // }



  // //3
  // async getToken() {
  //   let fcmToken = await AsyncStorage.getItem('fcmToken');
  //   if (!fcmToken) {
  //     fcmToken = await firebase.messaging().getToken();
  //     if (fcmToken) {
  //       // user has a device token
  //       console.log('fcmToken:', fcmToken);
  //       await AsyncStorage.setItem('fcmToken', fcmToken);
  //     }
  //   }
  //   console.log('fcmToken:', fcmToken);
  // }

  // //2
  // async requestPermission() {
  //   try {
  //     await firebase.messaging().requestPermission();
  //     // User has authorised
  //     this.getToken();
  //   } catch (error) {
  //     // User has rejected permissions
  //     console.log('permission rejected');
  //   }
  // }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
