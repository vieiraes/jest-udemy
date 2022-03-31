import { Utils } from '../app/Utils';

describe("Suite: Utils", () => {
 

    beforeAll(()=>{

        console.log(`Before All`)
    });


    beforeEach(()=>{
        console.log(`before Each`)
    })


    test('teste de toUpperCase', () => {
        const result = Utils.toUpperCase("abc");


        expect(result).toBe("ABC");
    });


    test("teste de parseUrl", () => {

        const urlResult = Utils.parseUrl("http://localhost:3000/");




        expect(urlResult.href).toBe("http://localhost:3000/");
        expect(urlResult.host).toBe("localhost:3000");
        expect(urlResult.hostname).toBe("localhost");
        expect(urlResult.port).toBe("3000");
        expect(urlResult.protocol).toBe("http:");

    });


    test("test de Query", () => {


        const urlInQuery = Utils.parseUrl("http://localhost:3000/login?user=user&password=password");
        const expectedQuery = {
            user: 'user',
            password: 'password'
        }


        expect(urlInQuery.query).toEqual(expectedQuery);
    })

    test.todo("Cenarios de perturbação")

  })