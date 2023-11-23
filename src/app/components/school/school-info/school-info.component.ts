import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from 'src/app/services/school.service';
import { ClassroomService } from 'src/app/services/classroom.service';
import { School } from 'src/app/interfaces/School';
import { Classroom } from 'src/app/interfaces/Classroom';

@Component({
  selector: 'app-school-info',
  templateUrl: './school-info.component.html',
  styleUrls: ['./school-info.component.css']
})
export class SchoolInfoComponent {

  school?: School;
  classrooms: Classroom[] = [];

  constructor(
    private schoolService: SchoolService,
    private route: ActivatedRoute,
    private classroomService: ClassroomService
  ) { }

  ngOnInit(): void {
    // Puxando id pela url
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Carregando dado pelo id
    this.schoolService.getSchool(id).subscribe((item) => (this.school = item.data));

    // Filtrando o array das classrooms (não está funcionando no console network)
    this.classroomService.getClassrooms().subscribe((items) => {
      this.classrooms = items.data.filter((classroom) => classroom.schools_id == this.school?.id);
    });

    console.log('Array Schools:', this.school)
  }
}
