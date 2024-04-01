import React from 'react';
import {StyleSheet, View} from 'react-native';
import TodoList from '../Components/Twitter/todoList';
import TodosHeader from '../Components/Twitter/todosHeader';

const SearchScreen = ({}) => {
  return (
    <View style={styles.container}>
      <TodosHeader />
      <TodoList />
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
