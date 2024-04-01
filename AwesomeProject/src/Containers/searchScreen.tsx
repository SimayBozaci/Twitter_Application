import React from 'react';
import {StyleSheet, View} from 'react-native';
import SearchList from '../Components/Twitter/SearchList';
import SearchHeader from '../Components/Twitter/searchHeader';

const SearchScreen = ({}) => {
  return (
    <View style={styles.container}>
      <SearchHeader />
      <SearchList />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
