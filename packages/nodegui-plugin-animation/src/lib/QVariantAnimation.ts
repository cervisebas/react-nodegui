import { WidgetEventTypes, QObject, QRect } from '@nodegui/nodegui';
import addon from './utils/addon';
import { QAbstractAnimation } from './QAbstractAnimation';
import { ValueAnimation } from './types/ValueAnimation';

export const QVariantAnimationEvents = Object.freeze({
    ...WidgetEventTypes,
});

export abstract class NodeVariantAnimation extends QAbstractAnimation {
    setDuration(duration: number): void {
        this.native?.setDuration(duration);
    }
    private getValue(value: ValueAnimation) {
        if (value instanceof QRect) {
            return {
                qrect: 1,
                x: value.left(),
                y: value.top(),
                width: value.width(),
                height: value.height(),
            };
        }

        return value;
    }

    setStartValue(value: ValueAnimation): void {
        this.native?.setStartValue(this.getValue(value));
    }
    setEndValue(value: ValueAnimation): void {
        this.native?.setEndValue(this.getValue(value));
    }
    setKeyValueAt(step: number, value: ValueAnimation): void {
        this.native?.setKeyValueAt(step, this.getValue(value));
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
