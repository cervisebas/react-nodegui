import { TextInteractionFlag } from "@nodegui/nodegui";
import { setViewProps } from "../../View/utils/setViewProps";
import { TextProps } from "../interfaces/TextProps";
import { RNText } from "../scripts/RNText";

export const setTextProps = (
  widget: RNText,
  newProps: TextProps,
  oldProps: TextProps
) => {
  const setter: TextProps = {
    set children(text: string | number | Array<string | number>) {
      text = Array.isArray(text) ? text.join('') : text;

      widget.setText(text);
    },
    set wordWrap(shouldWrap: boolean) {
      widget.setWordWrap(shouldWrap);
    },
    set scaledContents(scaled: boolean) {
      widget.setProperty('scaledContents', scaled);
    },
    set openExternalLinks(shouldOpenExternalLinks: boolean) {
      widget.setProperty('openExternalLinks', shouldOpenExternalLinks);
    },
    set textInteractionFlags(interactionFlag: TextInteractionFlag){
      widget.setProperty('textInteractionFlags', interactionFlag);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};