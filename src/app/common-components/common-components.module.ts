import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputFieldsComponent } from './input-fields/input-fields.component';

@NgModule({
  declarations: [ButtonsComponent, InputFieldsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonsComponent,
    InputFieldsComponent
  ]
})
export class CommonComponentsModule { }
