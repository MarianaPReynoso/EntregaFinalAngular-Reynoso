import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Estudiantes } from "../../features/dashboard/inscripciones/models";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root',
})

export class InscripcionesService {
    constructor (private httpClient: HttpClient) {}

    getStudents(): Observable<Estudiantes[]> {
        return this.httpClient.get<Estudiantes[]>(environment.apiUrl + '/enrollments');
    } 

    createEnrol(student: Estudiantes) {
        return this.httpClient.post(environment.apiUrl + '/enrollments', student);
    }

    editEnroll(id: number, update: Partial<Estudiantes>) {
        return this.httpClient.put(environment.apiUrl + '/enrollments' + id, update, {})
    }

    deleteEnroll(id: number){
        return this.httpClient.delete(environment.apiUrl + '/enrollments' + id);
    }
}