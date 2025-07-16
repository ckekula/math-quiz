import { icons } from '@/constants/icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageSourcePropType, Text, View } from 'react-native'

const tabIcon = (icon: ImageSourcePropType | undefined, title: string, focused: boolean) => {
  return (
    <View className="flex items-center justify-center w-16">
      <Image
        source={icon}
        resizeMode="contain"
        style={{ tintColor: focused ? '#FFF' : '#ccc' }}
      />
    <Text className={`${focused ? 'text-white' : 'text-gray-400'}`}>
        {title}
      </Text>
    </View>
  )
}

const _layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false, 
      tabBarItemStyle: {},
      tabBarStyle: {backgroundColor: '#6E7B8B'},
    }}>
      <Tabs.Screen
        name="index"
        options={{  
          title: 'Home', 
          headerShown: false,
          tabBarIcon: ({focused}) => (tabIcon(icons.home, 'Home', focused))
        }}
      />
      <Tabs.Screen
        name="puzzles"
        options={{ 
          title: 'Puzzles',
          headerShown: false,
          tabBarIcon: ({focused}) => (tabIcon(icons.search, 'Puzzles', focused))
        }}
      />
      <Tabs.Screen
          name="learn"
          options={{ 
            title: 'Learn', 
            headerShown: false,
            tabBarIcon: ({focused}) => (tabIcon(icons.arrow, 'Learn', focused))
          }}
      />
      <Tabs.Screen
          name="more"
          options={{ 
            title: 'More', 
            headerShown: false,
            tabBarIcon: ({focused}) => (tabIcon(icons.person, 'More', focused))
          }}
      />
    </Tabs>
  )
}

export default _layout