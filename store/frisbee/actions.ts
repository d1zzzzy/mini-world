import Konva from 'konva';

import * as types from './types';

export function setFrisbeeManager(object: Konva.Stage) {
  return {
    type: types.SET_FRISBEE_MANAGER,
    payload: object,
  }
}

