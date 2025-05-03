import { ComponentConfig } from "../../classes/ComponentConfig";
import { registerComponent } from "../../utils/component.config";
import { ColorDialogProps } from "./interfaces/ColorDialogProps";
import { RNColorDialog } from "./scripts/RNColorDialog";

class ColorDialogConfig extends ComponentConfig<ColorDialogProps, RNColorDialog> {
  tagName: string = RNColorDialog.tagName;
  
  shouldSetTextContent() {
    return false;
  }
  
  createInstance(newProps: ColorDialogProps) {
    const widget = new RNColorDialog();
    widget.setProps(newProps, {});
    return widget;
  }
  
  commitMount(instance: RNColorDialog, newProps: ColorDialogProps) {
    if (newProps.visible !== false && newProps.open !== false) {
      instance.show();
    }
    return;
  }
  
  commitUpdate(instance: RNColorDialog, _updatePayload: never, oldProps: ColorDialogProps, newProps: ColorDialogProps) {
    instance.setProps(newProps, oldProps);
  }
}

/**
 * Pop up ColorDialog inheriting the functionality of nodegui's `QColorDialog`
 * @example
 * ```javascript
 * function ColorDialogExample(props){
 *  const [open, setOpen] = useState(false);
 *  const events = useEventHandler<QColorDialogSignals>({
 *    colorSelected(color){
 *        //....do whatever
 *    }
 *  }, [....deps])
 *  return (
 *    <View>
 *      <ColorDialog open={open} on={events}/>
 *      <Button text="open dialog" on={{clicked:()=>setOpen(true)}}/>
 *    </View>
 *  )
 * }
 * ```
 */

export const ColorDialog = registerComponent<ColorDialogProps>(new ColorDialogConfig());
