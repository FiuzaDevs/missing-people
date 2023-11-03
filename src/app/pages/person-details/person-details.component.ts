import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonInterface } from 'src/app/interfaces/person.interface';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  person!:PersonInterface

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe({
      next: data => {
        this.person = data["person"];
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

}
