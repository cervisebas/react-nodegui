import { Calendar, RNCalendar, StyleSheet, Text, View } from "@cervisebas/react-nodegui";
import { DayOfWeek, SelectionMode } from "@nodegui/nodegui";
import { HorizontalHeaderFormat, VerticalHeaderFormat } from "@nodegui/nodegui/dist/lib/QtWidgets/QCalendarWidget";
import { useRef, useState } from "react";

export function CalendarScreen() {
  const refCalendar = useRef<RNCalendar>(null);
  const [singleDate, setSingleDate] = useState<string | undefined>(undefined);

  const [dateEditEnabled, setDateEditEnabled] = useState<boolean>(true);
  const [firstDayOfWeek, setFirstDayOfWeek] = useState<DayOfWeek>(DayOfWeek.Sunday);
  const [gridVisible, setGridVisible] = useState<boolean>(false);
  const [horizontalHeaderFormat, setHorizontalHeaderFormat] = useState<HorizontalHeaderFormat>(HorizontalHeaderFormat.ShortDayNames);
  const [navigationBarVisible, setNavigationBarVisible] = useState<boolean>();
  const [selectionMode, setSelectionMode] = useState(SelectionMode.SingleSelection);
  const [verticalHeaderFormat, setVerticalHeaderFormat] = useState<VerticalHeaderFormat>(VerticalHeaderFormat.NoVerticalHeader);

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Single selection</Text>
      
      <View style={styles.calendarContent}>
        <Calendar
          ref={refCalendar}
          
          dateEditEnabled={dateEditEnabled}
          firstDayOfWeek={firstDayOfWeek}
          gridVisible={gridVisible}
          horizontalHeaderFormat={horizontalHeaderFormat}
          navigationBarVisible={navigationBarVisible}
          selectionMode={selectionMode as never}
          verticalHeaderFormat={verticalHeaderFormat}

          on={{
            clicked(date) {
              const _date = new Date(date.year(), date.month() - 1, date.day());
              setSingleDate(_date.toDateString());
            },
          }}
        />

        {singleDate && (
          <View style={styles.selectedContent}>
            <Text style={styles.selectedDateTitle}>Selected:</Text>
            <Text style={styles.selectedDateValue}>{singleDate}</Text>
          </View>
        )}
      </View>
      
      <Text
        style={[
          styles.title,
          {
            marginTop: 16,
          },
        ]}
      >
        Calendar options
      </Text>
      
      <View style={styles.calendarContent}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: 8,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 16,
    paddingTop: 16,
  },
  calendarContent: {
    flexDirection: 'row',
  },
  selectedContent: {
    flex: 1,
    paddingLeft: 34,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  selectedDateTitle: {
    fontSize: '16px',
  },
  selectedDateValue: {
    color: '#2B2B2B',
    fontSize: '12px',
  },
});
