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

  shareWhatsapp(): void {
    window.open(`https://api.whatsapp.com/send?text=Veja%20o%20desaparecido%20${this.person.nome}%20no%20site%20https://abitus.pjc.mt.gov.br/pessoas/${this.person.id}`, '_blank');
  }

  shareFacebook(): void {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=https://abitus.pjc.mt.gov.br/pessoas/${this.person.id}`, '_blank');
  }

  shareTwitter(): void {
    window.open(`https://twitter.com/intent/tweet?text=Veja%20o%20desaparecido%20${this.person.nome}%20no%20site%20https://abitus.pjc.mt.gov.br/pessoas/${this.person.id}`, '_blank');
  }

}
