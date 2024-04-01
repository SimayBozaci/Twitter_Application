import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.imagess}>
      <View style={styles.images}>
        <Image
          source={require('../../../assets/icons/profile.jpg')}
          style={styles.images}
          resizeMode="contain"
        />
      </View>

      <View style={styles.images}>
        <Image
          source={require('../../../assets/icons/twitter.png')}
          style={styles.images}
          resizeMode="contain"
        />
      </View>
      <View style={styles.images}>
        <Image
          source={require('../../../assets/icons/starr.jpg')}
          style={styles.images}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  images: {
    flexDirection: 'row',
    borderRadius: 25,
    height: 40,
    marginBottom: 5,
    marginTop: 3,
    marginRight: 49,
    marginLeft: 49,
    width: 35,
    justifyContent: 'center',
  },
  imagess: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 1,
  },
});
