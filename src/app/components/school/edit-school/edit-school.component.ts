import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { School } from 'src/app/interfaces/School';
import { SchoolService } from 'src/app/services/school.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit-school',
  templateUrl: './edit-school.component.html',
  styleUrls: ['./edit-school.component.css']
})
export class EditSchoolComponent {
  school!: School
  btnText: string = 'Salvar'

  constructor(
    private schoolService: SchoolService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.schoolService.getSchool(id).subscribe((item) => {
      this.school = item.data
    })
  }

  async editHandler(schoolData: School) {
    const id = this.school.id

    const formData = new FormData()

    formData.append('nomeescola', schoolData.nomeescola)
    formData.append('razaosocial', schoolData.razaosocial)
    formData.append('cnpj', schoolData.cnpj)
    formData.append('responsavel', schoolData.responsavel)
    formData.append('telefone', schoolData.telefone)
    formData.append('rua', schoolData.rua)
    formData.append('numero', schoolData.numero)
    formData.append('bairro', schoolData.bairro)
    formData.append('cidade', schoolData.cidade)
    formData.append('estado', schoolData.estado)
    formData.append('cep', schoolData.cep)

    await this.schoolService.updateSchool(id!, formData).subscribe()

    this.messagesService.add(`Informações atualizadas com sucesso!`)

    this.router.navigate(['/school/', id])
  }
}
