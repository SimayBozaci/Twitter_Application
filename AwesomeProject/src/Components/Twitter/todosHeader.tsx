import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const todosHeader = () => {
  return (
    <>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/icons/task.png')}
          style={styles.imagesWoman}
          resizeMode="contain"
        />
        <View style={styles.textName}>
          <Text style={styles.text}>Todo Task</Text>
        </View>
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
  textName: {
    flex: 1,
    marginRight: 29,
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  imagesLine: {
    width: 55,
    height: 55,
    marginTop: 15,
  },
});
export default todosHeader;
