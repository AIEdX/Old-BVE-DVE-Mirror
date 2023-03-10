import { PositionByte } from "../Util/PositionByte.js";
export const ChunkState = {
    positionByte: PositionByte,
    indexes: {
        states: 0,
        minHeight: 1,
        maxHeight: 2,
        voxelCount1: 3,
        voxelCount2: 4,
        voxelCount3: 5,
    },
    _chunkStates: {
        empty: false,
        worldGenDone: false,
        sunLightDone: false,
        RGBLightDone: false,
        fluidDone: false,
        magmaDone: false,
    },
    _chunkStateMask: {
        empty: 0b1,
        emptyIndex: 0,
        worldGenDone: 0b10,
        worldGenIndex: 1,
        sunLightDone: 0b100,
        sunLightIndex: 2,
        RGBLightDone: 0b1000,
        RGBLightIndex: 3,
        fluidDone: 0b1000,
        fluidIndex: 4,
        magmaDone: 0b10000,
        magmaIndex: 5,
    },
    updateChunkMinMax(voxelPOS, chunkStatesData) {
        const currentMin = this.positionByte.getY(chunkStatesData[this.indexes.minHeight]);
        const currentMax = this.positionByte.getY(chunkStatesData[this.indexes.maxHeight]);
        if (voxelPOS.y < currentMin) {
            chunkStatesData[this.indexes.minHeight] =
                this.positionByte.setPositionUseObj(voxelPOS);
        }
        if (voxelPOS.y > currentMax) {
            chunkStatesData[this.indexes.maxHeight] =
                this.positionByte.setPositionUseObj(voxelPOS);
        }
    },
    getChunkMin(chunkStatesData) {
        return this.positionByte.getY(chunkStatesData[this.indexes.minHeight]);
    },
    getChunkMax(chunkStatesData) {
        return this.positionByte.getY(chunkStatesData[this.indexes.maxHeight]);
    },
    isEmpty(chunkStatesData) {
        const bv = chunkStatesData[this.indexes.states];
        return ((bv & this._chunkStateMask.empty) >> this._chunkStateMask.emptyIndex == 1);
    },
    isWorldGenDone(chunkStatesData) {
        const bv = chunkStatesData[this.indexes.states];
        return ((bv & this._chunkStateMask.worldGenDone) >>
            this._chunkStateMask.worldGenIndex ==
            1);
    },
    isSunLightUpdatesDone(chunkStatesData) {
        const bv = chunkStatesData[this.indexes.states];
        return ((bv & this._chunkStateMask.sunLightDone) >>
            this._chunkStateMask.sunLightIndex ==
            1);
    },
    isRGBLightUpdatesDone(chunkStatesData) {
        const bv = chunkStatesData[this.indexes.states];
        return ((bv & this._chunkStateMask.RGBLightDone) >>
            this._chunkStateMask.RGBLightIndex ==
            1);
    },
    isFluidFlowDone(chunkStatesData) {
        const bv = chunkStatesData[this.indexes.states];
        return ((bv & this._chunkStateMask.fluidDone) >> this._chunkStateMask.fluidIndex == 1);
    },
    isMagmaFlowDone(chunkStatesData) {
        const bv = chunkStatesData[this.indexes.states];
        return ((bv & this._chunkStateMask.magmaDone) >> this._chunkStateMask.magmaIndex == 1);
    },
    getFullChunkStates(chunkStatesData) {
        this._chunkStates.empty = this.isEmpty(chunkStatesData);
        this._chunkStates.worldGenDone = this.isWorldGenDone(chunkStatesData);
        this._chunkStates.sunLightDone = this.isSunLightUpdatesDone(chunkStatesData);
        this._chunkStates.RGBLightDone = this.isRGBLightUpdatesDone(chunkStatesData);
        this._chunkStates.fluidDone = this.isFluidFlowDone(chunkStatesData);
        this._chunkStates.magmaDone = this.isMagmaFlowDone(chunkStatesData);
        return this._chunkStates;
    },
    addToVoxelCount(voxelSubstance, chunkStatesData) { },
    subtractFromVoxelCount(voxelSubstance, chunkStatesData) { },
    getTotalVoxels(chunkStatesData) { },
    getTotalVoxelsOfASubstance(voxelSubstance, chunkStatesData) { },
};
