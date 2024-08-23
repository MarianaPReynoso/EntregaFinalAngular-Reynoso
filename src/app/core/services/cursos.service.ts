import { Injectable } from "@angular/core";
import { CursosDisponibles } from "../../features/dashboard/cursos/models";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";


@Injectable({
    providedIn: 'root',
})

export class CursosService {
    private DATABASE = [ //CursosDisponibles[] = [
        {
            id: 'DJHN',
            nombre: 'Angular',
            price: 15000,
        },

        {
            id: 'JAHS',
            nombre: 'ReactJS',
            price: 15000,
        },

        {
            id: 'LASO',
            nombre: 'Programación Web',
            price: 20000,
        },

        {
            id: 'FHNH',
            nombre: 'Photoshop',
            price: 22000,
        },

        {
            id: 'ERPO',
            nombre: 'Marketing Digital',
            price: 30000,
        }
    ];

    // constructor(private httpClient: HttpClient) {}
    constructor () {}

    obtenerCursos(): Observable<CursosDisponibles[]> {
        return new Observable((observer) => {
            setTimeout(() => {
                observer.next(this.DATABASE);
                observer.complete();
            }, 400)
            
        });
        // return this.httpClient.get<CursosDisponibles[]>(environment.apiUrl + '/courses')
    }

    obtenerCursoById(id: string): Observable<CursosDisponibles | undefined> {
        return this.obtenerCursos().pipe(
            map((todosLosCursos) => todosLosCursos.find((el) => el.id === id))
        );
    }

    addCurso(course: CursosDisponibles): Observable<CursosDisponibles[]> {
        this.DATABASE.push(course);
        return this.obtenerCursos();
    }

    editarCursotById(id: string, update: CursosDisponibles) {
        this.DATABASE = this.DATABASE.map((el) =>
            el.id === id ? { ...update, id } : el
        );
        return this.obtenerCursos();

        // return this.httpClient.put(environment.apiUrl + '/courses' + id, update, {
        //     params: {
        //         search: 'Mi búsqueda',
        //     },
        // });
    }

    borrarCursoById(id: string): Observable<CursosDisponibles[]> {
        this.DATABASE = this.DATABASE.filter((el) => el.id != id);
        return this.obtenerCursos();

        // return this.httpClient.delete(environment.apiUrl + '/courses' + id);
    }

    // searchCoursesByName(search: string): Observable<Course[]> {
    //     return this.getCourses().pipe(
    //       map((todosCursos) =>
    //         todosCursos.filter((curso) =>
    //           curso.name.toLowerCase().includes(search.toLowerCase())
    //         )
    //       )
    //     );
    //   }
}