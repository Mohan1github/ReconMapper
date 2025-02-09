import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const dummyBlogData = [
  {
    id: 1,
    title: "Top 5 Tips for Selling Your Products Online",
    content: "Learn the best strategies to market and sell your products effectively.",
    author: "Jane Doe",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "How to Choose the Best Region for Selling",
    content: "Discover why choosing the right region can impact your sales.",
    author: "John Smith",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Boosting Customer Engagement with Product Photos",
    content: "Find out why high-quality product images make a difference.",
    author: "Alex Johnson",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const dummyNewsData = [
  {
    id: 1,
    headline: "E-commerce Sales Hit Record Highs",
    content: "The online marketplace is booming with increasing sales each quarter.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    headline: "Sustainability Trends in Product Packaging",
    content: "Many sellers are adopting eco-friendly packaging options.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    headline: "New Regulations for Regional Product Sales",
    content: "Stay compliant with the latest regional selling rules.",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const Blogsandnews = () => {
  const [selectedTab, setSelectedTab] = useState("blog");
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");
  const navigation = useNavigation();

  const handleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleComment = (id) => {
    if (!newComment.trim()) return;
    setComments((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), newComment],
    }));
    setNewComment("");
  };

  const navigateToDetails = (item) => {
    navigation.navigate("Details", { item });
  };

  const renderCard = (item, isBlog) => (
    <TouchableOpacity key={item.id} style={styles.card} onPress={() => navigateToDetails(item)}>
      <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{isBlog ? item.title : item.headline}</Text>
      <Text style={styles.cardContent}>{item.content}</Text>
      {isBlog && <Text style={styles.author}>- {item.author}</Text>}
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleLike(item.id)}
        >
          <Text style={styles.buttonText}>Like ({likes[item.id] || 0})</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.commentInput}
          placeholder="Add a comment"
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleComment(item.id)}
        >
          <Text style={styles.buttonText}>Comment</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={comments[item.id] || []}
        keyExtractor={(comment, index) => `${item.id}-comment-${index}`}
        renderItem={({ item: comment }) => (
          <Text style={styles.commentText}>- {comment}</Text>
        )}
      />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Buy & Sell Application</Text>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === "blog" && styles.activeTab]}
          onPress={() => setSelectedTab("blog")}
        >
          <Text style={styles.tabText}>Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === "news" && styles.activeTab]}
          onPress={() => setSelectedTab("news")}
        >
          <Text style={styles.tabText}>News</Text>
        </TouchableOpacity>
      </View>
      <View>
      {selectedTab === "blog" && dummyBlogData.map((blog) => renderCard(blog, true))}
      {selectedTab === "news" && dummyNewsData.map((news) => renderCard(news, false))}
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  tabButton: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: "#FF8C00",
  },
  tabText: {
    color: "#333",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    color: "#FF8C00",
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  author: {
    marginTop: 10,
    fontStyle: "italic",
    color: "#666",
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: "#FF8C00",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  commentInput: {
    backgroundColor: "#f9f9f9",
    flex: 1,
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  commentText: {
    marginTop: 5,
    fontSize: 14,
    color: "#555",
  },
});

export default Blogsandnews;
