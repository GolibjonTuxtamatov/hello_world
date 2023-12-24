import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
    constructor(private http:HttpClient){}

    postQuestion(question:any){
        this.http.post('https://localhost:44308/api/questions',question)
            .subscribe(responce => {
                console.log(responce);
            })
    }

    getQuestions(){
        return this.http.get('https://localhost:44308/api/questions');
    }
}
