import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from './countries.mock-data';
import { Country } from './country.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  countriesList: Country[] = COUNTRIES
  selectedCountryCapita!: string

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(country: Country): void {
    this.selectedCountryCapita = country.capital
  }

}
