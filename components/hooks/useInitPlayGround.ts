import { useEffect, useCallback } from 'react';
import PubSub from 'pubsub-js';

import { CANVAS_SIZE } from 'constant/canvas';
import { COLORS } from 'constant/color';
import { genEndZone, genRect } from 'utils/genElement';
import { PubSubEnum } from 'constant/pubsub-enum';

export const useInitPlayGround = (canvasManager: fabric.Canvas | null) => {
  const renderDefaultLayout = useCallback(() => {
    if (canvasManager) {
      // @ts-ignore
      const { mutiple = 1, width = 0, height = 0 } = canvasManager;

      canvasManager.clear();

      const endZoneHeight = CANVAS_SIZE.endZone * mutiple;
      console.log(' 111-----> ', CANVAS_SIZE.endZone, mutiple);
      const fullBG = genRect({ width, height, fill: COLORS.green });
      const endZoneA = genEndZone({ width, height: endZoneHeight });
      const endZoneB = genEndZone({ top: height - endZoneHeight, width, height: endZoneHeight });

      canvasManager.add(fullBG, endZoneA, endZoneB);
      canvasManager.requestRenderAll();
    }
  }, [canvasManager]);

  useEffect(() => {
    renderDefaultLayout();

    const token = PubSub.subscribe(PubSubEnum.WINDOW_RESIZE, () => {
      console.log(' ----------_> ');
      renderDefaultLayout();
    });

    return () => {
      PubSub.unsubscribe(token);
    }
  }, [canvasManager]);
}