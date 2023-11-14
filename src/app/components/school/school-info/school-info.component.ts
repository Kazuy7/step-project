import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from 'src/app/services/school.service';
import { School } from 'src/app/interfaces/School';

@Component({
  selector: 'app-school-info',
  templateUrl: './school-info.component.html',
  styleUrls: ['./school-info.component.css']
})
export class SchoolInfoComponent {

  school?: School;

  constructor(private schoolService: SchoolService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Puxando id pela url
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Carregando dado pelo id
    this.schoolService.getSchool(id)
    .subscribe((item) => (this.school = item.data));
  }

}
