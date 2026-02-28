import {
    Roboto_400Regular,
    Roboto_700Bold,
    useFonts,
} from "@expo-google-fonts/roboto";
import { useState } from "react";
import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const AppColors = {
  primaryBlue: "#1565C0",
  lightBlue: "#1E88E5",
  accentBlue: "#42A5F5",
  skyBlue: "#BBDEFB",
  background: "#F5F9FF",
  white: "#FFFFFF",
  textDark: "#212121",
  textSecondary: "#757575",
  border: "#BBDEFB",
  dangerRed: "#E53935",
};

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goalList, setGoalList] = useState([]);

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  if (!fontsLoaded) return null;

  const addGoalHandler = () => {
    if (enteredGoal.trim().length === 0) return;
    setGoalList((current) => [
      ...current,
      { id: Date.now().toString(), text: enteredGoal.trim() },
    ]);
    setEnteredGoal("");
  };

  const deleteGoalHandler = (id) => {
    setGoalList((current) => current.filter((g) => g.id !== id));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Title */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>My To-Do List</Text>
          <Text style={styles.subtitle}>Organize your day</Text>
        </View>

        {/* Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your goal..."
            placeholderTextColor={AppColors.textSecondary}
            value={enteredGoal}
            onChangeText={setEnteredGoal}
          />
          <TouchableOpacity style={styles.addButton} onPress={addGoalHandler}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        {/* Goal count */}
        <Text style={styles.listTitle}>Goals ({goalList.length})</Text>

        {/* List */}
        {goalList.length === 0 ? (
          <Text style={styles.emptyText}>No goals yet add one above!</Text>
        ) : (
          <FlatList
            data={goalList}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 30 }}
            renderItem={({ item, index }) => (
              <View style={styles.goalItem}>
                <View style={styles.goalNumberCircle}>
                  <Text style={styles.goalNumber}>{index + 1}</Text>
                </View>
                <Text style={styles.goalText}>{item.text}</Text>
                <TouchableOpacity onPress={() => deleteGoalHandler(item.id)}>
                  <Text style={styles.deleteText}>X</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F9FF",
  },
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerContainer: { alignItems: "center", marginBottom: 24 },
  title: { fontSize: 32, fontFamily: "Roboto_700Bold", color: "#1565C0" },
  subtitle: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    color: "#757575",
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  textInput: {
    flex: 1,
    height: 50,
    borderWidth: 1.5,
    borderColor: "#BBDEFB",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    backgroundColor: "#FFFFFF",
    color: "#212121",
  },
  addButton: {
    backgroundColor: "#1565C0",
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 12,
    elevation: 3,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
  },
  listTitle: {
    fontSize: 18,
    fontFamily: "Roboto_700Bold",
    color: "#212121",
    marginBottom: 10,
  },
  goalItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#42A5F5",
    elevation: 2,
  },
  goalNumberCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#42A5F5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  goalNumber: { color: "#FFFFFF", fontSize: 14, fontFamily: "Roboto_700Bold" },
  goalText: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    color: "#212121",
  },
  deleteText: {
    fontSize: 18,
    color: "#E53935",
    fontFamily: "Roboto_700Bold",
    padding: 6,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    color: "#757575",
  },
});
