export declare const VoxelPaletteReader: {
    _palette: Record<number, string>;
    _map: Record<string, number>;
    setVoxelPalette(voxelPalette: Record<number, string>, voxelPaletteMap: Record<string, number>): void;
    id: {
        stringFromNumber(id: number): string;
        numberFromString(id: string): number;
        getPaletteId(voxelId: string, voxelState: number): number;
        baseNumeric(id: number): number;
    };
};
