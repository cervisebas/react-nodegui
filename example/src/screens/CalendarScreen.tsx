import { Calendar, StyleSheet, View } from "@cervisebas/react-nodegui";

export function CalendarScreen() {
  return (
    <View style={styles.content}>
      <Calendar />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingLeft: 16,
    paddingTop: 16,
  },
});
