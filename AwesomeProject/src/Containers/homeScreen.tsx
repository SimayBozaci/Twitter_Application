import React from 'react';
import {StyleSheet, View} from 'react-native';
import PostList from '../Components/Twitter/PostList';
import Header from '../Components/Twitter/header';

const HomeScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Header />
      <PostList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
