export const PAL = [
    {"pal":"PORRO","imatge":"porro.png"},
    {"pal":"FALÇ","imatge":"falç.png"},
    {"pal":"ROVELLO","imatge":"rovello.png"},
    {"pal":"DRAC","imatge":"foc.png"}];

export class Utils {
    public static getRandom(max:number) {
        return Math.round(Math.random()*max);
    }
}