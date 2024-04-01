import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const MessagesHeader = () => {
  return (
    <>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/icons/woman.png')}
          style={styles.imagesWoman}
          resizeMode="contain"
        />
        <View style={styles.textNotification}>
          <Text style={styles.text}>Messages</Text>
        </View>
        <Image
          source={require('../../../assets/icons/ayarlarr.png')}
          style={styles.imagesSettings}
          resizeMode="contain"
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  imagesWoman: {
    width: 35,
    height: 50,
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
  imagesSettings: {
    width: 35,
    height: 35,
  },
});
export default MessagesHeader;
