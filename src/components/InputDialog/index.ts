import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { InputDialogProps } from "./interfaces/InputDialogProps";
import { RNInputDialog } from "./scripts/RNInputDialog";

class InputDialogConfig extends ComponentConfig<InputDialogProps, RNInputDialog> {
  tagName: string = RNInputDialog.tagName;
  
  shouldSetTextContent() {
    return false;
  }
  
  createInstance(newProps: InputDialogProps) {
    const widget = new RNInputDialog();
    widget.setProps(newProps, {});
    return widget;
  }
  
  commitMount(instance: RNInputDialog, newProps: InputDialogProps) {
    if (newProps.visible !== false && newProps.open !== false) {
      instance.show();
    }
    return;
  }
  
  commitUpdate(instance: RNInputDialog, _updatePayload: never, oldProps: InputDialogProps, newProps: InputDialogProps) {
    instance.setProps(newProps, oldProps);
  }
}

/**
 * Pop up InputDialog inheriting the functionality of nodegui's `QInputDialog`
 * @example
 * ```javascript
 * function DialogExample(props){
 *  const [open, setOpen] = useState(false);
 *  const events = useEventHandler<QInputDialogSignals>({
 *    textValueChanged(value){
 *        //....do whatever
 *    }
 *  }, [....deps])
 *  return (
 *    <View>
 *      <InputDialog open={open} on={events}/>
 *      <Button text="open dialog" on={{clicked:()=>setOpen(true)}}/>
 *    </View>
 *  )
 * }
 * ```
 */

export const InputDialog = registerComponent<InputDialogProps>(new InputDialogConfig());
export { RNInputDialog };
export { InputDialogNative } from "./scripts/RNInputDialog";
