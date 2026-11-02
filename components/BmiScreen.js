import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function BmiScreen() {
  //TODO set all you constants here

  const calculateBmi = () => {
    //TODO calculation code goes here
  };

  return (
    <View style={styles.container}>
        //TODO creating text component goes here
     </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  label: { fontSize: 16, marginVertical: 6 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 15, borderRadius: 4 },
  resultContainer: { marginTop: 25, padding: 15, backgroundColor: "#f0f4f8", borderRadius: 6, alignItems: "center" },
  resultText: { fontSize: 20, fontWeight: "bold", color: "#333" },
  categoryText: { fontSize: 16, color: "#555", marginTop: 5 }
});