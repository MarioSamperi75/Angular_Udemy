import { provideCloudinaryLoader } from "@angular/common";
import { EventEmitter, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UserService {
    activateEmitter = new EventEmitter<boolean>();

}