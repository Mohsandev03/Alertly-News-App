import React, { useState } from "react"


import Header from '@/components/Header'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import SearchBar from "@/components/SearchBar";

const breakingNews = [
  {
    id: "1",
    title: "Alexander wears modified helmet in road races",
    category: "Sports",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNdmQSsr6a22vHyGpXYAuUJlq97zR_oZ5KmpCFh5qeGy4Z3g9dvmrLvSCeH2vR-7Pd8E&usqp=CAU",
  },
];

const recommendations = [
  {
    id: "1",
    title: "What Training Do Volleyball Players Need?",
    category: "Sports",
    author: "McKindney",
    date: "Feb 27, 2023",
    uri: "https://img.freepik.com/free-photo/volleyball-team-practice_23-2149070302.jpg",
  },
  {
    id: "2",
    title: "Secondary school places: When do parents find out?",
    category: "Education",
    author: "Rosemary",
    date: "Feb 28, 2023",
    uri: "https://img.freepik.com/free-photo/kids-learning-school_23-2148727340.jpg",
  },
  {
    id: "3",
    title: "Alexander wears modified helmet in road races?",
    category: "Safety",
    author: "Alexander",
    date: "Feb 28, 2023",
    uri: "https://rukminim2.flixcart.com/image/850/1000/xif0q/helmet/d/b/z/-original-imaghkq6hffa8srn.jpeg?q=90&crop=false",
  },
];

const pollOptions = [
  { id: "1", text: "Yes, I wear a helmet" },
  { id: "2", text: "No, I don’t wear a helmet" },
  { id: "3", text: "I am considering it" },
];

const Page = () => {
  const [selectedPoll, setSelectedPoll] = useState<string | null>(null); // Explicitly typing state as string | null

  const handlePollSelect = (optionId: string) => {
    // Explicitly type optionId as a string
    setSelectedPoll(optionId);
  };

// const Page = (props: props) => {
//   const {top: safeTop} = useSafeAreaInsets();
//   return(
//     <View style={[styles.container, {paddingTop: safeTop}]}>
//       <Header />

//     </View>
//   )
// }

  return (
  
    <ScrollView style={styles.container}>
      
      {/* Breaking News Section */}
      <View style={styles.searchcontainer}>
        {/* <Header /> */}
        <SearchBar />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Breaking News</Text>

        <FlatList
          data={breakingNews}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.breakingNewsCard}>
              <Image
                source={{ uri: item.uri }}
                style={styles.breakingImage}
                resizeMode="cover"
              />
              <View style={styles.breakingOverlay}>
                <Text style={styles.categoryBadge}>{item.category}</Text>
                <Text style={styles.breakingTitle}>{item.title}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Recommendation Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommendation</Text>
        {recommendations.map((item) => (
          <View key={item.id} style={styles.recommendationCard}>
            <Image
              source={{ uri: item.uri }}
              style={styles.recommendationImage}
              resizeMode="cover"
            />
            <View style={styles.recommendationContent}>
              <Text style={styles.recommendationCategory}>{item.category}</Text>
              <Text style={styles.recommendationTitle}>{item.title}</Text>
              <Text
                style={styles.recommendationMeta}
              >{`${item.author} • ${item.date}`}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Poll Question Section */}
      <View style={styles.pollSection}>
        <Text style={styles.pollQuestion}>
          Do you wear a helmet while riding?
        </Text>
        {pollOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.pollOption,
              selectedPoll === option.id && styles.selectedPollOption,
            ]}
            onPress={() => handlePollSelect(option.id)}
          >
            <Text style={styles.pollOptionText}>{option.text}</Text>
          </TouchableOpacity>
        ))}
        {selectedPoll && (
          <Text style={styles.pollResult}>
            Selected:{" "}
            {pollOptions.find((opt) => opt.id === selectedPoll)?.text ||
              "No option selected"}
          </Text>
        )}
      </View>
    </ScrollView>
  );
};







export default Page;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 10,
  },
  searchcontainer:{
    paddingVertical:10,
  },
  section: {
    marginVertical: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 5,
    // paddingVertical:15,
  },
  // Breaking News
  breakingNewsCard: {
    width: 335,
    height: 170,
    borderRadius: 15,
    overflow: "hidden",
    marginRight: 10,
  },
  breakingImage: {
    width: "100%",
    height: "100%",
  },
  breakingOverlay: {
    position: "absolute",
    bottom: 0,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
  },
  categoryBadge: {
    color: "#FFF",
    backgroundColor: "#FF6B6B",
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  breakingTitle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  // Recommendation
  recommendationCard: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginVertical: 10,
    overflow: "hidden",
    elevation: 2,
  },
  recommendationImage: {
    width: 100,
    height: 100,
  },
  recommendationContent: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  recommendationCategory: {
    fontSize: 12,
    color: "#FF6B6B",
    marginBottom: 5,
  },
  recommendationTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  recommendationMeta: {
    fontSize: 12,
    color: "#666",
  },
  // Poll Section
  pollSection: {
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingVertical: 10,
    elevation: 3,
  },
  pollQuestion: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
  },
  pollOption: {
    backgroundColor: "#F1F1F1",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  selectedPollOption: {
    backgroundColor: "#FF6B6B",
  },
  pollOptionText: {
    fontSize: 14,
    color: "#333",
  },

  pollResult: {
    fontSize: 14,
    color: "#333",
    marginTop: 10,
    fontWeight: "bold",
  },
});
