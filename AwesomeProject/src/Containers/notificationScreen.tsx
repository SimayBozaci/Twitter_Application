import React from 'react';
import {StyleSheet, View} from 'react-native';
import PostNotification from '../Components/Twitter/PostNotification';
import NotificationHeader from '../Components/Twitter/notificationHeader';
const NotificationScreen = ({}) => {
  return (
    <View style={styles.container}>
      <NotificationHeader />
      <PostNotification />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

/*const FirstPage = () => (
  <ScrollView>
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.line} />

        <View style={styles.postContainer}>
          <View style={styles.leftContainer}>
            <Image
              source={require('../../assets/icons/purple_star.png')}
              style={styles.imagesLeft}
              resizeMode="contain"
            />
          </View>
          <View style={styles.rightContainer}>
            <Image
              source={require('../../assets/icons/woman.png')}
              style={styles.imagesTop}
              resizeMode="contain"
            />
            <Text style={styles.postText}>
              Loving your new jacket? Pair it with these cute boots for a
              complete look! View now.
            </Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.postContainer}>
          <View style={styles.leftContainer}>
            <Image
              source={require('../../assets/icons/purple_star.png')}
              style={styles.imagesLeft}
              resizeMode="contain"
            />
          </View>
          <View style={styles.rightContainer}>
            <Image
              source={require('../../assets/icons/woman.png')}
              style={styles.imagesTop}
              resizeMode="contain"
            />
            <Text style={styles.postText}>
              Linon Sinclair Executive Office Chair is still in your cart.Check
              out now.
            </Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.postContainer}>
          <View style={styles.leftContainer}>
            <Image
              source={require('../../assets/icons/purple_star.png')}
              style={styles.imagesLeft}
              resizeMode="contain"
            />
          </View>
          <View style={styles.rightContainer}>
            <Image
              source={require('../../assets/icons/woman.png')}
              style={styles.imagesTop}
              resizeMode="contain"
            />
            <Text style={styles.postText}>
              Loving your new jacket? Pair it with these cute boots for a
              complete look! View now.
            </Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.postContainer}>
          <View style={styles.leftContainer}>
            <Image
              source={require('../../assets/icons/purple_star.png')}
              style={styles.imagesLeft}
              resizeMode="contain"
            />
          </View>
          <View style={styles.rightContainer}>
            <Image
              source={require('../../assets/icons/woman.png')}
              style={styles.imagesTop}
              resizeMode="contain"
            />
            <Text style={styles.postText}>
              Loving your new jacket? Pair it with these cute boots for a
              complete look! View now.
            </Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.postContainer}>
          <View style={styles.leftContainer}>
            <Image
              source={require('../../assets/icons/purple_star.png')}
              style={styles.imagesLeft}
              resizeMode="contain"
            />
          </View>
          <View style={styles.rightContainer}>
            <Image
              source={require('../../assets/icons/woman.png')}
              style={styles.imagesTop}
              resizeMode="contain"
            />
            <Text style={styles.postText}>
              Loving your new jacket? Pair it with these cute boots for a
              complete look! View now.
            </Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.postContainer}>
          <View style={styles.leftContainer}>
            <Image
              source={require('../../assets/icons/purple_star.png')}
              style={styles.imagesLeft}
              resizeMode="contain"
            />
          </View>
          <View style={styles.rightContainer}>
            <Image
              source={require('../../assets/icons/woman.png')}
              style={styles.imagesTop}
              resizeMode="contain"
            />
            <Text style={styles.postText}>
              Time to leave for your dentist appointment. Leave by 6:55 to
              arrive on time.
            </Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.postContainer}>
          <View style={styles.leftContainer}>
            <Image
              source={require('../../assets/icons/purple_star.png')}
              style={styles.imagesLeft}
              resizeMode="contain"
            />
          </View>
          <View style={styles.rightContainer}>
            <Image
              source={require('../../assets/icons/woman.png')}
              style={styles.imagesTop}
              resizeMode="contain"
            />
            <Text style={styles.postText}>
              Hi Mom!Your baby is the size of a lemon today! At week 14,your
              baby is 3.4 inches and 1.5 ounces.He has almost doubled in weight
              since...
            </Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.postContainer}>
          <View style={styles.leftContainer}>
            <Image
              source={require('../../assets/icons/purple_star.png')}
              style={styles.imagesLeft}
              resizeMode="contain"
            />
          </View>
          <View style={styles.rightContainer}>
            <Image
              source={require('../../assets/icons/woman.png')}
              style={styles.imagesTop}
              resizeMode="contain"
            />
            <Text style={styles.postText}>
              Sophie G.at Dinosaurs in San Francisco,CA
            </Text>
          </View>
        </View>
        <View style={styles.line} />
      </View>
    </View>
  </ScrollView>
);

const SecondPage = () => <View style={styles.container}>{}</View>;

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'All'},
    {key: 'second', title: 'Verified'},
  ]);

  const renderScene = SceneMap({
    first: FirstPage,
    second: SecondPage,
  });

  return (
    <>
      <View style={styles.header}>
        <Image
          source={require('../../assets/icons/woman.png')}
          style={styles.imagesHeader}
          resizeMode="contain"
        />
        <View style={styles.textNotification}>
          <Text style={styles.text}>Notifications</Text>
        </View>
        <Image
          source={require('../../assets/icons/ayarlarr.png')}
          style={styles.imagesSettings}
          resizeMode="contain"
        />
      </View>

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
      />
    </>
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
    //justifyContent: 'space-between',
    marginBottom: 10,
  },
  leftContainer: {
    //borderWidth: 2,
    marginRight: 3,
    marginLeft: 20,

    alignSelf: 'flex-start',
    //usable
    alignItems: 'flex-end',
    //top: 0,
  },
  rightContainer: {
    //borderWidth: 2,
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
    //marginLeft: 69,
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
    //marginTop: 101,
    //marginLeft: 35,
    borderRadius: 21,
  },
  imagesSettings: {
    width: 35,
    height: 35,
  },
  imagesTop: {
    width: 35,
    height: 35,
    //marginTop: 63,
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
    //width: 250,
    //height: 250,
    marginTop: 7,
    marginBottom: 7,
    //marginLeft: 75,
    flexDirection: 'row',
  },
  postText: {
    fontSize: 15,
    color: 'black',
    marginTop: 1,
  },
});

export default App;*/
