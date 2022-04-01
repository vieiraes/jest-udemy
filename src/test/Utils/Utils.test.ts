import { Utils } from '../../app/Utils/Utils';
import { IncomingMessage } from 'http';




describe('Suite Utils', () => {

    test('Test valid getRequestBasePath', () => {

        const request = {

            url: "http://localhost:8080/login",
        }as IncomingMessage

        const resultPath = Utils.getRequestBasePath(request);

        expect(resultPath).toBe("login");

    });


    test('Test INVALID URL getRequestBasePath', () => {

        const request = {

            url: "http://localhost:8080",
        }as IncomingMessage

        const resultPath = Utils.getRequestBasePath(request);

        expect(resultPath).toBeFalsy();

    });




    test('Test EMPTY URL getRequestBasePath', () => {

        const request = {

            url: "",
        }as IncomingMessage

        const resultPath = Utils.getRequestBasePath(request);

        expect(resultPath).toBe("");

    })



})