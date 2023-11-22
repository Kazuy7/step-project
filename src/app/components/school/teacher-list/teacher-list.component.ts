import { Component } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { Teacher } from 'src/app/interfaces/Teacher';
import { environment } from 'src/environments/environment';
import { School } from 'src/app/interfaces/School';
import { SchoolService } from 'src/app/services/school.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent {
  allTeachers: Teacher[] = []
  teachers: Teacher[] = []
  baseApiUrl = environment.baseApiUrl
  school?: School;

  constructor(
    private teacherService: TeacherService,
    private schoolService: SchoolService,
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.teacherService.getTeachers().subscribe((items) => {
      const data = items.data

      // Tratando as datas
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
      })

      this.allTeachers = data;
      this.teachers = data;
    })

        // Puxando id pela url
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Carregando dado pelo id
    this.schoolService.getSchool(id).subscribe((item) => (this.school = item.data));
  }
}
