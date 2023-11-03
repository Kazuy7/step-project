export interface User {
    id?: number;
    email: string;
    senha: string;
    tipo: string;
    status: string;
    created_at?: string;
    updated_at?: string;
    schools?: [{ id?: number;
        nomeescola: string;
        responsavel: string;
        email: string;
        telefone: string;
        rua: string;
        numero: string;
        bairro: string;
        cidade: string;
        estado: string; }];
}