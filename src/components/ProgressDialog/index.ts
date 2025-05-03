import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { ProgressDialogProps } from "./interfaces/ProgressDialogProps";
import { RNProgressDialog } from "./scripts/RNProgressDialog";

class ProgressDialogConfig extends ComponentConfig<ProgressDialogProps, RNProgressDialog> {
  tagName = RNProgressDialog.tagName;
  
  shouldSetTextContent() {
    return false;
  }
  
  createInstance(newProps: ProgressDialogProps) {
    const widget = new RNProgressDialog();
    widget.setProps(newProps, {});
    return widget;
  }
  
  commitMount(instance: RNProgressDialog, newProps: ProgressDialogProps) {
    if (newProps.visible !== false && newProps.open !== false) {
      instance.show();
    }
    return;
  }
  
  commitUpdate(instance: RNProgressDialog, _updatePayload: never, oldProps: ProgressDialogProps, newProps: ProgressDialogProps) {
    instance.setProps(newProps, oldProps);
  }
}

/**
 * Pop up ProgressDialog inheriting the functionality of nodegui's `QProgressDialog`
 * @example
 * ```javascript
 * function ProgressDialogExample(props){
 *  const [open, setOpen] = useState(false);
 *  const events = useEventHandler<QProgressDialogSignals>({
 *    canceled(){
 *        setOpen(false);
 *        //....do whatever
 *    }
 *  }, [....deps])
 * const [value, setValue] = useState(0);
 *  return (
 *    <View>
 *      <ProgressDialog
 *        open={open}
 *        on={events}
 *        maxValue={100}
 *        minValue={0}
 *        value={value}
 *      />
 *      <Button text="open dialog" on={{clicked:()=>setOpen(true)}}/>
 *      <Button
 *        text="Progress"
 *        on={{clicked:()=>open && value < 100 &&setValue(value+5)}}
 *      />
 *    </View>
 *  )
 * }
 * ```
 */

export const ProgressDialog = registerComponent<ProgressDialogProps>(new ProgressDialogConfig());
