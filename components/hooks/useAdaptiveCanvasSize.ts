import { useCallback, useEffect, useState } from 'react';
import PubSub from 'pubsub-js';

import { CANVAS_SIZE } from './../../constant/canvas';
import { PubSubEnum } from 'constant/pubsub-enum';


const getCompativeSize = (width: number, height: number) => {
  const { w, h } = CANVAS_SIZE;
  const multiple = Math.floor(height / h) - 1;

  return [...[w, h].map(i => i * multiple), multiple];
};

export const useAdpativeCanvasSize = (canvasManager: fabric.Canvas | null): any => {
  const [mutiple, setMultiple] = useState<number>(1);

  const resize = useCallback(() => {
    if (canvasManager) {
      const { innerWidth: iw, innerHeight: ih } = window;

      const [width, height, z] = getCompativeSize(iw, ih);

      setMultiple(z);

      canvasManager.setWidth(width);
      canvasManager.setHeight(height);

      // @ts-ignore
      canvasManager.mutiple = z;

      PubSub.publish(PubSubEnum.WINDOW_RESIZE);
    }
  }, [canvasManager]);

  useEffect(() => {
    resize();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    }
  }, [canvasManager]);



  return {
    mutiple,
  };
}