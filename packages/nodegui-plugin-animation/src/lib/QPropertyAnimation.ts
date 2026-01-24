import { NativeElement, QObject } from '@nodegui/nodegui';
import addon from './utils/addon';
import { NodeVariantAnimation, QVariantAnimationEvents } from './QVariantAnimation';
import { PropertyName } from './types/PropertyNames';

export const QPropertyAnimationEvents = Object.freeze({
    ...QVariantAnimationEvents,
});
export class QPropertyAnimation extends NodeVariantAnimation {
    public native: NativeElement;
    public nodeParent?: QObject<never>;

    constructor(parent?: QObject<never>) {
        let native;
        if (parent) {
            native = new addon.QPropertyAnimation(parent.native);
        } else {
            native = new addon.QPropertyAnimation();
        }
        super(native);
        this.native = native;
        this.nodeParent = parent;
    }

    setPropertyName(name: PropertyName): void {
        this.native.setPropertyName(name);
    }

    propertyName(): PropertyName {
        return this.native.propertyName();
    }

    setTargetObject(object: QObject<never>): void {
        return this.native.setTargetObject(object.native);
    }

    onFinished(callback: () => void) {
        this.native.onFinished(callback);
    }
}
