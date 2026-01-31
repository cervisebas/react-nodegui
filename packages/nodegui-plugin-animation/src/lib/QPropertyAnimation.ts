import { NativeElement, QObject } from '@nodegui/nodegui';
import addon from './utils/addon';
import { NodeVariantAnimation, QVariantAnimationEvents } from './QVariantAnimation';
import { PropertyName } from './types/PropertyNames';

/* constructor(parent?: QObject<never>) {
    let native;
    if (parent) {
        native = new addon.QPropertyAnimation(parent.native);
    } else {
        native = new addon.QPropertyAnimation();
    }

    super(native);
    this.native = native;
    this.nodeParent = parent;
} */

export const QPropertyAnimationEvents = Object.freeze({
    ...QVariantAnimationEvents,
});
export class QPropertyAnimation<Target> extends NodeVariantAnimation {
    public target!: Target;

    public native: NativeElement;
    public nodeParent?: QObject<never>;

    constructor(target?: Target) {
        const native = new addon.QPropertyAnimation();
        super(native);

        if (target) {
            this.setTargetObject(target);
        }
        this.native = native;
        //this.nodeParent = parent;
    }

    setPropertyName(name: PropertyName<Target>): void {
        this.native.setPropertyName(name);
    }

    propertyName(): PropertyName<Target> {
        return this.native.propertyName();
    }

    setTargetObject<T>(object: T): void {
        this.target = object as unknown as Target;

        if (object && typeof object === 'object' && 'native' in object) {
            this.native.setTargetObject(object.native);
        } else {
            console.error('Non-animable object.');
        }
    }

    onFinished(callback: () => void) {
        this.native.onFinished(callback);
    }
}
