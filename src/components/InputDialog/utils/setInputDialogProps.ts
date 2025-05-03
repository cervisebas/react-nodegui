import { InputMode, InputDialogOptions, EchoMode } from "@nodegui/nodegui";
import { setDialogProps } from "../../Dialog/utils/setDialogProps";
import { InputDialogProps } from "../interfaces/InputDialogProps";
import { RNInputDialog } from "../scripts/RNInputDialog";

export function setInputDialogProps(
  widget: RNInputDialog,
  newProps: InputDialogProps,
  oldProps: InputDialogProps,
) {
  const setter: InputDialogProps = {
    set cancelButtonText(cancelButtonText: string){
      widget.setCancelButtonText(cancelButtonText)
    },
    set comboBoxEditable(comboBoxEditable: boolean) {
      widget.setComboBoxEditable(comboBoxEditable);
    },
    set doubleDecimals(doubleDecimals: number){
      widget.setDoubleDecimals(doubleDecimals)
    },
    set doubleMax(doubleMax: number){
      widget.setDoubleMaximum(doubleMax)
    },
    set doubleMin(doubleMin: number){
      widget.setDoubleMinimum(doubleMin)
    },
    set doubleStep(doubleStep: number){
      widget.setDoubleStep(doubleStep)
    },
    set doubleValue(doubleValue: number){
      widget.setDoubleValue(doubleValue)
    },
    set inputMode(inputMode: InputMode){
      widget.setInputMode(inputMode)
    },
    set intMax(intMax: number){
      widget.setIntMaximum(intMax)
    },
    set intMin(intMi: number){
      widget.setIntMinimum(intMi)
    },
    set intStep(intStep: number){
      widget.setIntStep(intStep)
    },
    set intValue(intValue: number){
      widget.setIntValue(intValue)
    },
    set labelText(labelText: string){
      widget.setLabelText(labelText)
    },
    set okButtonText(okButtonText: string){
      widget.setOkButtonText(okButtonText)
    },
    set options(options: InputDialogOptions){
      widget.setOptions(options)
    },
    set textEchoMode(textEchoMode: EchoMode){
      widget.setTextEchoMode(textEchoMode)
    },
    set textValue(textValue: string){
      widget.setTextValue(textValue)
    },
  };
  Object.assign(setter, newProps);
  setDialogProps(widget, newProps, oldProps);
}
