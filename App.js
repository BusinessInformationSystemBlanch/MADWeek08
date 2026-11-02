import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import { db } from "./firestoreConfig";
import { collection, addDoc } from "firebase/firestore";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!name || !email) {
      //Alert.alert("Error", "Please fill in both fields");
      alert("Please fill in both fields");
      return;
    }

    try {
      await addDoc(collection(db, "users"), { name, email });
      //Alert.alert("Success", "Data saved!");
      alert("Data saved successfully"); 
      setName("");
      setEmail("");
    } catch (error) {
      console.error(error);
      //Alert.alert("Error", "Could not save data");
      alert("Error saving data");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />

      <Text style={styles.label}>Enter your Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,
  },
});
