export interface Classroom {
    id?: number;
    professor: string;
    numeroalunos: string;
    ano: string;
    turma: string;
    periodo: string;
    dia: string;
    created_at?: string;
    updated_at?: string;
    schools_id?: string;
    schools?: [{ id?: number;
        nomeescola: string;
        razaosocial: string;
        cnpj: string;
        responsavel: string;
        telefone: string;
        rua: string;
        numero: string;
        bairro: string;
        cidade: string;
        estado: string;
        cep: string; }];
}