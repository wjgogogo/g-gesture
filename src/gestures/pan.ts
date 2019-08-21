/*
拖拽
 */
import { Event } from '@antv/g';
import { Gesture } from './gesture';

export class Pan extends Gesture {
  protected EVENT: string = 'pan';

  private preX: number;
  private preY: number;

  protected onTouchCancel(ev) {}

  protected onTouchEnd(ev) {}

  protected onTouchMove(ev) {
    const { x, y } = ev;

    const deltaX = x - this.preX;
    const deltaY = y - this.preY;

    this.preX = x;
    this.preY = y;

    this.emit({ x, y, deltaX, deltaY });
  }

  protected onTouchStart(ev) {
    const { x, y } = ev;

    this.preX = x;
    this.preY = y;
  }
}