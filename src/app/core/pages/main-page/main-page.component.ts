import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ChartComponent } from '../../../user/chart/chart.component';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ ChartComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss' ,
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {

}
