import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles/styles";

const TodoItem = ({ id, text, onDelete }) => {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{text}</Text>
      <Button title="Delete" onPress={() => onDelete(id)} />
    </View>
  );
};

export default TodoItem;
