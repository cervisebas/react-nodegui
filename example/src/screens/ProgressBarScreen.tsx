import { CheckBox, ComboBox, GridColumn, GridRow, GridView, ProgressBar, Slider, StyleSheet, Text, View } from "@cervisebas/react-nodegui";
import { Orientation } from "@nodegui/nodegui";
import { useMemo, useState } from "react";

const OrientationList = [
    { text: 'Horizontal', data: Orientation.Horizontal },
    { text: 'Vertical', data: Orientation.Vertical },
];

export function ProgressBarScreen() {
    const [value, setValue] = useState(24);
    const [maximum, setMaximum] = useState(100);
    const [orientation, setOrientation] = useState<Orientation>(Orientation.Horizontal);

    const orientationSelected = useMemo(() => OrientationList.findIndex(val => val.data === orientation), [orientation]);

    return (
        <View style={styles.content}>
            <Text style={styles.title}>ProgressBar Example</Text>

            <View style={styles.componentContent}>
                <ProgressBar
                    value={value}
                    orientation={orientation}
                    minimum={0}
                    maximum={maximum}
                />
            </View>

            <Text
                style={[
                    styles.title,
                    {
                        marginTop: 16,
                    },
                ]}
            >
                ProgressBar options
            </Text>

            <GridView verticalSpacing={4}>
                {/* ##### value ##### */}
                <GridRow>
                    <GridColumn>
                        <Slider
                            value={value}
                            minimum={0}
                            maximum={100}
                            orientation={Orientation.Horizontal}
                            on={{
                                valueChanged(newValue) {
                                    setValue(newValue);
                                },
                            }}
                        />
                    </GridColumn>
                    <GridColumn>
                        <Text style={styles.itemOptionText}>
                            Value ({value})
                        </Text>
                    </GridColumn>
                </GridRow>

                {/* ##### orientation ##### */}
                <GridRow>
                    <GridColumn>
                        <ComboBox
                            items={OrientationList}
                            currentIndex={orientationSelected}
                            on={{
                                currentIndexChanged(index) {
                                    if (OrientationList[index]) {
                                        setOrientation(OrientationList[index].data);
                                    }
                                },
                            }}
                        />
                    </GridColumn>
                    <GridColumn>
                        <Text style={styles.itemOptionText}>
                            Orientation
                        </Text>
                    </GridColumn>
                </GridRow>
                
                {/* ##### indeterminated ##### */}
                <GridRow>
                    <GridColumn>
                        <CheckBox
                            checked={maximum === 0}
                            on={{
                                toggled(checked) {
                                    if (checked) {
                                        setMaximum(0);
                                    } else {
                                        setMaximum(100);
                                    }
                                },
                            }}
                        />
                    </GridColumn>
                    <GridColumn>
                        <Text style={styles.itemOptionText}>
                            Indeterminated
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
    componentContent: {
        flexDirection: 'row',
    },
    itemOptionText: {
        fontSize: '12px',
        marginLeft: 6,
    },
});
