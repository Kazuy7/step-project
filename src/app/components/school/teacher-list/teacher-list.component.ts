import { Component } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { Teacher } from 'src/app/interfaces/Teacher';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent {
  allTeachers: Teacher[] = []
  teachers: Teacher[] = []
  baseApiUrl = environment.baseApiUrl

  constructor(private teacherService: TeacherService) {}

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
  }
}
