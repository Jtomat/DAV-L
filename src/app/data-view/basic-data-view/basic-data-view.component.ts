import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PieChartPart} from "../../charts/utils/chart-parts/pie-chart-part";

@Component({
  selector: 'app-basic-data-view',
  templateUrl: './basic-data-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./basic-data-view.component.scss']
})
export class BasicDataViewComponent implements OnInit {
  @ViewChild('svg', {read: ElementRef}) svg: ElementRef<SVGElement>

  constructor() { }

  ngOnInit(): void {

    setTimeout(()=> {

      const piePart:PieChartPart = new PieChartPart(this.svg.nativeElement as any);
      piePart['_value'] = 10;
      piePart['backgroundColor'] = 'yellow';
      piePart['_percentValue'] = 0.6;
      piePart.render();

      const piePart2:PieChartPart = new PieChartPart(this.svg.nativeElement as any);
      piePart2['_value'] = 10;
      piePart2['backgroundColor'] = 'red';
      piePart2['_percentValue'] = 0.4;
      piePart2['_percentBefore'] = 0.6;
      piePart2.render();
    },2000)

  }

}
