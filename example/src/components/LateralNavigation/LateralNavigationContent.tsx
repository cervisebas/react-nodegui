import { QPropertyAnimation, QEasingCurve } from "@cervisebas/nodegui-plugin-animation";
import { RNView, StyleSheet, View } from "@cervisebas/react-nodegui";
import { Brush } from "@cervisebas/react-nodegui/dist/styles/types/ColorTypes";
import { QColor, QGraphicsDropShadowEffect, QRect } from "@nodegui/nodegui";
import React, { useRef, useCallback, forwardRef, useImperativeHandle } from "react";

interface IProps {
  expand_width: number;
  collapse_width: number;
  animation_duration: number;

  background_color: Brush;
  setExpanded?(val: boolean): void;

  children?: React.ReactNode;
}

export interface LateralNavigationContentRef {
  collapse(): void;
  expand(): void;
}

const BORDER_RADIUS = 0;
const SHADOW_BLUR_RADIUS = 8;

const ShadowContent = new QGraphicsDropShadowEffect();
ShadowContent.setBlurRadius(SHADOW_BLUR_RADIUS);
ShadowContent.setXOffset(2);
ShadowContent.setYOffset(0);
ShadowContent.setColor(new QColor(0, 0, 0, 30));

export const LateralNavigationContent = forwardRef(function (props: IProps, ref: React.Ref<LateralNavigationContentRef>) {
  const refContent = useRef<RNView>(null);

  const contentAnimation = useRef<QPropertyAnimation<RNView | null> | null>(null);
  const shadowAnimation = useRef<QPropertyAnimation<QGraphicsDropShadowEffect> | null>(null);
  const currentState = useRef(props.collapse_width);

  const toggleContentShadow = useCallback(() => {
    if (!shadowAnimation.current) {
      shadowAnimation.current = new QPropertyAnimation(ShadowContent);
      shadowAnimation.current.setPropertyName('blurRadius');
      shadowAnimation.current.setDuration(props.animation_duration);
    }

    const MUL_BLUR = SHADOW_BLUR_RADIUS * 10;

    shadowAnimation.current.setStartValue(
      currentState.current === props.collapse_width
        ? MUL_BLUR
        : SHADOW_BLUR_RADIUS,
    );
    shadowAnimation.current.setEndValue(
      currentState.current === props.collapse_width
        ? SHADOW_BLUR_RADIUS
        : MUL_BLUR,
    );
    shadowAnimation.current.start();
  }, [props.animation_duration, props.collapse_width]);

  const setContentWidth = useCallback((value: number) => {
    if (currentState.current === value) {
      return;
    }
    currentState.current = value;

    const originalGeometry = refContent.current?.geometry();
    if (!originalGeometry) {
      return;
    }

    if (!contentAnimation.current) {
      contentAnimation.current = new QPropertyAnimation(refContent.current);
      contentAnimation.current.setPropertyName('geometry');
      contentAnimation.current.setEasingCurve(QEasingCurve.InCirc);
      contentAnimation.current.setDuration(props.animation_duration);
    }

    contentAnimation.current.setStartValue(originalGeometry);
    contentAnimation.current.setEndValue(
      new QRect(
        originalGeometry.left(),
        originalGeometry.top(),
        value,
        originalGeometry.height(),
      ),
    );
    contentAnimation.current.start();

    toggleContentShadow();
  }, [props.animation_duration, toggleContentShadow]);

  const expandContent = useCallback(() => {
    setContentWidth(props.expand_width);
    props.setExpanded?.(true);
  }, [props, setContentWidth]);

  const collapseContent = useCallback(() => {
    setContentWidth(props.collapse_width);
    props.setExpanded?.(false);
  }, [props, setContentWidth]);

  useImperativeHandle(ref, () => ({
    expand: expandContent,
    collapse: collapseContent,
  }));

  return (
    <View
      ref={refContent}
      style={[
        styles.content,
        {
          width: props.collapse_width,
          backgroundColor: props.background_color,
        },
      ]}
      graphicsEffect={ShadowContent}
      on={{
        Enter: expandContent,
        Leave: collapseContent,
      }}
    >
      {props.children}
    </View>
  );
});

const styles = StyleSheet.create({
  content: {
    borderBottomRightRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
  },
});