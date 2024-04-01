import React from 'react';

import {
  FlatList,
  ImageSourcePropType,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CardItem from '../CardItem';

type ItemProps = {
  [x: string]: any;
  id: string;
  newProfileText: string;
  name: string;
  tweetText: string;
  imageSource: ImageSourcePropType;
  profileImageSource: ImageSourcePropType;
  newIcon: ImageSourcePropType;
  secondIcon: ImageSourcePropType;
  thirdIcon: ImageSourcePropType;
  fourthIcon: ImageSourcePropType;
  newbutton: any;
  newProfileName: string;
  point: string;
};

const DATA = [
  {
    id: 'a',
    newProfileName: 'Science News ',
    newProfileText: '@science_news .5m',
    point: '...',
    imageSource: require('../../../../assets/icons/greenh.jpg'),
    tweetText: "From Vision to Withdrawal:ATCO's Green Hydrogen Saga in WA",
    profileImageSource: require('../../../../assets/icons/man.jpg'),
    newIcon: require('../../../../assets/icons/comment.png'),
    IconText: '787',
    secondIcon: require('../../../../assets/icons/retweet.jpg'),
    thirdIcon: require('../../../../assets/icons/like.png'),
    fourthIcon: require('../../../../assets/icons/share.png'),
  },
  {
    id: 'b',
    newProfileName: ' EnergyNews',
    newProfileText: '  @energy_news .1h',
    point: '...',
    tweetText: 'Annual World Robot Conferance in Beijing.',
    imageSource: require('../../../../assets/icons/robot.jpg'),
    profileImageSource: require('../../../../assets/icons/man.jpg'),
    newIcon: require('../../../../assets/icons/comment.png'),
    secondIcon: require('../../../../assets/icons/retweet.jpg'),
    thirdIcon: require('../../../../assets/icons/like.png'),
    fourthIcon: require('../../../../assets/icons/share.png'),
  },
  {
    id: 'c',
    newProfileName: 'Arthur',
    newProfileText: ' @arthur .1h',
    point: '...',
    tweetText:
      'The pattern of tooth growth suggest taht the species lived fast and died lived.',
    imageSource: require('../../../../assets/icons/köpekbalığı.jpg'),
    profileImageSource: require('../../../../assets/icons/man.jpg'),
    newIcon: require('../../../../assets/icons/comment.png'),
    secondIcon: require('../../../../assets/icons/retweet.jpg'),
    thirdIcon: require('../../../../assets/icons/like.png'),
    fourthIcon: require('../../../../assets/icons/share.png'),
  },
  {
    id: 'd',
    newProfileName: 'Evan',
    newProfileText: ' @evan .1h',
    point: '...',
    tweetText:
      "From ancient pilgrim ways to a converted railway track,Portugal's cycling routes showcase the diversity of the country ",
    imageSource: require('../../../../assets/icons/bisiklet.jpg'),
    profileImageSource: require('../../../../assets/icons/man.jpg'),
    newIcon: require('../../../../assets/icons/comment.png'),
    secondIcon: require('../../../../assets/icons/retweet.jpg'),
    thirdIcon: require('../../../../assets/icons/like.png'),
    fourthIcon: require('../../../../assets/icons/share.png'),
  },
  {
    id: 'e',
    newProfileName: 'Science Research',
    newProfileText: ' @science research .25m',
    point: '...',
    tweetText:
      'NEWS:A Star-size black hole is emitting radio signals that scientists can not explain ',
    imageSource: require('../../../../assets/icons/blackHole.jpg'),
    profileImageSource: require('../../../../assets/icons/man.jpg'),
    newIcon: require('../../../../assets/icons/comment.png'),
    secondIcon: require('../../../../assets/icons/retweet.jpg'),
    thirdIcon: require('../../../../assets/icons/like.png'),
    fourthIcon: require('../../../../assets/icons/share.png'),
  },
  {
    id: 'f',
    newProfileName: 'Diana',
    newProfileText: ' @diana .27m',
    point: '...',
    tweetText: 'The joys of summer in Michigan.Sunsets over lakes',
    imageSource: require('../../../../assets/icons/sunset.jpg'),
    profileImageSource: require('../../../../assets/icons/profil.jpg'),
    newIcon: require('../../../../assets/icons/comment.png'),
    secondIcon: require('../../../../assets/icons/retweet.jpg'),
    thirdIcon: require('../../../../assets/icons/like.png'),
    fourthIcon: require('../../../../assets/icons/share.png'),
  },
] as ItemProps[];

const PostList = () => {
  const renderItem = ({item}: {item: ItemProps}) => <CardItem />;
  const profileImageSource = 'https://reactnative.dev/img/tiny_logo.png';
  const image = 'https://reactnative.dev/img/tiny_logo.png';

  const newIcon =
    'data:image/png;base64,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';
  const secondIcon =
    'https://media.istockphoto.com/id/1322543531/vector/repost-icon-in-line-style-social-media-repost-retweet-symbol.jpg?s=612x612&w=0&k=20&c=59yyPpcVXqNqY5JAPTI42ukwB_IT4vZPScs2vumTWBw=';
  const thirdIcon =
    'https://static-00.iconduck.com/assets.00/share-icon-2048x1911-60w04qpe.png';
  const fourthIcon =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5JCjELDA322sxx_FMsasQaCVwz3mRY1vFCvjXuE8TnDAusLdjCyFwItfTijKP4PqJkA4&usqp=CAU';

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => {
          console.log('item:', item);
          return (
            <CardItem
              image={image}
              tweetText={item.tweetText}
              imageSource={item.imageSource}
              profileImageSource={profileImageSource}
              newIcon={newIcon}
              secondIcon={secondIcon}
              thirdIcon={thirdIcon}
              fourthIcon={fourthIcon}
              newProfileText={item.newProfileText}
              newProfileName={item.newProfileName}
              point={item.point}
            />
          );
        }}
        keyExtractor={Item => Item.id}
      />
      <View style={{backgroundColor: '#1E90FF'}}>
        <TouchableOpacity style={styles.bottomContainer}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 40,
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  newContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  leftContainer: {
    flex: 0.2,
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 0.7,
  },

  newProfileImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
    alignSelf: 'center',
  },

  newProfileText: {
    fontSize: 16,
    color: 'grey',
    borderColor: 'bold',
    marginTop: 5,
    paddingLeft: 1,
  },

  newTweetText: {
    fontSize: 21,
  },

  newImage: {
    width: 200,
    height: 200,
    borderRadius: 5,
    marginBottom: 11,
  },
  newIcon: {
    width: 20,
    height: 20,
    marginLeft: 9,
  },
  secondIcon: {
    width: 35,
    height: 35,
    marginLeft: 45,
  },
  newButton: {
    width: 100,
    height: 100,
  },
  thirdIcon: {
    width: 15,
    height: 15,
    marginLeft: 45,
  },
  fourthIcon: {
    width: 20,
    height: 20,
    marginLeft: 45,
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.4,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginVertical: 10,
    opacity: 0.3,
  },
  bottomContainer: {
    backgroundColor: '#1E90FF',
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: 23,
    borderRadius: 45,
  },
  newbutton: {
    flex: 1,
    position: 'absolute',
    color: 'red',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default PostList;
