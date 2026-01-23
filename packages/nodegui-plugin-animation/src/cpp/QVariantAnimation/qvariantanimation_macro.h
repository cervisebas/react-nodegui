
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
  QSharedPointer<QVariant> getValue(Napi::Env env, Napi::Value value) {      \
    if (value.IsObject()) {                                                  \
      Napi::Object obj = value.As<Napi::Object>();                           \
      if (obj.Has("qrect")) {                                                \
        int x = obj.Get("x").ToNumber().Int32Value();                        \
        int y = obj.Get("y").ToNumber().Int32Value();                        \
        int w = obj.Get("width").ToNumber().Int32Value();                    \
        int h = obj.Get("height").ToNumber().Int32Value();                   \
        QRect rect(x, y, w, h);                                              \
        return QSharedPointer<QVariant>::create(rect);                       \
      }                                                                      \
    }                                                                        \
    return                                                                   \
      QSharedPointer<QVariant>(extrautils::convertToQVariant(env, value));   \
  }                                                                          \
                                                                             \
  Napi::Value setStartValue(const Napi::CallbackInfo &info) {                \
    Napi::Env env = info.Env();                                              \
    Napi::HandleScope scope(env);                                            \
    Napi::Value value = info[0];                                             \
    auto val = this->getValue(env, value);                                   \
    this->instance->setStartValue(*val);                                     \
    return env.Null();                                                       \
  }                                                                          \
                                                                             \
  Napi::Value setEndValue(const Napi::CallbackInfo &info) {                  \
    Napi::Env env = info.Env();                                              \
    Napi::HandleScope scope(env);                                            \
    Napi::Value value = info[0];                                             \
    auto val = this->getValue(env, value);                                   \
    this->instance->setEndValue(*val);                                       \
    return env.Null();                                                       \
  }                                                                          \
  Napi::Value setKeyValueAt(const Napi::CallbackInfo &info) {                \
    Napi::Env env = info.Env();                                              \
    Napi::HandleScope scope(env);                                            \
    Napi::Number step = info[0].As<Napi::Number>();                          \
    Napi::Value value = info[1];                                             \
    auto val = this->getValue(env, value);                                   \
    this->instance->setKeyValueAt(step.DoubleValue(), *val);                 \
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
      InstanceMethod("setKeyValueAt", &ComponentWrapName::setKeyValueAt),

#endif
