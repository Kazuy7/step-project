import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { Teacher } from 'src/app/interfaces/Teacher';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent {
    
  teacher?: Teacher;

  constructor(private teacherService: TeacherService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Puxando id pela url
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Carregando dado pelo id
    this.teacherService.getTeacher(id)
    .subscribe((item) => (this.teacher = item.data));
  }
}
