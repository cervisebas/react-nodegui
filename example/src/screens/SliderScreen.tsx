import { CheckBox, ComboBox, GridColumn, GridRow, GridView, Slider, StyleSheet, Text, View } from "@cervisebas/react-nodegui";
import { Orientation, TickPosition } from "@nodegui/nodegui";
import { useMemo, useState } from "react";

const OrientationList = [
    { text: 'Horizontal', data: Orientation.Horizontal },
    { text: 'Vertical', data: Orientation.Vertical },
];

const TickPositionList = [
    { text: 'NoTicks', data: TickPosition.NoTicks },
    { text: 'TicksBothSides', data: TickPosition.TicksBothSides },
    { text: 'TicksAbove', data: TickPosition.TicksAbove },
    { text: 'TicksBelow', data: TickPosition.TicksBelow },
    { text: 'TicksLeft', data: TickPosition.TicksLeft },
    { text: 'TicksRight', data: TickPosition.TicksRight },
];

export function SliderScreen() {
    const [value, setValue] = useState<number>(50);
    const [orientation, setOrientation] = useState<Orientation>(Orientation.Horizontal);
    const [tickPosition, setTickPosition] = useState<TickPosition>(TickPosition.TicksBelow);
    const [invertedAppearance, setInvertedAppearance] = useState<boolean>(false);
    const [invertedControls, setInvertedControls] = useState<boolean>(false);

    const orientationSelected = useMemo(() => OrientationList.findIndex(val => val.data === orientation), [orientation]);
    const tickPositionSelected = useMemo(() => TickPositionList.findIndex(val => val.data === tickPosition), [tickPosition]);

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Slider Example</Text>

            <View style={styles.componentContent}>
                <Slider
                    value={value}
                    orientation={orientation}
                    tickPosition={tickPosition}
                    tickInterval={10}
                    minimum={0}
                    maximum={100}
                    invertedAppearance={invertedAppearance}
                    invertedControls={invertedControls}
                    on={{
                        valueChanged(newValue) {
                            setValue(newValue);
                        },
                    }}
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
                Slider options
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

                {/* ##### tickPosition ##### */}
                <GridRow>
                    <GridColumn>
                        <ComboBox
                            items={TickPositionList}
                            currentIndex={tickPositionSelected}
                            on={{
                                currentIndexChanged(index) {
                                    if (TickPositionList[index]) {
                                        setTickPosition(TickPositionList[index].data);
                                    }
                                },
                            }}
                        />
                    </GridColumn>
                    <GridColumn>
                        <Text style={styles.itemOptionText}>
                            Tick Position
                        </Text>
                    </GridColumn>
                </GridRow>

                {/* ##### invertedAppearance ##### */}
                <GridRow>
                    <GridColumn>
                        <CheckBox
                            checked={invertedAppearance}
                            on={{
                                toggled(checked) {
                                    setInvertedAppearance(checked);
                                },
                            }}
                        />
                    </GridColumn>
                    <GridColumn>
                        <Text style={styles.itemOptionText}>
                            Inverted Appearance
                        </Text>
                    </GridColumn>
                </GridRow>

                {/* ##### invertedControls ##### */}
                <GridRow>
                    <GridColumn>
                        <CheckBox
                            checked={invertedControls}
                            on={{
                                toggled(checked) {
                                    setInvertedControls(checked);
                                },
                            }}
                        />
                    </GridColumn>
                    <GridColumn>
                        <Text style={styles.itemOptionText}>
                            Inverted Controls
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
