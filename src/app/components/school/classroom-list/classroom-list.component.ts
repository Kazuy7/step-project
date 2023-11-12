import { Component } from '@angular/core';
import { ClassroomService } from 'src/app/services/classroom.service';
import { Classroom } from 'src/app/interfaces/Classroom';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.css']
})
export class ClassroomListComponent {
  allClassrooms: Classroom[] = []
  classrooms: Classroom[] = []
  baseApiUrl = environment.baseApiUrl

  constructor(private classroomService: ClassroomService) {}

  ngOnInit(): void {
    this.classroomService.getClassrooms().subscribe((items) => {
      const data = items.data

      // Tratando as datas
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
      })

      this.allClassrooms = data;
      this.classrooms = data;
    })
  }
}
