import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { ErrorPromptProps } from "./interfaces/ErrorPromptProps";
import { RNErrorPrompt } from "./scripts/RNErrorPrompt";

class ErrorPromptConfig extends ComponentConfig<ErrorPromptProps, RNErrorPrompt> {
  tagName: string = RNErrorPrompt.tagName;
  shouldSetTextContent() {
    return false;
  }
  createInstance(newProps: ErrorPromptProps) {
    const widget = new RNErrorPrompt();
    widget.setProps(newProps, { message: "" });
    return widget;
  }
  commitMount(instance: RNErrorPrompt, newProps: ErrorPromptProps) {
    if (newProps.visible !== false && newProps.open !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(instance: RNErrorPrompt, _updatePayload: never, oldProps: ErrorPromptProps, newProps: ErrorPromptProps) {
    instance.setProps(newProps, oldProps);
  }
}

/**
 * ErrorPrompt inherits the functionality of nodegui's `QErrorMessage`
 * @property `message` the message that needs to be displayed
 * @example
 * ```javascriptreact
 * function ErrorApplet(){
 *  const [open, setOpen] = useState(false);
 *  return (
 *    <View>
 *      <ErrorPrompt open={open} message="Error message!"/>
 *      <Button text="Error" on={{clicked:()=>setOpen(true)}}/>
 *    </View>
 *  )
 * }
 * ```
 */
export const ErrorPrompt = registerComponent<ErrorPromptProps>(new ErrorPromptConfig());
