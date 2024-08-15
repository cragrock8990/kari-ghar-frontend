import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { TradesmenDataListComponent } from './common/tradesmen-data-list/tradesmen-data-list.component';
import { ButtonModule } from 'primeng/button';
import { Sidebar } from 'primeng/sidebar';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { TradesCarouselComponent } from './common/trades-carousel/trades-carousel.component';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { AppService } from './common/app.service';
import {
  City,
  Profession,
  FooterLink,
} from './common/interfaces/app-interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    DropdownModule,
    ReactiveFormsModule,
    ButtonModule,
    SidebarModule,
    AvatarModule,
    CommonModule,
    AccordionModule,
    TradesmenDataListComponent,
    TradesCarouselComponent,
    RouterModule,
    DividerModule,
  ],
})
export class AppComponent implements OnInit {
  title = 'kari-ghar-frontend';
  formGroup: FormGroup | any;
  cities: City[] | undefined;
  professions: Profession[] | undefined;
  footerLinks: FooterLink[] | undefined;
  sidebarVisible: boolean = false;

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.cities = [
      { name: 'Abbottabad', code: 'ATD' },
      { name: 'Islamabad', code: 'ISB' },
      { name: 'Rawalpindi', code: 'RWP' },
      { name: 'Peshawar', code: 'PSH' },
      { name: 'Lahore', code: 'LHR' },
      { name: 'Karachi', code: 'KRC' },
    ];

    this.professions = this.appService.getProfessions();

    this.footerLinks = [
      { displayName: 'About us', href: '/about-us' },
      { displayName: 'Contact us', href: '' },
      { displayName: 'Legal', href: '' },
      { displayName: 'terminologies', href: '' },
      { displayName: 'Our cookies', href: '' },
    ];

    this.formGroup = new FormGroup({
      selectedCity: new FormControl<City | null>(null),
      selectedProfession: new FormControl<Profession | null>(null),
    });
  }

  closeCallback(e: any): void {
    this.sidebarRef.close(e);
  }
}
