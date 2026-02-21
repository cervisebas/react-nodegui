import { Calendar, CheckBox, ComboBox, GridColumn, GridRow, GridView, RNCalendar, StyleSheet, Text, View } from "@cervisebas/react-nodegui";
import { DayOfWeek, SelectionMode } from "@nodegui/nodegui";
import { HorizontalHeaderFormat, VerticalHeaderFormat } from "@nodegui/nodegui/dist/lib/QtWidgets/QCalendarWidget";
import { useMemo, useRef, useState } from "react";
import { FirstDayOfWeekList } from "../constants/FirstDayOfWeekList";
import { HorizontalHeaderFormatList } from "../constants/HorizontalHeaderFormatList";
import { VerticalHeaderFormatList } from "../constants/VerticalHeaderFormatList";
import { SelectionModeList } from "../constants/SelectionModeList";


export function CalendarScreen() {
  const refCalendar = useRef<RNCalendar>(null);
  const [singleDate, setSingleDate] = useState<string | undefined>(undefined);

  const [dateEditEnabled, setDateEditEnabled] = useState<boolean>(true);
  const [firstDayOfWeek, setFirstDayOfWeek] = useState<DayOfWeek>(DayOfWeek.Sunday);
  const [gridVisible, setGridVisible] = useState<boolean>(false);
  const [horizontalHeaderFormat, setHorizontalHeaderFormat] = useState<HorizontalHeaderFormat>(HorizontalHeaderFormat.ShortDayNames);
  const [navigationBarVisible, setNavigationBarVisible] = useState<boolean>(true);
  const [selectionMode, setSelectionMode] = useState(SelectionMode.SingleSelection);
  const [verticalHeaderFormat, setVerticalHeaderFormat] = useState<VerticalHeaderFormat>(VerticalHeaderFormat.NoVerticalHeader);

  const firstDayOfWeekSelected = useMemo(() => FirstDayOfWeekList.findIndex(val => val.data === firstDayOfWeek), [firstDayOfWeek]);
  const horizontalHeaderFormatSelected = useMemo(() => HorizontalHeaderFormatList.findIndex(val => val.data === horizontalHeaderFormat), [horizontalHeaderFormat]);
  const verticalHeaderFormatSelected = useMemo(() => VerticalHeaderFormatList.findIndex(val => val.data === verticalHeaderFormat), [verticalHeaderFormat]);
  const selectionModeSelected = useMemo(() => SelectionModeList.findIndex(val => val.data === selectionMode), [selectionMode]);

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

      <GridView verticalSpacing={4}>

        {/* ##### dateEditEnabled ##### */}
        <GridRow>
          <GridColumn>
            <CheckBox
              checked={dateEditEnabled}
              on={{
                toggled(checked) {
                  setDateEditEnabled(checked);
                },
              }}
            />
          </GridColumn>
          <GridColumn>
            <Text style={styles.itemOptionText}>
              Editing date enabled
            </Text>
          </GridColumn>
        </GridRow>

        {/* ##### firstDayOfWeek ##### */}
        <GridRow>
          <GridColumn>
            <ComboBox
              items={FirstDayOfWeekList}
              currentIndex={firstDayOfWeekSelected}
              on={{
                currentIndexChanged(index) {
                  if (FirstDayOfWeekList[index]) {
                    setFirstDayOfWeek(FirstDayOfWeekList[index].data);
                  }
                },
              }}
            />
          </GridColumn>
          <GridColumn>
            <Text style={styles.itemOptionText}>
              First day of week
            </Text>
          </GridColumn>
        </GridRow>

        {/* ##### gridVisible ##### */}
        <GridRow>
          <GridColumn>
            <CheckBox
              checked={gridVisible}
              on={{
                toggled(checked) {
                  setGridVisible(checked);
                },
              }}
            />
          </GridColumn>
          <GridColumn>
            <Text style={styles.itemOptionText}>
              Grid visible
            </Text>
          </GridColumn>
        </GridRow>

        {/* ##### horizontalHeaderFormat ##### */}
        <GridRow>
          <GridColumn>
            <ComboBox
              items={HorizontalHeaderFormatList}
              currentIndex={horizontalHeaderFormatSelected}
              on={{
                currentIndexChanged(index) {
                  if (HorizontalHeaderFormatList[index]) {
                    setHorizontalHeaderFormat(HorizontalHeaderFormatList[index].data);
                  }
                },
              }}
            />
          </GridColumn>
          <GridColumn>
            <Text style={styles.itemOptionText}>
              Horizontal header format
            </Text>
          </GridColumn>
        </GridRow>

        {/* ##### navigationBarVisible ##### */}
        <GridRow>
          <GridColumn>
            <CheckBox
              checked={navigationBarVisible}
              on={{
                toggled(checked) {
                  setNavigationBarVisible(checked);
                },
              }}
            />
          </GridColumn>
          <GridColumn>
            <Text style={styles.itemOptionText}>
              Navigation bar visible
            </Text>
          </GridColumn>
        </GridRow>

        {/* ##### selectionMode ##### */}
        <GridRow>
          <GridColumn>
            <ComboBox
              items={SelectionModeList}
              currentIndex={selectionModeSelected}
              on={{
                currentIndexChanged(index) {
                  if (SelectionModeList[index]) {
                    setSelectionMode(SelectionModeList[index].data);
                  }
                },
              }}
            />
          </GridColumn>
          <GridColumn>
            <Text style={styles.itemOptionText}>
              Selection mode
            </Text>
          </GridColumn>
        </GridRow>

        {/* ##### verticalHeaderFormat ##### */}
        <GridRow>
          <GridColumn>
            <ComboBox
              items={VerticalHeaderFormatList}
              currentIndex={verticalHeaderFormatSelected}
              on={{
                currentIndexChanged(index) {
                  if (VerticalHeaderFormatList[index]) {
                    setVerticalHeaderFormat(VerticalHeaderFormatList[index].data);
                  }
                },
              }}
            />
          </GridColumn>
          <GridColumn>
            <Text style={styles.itemOptionText}>
              Vertical header format
            </Text>
          </GridColumn>
        </GridRow>

      </GridView>

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
  calendarOptionsContent: {
    //flexDirection: 'column',
    paddingLeft: 18,
  },
  itemOption: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemOptionText: {
    fontSize: '12px',
    marginLeft: 6,
  },
});
