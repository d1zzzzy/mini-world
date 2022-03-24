import Konva from 'konva';
import produce from "immer";

import * as types from './types';

export interface FrisbeeState {
  canvasManager: Konva.Stage | null;
}

const initialState: FrisbeeState = {
  canvasManager: null
};

function currentFrisbee(state = initialState, action: {
  type: string,
  payload: any,
}) {
  return produce(state, (canvas: FrisbeeState) => {
    switch (action.type) {
      case types.SET_FRISBEE_MANAGER:
        canvas.canvasManager = action.payload;
        break;
      default:
    }
  });
}

export default currentFrisbee;
