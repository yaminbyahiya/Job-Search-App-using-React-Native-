import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { COLORS, icons, SIZES } from '../../../constants';
import styles from './popularjobs.style';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { isLoading } from 'expo-font';

import useFetch from '../../../hook/useFetch';
const Popularjobs = () => {
  const router = useRouter();
  const {data, isLoading, error} = useFetch('search', {
    query:'React developer',
    num_pages:1
  });
  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading?(<ActivityIndicator size='large' color={COLORS.primary}></ActivityIndicator>):error?(<Text>Something went wrong!</Text>):<FlatList
        data={data}
        renderItem={({item})=>(
          <PopularJobCard item={item}
          selectedJob={selectedJob}
          handleCardPress={handleCardPress}
          ></PopularJobCard>
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