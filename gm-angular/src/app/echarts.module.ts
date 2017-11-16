import { NgModule } from '@angular/core';
import { EchartsComponent } from './echarts.component';
import { AngularEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    AngularEchartsModule
  ],
  exports:[EchartsComponent],
  declarations: [EchartsComponent],
})
export class EchartsModule { }