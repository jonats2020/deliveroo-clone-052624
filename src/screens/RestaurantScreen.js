import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../../sanity';
import { ArrowLeftIcon, StarIcon, MapPinIcon } from 'react-native-heroicons/solid';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const { params: {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
  } } = useRoute();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View className='relative'>
        <Image
          source={{
            uri: urlFor(imgUrl).url()
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon size={20} color="#00CCBB"/>
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-gray-500">
                <Text className="text-green-500">{rating}</Text> . {genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500">Nearby . {address?.slice(0,15)}</Text>
            </View>
          </View>

          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default RestaurantScreen

const styles = StyleSheet.create({})