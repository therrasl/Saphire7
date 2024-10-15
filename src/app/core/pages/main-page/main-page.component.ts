import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { ChartComponent } from '../../chart/chart.component';
import { ConfigurationsComponent } from '../../configurations/configurations';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ ChartComponent ,ConfigurationsComponent ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss' ,
  changeDetection : ChangeDetectionStrategy.OnPush , 
})
export class MainPageComponent {

}
