import axios from 'axios';
import React, {useEffect, useState} from 'react';

import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import TodoItem from '../SearchTodoItem';
import {
  PostDataType,
  postDataToServer,
  updateAPIData,
} from '../SearchTodoItem/crud';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [responseData, setResponseData] = useState<PostDataType[]>();
  const [currentPostData, setCurrentPostData] = useState<PostDataType>();

  useEffect(() => {
    getDataFromServer();
  }, []);

  useEffect(() => {
    if (currentPostData) {
      setSearchText(currentPostData?.todo!);
    }
  }, [currentPostData]);

  const getDataFromServer = () => {
    axios
      .get('https://64e7540eb0fd9648b78fc9b9.mockapi.io/api/v1/todos/')
      .then(response => {
        //console.log(response.data);
        setResponseData(response.data.splice(0.2));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.mainScreen}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.headerMain}>
            <TextInput
              style={styles.input}
              placeholder="Direct Message"
              onChangeText={(text: any) => setSearchText(text)}
              value={searchText}
            />
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.delete}
                onPress={() => {
                  setSearchText('');
                  Keyboard.dismiss();
                }}>
                <Text style={styles.buttonStyle}>Temizle</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.save}
                onPress={() => {
                  currentPostData?.id
                    ? updateAPIData({id: currentPostData.id, todo: searchText})
                    : postDataToServer({todo: searchText});
                  setSearchText(''); //arama kutusunun içerisini temizledik
                  Keyboard.dismiss();
                  getDataFromServer();
                }}>
                <Text style={styles.buttonStyleSave}>
                  {currentPostData?.id ? 'update' : 'Save'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {responseData && responseData.length > 0 && (
            <ScrollView style={styles.dataView}>
              {responseData.map((data: PostDataType) => (
                <TodoItem
                  key={data.id}
                  data={data}
                  setCurrentPostData={setCurrentPostData}
                />
              ))}
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonStyle: {
    backgroundColor: 'orange',
    borderRadius: 5,
    width: 45,
    height: 45,
    marginLeft: 3,
    color: 'black',
    marginBottom: 3,
    fontSize: 12,
    textAlign: 'center',
    paddingTop: 13,
  },
  buttonStyleSave: {
    backgroundColor: '#00BFFF',
    marginTop: 5,
    marginLeft: 3,
    width: 45,
    height: 45,
    borderRadius: 5,
    marginBottom: 9,
    color: 'black',
    textAlign: 'center',
    paddingTop: 11,
  },

  delete: {
    color: 'black',
    justifyContent: 'flex-end',
    marginBottom: 7,
  },
  headerMain: {
    backgroundColor: 'white',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  save: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 0.9,
    borderRadius: 3,
    marginBottom: 7,
    flex: 1,
    marginLeft: 3,
  },
  button: {
    // borderWidth: 0.7,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  dataView: {
    flex: 1,
  },

  dataItem: {
    backgroundColor: 'lightgray',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});

export default SearchScreen;
