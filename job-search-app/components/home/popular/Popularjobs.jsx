import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../../../constants';
import styles from './popularjobs.style';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { isLoading } from 'expo-font';
const Popularjobs = () => {
  const isLoading = false;
  const error = false;
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading?(<ActivityIndicator></ActivityIndicator>):error?(<Text>Something went wrong!</Text>):<FlatList
        data={[1,2,3,4,5]}
        renderItem={({item})=>(
          <PopularJobCard item={item}></PopularJobCard>
        )}
        keyExtractor={item => item?.job_id}
        contentContainerStyle={{columnGap:SIZES.medium}}
        horizontal
        ></FlatList>}
      </View>
    </View>
  )
}

export default Popularjobs