import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';

import {
  HomeScreen,
  MessageScreen,
  NotificationScreen,
  SearchScreen,
  TodosScreen,
} from '.';

const NewTab = createBottomTabNavigator();

const TabsNew = () => {
  return (
    <NewTab.Navigator>
      <NewTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/home.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'black' : 'black',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <NewTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/search.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'black' : 'black',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <NewTab.Screen
        name="Todos"
        component={TodosScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/list.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'black' : 'black',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <NewTab.Screen
        name="Todo List"
        component={MessageScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/message.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'black' : 'black',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <NewTab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/notification.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'black' : 'black',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </NewTab.Navigator>
  );
};

export default TabsNew;
