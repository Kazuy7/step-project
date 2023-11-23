export interface Teacher {
    id?: number;
    nome: string;
    email: string;
    senha: string;
    tipo: string;
    status: string;
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