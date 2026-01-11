# NodeGui Plugin Animation

[![npm version](https://img.shields.io/npm/v/@nodegui/plugin-animation.svg)](https://www.npmjs.com/package/@cervisebas/nodegui-plugin-animation)

Plugin you can use to create native animations in NodeGui.
This package is a fork of the repository "[nodegui-plugin-animation](https://github.com/nodegui/nodegui-plugin-animation)"


## Requirements

* Requires NodeGui v070.0 or up
* CMake: [Download here](https://cmake.org/download/)


## Installation

```sh
npm install @cervisebas/nodegui-plugin-animation
```

## Demo

```ts
import { QPropertyAnimation } from '@cervisebas/nodegui-plugin-animation';
import { QPushButton } from '@nodegui/nodegui';

const animation = new QPropertyAnimation();

const button = new QPushButton();
button.setText('Animated Button');
button.show();

animation.setPropertyName('windowOpacity');
animation.setTargetObject(button);

animation.setDuration(5000);
animation.setStartValue(0.4);
animation.setKeyValueAt(0.5, 1.0);
animation.setEndValue(1.0);

animation.start();

Object.assign(global, {
  button: button,
  animation: animation,
});
```
