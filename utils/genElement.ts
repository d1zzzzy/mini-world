import { fabric } from "fabric";

import { COLORS } from './../constant/color';

export const genRect = (opt: fabric.IRectOptions) => {
  const { left = 0, top = 0, width = 100, height = 50, fill = COLORS.light } = opt;

  return new fabric.Rect({
    ...opt,
    left,
    top,
    width,
    height,
    fill,
    originX: 'left',
    originY: 'top',
    evented: false,
    selectable: false,
  });
};

export const genText = (text = '文本', opt: fabric.IText) => {
  const { left = 0, top = 0, fontSize = 3, opacity = 1 } = opt;

  return new fabric.Text(text, {
    left,
    top,
    fontSize,
    opacity,
    originX: 'center',
    originY: 'center',
    evented: false,
    fill: '#fff',
    fontFamily: 'MontserratVariableFont, NotoSansSC',
  })
}

export const genEndZone = (opt: fabric.IRectOptions) => {
  const { left = 0, top = 0, width = 0, height = 0 } = opt;
  const center = {
    x: left + width / 2,
    y: top + height / 2,
  };
  const rect = genRect(opt);
  const text = genText('EndZone', {
    left: center.x,
    top: center.y,
    fontSize: 32,
    opacity: .7,
  } as any);

  return new fabric.Group([rect, text], {
    ...opt,
    originX: 'left',
    originY: 'top',
    evented: false,
    selectable: false,
  })
}
