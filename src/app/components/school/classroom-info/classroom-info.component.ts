import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassroomService } from 'src/app/services/classroom.service';
import { Classroom } from 'src/app/interfaces/Classroom';
import { School } from 'src/app/interfaces/School';

@Component({
  selector: 'app-classroom-info',
  templateUrl: './classroom-info.component.html',
  styleUrls: ['./classroom-info.component.css']
})
export class ClassroomInfoComponent {
  
  classroom?: Classroom;
  school?: School;

  constructor(private classroomService: ClassroomService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Puxando id pela url
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Carregando dado pelo id
    this.classroomService.getClassroom(id)
    .subscribe((item) => (this.classroom = item.data));
  }
}
