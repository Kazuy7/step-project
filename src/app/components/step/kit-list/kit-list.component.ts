import { Component } from '@angular/core';
import { KitService } from 'src/app/services/kit.service';
import { Kit } from 'src/app/interfaces/Kit';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-kit-list',
  templateUrl: './kit-list.component.html',
  styleUrls: ['./kit-list.component.css']
})
export class KitListComponent {
  allKits: Kit[] = []
  kits: Kit[] = []
  baseApiUrl = environment.baseApiUrl

  faSearch = faSearch
  searchTerm: string = ''; 

  constructor(private kitService: KitService) {}

  ngOnInit(): void {
    this.kitService.getKits().subscribe((items) => {
      const data = items.data

      // Tratando as datas
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
      })

      this.allKits = data;
      this.kits = data;
    })
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value

    this.kits = this.allKits.filter((kit) => {
      return kit.nome.toLowerCase().includes(value);
    })
  }
}
