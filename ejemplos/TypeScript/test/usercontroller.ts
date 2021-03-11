//-----Imports-----//
import { userMNG } from './../src/usercontroller';
import {expect} from 'chai';

describe('userManagement', () => {
    //Primer Test//
    it('Se debe iniciar las variable con "", indicando que no contienen valores previos', () => {
        let userMng = new userMNG();
        expect(userMng.username).to.equal("");
        expect(userMng.password).to.equal("");
    })
    //Segundo Test//
    it('Deberia de verificar que el objeto recien creado, haya sido agregado exitosamente a la lista de usuarios', () => {
        let userMng = new userMNG();
        userMng.addUser("roy", "abc123")
        expect(userMng.usersList.find(e => e.informacion.username === "roy")).to.equal(userMng.data);
     
    })
})