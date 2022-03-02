export interface Registros {
  ok: boolean;
  temperaturas: Temperatura[];
  total: number;
  pagina: number;
}

export interface Temperatura {
  ingreso: Ingreso;
  salida: Salida;
  _id: string;
  hojaVida: string;
  estado: string;
  usuario: Usuario;
  fechaCreacion: string;
  updatedAt: string;
  numTemperatura: number;
  __v: number;
}

export interface Usuario {
  role: string;
  _id: string;
  nombre: string;
  email: string;
  password: string;
  fechaCreacion: string;
  updatedAt: string;
  __v: number;
  nivelAcceso: number;
  intentos: number;
}

export interface Salida {
  fecha?: string;
  hora?: number;
  temperatura?: number;
  preg1?: boolean;
}

export interface Ingreso {
  fecha: string;
  hora: number;
  temperatura: number;
  preg1: boolean;
  preg2: boolean;
  preg3: boolean;
  preg4: boolean;
  preg5: boolean;
  preg6: boolean;
  preg8: string;
  preg9: boolean;
  preg10: boolean;
  preg11: boolean;
  otra: string;
  edad: number;
}