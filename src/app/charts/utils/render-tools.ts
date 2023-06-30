
export abstract class RenderTools {

  static createPiePart(
    fromPercent: number,
    sizePercent: number,
    background: string,
    boxSize: number,
    titleRender?: string | Function,
    toolTipRender?: string | Function
  ) {
    const svgElement: SVGPathElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    ) as SVGPathElement;
    svgElement.setAttribute('fill', background);

    const allDegrees = Math.round(360 * sizePercent * 100) / 100;
    const startDegrees = Math.round(360 * fromPercent * 100) / 100;

    const moveTo = `m ${boxSize} ${boxSize}`;

    const endCoords = RenderTools.createCoordsForAngle(allDegrees);
    const line = `l ${(endCoords[0] * boxSize) / 2} ${
      (endCoords[1] * boxSize) / 2
    }`;

    const startCoords = RenderTools.createCoordsForAngle(0);
    const x = boxSize / 2 - (endCoords[0] * boxSize) / 2;
    const y = -(endCoords[1] * boxSize) / 2;
    const smooth = `a ${boxSize / 2} ${boxSize / 2} 0 ${
      allDegrees > 180 ? 1 : 0
    } 0 ${x} ${y}`;

    const path = `${moveTo} \n ${line} \n ${smooth}`;
    svgElement.setAttribute('d', path);
    svgElement.setAttribute('transform-origin', 'center');
    svgElement.setAttribute('transform', `rotate(${-90 + startDegrees})`);

    return svgElement;
  }

  static createCoordsForAngle(angle: number) {
    return [
      Math.round(Math.cos((angle / 180) * Math.PI) * 100) / 100,
      Math.round(Math.sin((angle / 180) * Math.PI) * 100) / 100,
    ];
  }
}
