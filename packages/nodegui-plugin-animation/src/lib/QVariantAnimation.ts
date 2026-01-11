import { WidgetEventTypes, QObject } from '@nodegui/nodegui';
import addon from './utils/addon';
import { QAbstractAnimation } from './QAbstractAnimation';

export const QVariantAnimationEvents = Object.freeze({
    ...WidgetEventTypes,
});

export abstract class NodeVariantAnimation extends QAbstractAnimation {
    setDuration(duration: number): void {
        this.native?.setDuration(duration);
    }
    setStartValue(value: string | number): void {
        this.native?.setStartValue(value);
    }
    setEndValue(value: string | number): void {
        this.native?.setEndValue(value);
    }
    setKeyValueAt(step: number, value: string | number): void {
        this.native?.setKeyValueAt(step, value);
    }
}

export class QVariantAnimation extends NodeVariantAnimation {
    public nodeParent?: QObject<never>;    

    constructor(parent?: QObject<never>) {
        let native;
        if (parent) {
            native = new addon.QVariantAnimation(parent.native);
        } else {
            native = new addon.QVariantAnimation();
        }
        super(native);
        this.native = native;
        this.nodeParent = parent;
    }
}
