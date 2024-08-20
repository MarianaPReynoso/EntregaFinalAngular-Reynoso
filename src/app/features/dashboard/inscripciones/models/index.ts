export interface Estudiantes {
    id: number;
    name: string;
    lastName: string,
    curso: string;
    clase: string;
    startDate: Date;
    endDate: Date;
}

export interface Cursos {
    value: string,
    viewValue: string;
}