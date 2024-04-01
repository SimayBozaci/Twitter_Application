import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const NotificationItem = props => {
  return (
    <>
      <View style={styles.postContainer}>
        <View style={styles.leftContainer}>
          <Image
            source={require('../../../../assets/icons/purple_star.png')}
            style={styles.imagesLeft}
            resizeMode="contain"
          />
          <Text>{props.LeftContainer}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Image
            source={require('../../../../assets/icons/woman.png')}
            style={styles.imagesTop}
            resizeMode="contain"
          />
          <Text>{props.imagesTop}</Text>
          <Text style={styles.postText}>
            Loving your new Jacket? Pair it with these cute boots for a complete
            look! View now.
          </Text>
          <Text>{props.postText}</Text>
          {props.RightContainer}
        </View>
      </View>

      <View style={styles.line} />
    </>
  );
};
const styles = StyleSheet.create({
  leftContainer: {
    marginRight: 3,
    marginLeft: 20,
    alignSelf: 'flex-start',
    alignItems: 'flex-end',
  },
  rightContainer: {
    flex: 1,
  },

  textNotification: {
    flex: 1,
  },

  text: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  imagesHeader: {
    width: 35,
    height: 50,
  },
  imagesLeft: {
    alignSelf: 'flex-end',
    width: 35,
    height: 35,
    opacity: 0.5,
    borderRadius: 21,
  },
  imagesSettings: {
    width: 35,
    height: 35,
  },
  imagesTop: {
    width: 35,
    height: 35,
    borderRadius: 21,
  },

  line: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.3,
    opacity: 0.5,
  },

  postContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
    marginBottom: 7,
    flexDirection: 'row',
  },
  postText: {
    fontSize: 15,
    color: 'black',
    marginTop: 1,
  },
});

export default NotificationItem;
