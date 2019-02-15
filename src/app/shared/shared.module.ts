import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { ConvertToSpaces } from './convert-to-spaces';

@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpaces,
  ],
  imports: [
    CommonModule,
    
  ],

  exports:[
    StarComponent,
    ConvertToSpaces,
    CommonModule
  ]
})
export class SharedModule { }
