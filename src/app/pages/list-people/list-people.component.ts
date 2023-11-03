import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FilterInterface } from 'src/app/interfaces/filter.interface';
import { PersonInterface } from 'src/app/interfaces/person.interface';
import { MissingPeopleService } from 'src/app/services/missing-people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.scss']
})
export class ListPeopleComponent implements OnInit {

  peopeList: PersonInterface[] = [];
  currentPage: number = 1;
  totalItems: number = 0;
  filter:FilterInterface = {
    idade: 0,
    nome: '',
    sexo: '',
    pagina: 0
  };

  constructor(
    private readonly missingPeopleService: MissingPeopleService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getMissingPeople(this.filter)
  }

  getMissingPeople(filter: Partial<FilterInterface>): void {
    this.spinner.show();
    this.missingPeopleService.getAll(filter).subscribe((response) => {
      this.peopeList = response.content;
      this.totalItems = response.totalElements;
      this.spinner.hide();
    });
  }

  pageChanged(event: any): void {
    this.filter.pagina = event - 1;
    this.getMissingPeople(this.filter);
    this.currentPage = event;
  }

  clear(): void {
    this.filter = {
      idade: 0,
      nome: '',
      sexo: '',
      pagina: 0
    };
    this.currentPage = 1;
    this.getMissingPeople(this.filter);
  }

}
