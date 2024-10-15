import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  OnInit,
  NgZone,
  inject,
  ChangeDetectorRef,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class ChartComponent implements OnInit {
  private zone = inject(NgZone);

  getcolor(value: number) {
    if (value <= 2) {
      return '#FF6666';
    } else if (value > 2 && value <= 4) {
      return '#e6d800';
    } else {
      return '#50e991';
    }
  }

  public  data = [2, 4, 5];


  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      new Chart('WeekStatistics', {
        type: 'bar',
        data: {
          labels: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          datasets: [
            {
              label:
                'Часы уделенные учебе',
              data: this.data,
              borderWidth: 2,
              backgroundColor: '#8fbfda',
              borderColor :'#2c6485' ,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    });
  }
}
