import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputFieldsComponent } from './input-fields/input-fields.component';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';

@NgModule({
  declarations: [ButtonsComponent, InputFieldsComponent, RadioButtonsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ButtonsComponent,
    InputFieldsComponent,
    RadioButtonsComponent
  ]
})
export class CommonComponentsModule { }
