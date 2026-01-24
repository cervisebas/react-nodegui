import { QPropertyAnimation } from '@cervisebas/nodegui-plugin-animation';
import { QPushButton } from '@nodegui/nodegui';
import { useEffect } from 'react';

interface IProps {
  children?: React.ReactNode;
}

export function AnimatedInstance(props: IProps) {
  useEffect(() => {
    const animation = new QPropertyAnimation();

    const button = new QPushButton();
    button.setText('Init');

    animation.setPropertyName('visible');
    animation.setTargetObject(button as never);

    animation.start();
  }, []);

  return props.children;
}
