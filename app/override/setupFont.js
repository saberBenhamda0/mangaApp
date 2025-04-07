import { Text, TextInput } from 'react-native';
import React from 'react';

export default setDefaultFont = (fontName = 'Roboto_400Regular') => {
  const oldTextRender = Text.render;
  const oldTextInputRender = TextInput.render;

  Text.render = function (...args) {
    const origin = oldTextRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [{ fontFamily: fontName }, origin.props.style],
    });
  };

  TextInput.render = function (...args) {
    const origin = oldTextInputRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [{ fontFamily: fontName }, origin.props.style],
    });
  };
};
