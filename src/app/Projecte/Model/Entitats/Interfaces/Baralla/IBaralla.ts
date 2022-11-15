export interface IBaralla <T extends ICarta> {
    baralla: Array<ICarta>;
    barrejar(): void;
    eliminar(carta:ICarta): void;
}