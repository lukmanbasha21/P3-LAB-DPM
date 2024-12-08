import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import TodoItem from "../components/TodoItem";
import styles from "../styles/styles";

const TodoListScreen = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Lifecycle simulation: componentDidMount & componentWillUnmount
  useEffect(() => {
    console.log("TodoListScreen Mounted");

    return () => {
      console.log("TodoListScreen Unmounted");
    };
  }, []);

  // Lifecycle simulation: componentDidUpdate
  useEffect(() => {
    console.log("Todo list updated:", todos);
  }, [todos]);

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { id: Date.now().toString(), text: input }]);
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Add Task" onPress={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem id={item.id} text={item.text} onDelete={deleteTodo} />
        )}
      />
    </View>
  );
};

export default TodoListScreen;
