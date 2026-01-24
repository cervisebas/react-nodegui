import { WidgetEventTypes, QObject } from '@nodegui/nodegui';
import addon from './utils/addon';
import { QAbstractAnimation } from './QAbstractAnimation';
import { ValueAnimation } from './types/ValueAnimation';
import { convertValue } from './utils/convertValue';

export const QVariantAnimationEvents = Object.freeze({
    ...WidgetEventTypes,
});

export abstract class NodeVariantAnimation extends QAbstractAnimation {
    setDuration(duration: number): void {
        this.native?.setDuration(duration);
    }
    setStartValue(value: ValueAnimation): void {
        this.native?.setStartValue(convertValue(value));
    }
    setEndValue(value: ValueAnimation): void {
        this.native?.setEndValue(convertValue(value));
    }
    setKeyValueAt(step: number, value: ValueAnimation): void {
        this.native?.setKeyValueAt(step, convertValue(value));
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
