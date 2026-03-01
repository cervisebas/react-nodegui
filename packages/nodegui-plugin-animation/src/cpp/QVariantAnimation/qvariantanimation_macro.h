
#pragma once
#include <nodegui/Extras/Utils/nutils.h>

#include "QAbstractAnimation/qabstractanimation_macro.h"
/*

    This macro adds common QVariantAnimation macro exported methods
    The exported methods are taken into this macro to avoid writing them in each
   and every time we export.
 */

#ifndef QVARIANTANIMATION_WRAPPED_METHODS_DECLARATION
#define QVARIANTANIMATION_WRAPPED_METHODS_DECLARATION                        \
  QABSTRACTANIMATION_WRAPPED_METHODS_DECLARATION                             \
                                                                             \
  Napi::Value setDuration(const Napi::CallbackInfo &info) {                  \
    Napi::Env env = info.Env();                                              \
    Napi::HandleScope scope(env);                                            \
    Napi::Number duration = info[0].As<Napi::Number>();                      \
    this->instance->setDuration(duration.Int32Value());                      \
    return env.Null();                                                       \
  }                                                                          \
                                                                             \
  QVariant getValue(Napi::Env env, Napi::Value value) {                      \
    if (value.IsObject()) {                                                  \
      Napi::Object obj = value.As<Napi::Object>();                           \
      if (obj.Has("qrect")) {                                                \
        int x = obj.Get("x").As<Napi::Number>().Int32Value();                \
        int y = obj.Get("y").As<Napi::Number>().Int32Value();                \
        int w = obj.Get("width").As<Napi::Number>().Int32Value();            \
        int h = obj.Get("height").As<Napi::Number>().Int32Value();           \
        return QVariant(QRect(x, y, w, h));                                  \
      }                                                                      \
      if (obj.Has("qpoint")) {                                               \
        int x = obj.Get("x").As<Napi::Number>().Int32Value();                \
        int y = obj.Get("y").As<Napi::Number>().Int32Value();                \
        return QVariant(QPoint(x, y));                                       \
      }                                                                      \
      if (obj.Has("qsize")) {                                                \
        int w = obj.Get("width").As<Napi::Number>().Int32Value();            \
        int h = obj.Get("height").As<Napi::Number>().Int32Value();           \
        return QVariant(QSize(w, h));                                        \
      }                                                                      \
      if (obj.Has("qcolor")) {                                               \
        int r = obj.Get("r").As<Napi::Number>().Int32Value();                \
        int g = obj.Get("g").As<Napi::Number>().Int32Value();                \
        int b = obj.Get("b").As<Napi::Number>().Int32Value();                \
        int a = obj.Get("a").As<Napi::Number>().Int32Value();                \
        return QVariant(QColor(r, g, b, a));                                 \
      }                                                                      \
    }                                                                        \
    QVariant* ext = extrautils::convertToQVariant(env, value);               \
    QVariant result = *ext;                                                  \
    delete ext;                                                              \
    return result;                                                           \
  }                                                                          \
                                                                             \
  Napi::Value setStartValue(const Napi::CallbackInfo &info) {                \
    Napi::Env env = info.Env();                                              \
    Napi::HandleScope scope(env);                                            \
    this->instance->setStartValue(this->getValue(env, info[0]));             \
    return env.Null();                                                       \
  }                                                                          \
                                                                             \
  Napi::Value setEndValue(const Napi::CallbackInfo &info) {                  \
    Napi::Env env = info.Env();                                              \
    Napi::HandleScope scope(env);                                            \
    this->instance->setEndValue(this->getValue(env, info[0]));               \
    return env.Null();                                                       \
  }                                                                          \
  Napi::Value setKeyValueAt(const Napi::CallbackInfo &info) {                \
    Napi::Env env = info.Env();                                              \
    Napi::HandleScope scope(env);                                            \
    Napi::Number step = info[0].As<Napi::Number>();                          \
    this->instance->setKeyValueAt(step.DoubleValue(),                        \
                                  this->getValue(env, info[1]));             \
    return env.Null();                                                       \
  }                                                                          \
  Napi::Value setEasingCurve(const Napi::CallbackInfo &info) {               \
    Napi::Env env = info.Env();                                              \
    Napi::HandleScope scope(env);                                            \
    int value = info[0].As<Napi::Number>().Int32Value();                     \
    auto type = static_cast<QEasingCurve::Type>(value);                      \
    QEasingCurve curve(type);                                                \
    this->instance->setEasingCurve(curve);                                   \
    return env.Null();                                                       \
  }

#endif

#ifndef QVARIANTANIMATION_WRAPPED_METHODS_EXPORT_DEFINE
#define QVARIANTANIMATION_WRAPPED_METHODS_EXPORT_DEFINE(ComponentWrapName) \
                                                                           \
  QABSTRACTANIMATION_WRAPPED_METHODS_EXPORT_DEFINE(ComponentWrapName)      \
  InstanceMethod("setDuration", &ComponentWrapName::setDuration),          \
      InstanceMethod("setStartValue", &ComponentWrapName::setStartValue),  \
      InstanceMethod("setEndValue", &ComponentWrapName::setEndValue),      \
      InstanceMethod("setKeyValueAt", &ComponentWrapName::setKeyValueAt),  \
      InstanceMethod("setEasingCurve", &ComponentWrapName::setEasingCurve),

#endif
