/**# Height Byte
 * ---
 * Interpets height map data.
 */
export declare const HeightMapData: {
    _getHeightMapData: Record<any, (byteData: number) => number>;
    _setHeightMapData: Record<any, (height: number, byteData: number) => number>;
    _markSubstanceAsNotExposed: Record<any, (data: number) => number>;
    _markSubstanceAsExposed: Record<any, (data: number) => number>;
    _isSubstanceExposed: Record<any, (data: number) => boolean>;
    getStartingHeightMapValue(): number;
    initalizeChunk(chunkData: DataView): void;
    updateChunkMinMax(voxelPOS: any, chunkData: DataView): void;
    getChunkMin(chunkData: DataView): number;
    getChunkMax(chunkData: DataView): number;
    calculateHeightRemoveDataForSubstance(height: number, substance: any, x: number, z: number, heightMap: DataView): boolean | undefined;
    calculateHeightAddDataForSubstance(height: number, substance: any, x: number, z: number, chunk: DataView): void;
    getLowestExposedVoxel(x: number, z: number, chunk: DataView): number;
    getHighestExposedVoxel(x: number, z: number, chunk: DataView): number;
    isSubstanceExposed(substance: any, x: number, z: number, chunk: DataView): boolean;
    markSubstanceAsExposed(substance: any, x: number, z: number, chunk: DataView): void;
    markSubstanceAsNotExposed(substance: any, x: number, z: number, chunk: DataView): void;
    setMinYForSubstance(height: number, substance: any, x: number, z: number, chunk: DataView): void;
    getMinYForSubstance(substance: any, x: number, z: number, chunk: DataView): number;
    setMaxYForSubstance(height: number, substance: any, x: number, z: number, chunk: DataView): void;
    getMaxYForSubstance(substance: any, x: number, z: number, chunk: DataView): number;
};
