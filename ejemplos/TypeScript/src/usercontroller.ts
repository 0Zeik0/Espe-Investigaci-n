//---Imports---//
import { userData } from './data';
//-----Clase principal----//
export class userMNG{

    username: any;
    password: any;
    data = new userData();
    usersList = [];

    //Constructor//
    constructor(){
        this.username = "";
        this.password = "";

    }
    //Funcion para agregar usuario a una lista//
    addUser(name: any, pass: any){

        this.username = name;
        this.password = pass;

        this.data.informacion.username = this.username;
        this.data.informacion.password = this.password;

        this.usersList.push(this.data);
        
    
    }
}