import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { DialogProps } from "./interfaces/DialogProps";
import { RNDialog } from "./scripts/RNDialog";

class DialogConfig extends ComponentConfig<DialogProps, RNDialog> {
  tagName = RNDialog.tagName;
  
  shouldSetTextContent() {
    return false;
  }

  finalizeInitialChildren() {
    return true;
  }

  createInstance(newProps: DialogProps) {
    const widget = new RNDialog();
    widget.setProps(newProps, {});
    return widget;
  }

  commitMount(instance: RNDialog, newProps: DialogProps) {
    if (newProps.visible !== false && newProps.open !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(instance: RNDialog, _updatePayload: never, oldProps: DialogProps, newProps: DialogProps) {
    instance.setProps(newProps, oldProps);
  }
}
/**
 * Pop up Dialog inheriting the functionality of nodegui's `QDialog`
 * @param minSize set minimum height, width to prevent errors
 * @example 
 * ```javascript
 * function DialogExample(props){
 *  const [open, setOpen] = useState(false);
 *  return (
 *    <View>
 *      <Dialog open={open}>
 *        <View>{....other components}</View>
 *      </Dialog>
 *      <Button text="open dialog" on={{clicked:()=>setOpen(true)}}/>
 *    </View>
 *  )
 * }
 * ```
 */

export const Dialog = registerComponent<DialogProps>(new DialogConfig());
export { RNDialog };
export { DialogNative } from "./scripts/RNDialog";
