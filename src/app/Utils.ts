import { UrlWithParsedQuery, parse } from 'url';
export class Utils {



    public static parseUrl(urlParse: string): UrlWithParsedQuery {
        return parse(urlParse, true);
    }


    public static toUpperCase(argument: string): string {
        return argument.toUpperCase();
    }
}
