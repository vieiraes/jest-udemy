import { UrlWithParsedQuery, parse } from 'url';
export class Utils {



    public static parseUrl(url: string): UrlWithParsedQuery {
        if (!url) {
            throw new Error('Invalid URL');
        }
        return parse(url, true);

    }


    public static toUpperCase(argument: string): string {
        return argument.toUpperCase();
    }


    /*istanbul ignore next*/
    public static compareIfTrue(valor: boolean):void {
       
     
        expect(valor).toBe(true);


    }
}
