export class WorldGen {
    DVEW;
    constructor(DVEW) {
        this.DVEW = DVEW;
    }
    chunkDepth = 16;
    chunkWidth = 16;
    chunkHeight = 256;
    renderDistance = 20;
    copy(data) {
        return [...data];
    }
    generateChunkStressTest(chunkX, chunkZ) {
        //   this.chunkMap.addChunk(chunkX,chunkZ);
        const chunkVoxels = [];
        let dreamStonePillar = this.DVEW.worldGeneration.voxelPalette.getVoxelPaletteIdFromGlobalPalette("dve:dreamstonepillar", "default");
        // debugBox = dreamstone;
        let block = [dreamStonePillar, 0, 0xffffffff];
        for (let x = 0; x < +this.chunkWidth; x++) {
            for (let z = 0; z < this.chunkDepth; z++) {
                for (let y = 0; y < this.chunkHeight; y++) {
                    chunkVoxels[x] ??= [];
                    chunkVoxels[x][z] ??= [];
                    chunkVoxels[x][z][y] = this.copy(block);
                }
            }
        }
        return {
            isEmpty: false,
            voxels: chunkVoxels,
            maxMinHeight: [],
            heightMap: [],
        };
    }
    generateCrazyChunk(bottomChunk, topChunk, minY, x, y, z) {
        bottomChunk.maxMinHeight[0] = 0;
        bottomChunk.maxMinHeight[1] = minY;
        const chunkVoxels = bottomChunk.voxels;
        let dreamstone = this.DVEW.worldGeneration.paintVoxel(this.DVEW.worldGeneration.voxelPalette.getVoxelPaletteIdFromGlobalPalette("dve:dreamstone", "default"));
        let dreamGrasss = this.DVEW.worldGeneration.paintVoxel(this.DVEW.worldGeneration.voxelPalette.getVoxelPaletteIdFromGlobalPalette("dve:dreamgrass", "default"));
        if (y < Math.floor(Math.random() * minY)) {
            chunkVoxels[x] ??= [];
            chunkVoxels[x][z] ??= [];
            chunkVoxels[x][z][y] = dreamstone;
            if (y < bottomChunk.maxMinHeight[0]) {
                bottomChunk.maxMinHeight[0] = y;
            }
            if (Math.random() > 0.8) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y + 1] = dreamGrasss;
            }
        }
    }
    generateSpikeChunk(bottomChunk, topChunk, minY, maxY, x, y, z) {
        let dreamStonePillar = this.DVEW.worldGeneration.paintVoxel(this.DVEW.worldGeneration.voxelPalette.getVoxelPaletteIdFromGlobalPalette("dve:dreamstonepillar", "default"));
        bottomChunk.maxMinHeight[0] = minY;
        bottomChunk.maxMinHeight[1] = maxY;
        let chunkVoxels;
        if (y > 128) {
            chunkVoxels = topChunk.voxels;
            topChunk.isEmpty = false;
        }
        else {
            chunkVoxels = bottomChunk.voxels;
        }
        if (x == 0 || z == 0 || x == 15 || z == 15) {
            if (y == minY ||
                y == minY + 28 ||
                y == minY + 54 ||
                y == minY + 56 ||
                y == minY + 86) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamStonePillar;
            }
        }
        if (x == 0 || z == 0 || x == 15 || z == 15) {
            if (y == minY + 1 ||
                y == minY + 26 ||
                y == minY + 30 ||
                y == minY + 52 ||
                y == minY + 58 ||
                y == minY + 84 ||
                y == minY + 88) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamStonePillar;
            }
        }
        if (x == 1 || z == 1 || x == 14 || z == 14) {
            if (y == minY + 2 ||
                y == minY + 24 ||
                y == minY + 32 ||
                y == minY + 52 ||
                y == minY + 60 ||
                y == minY + 82 ||
                y == minY + 86 ||
                y == minY + 90) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamStonePillar;
            }
        }
        if (x == 2 || z == 2 || x == 13 || z == 13) {
            if (y == minY + 4 ||
                y == minY + 22 ||
                y == minY + 34 ||
                y == minY + 50 ||
                y == minY + 62 ||
                y == minY + 80 ||
                y == minY + 88 ||
                y == minY + 92) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamStonePillar;
            }
        }
        if (x == 3 || z == 3 || x == 12 || z == 12) {
            if (y == minY + 6 ||
                y == minY + 20 ||
                y == minY + 36 ||
                y == minY + 48 ||
                y == minY + 64 ||
                y == minY + 78 ||
                y == minY + 90 ||
                y == minY + 94) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamStonePillar;
            }
        }
        if (x == 4 || z == 4 || x == 11 || z == 11) {
            if (y == minY + 8 ||
                y == minY + 18 ||
                y == minY + 38 ||
                y == minY + 46 ||
                y == minY + 66 ||
                y == minY + 74 ||
                y == minY + 96) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamStonePillar;
            }
        }
        if (x == 5 || z == 5 || x == 10 || z == 10) {
            if (y == minY + 10 ||
                y == minY + 16 ||
                y == minY + 40 ||
                y == minY + 44 ||
                y == minY + 68 ||
                y == minY + 72 ||
                y == minY + 98) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamStonePillar;
            }
        }
        if (x == 6 || z == 6 || x == 9 || z == 9) {
            if (y == minY + 12 ||
                y == minY + 14 ||
                y == minY + 42 ||
                y == minY + 70 ||
                minY + 100) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamStonePillar;
            }
        }
        if (y < minY) {
            chunkVoxels[x] ??= [];
            chunkVoxels[x][z] ??= [];
            chunkVoxels[x][z][y] = dreamStonePillar;
        }
    }
    generatePondChunk(bottomChunk, topChunk, minY, x, y, z) {
        const chunkVoxels = bottomChunk.voxels;
        bottomChunk.maxMinHeight[0] = minY - 7;
        bottomChunk.maxMinHeight[1] = minY;
        const dreamstone = this.DVEW.worldGeneration.paintVoxel(this.DVEW.worldGeneration.voxelPalette.getVoxelPaletteIdFromGlobalPalette("dve:dreamstone", "default"));
        const liquidDreamEther = this.DVEW.worldGeneration.paintVoxel(this.DVEW.worldGeneration.voxelPalette.getVoxelPaletteIdFromGlobalPalette("dve:liquiddreamether", "default"));
        if (x == 0 || z == 0 || x == 15 || z == 15) {
            if (y == minY) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamstone;
            }
        }
        if (x == 1 || z == 1 || x == 14 || z == 14) {
            if (y == minY - 1) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamstone;
            }
        }
        if (x == 2 || z == 2 || x == 13 || z == 13) {
            if (y == minY - 2) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamstone;
            }
        }
        if (x == 3 || z == 3 || x == 12 || z == 12) {
            if (y == minY - 3) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamstone;
            }
        }
        if (x <= 4 || z <= 4 || x <= 11 || z <= 11) {
            if (y == minY - 4) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamstone;
            }
        }
        if (x <= 5 || z <= 5 || x <= 10 || z <= 10) {
            if (y == minY - 5) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamstone;
            }
        }
        if (x <= 6 || z <= 6 || x <= 9 || z <= 9) {
            if (y == minY - 6) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamstone;
            }
        }
        if (y < minY - 6) {
            chunkVoxels[x] ??= [];
            chunkVoxels[x][z] ??= [];
            chunkVoxels[x][z][y] = dreamstone;
        }
        if (y >= minY - 6 && y <= minY) {
            if (chunkVoxels[x] &&
                chunkVoxels[x][z] &&
                chunkVoxels[x][z][y] == undefined) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = liquidDreamEther;
            }
            if (y == minY) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = liquidDreamEther;
            }
        }
    }
    generateHoleChunk(bottomChunk, topChunk, minY, x, y, z) {
        const chunkVoxels = bottomChunk.voxels;
        bottomChunk.maxMinHeight[0] = minY - 8;
        bottomChunk.maxMinHeight[1] = minY;
        let dreamstone = this.DVEW.worldGeneration.paintVoxel(this.DVEW.worldGeneration.voxelPalette.getVoxelPaletteIdFromGlobalPalette("dve:dreamstone", "default"));
        let dreamGrasss = this.DVEW.worldGeneration.paintVoxel(this.DVEW.worldGeneration.voxelPalette.getVoxelPaletteIdFromGlobalPalette("dve:dreamgrass", "default"));
        if (x == 0 || z == 0 || x == 15 || z == 15) {
            if (y == minY) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamstone;
                if (Math.random() > 0.8) {
                    chunkVoxels[x] ??= [];
                    chunkVoxels[x][z] ??= [];
                    chunkVoxels[x][z][y + 1] = dreamGrasss;
                }
            }
        }
        if (x == 1 || z == 1 || x == 14 || z == 14) {
            if (y == minY - 1) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamstone;
                if (Math.random() > 0.8) {
                    chunkVoxels[x] ??= [];
                    chunkVoxels[x][z] ??= [];
                    chunkVoxels[x][z][y + 1] = dreamGrasss;
                }
            }
        }
        if (x == 2 || z == 2 || x == 13 || z == 13) {
            if (y == minY - 2) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamstone;
                if (Math.random() > 0.8) {
                    chunkVoxels[x] ??= [];
                    chunkVoxels[x][z] ??= [];
                    chunkVoxels[x][z][y + 1] = dreamGrasss;
                }
            }
        }
        if (x == 3 || z == 3 || x == 12 || z == 12) {
            if (y == minY - 3) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamstone;
                if (Math.random() > 0.8) {
                    chunkVoxels[x] ??= [];
                    chunkVoxels[x][z] ??= [];
                    chunkVoxels[x][z][y + 1] = dreamGrasss;
                }
            }
        }
        if (x == 4 || z == 4 || x == 11 || z == 11) {
            if (y == minY - 4) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamstone;
                if (Math.random() > 0.8) {
                    chunkVoxels[x] ??= [];
                    chunkVoxels[x][z] ??= [];
                    chunkVoxels[x][z][y + 1] = dreamGrasss;
                }
            }
        }
        if (x == 5 || z == 5 || x == 10 || z == 10) {
            if (y == minY - 5) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamstone;
                if (Math.random() > 0.8) {
                    chunkVoxels[x] ??= [];
                    chunkVoxels[x][z] ??= [];
                    chunkVoxels[x][z][y + 1] = dreamGrasss;
                }
            }
        }
        if (x == 6 || z == 6 || x == 9 || z == 9) {
            if (y == minY - 6) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamstone;
                if (Math.random() > 0.8) {
                    chunkVoxels[x] ??= [];
                    chunkVoxels[x][z] ??= [];
                    chunkVoxels[x][z][y + 1] = dreamGrasss;
                }
            }
        }
        if (y < minY - 7) {
            chunkVoxels[x] ??= [];
            chunkVoxels[x][z] ??= [];
            chunkVoxels[x][z][y] = dreamstone;
            if (Math.random() > 0.8) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y + 1] = dreamGrasss;
            }
        }
    }
    generateNormalChunk(bottomChunk, topChunk, minY, x, y, z) {
        const chunkVoxels = bottomChunk.voxels;
        bottomChunk.maxMinHeight[0] = minY;
        bottomChunk.maxMinHeight[1] = minY + 1;
        let dreamGrassBlock = this.DVEW.worldGeneration.paintVoxel(this.DVEW.worldGeneration.voxelPalette.getVoxelPaletteIdFromGlobalPalette("dve:dreamgrassblock", "default"));
        let dreamGrasss = this.DVEW.worldGeneration.paintVoxel(this.DVEW.worldGeneration.voxelPalette.getVoxelPaletteIdFromGlobalPalette("dve:dreamgrass", "default"));
        if (y < minY) {
            chunkVoxels[x] ??= [];
            chunkVoxels[x][z] ??= [];
            chunkVoxels[x][z][y] = dreamGrassBlock;
        }
        if (y == minY) {
            if (Math.random() > 0.8) {
                chunkVoxels[x] ??= [];
                chunkVoxels[x][z] ??= [];
                chunkVoxels[x][z][y] = dreamGrasss;
            }
        }
    }
    generateChunkNormal(chunkX, chunkZ) {
        //   this.chunkMap.addChunk(chunkX,chunkZ);
        let toss = Math.random();
        const bottomChunk = {
            voxels: [],
            maxMinHeight: [],
            heightMap: [],
            isEmpty: false,
        };
        const topChunk = {
            voxels: [],
            maxMinHeight: [],
            heightMap: [],
            isEmpty: true,
        };
        let minY = 60;
        let maxY = 256;
        let spiked = false;
        let crazy = false;
        let hole = false;
        let pond = false;
        let normal = true;
        if (toss < 0.2) {
            crazy = true;
        }
        if (toss > 0.2 && toss < 0.3) {
            spiked = true;
        }
        if (toss > 0.3 && toss < 0.6) {
            hole = true;
        }
        if (toss > 0.6) {
            pond = true;
        }
        if (crazy || spiked || hole || pond) {
            normal = false;
        }
        for (let x = 0; x < +this.chunkWidth; x++) {
            for (let z = 0; z < this.chunkDepth; z++) {
                for (let y = 0; y < this.chunkHeight; y++) {
                    if (pond) {
                        this.generatePondChunk(bottomChunk, topChunk, minY, x, y, z);
                    }
                    if (crazy) {
                        this.generateCrazyChunk(bottomChunk, topChunk, minY, x, y, z);
                    }
                    if (spiked) {
                        this.generateSpikeChunk(bottomChunk, topChunk, minY, maxY, x, y, z);
                    }
                    if (hole) {
                        this.generateHoleChunk(bottomChunk, topChunk, minY, x, y, z);
                    }
                    if (normal) {
                        this.generateNormalChunk(bottomChunk, topChunk, minY, x, y, z);
                    }
                }
            }
        }
        return [bottomChunk, topChunk];
    }
}