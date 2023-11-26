import { Component } from '@angular/core';
import { ComponenteService } from 'src/app/services/componente.service';
import { Componente } from 'src/app/interfaces/Componente';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-componente-list',
  templateUrl: './componente-list.component.html',
  styleUrls: ['./componente-list.component.css']
})
export class ComponenteListComponent {
  allComponentes: Componente[] = []
  componentes: Componente[] = []
  baseApiUrl = environment.baseApiUrl

  faSearch = faSearch
  searchTerm: string = ''; 

  constructor(private componenteService: ComponenteService) {}

  ngOnInit(): void {
    this.componenteService.getComponentes().subscribe((items) => {
      const data = items.data

      // Tratando as datas
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
      })

      this.allComponentes = data;
      this.componentes = data;
    })
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value

    this.componentes = this.allComponentes.filter((componente) => {
      return componente.nome.toLowerCase().includes(value);
    })
  }
}
