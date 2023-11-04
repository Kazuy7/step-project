import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Register } from 'src/app/interfaces/Register';
import { Response } from 'src/app/interfaces/Response';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent {

  allSchools: Register[] = []
  schools: Register[] = []
  baseApiUrl = environment.baseApiUrl

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {
    this.registerService.getRegisters().subscribe((items) => {
      const data = items.data

      // Tratando as datas
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
      })

      this.allSchools = data;
      this.schools = data;
    })
  }
  
}
