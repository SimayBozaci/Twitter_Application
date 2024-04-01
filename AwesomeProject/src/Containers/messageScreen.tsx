import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MessageScreen = () => {
  const [list, setList] = useState([]);
  const [name, setName] = React.useState();
  const [isUpdate, setIsUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAPIData();
  }, []);

  const dataDelete = async (itemId: string) => {
    const response = await fetch(
      'https://64e7540eb0fd9648b78fc9b9.mockapi.io/api/v1/todos/' + itemId,
      {
        method: 'DELETE',
      },
    );
    const result = await response.json();

    getAPIData();
  };

  const setNameAndIsUpdate = async (item: string) => {
    setName(item.todo);
    setIsUpdate(item);
  };

  const saveAPIData = async () => {
    setIsLoading(true); //veri yüklenirken loaidng ekranı gözüküsn
    const data = {
      todo: name,
    };
    const url = 'https://64e7540eb0fd9648b78fc9b9.mockapi.io/api/v1/todos';
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
    const result = await response.json();
    setName('');
    getAPIData();
    setIsLoading(false); //veri kaydedilince loadingi kapatsın
  };

  const getAPIData = async () => {
    setIsLoading(true); //veriler çekilirken gözüksün
    const url = 'https://64e7540eb0fd9648b78fc9b9.mockapi.io/api/v1/todos';

    const response = await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });

    const result = await response.json();
    console.log(result);
    setList(result.reverse());
    setIsLoading(false); //veri cekme bitince false olsun
  };
  const updateAPIData = async () => {
    const newData = {
      id: isUpdate.id,
      createdAt: isUpdate.createdAt,
      todo: name,
    };
    setIsLoading(true);

    console.log(newData);

    try {
      const response = await fetch(
        `https://64e7540eb0fd9648b78fc9b9.mockapi.io/api/v1/todos/${newData.id}`,
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newData),
        },
      );

      if (response.ok) {
        const data = await response.json();

        setName('');
        getAPIData();
      } else {
      }
    } catch (err) {}
    setIsUpdate(false);
  };

  return (
    <View style={styles.mainscreen}>
      <View style={styles.container}>
        <View style={styles.TextContainer}>
          <TextInput
            style={styles.name}
            onChangeText={k => {
              setName(k);
            }}
            value={name}
            placeholder={'Please write your plans'}
          />

          <TouchableOpacity
            style={[
              styles.save,
              {backgroundColor: isUpdate ? 'orange' : 'rgb(45,98,255)'},
            ]}
            onPress={isUpdate ? updateAPIData : saveAPIData}>
            <Text style={styles.butonstyle}>
              {isUpdate ? 'Update' : 'Save'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.list}>
          <FlatList
            data={list}
            renderItem={({item}) => (
              <View style={styles.input}>
                <Ionicons
                  name="radio-button-on-outline"
                  size={25}
                  color="blue"
                  style={{
                    paddingTop: 15,
                  }}
                />
                <Text style={styles.text}>{item.todo}</Text>

                <TouchableOpacity
                  style={styles.update}
                  onPress={() => setNameAndIsUpdate(item)}>
                  <Ionicons
                    name="refresh"
                    size={25}
                    color="black"
                    style={{
                      paddingBottom: 5,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    Alert.alert('Do you want to delete', '', [
                      {
                        text: 'Yes',
                        onPress: () => dataDelete(item.id),
                      },
                      {
                        text: 'No',
                        onPress: () => Alert.alert('it is it cancelled!'),
                      },
                    ])
                  }>
                  <Ionicons
                    name="trash-outline"
                    size={25}
                    color="black"
                    style={{
                      paddingBottom: 5,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
            ListHeaderComponent={
              isLoading && <ActivityIndicator size="large" color="blue" />
            }
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8FF',
  },
  mainscreen: {
    backgroundColor: 'white',
  },
  mainUpdate: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
  icon: {
    width: 25,
    height: 26,
    marginBottom: 7,
  },

  name: {
    margin: 9,
    borderWidth: 1,
    borderColor: 'rgb(45,98,255)',
    padding: 9,
    fontSize: 15,
    color: '#000000',
    borderRadius: 3,
    flex: 1,
  },
  update: {
    flex: 0.2,
    justifyContent: 'flex-end',
  },

  intext: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    marginTop: 11,
    marginBottom: 13,
    fontFamily: 'Times new roman',
  },
  butonstyle: {
    color: 'white',
    fontFamily: 'Times new roman',
    fontWeight: 'bold',
    fontSize: 11,
    marginTop: 5,
  },
  sabit: {
    width: 25,
    height: 25,
    justifyContent: 'flex-start',
    marginTop: 17,
    marginLeft: 3,
  },
  updatetext: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    marginTop: 11,
    marginBottom: 13,
    fontFamily: 'Times new roman',
  },

  main: {
    fontSize: 30,
    color: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'fantasy',
    fontWeight: 'bold',
    backgroundColor: 'red',
  },
  save: {
    backgroundColor: 'rgb(45,98,255)',
    borderColor: 'white',
    padding: 10,
    borderRadius: 23,
    width: 57,
    height: 50,
    marginTop: 1,
  },
  mainbox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDA0DD',
  },

  input: {
    margin: 5,
    width: '99%',
    height: 50,
    marginLeft: 11,
    marginTop: 3,
    borderWidth: 0.1,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },

  TextContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },

  button: {
    flex: 0.2,
    justifyContent: 'flex-end',
  },
  buttonTitle: {
    backgroundColor: 'yellow',
    fontSize: 11,
    fontWeight: 'bold',
  },
  list: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 17,
    marginTop: 15,
    marginLeft: 5,
    color: 'black',
    justifyContent: 'flex-start',
    flex: 1,
  },
});

export default MessageScreen;

function getAPIData() {
  throw new Error('Function not implemented.');
}

function then(arg0: (response: {json: () => any}) => any) {
  throw new Error('Function not implemented.');
}
