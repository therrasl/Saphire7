import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  TuiButton,
  TuiDataList,
  TuiDialogContext,
  TuiDialogService,
  TuiCalendar,
} from '@taiga-ui/core';
import { TuiDataListWrapper } from '@taiga-ui/kit';
import {
  TuiSelectModule,
  TuiTextfieldControllerModule,
  TuiInputModule,
} from '@taiga-ui/legacy';
import type { TuiDay } from '@taiga-ui/cdk';
import { PolymorpheusContent } from '@taiga-ui/polymorpheus';

@Component({
  selector: 'app-configurations',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiDataList,
    TuiDataListWrapper,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiButton,
    NgIf,
    TuiCalendar,
    TuiInputModule,
  ],
  templateUrl: './configurations.html',
  styleUrl: './configurations.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigurationsComponent {
  hoursValue = new FormControl<number>(0);
  testValue = new FormControl<string | null>(null);

  public readonly dialogs = inject(TuiDialogService);

  public showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
    this.dialogs.open(content).subscribe();
  }

  public value: TuiDay | null = null;

  protected onDayClick(day: TuiDay): void {
    this.value = day;
  }

  public readonly hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  public readonly items = [
    'Angular',
    'C++',
    'C#',
    'C',
    'Dart',
    'Django',
    'Flutter',
    'Go',
    'Html && Css',
    'JavaScript',
    'Java',
    'Kotlin',
    'Python',
    'Php',
    'React',
    'Rust',
    'Ruby',
    'Spring',
    'Swift',
    'TypeScript',
    'Vue',
  ];
}
