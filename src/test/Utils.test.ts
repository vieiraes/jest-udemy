import { Utils } from '../app/Utils';
import { parse } from 'url';

describe("Suite Utils,", () => {


    beforeAll(() => {

        console.log(`Rode antes de todos os testes`);
    });


    beforeEach(() => {
        console.log(`Rode Antes de cada`)
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


    test('DISTURBANCE: Test Invalid URL WITH NORMAL function', () => {

        function expectError() {
            Utils.parseUrl('');

        }

        expect(expectError).toThrowError();
    })


    test('DISTURBANCE: Test Invalid URL with ARROW function', ()=>{

        expect(()=>{
            Utils.parseUrl('');
        }).toThrowError()


    })

    
    test('Test with Try and Catch', ()=>{
            
            try{
                Utils.parseUrl('');
            }catch(error){
                expect(error).toBeInstanceOf(Error);
                expect(error).toHaveProperty('message', 'Invalid URL');
                expect(error).toBeDefined();
            }
    })

    // test('Testar Se True', () => {

    //     function retorno() {
    //         return Utils.compareIfTrue(true);
            
    //     }

    //     expect(retorno()).toThrow();

    // })

})