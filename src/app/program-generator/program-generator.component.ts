import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AthleteInfo} from '../program-page/program-page.component';

@Component({
  selector: 'app-program-generator',
  templateUrl: './program-generator.component.html',
  styleUrls: ['./program-generator.component.css']
})
export class ProgramGeneratorComponent implements OnInit {
  selectedStyle: string;
  selectedAvailability: number;
  athleteForm: FormGroup;
  submitted = false;
  valid = false;
  athleteInfo: AthleteInfo;
  trainingStyle;
  availability = [];

  trainingOptions: any = [
    {
      name: 'Strength',
      availability: [3, 4]
    },
    {
      name: 'Aesthetics',
      availability: [3, 4, 5]
    }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.athleteForm = new FormGroup({
      selectedStyle: new FormControl('', [Validators.required]),
      selectedAvailability: new FormControl('', [Validators.required]),
      bodyweight: new FormControl('', [Validators.required, Validators.min(1)]),
      age: new FormControl(),
      deadliftWeight: new FormControl('', [Validators.required, Validators.min(1)]),
      deadliftReps: new FormControl('', [Validators.required, Validators.min(1)]),
      squatWeight: new FormControl('', [Validators.required, Validators.min(1)]),
      squatReps: new FormControl('', [Validators.required, Validators.min(1)]),
      benchWeight: new FormControl('', [Validators.required, Validators.min(1)]),
      benchReps: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }

  get bodyweight(): any {return this.athleteForm.get('bodyweight').value; }

  get f() {return this.athleteForm.controls;}

  athleteInfoSubmit(): void {
    this.submitted = true;
    if (this.athleteForm.invalid) {
      console.log('invalid form');
      return;
    }
    this.athleteInfo = {
      selectedStyle: this.athleteForm.value.selectedStyle,
      selectedAvailability: this.athleteForm.value.selectedAvailability,
      bodyweight: this.athleteForm.value.bodyweight,
      age: this.athleteForm.value.age,
      Deadlift: {
        weight: this.athleteForm.value.deadliftWeight,
        reps: this.athleteForm.value.deadliftReps,
      },
      Squat: {
        weight: this.athleteForm.value.squatWeight,
        reps: this.athleteForm.value.squatReps,
      },
      Bench: {
        weight: this.athleteForm.value.benchWeight,
        reps: this.athleteForm.value.benchReps,
      },
    };
    this.valid = true;
  }

  trainingStyleChoice(trainingStyle: string): void{
    let dropDownData = this.trainingOptions.find((data: any) =>
      data.name === trainingStyle);
    if (dropDownData) {
      this.availability = dropDownData.availability;
    } else {
      this.availability = [];
    }
  }
}
