import React, {useEffect, useState} from 'react';

import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const CardItem = props => {
  const [isLiked, setIsLiked] = useState(false);
  const handleLikePress = () => {
    setIsLiked(!isLiked);
  };
  const [count, setCount] = useState(91);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const [iscount, setIsCount] = useState(117);
  const handleCommentPress = () => {
    setIsCount(iscount + 1);
  };
  const [upcount, setUpCount] = useState(257);
  const handleRetweetPress = () => {
    setUpCount(upcount + 1);
  };
  const [downcount, setDownCount] = useState(579);
  const handleForwardPress = () => {
    setDownCount(downcount + 1);
  };

  const handleContainerPress = () => {
    handleLikePress();
    handleIncrement();
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <>{isLoading && <ActivityIndicator size="large" color="blue" />}</>

      <View style={styles.newContainer}>
        <Image
          style={styles.ProfileimageSource}
          source={require('../../../../assets/icons/man.jpg')}
        />
        <View style={styles.rightContainer}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                fontWeight: 'bold',
                fontFamily: 'sans-serif',
                marginBottom: 3,
              }}>
              {props.newProfileName}
            </Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 13,
                fontWeight: '300',
                fontFamily: 'sans-serif',
                marginBottom: 3,
              }}>
              {props.newProfileText}
            </Text>
            <Text
              style={{
                color: 'black',
                marginLeft: 55,
                marginBottom: 3,
                fontWeight: 'bold',
              }}>
              {props.point}
            </Text>
          </View>

          <Text
            style={{
              color: 'black',
              fontSize: 15,
              marginBottom: 5,
            }}>
            {props.tweetText}
          </Text>
          <Image style={styles.newimage} source={props.imageSource} />

          <View style={styles.iconContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={styles.newIcon}
                source={require('../../../../assets/icons/comment.png')}
              />

              <TouchableOpacity onPress={handleCommentPress}>
                <Text style={styles.iconText}>{iscount}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={styles.secondIcon}
                source={require('../../../../assets/icons/retweet.jpg')}
              />
              <TouchableOpacity onPress={handleRetweetPress}>
                <Text style={styles.iconText}>{upcount}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={handleContainerPress}>
                <View style={styles.iconTextContainer}>
                  <Image
                    style={[
                      styles.thirdIcon,
                      isLiked && {backgroundColor: 'red'},
                    ]}
                    source={require('../../../../assets/icons/like.png')}
                  />
                  <Text style={styles.iconText}>{count}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={styles.fourthIcon}
                source={require('../../../../assets/icons/share.png')}
              />
              <TouchableOpacity onPress={handleForwardPress}>
                <Text style={styles.iconText}>{downcount}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  newProfileText: {
    fontSize: 16,
    color: 'grey',
    borderColor: 'bold',
    marginTop: 5,
    paddingLeft: 1,
    fontFamily: 'monospace',
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginRight: 50,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  newimage: {
    width: '70%',
    height: 160,
    resizeMode: 'contain',
    borderRadius: 9,
  },
  ProfileimageSource: {
    width: 75,
    height: 75,
    marginHorizontal: 6,
  },
  newIcon: {
    width: 15,
    height: 15,
  },
  secondIcon: {
    width: 29,
    height: 29,
  },
  thirdIcon: {
    width: 13,
    height: 13,
    borderRadius: 1,
  },
  fourthIcon: {
    width: 13,
    height: 13,
  },
  iconContainerText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  newContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  leftContainer: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  rightContainer: {
    flex: 1,
  },

  line: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginVertical: 10,
    opacity: 0.3,
  },
  iconText: {
    fontSize: 9,
    color: 'black',
    marginLeft: 3,
  },
  activityIndicatorContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardItem;
