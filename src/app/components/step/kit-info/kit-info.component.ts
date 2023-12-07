import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KitService } from 'src/app/services/kit.service';
import { Kit } from 'src/app/interfaces/Kit';
import { CompKitService } from 'src/app/services/comp-kit.service';
import { CompKit } from 'src/app/interfaces/Comp-Kit';
import { Componente } from 'src/app/interfaces/Componente';
import { ComponenteService } from 'src/app/services/componente.service';

@Component({
  selector: 'app-kit-info',
  templateUrl: './kit-info.component.html',
  styleUrls: ['./kit-info.component.css']
})
export class KitInfoComponent {

  kit?: Kit;
  compkits: CompKit[] = [];
  componentes: Componente[] = [];

  constructor(
    private kitService: KitService,
    private route: ActivatedRoute,
    private compKitService: CompKitService,
    private componenteService: ComponenteService
  ) { }

  ngOnInit(): void {
    // Puxando id pela url
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Carregando dado pelo id
    this.kitService.getKit(id).subscribe((item) => (this.kit = item.data));

    // Filtrando o array das classrooms (não está funcionando no console network)
    this.compKitService.getCompKits().subscribe((items) => {
      this.compkits = items.data.filter((compkit) => compkit.kits_id == this.kit?.id);
    });

    // Filtrando o array das classrooms (não está funcionando no console network)
    this.componenteService.getComponentes().subscribe((items) => {
      this.componentes = items.data.filter((componente) => componente.id);
    });

  }
}
