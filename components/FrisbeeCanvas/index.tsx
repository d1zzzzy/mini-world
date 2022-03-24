import { fabric } from "fabric";
import { useEffect, useState } from "react";

import styles from '@/styles/components/frisbee-canvas.module.less';

import { useAdpativeCanvasSize } from "../hooks/useAdaptiveCanvasSize";
import { useInitPlayGround } from "../hooks/useInitPlayGround";

const className = 'frisbeeCanvas';

const FrisbeeCanvas = () => {
  const [canvasManager, setCanvasManager] = useState<fabric.Canvas | null>(null);

  useAdpativeCanvasSize(canvasManager);
  useInitPlayGround(canvasManager);

  useEffect(() => {
    const manager = new fabric.Canvas(className);

    setCanvasManager(manager);
  }, []);

  return (
    <div className={`${className}Container`}>
      <canvas id={className} className={styles[className]} />
    </div>
  )
}

export default FrisbeeCanvas;