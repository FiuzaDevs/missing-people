import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { MissingPeopleService } from "../services/missing-people.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class PersonResolve implements Resolve<any> {

    constructor(
        private missingPeopleService: MissingPeopleService,
    ) { }

    resolve(route: ActivatedRouteSnapshot):Observable<any> {
        return this.missingPeopleService.getById(route.params['id']);
    }
}