import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputFieldsComponent } from './input-fields/input-fields.component';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { SelectsComponent } from './selects/selects.component';

@NgModule({
  declarations: [ButtonsComponent, InputFieldsComponent, RadioButtonsComponent, CheckboxesComponent, SelectsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ButtonsComponent,
    CheckboxesComponent,
    InputFieldsComponent,
    RadioButtonsComponent,
    SelectsComponent
  ]
})
export class CommonComponentsModule { }
