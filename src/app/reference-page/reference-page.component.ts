import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AthleteInfo} from '../program-page/program-page.component';
@Component({
  selector: 'app-reference-page',
  templateUrl: './reference-page.component.html',
  styleUrls: ['./reference-page.component.css']
})
export class ReferencePageComponent implements OnInit {
  age: number;
  bodyweight: number;
  trainingStyle: string;
  availability: number;
  squat1RM: number;
  bench1RM: number;
  deadlift1RM: number;
  athleteInfo: AthleteInfo;

  constructor(private route: ActivatedRoute) {
    this.age = this.route.snapshot.params.age;
    this.bodyweight = this.route.snapshot.params.bodyweight;
    this.trainingStyle = this.route.snapshot.params.trainingStyle;
    this.availability = this.route.snapshot.params.availability;
    this.squat1RM = this.route.snapshot.params.squat1RM;
    this.bench1RM = this.route.snapshot.params.bench1RM;
    this.deadlift1RM = this.route.snapshot.params.deadlift1RM;
  }

  ngOnInit(): void {
    this.athleteInfo = {
      selectedStyle: this.trainingStyle,
      selectedAvailability: Number(this.availability),
      bodyweight: Number(this.bodyweight),
      age: Number(this.age),
      Deadlift: {
        weight: Number(this.deadlift1RM),
        reps: 1,
      },
      Squat: {
        weight: Number(this.squat1RM),
        reps: 1,
      },
      Bench: {
        weight: Number(this.bench1RM),
        reps: 1,
      },
    };
  }

}
