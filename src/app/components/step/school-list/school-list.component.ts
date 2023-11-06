import { Component } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';
import { School } from 'src/app/interfaces/School';
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
  allSchools: School[] = []
  schools: School[] = []
  baseApiUrl = environment.baseApiUrl

  faSearch = faSearch
  searchTerm: string = ''; 

  constructor(private schoolService: SchoolService) {}

  ngOnInit(): void {
    this.schoolService.getSchools().subscribe((items) => {
      const data = items.data

      // Tratando as datas
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
      })

      this.allSchools = data;
      this.schools = data;
    })
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value

    this.schools = this.allSchools.filter((school) => {
      return school.nomeescola.toLowerCase().includes(value);
    })
  }
  
}
