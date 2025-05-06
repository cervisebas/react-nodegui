import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { FileDialogProps } from "./interfaces/FileDialogLabelText";
import { RNFileDialog } from "./scripts/RNFileDialog";

class FileDialogConfig extends ComponentConfig<FileDialogProps, RNFileDialog> {
  tagName = RNFileDialog.tagName;
  
  shouldSetTextContent() {
    return false;
  }
  
  createInstance(newProps: FileDialogProps) {
    const widget = new RNFileDialog();
    widget.setProps(newProps, {});
    return widget;
  }

  commitMount(instance: RNFileDialog, newProps: FileDialogProps) {
    if (newProps.visible !== false && newProps.open !== false) {
      instance.show();
    }
    return;
  }

  commitUpdate(instance: RNFileDialog, _updatePayload: never, oldProps: FileDialogProps, newProps: FileDialogProps) {
    instance.setProps(newProps, oldProps);
  }
}

/**
 * Pop up FileDialog inheriting the functionality of nodegui's `QFileDialog`
 * @example 
 * ```javascript
 * function DialogExample(props){
 *  const [open, setOpen] = useState(false);
 *  const events = useEventHandler<QFileDialogSignals>({
 *    fileSelected(file){
 *        //....do whatever
 *    }
 *  }, [....deps])
 *  return (
 *    <View>
 *      <FileDialog open={open} on={events}/>
 *      <Button text="open dialog" on={{clicked:()=>setOpen(true)}}/>
 *    </View>
 *  )
 * }
 * ```
 */

export const FileDialog = registerComponent<FileDialogProps>(new FileDialogConfig());
export { RNFileDialog };
export { FileDialogNative } from "./scripts/RNFileDialog";
