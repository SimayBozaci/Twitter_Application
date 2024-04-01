import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PostDataType, deleteAPIData} from './crud';

type TodoItemProps = {
  data: PostDataType;
  key: string;

  setCurrentPostData: (param: PostDataType) => void;
};

const TodoItem = (props: TodoItemProps) => {
  return (
    <View style={styles.dataItem}>
      <Text>{props?.data?.todo.toString()}</Text>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => deleteAPIData(props.data.id!)}>
          <Text style={styles.buttonStyle}>Delete</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.save}
          onPress={() => props.setCurrentPostData(props.data)}>
          <Text style={styles.buttonStyleSave}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dataItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 0.3,
    padding: 3,
    margin: 5,
    borderRadius: 3,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonStyle: {
    backgroundColor: 'orange',
    borderRadius: 5,
    width: 45,
    height: 45,
    textAlign: 'center',
    color: 'black',
    paddingTop: 9,
  },
  delete: {
    color: 'black',
    justifyContent: 'flex-end',
    marginBottom: 7,
  },
  buttonStyleSave: {
    backgroundColor: '#00BFFF',
    marginTop: 5,
    marginLeft: 3,
    width: 45,
    height: 45,
    borderRadius: 5,
    marginBottom: 7,
    color: 'black',
    fontSize: 13,
    textAlign: 'center',
    paddingTop: 11,
  },
  save: {
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default TodoItem;
