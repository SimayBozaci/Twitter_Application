import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import NotificationItem from '../NotificationItem';

type ItemProps = {
  id: string;
  imagesLeft: any;
  imagesTop: any;
  postText: string;
};
const DATA = [
  {
    id: 'a',
    imagesLeft: require('../../../../assets/icons/purple_star.png'),
    imagesTop: require('../../../../assets/icons/woman.png'),
    postText: 'Annual World Robot Conferance in Beijing.',
  },
  {
    id: 'b',
    imagesLeft: require('../../../../assets/icons/purple_star.png'),
    imagesTop: require('../../../../assets/icons/woman.png'),
    postText:
      'Linon Sinclair Execurive Office Chair is still in your cart.Check out now',
  },
  {
    id: 'c',
    imagesLeft: require('../../../../assets/icons/purple_star.png'),
    imagesTop: require('../../../../assets/icons/woman.png'),
    postText:
      'Loving your new jacket?Pair it with these cute boots for a complete look!View now.',
  },
  {
    id: 'd',
    imagesLeft: require('../../../../assets/icons/purple_star.png'),
    imagesTop: require('../../../../assets/icons/woman.png'),
    postText: 'Annual World Robot Conferance in Beijing.',
  },
  {
    id: 'e',
    imagesLeft: require('../../../../assets/icons/purple_star.png'),
    imagesTop: require('../../../../assets/icons/woman.png'),
    postText: 'Annual World Robot Conferance in Beijing.',
  },
  {
    id: 'f',
    imagesLeft: require('../../../../assets/icons/purple_star.png'),
    imagesTop: require('../../../../assets/icons/woman.png'),
    postText: 'Annual World Robot Conferance in Beijing.',
  },
] as ItemProps[];

const PostNotification = () => {
  const renderItem = ({item}: {item: ItemProps}) => <NotificationItem />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => {
          return (
            <NotificationItem
              id={item.id}
              imagesLeft={item.imagesLeft}
              imagesTop={item.imagesTop}
              postText={item.postText}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  main: {
    backgroundColor: 'white',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
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

export default PostNotification;
