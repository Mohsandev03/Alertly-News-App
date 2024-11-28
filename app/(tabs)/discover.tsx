import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchBar from "@/components/SearchBar";
import CheckBox from "@/constants/CheckBox"; 
import newsCategoryList from "@/constants/Categories";
 

type Props = {};

const Page = (props: Props) => {
  const { top: safeTop } = useSafeAreaInsets();
 
  // function toggleNewsCategory(id: number) {
  //   throw new Error("Function not implemented.");
  // }

  return (
    <View style={[styles.container, { paddingTop: +10 }]}>
      <SearchBar />
      <Text style={styles.catgoriesTitle}>Categories</Text>
      {/* <View style={styles.listContainer}>
        {newsCategories.map((item) =>(
          <CheckBox
           key={item.id} 
          label={item.title} 
          checked={item.selected}
           onPress={() =>{
            toggleNewCategory(item.id)
           }} />
        )
        )}
      </View> */}
    </View>
       


   );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  catgoriesTitle: {
    fontSize: 14,
    marginTop: 10,
  },
  listContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    gap:16,
    marginTop:12,
    marginBottom:20,
  }
});
