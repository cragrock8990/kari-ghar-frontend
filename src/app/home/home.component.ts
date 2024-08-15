import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../common/app.service';
import { Profession } from '../common/interfaces/app-interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  providers: [AppService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  professions: Profession[] | undefined;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.professions = this.appService.getProfessions();
  }
}
