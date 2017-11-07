import { NgModule } from '@angular/core';
import { EchartsComponent } from './echarts.component';
import { AngularEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    AngularEchartsModule
  ],
  declarations: [EchartsComponent],
})
export class EchartsModule { }