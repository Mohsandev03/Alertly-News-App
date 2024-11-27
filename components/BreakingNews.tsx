import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/constants/Colors';
import { NewsDataType } from '@/types';
import SliderItem from './SliderItem';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import pagination from './pagination';

type Props = {
  newsList: Array<NewsDataType>;
};

const BreakingNews = ({ newsList }: Props) => {
  const [paginationIndex, setPaginationIndex] = useState(0); // Unused currently but can be implemented for pagination
  const scrollX = useSharedValue(0);
  const ref = useAnimatedRef<Animated.FlatList<any>>();
  const [data, setData]= useState(newsList);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breaking News</Text>
      <View style={styles.sliderWrapper}>
        <Animated.FlatList
          ref={ref}
          data={newsList} // Ensure newsList is passed correctly
          keyExtractor={(item, index) =>
            item.article_id ? item.article_id.toString() : `list_item${index}`
          }
          renderItem={({ item, index }) => (
            <SliderItem slideItem={item} index={index} scrollX={scrollX} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={onScrollHandler}
          scrollEventThrottle={16}
          onEndReachedThreshold={0.5}
          onEndReached={()=> setData([...data, ...newsList])}
        /> 
        <Pagination />
      </View>
    </View>
  );
};

export default BreakingNews;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    marginLeft: 20,
  },
  sliderWrapper: {
    justifyContent: 'center',
  },
});
