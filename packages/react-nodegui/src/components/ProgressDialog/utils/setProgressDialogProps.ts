import { setDialogProps } from "../../Dialog/utils/setDialogProps";
import { ProgressBarRange } from "../interfaces/ProgressBarRange";
import { ProgressDialogProps } from "../interfaces/ProgressDialogProps";
import { RNProgressDialog } from "../scripts/RNProgressDialog";

export function setProgressDialogProps(
  widget: RNProgressDialog,
  newProps: ProgressDialogProps,
  oldProps: ProgressDialogProps,
) {
  const setter: ProgressDialogProps = {
    set shouldReset(shouldReset: boolean) {
      if (shouldReset) {
        widget.reset();
      }
    },
    set autoClose(autoClose: boolean) {
      widget.setAutoClose(autoClose);
    },
    set autoReset(autoReset: boolean) {
      widget.setAutoReset(autoReset);
    },
    set cancelButtonText(cancelButtonText: string) {
      widget.setCancelButtonText(cancelButtonText);
    },
    set labelText(labelText: string) {
      widget.setLabelText(labelText);
    },
    set maxValue(maxValue: number) {
      widget.setMaximum(maxValue);
    },
    set minValue(minValue: number) {
      widget.setMinimum(minValue);
    },
    set minDuration(minDuration: number) {
      widget.setMinimumDuration(minDuration);
    },
    set range({ max, min }: ProgressBarRange) {
      widget.setRange(min, max);
    },
    set value(value: number) {
      widget.setValue(value);
    },
  };
  Object.assign(setter, newProps);
  setDialogProps(widget, newProps, oldProps);
}
