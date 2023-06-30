export abstract class BasicChartPart {
  protected svgContainer: SVGGeometryElement | SVGElement;
  protected svgElement: SVGGeometryElement;
  protected backgroundColor: string;

  protected get box(): DOMRect {
    return {
      x: Number(this.svgContainer.getAttribute('x')),
      y: Number(this.svgContainer.getAttribute('x')),
      width: Number(this.svgContainer.getAttribute('width')),
      height: Number(this.svgContainer.getAttribute('height')),
    } as any;
  }

  protected _value: number;

  protected constructor(svgContainer: SVGGeometryElement | SVGElement) {
    this.svgContainer = svgContainer;
  }

  public render() {
    this.initSelf();
  }

  protected initSelf(): void {
    this.initSvgElement();
    this.initShape();
    this.initColor();
    if(Array(this.svgContainer.children).includes(this.svgElement as any))
      this.svgContainer.removeChild(this.svgElement);
    this.svgContainer.appendChild(this.svgElement);
  }

  protected initSvgElement(): void {
    this.svgElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    ) as SVGGeometryElement;
  }

  protected abstract initShape(): void;

  protected abstract initColor(): void;
}
