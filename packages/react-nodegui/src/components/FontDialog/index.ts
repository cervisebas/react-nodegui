import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { FontDialogProps } from "./interfaces/FontDialogProps";
import { RNFontDialog } from "./scripts/RNFontDialog";

class FontDialogConfig extends ComponentConfig<FontDialogProps, RNFontDialog> {
  tagName = RNFontDialog.tagName;
  
  shouldSetTextContent() {
    return false;
  }
  
  createInstance(newProps: FontDialogProps) {
    const widget = new RNFontDialog();
    widget.setProps(newProps, {});
    return widget;
  }
  
  commitMount(instance: RNFontDialog, newProps: FontDialogProps) {
    if (newProps.visible !== false && newProps.open !== false) {
      instance.show();
    }
    return;
  }
  
  commitUpdate(instance: RNFontDialog, _updatePayload: never, oldProps: FontDialogProps, newProps: FontDialogProps) {
    instance.setProps(newProps, oldProps);
  }
}
/**
 * Pop up FontDialog inheriting the functionality of nodegui's `QFontDialog`
 * @example
 * ```javascript
 * function FontDialogExample(props){
 *  const [open, setOpen] = useState(false);
 *  const events = useEventHandler<QFontDialogSignals>({
 *    fontSelected(font){
 *        //....do whatever
 *    }
 *  }, [....deps])
 *  return (
 *    <View>
 *      <FontDialog open={open} on={events}/>
 *      <Button text="open dialog" on={{clicked:()=>setOpen(true)}}/>
 *    </View>
 *  )
 * }
 * ```
 */

export const FontDialog = registerComponent<FontDialogProps>(new FontDialogConfig());
export { RNFontDialog };
export { FontDialogNative } from "./scripts/RNFontDialog";
