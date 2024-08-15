import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { AppService } from '../common/app.service';
import { ScrollToFirstFormErrorDirective } from '../common/directives/scroll-to-first-form-error.directive';
import { Profession } from '../common/interfaces/app-interfaces';
import { Util } from '../common/utilities';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { ChipModule } from 'primeng/chip';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-trader-details-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    ScrollToFirstFormErrorDirective,
    CheckboxModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    AvatarModule,
    ChipModule,
    CalendarModule,
  ],
  providers: [AppService],
  templateUrl: './trader-details-form.component.html',
  styleUrl: './trader-details-form.component.scss',
})
export class TraderDetailsFormComponent implements OnInit {
  traderDetailsFormGroup: FormGroup;
  professionsList: Profession[];
  selectedProfessions: string[] = [];
  _skillsDialogVisible = false;

  @ViewChild('endCalendar')
  endCalendar: any;

  // @ViewChild('inputfield')
  // endCalendar: any;
  
  get skillsDialogVisible() {
    return this._skillsDialogVisible;
  }
  set skillsDialogVisible(value: boolean) {
    setTimeout(() => {
      this._skillsDialogVisible = value;
    }, 100);
  }
  constructor(
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private appService: AppService
  ) {
    this.professionsList = appService.getProfessions();
    this.traderDetailsFormGroup = this.formBuilder.group({
      startDate: [''],
      endDate: [''],
      fullName: ['', Validators.required],
      companyName: [''],
      companyLogo: [''],
      address: this.formBuilder.group({
        firstLineAddress: ['', Validators.required],
        town: ['', Validators.required],
        city: ['', Validators.required],
        zipCode: [''],
      }),
      contactNo1: [
        null,
        [Validators.required, Validators.pattern(/^(\+92|0|92)[0-9]{10}$/gm)],
      ],
      contactNo2: [null],
      professions: this.formBuilder.array([], Validators.required),
      services: this.formBuilder.array([]),
      images: this.formBuilder.array([]),
      companyWebsiteUrl: [''],
    });
  }

  ngOnInit(): void {
    this.professionsList.forEach((profession) => {
      this.professionsFormArray.push(
        this.formBuilder.group({
          name: [profession.name],
          code: [profession.code],
          selected: [],
          skills: this.formBuilder.array([], Validators.required),
        })
      );
    });
  }

  openEndCalendar(event: any) {
    console.log(event)
    this.endCalendar.inputfieldViewChild.nativeElement.focus();

  }

  get professionsFormArray() {
    return this.traderDetailsFormGroup.controls[
      'professions'
    ] as FormArray<FormGroup>;
  }

  addProfession(formArrayControl: FormArray, value: any) {
    this.skillsDialogVisible = true;
    // const currentSelectedIndex = (formArrayControl.value as string[]).findIndex(
    //   (selectedValue) => value
    // );
    // if (currentSelectedIndex === -1) {
    //   formArrayControl.push(this.formBuilder.control(value));
    // } else {
    //   formArrayControl.removeAt(currentSelectedIndex);
    // }
  }

  onTraderFormSubmit() {
    this.traderDetailsFormGroup.markAllAsTouched();

    Util.markAllControlsAsDirty(
      Object.values(this.traderDetailsFormGroup.controls)
    );

    if (this.traderDetailsFormGroup.valid) {
    } else {
    }
  }

  showDialog() {
    this.skillsDialogVisible = true;
  }

  editSkills() {}
}
