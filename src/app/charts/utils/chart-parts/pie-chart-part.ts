import {RenderTools} from "../render-tools";
import {BasicChartPart} from "./basic-chart-part";

export class PieChartPart extends BasicChartPart {
  protected override svgElement: SVGPathElement;
  protected _percentValue: number;
  protected _percentBefore: number = 0;

  constructor(svgContainer: SVGGeometryElement | SVGElement) {
    super(svgContainer);
  }

  protected override initSelf() {
    super.initSelf();
    this.initRotation();
  }

  protected override initShape(): void {
    const allDegrees = Math.round(360 * this._percentValue * 100) / 100;
    const box = this.box;

    const moveTo = `m ${box.width/2} ${box.height/2}`;

    const endCoords = RenderTools.createCoordsForAngle(allDegrees);
    const line = `l ${(endCoords[0] * box.width) / 2} ${(endCoords[1] * box.height) / 2}`;


    const x = this.box.width / 2 - (endCoords[0] * box.width) / 2;
    const y = -(endCoords[1] * this.box.height) / 2;
    const curve = `a ${box.width / 2} ${box.height / 2} 0 ${allDegrees > 180 ? 1 : 0} 0 ${x} ${y}`;

    const path = `${moveTo} \n ${line} \n ${curve}`;
    this.svgElement.setAttribute('d', path);
  }

  protected initRotation():void {
    const startDegrees = Math.round(360 * this._percentBefore * 100) / 100;
    this.svgElement.setAttribute('transform-origin', 'center');
    this.svgElement.setAttribute('transform', `rotate(${-90 + startDegrees})`);
  }

  protected override initColor(): void {
    this.svgElement.setAttribute('fill', this.backgroundColor);
  }
}
