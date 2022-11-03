export function runRGBFloodFill() {
    const IM = this;
    while (this._RGBlightUpdateQue.length != 0) {
        const node = this._RGBlightUpdateQue.shift();
        if (!node) {
            break;
        }
        const x = node[0];
        const y = node[1];
        const z = node[2];
        if (!this._sDataTool.loadIn(x, y, z))
            continue;
        if (this._sDataTool.isBarrier())
            continue;
        const sl = this._sDataTool.getLight();
        if (this._nDataTool.loadIn(x - 1, y, z)) {
            const nl = this._nDataTool.getLight();
            if (nl > -1 && this.lightData.isLessThanForRGBAdd(nl, sl)) {
                this._RGBlightUpdateQue.push([x - 1, y, z]);
                this._nDataTool.setLight(this.lightData.getMinusOneForRGB(sl, nl)).commit();
            }
        }
        if (this._nDataTool.loadIn(x + 1, y, z)) {
            const nl = this._nDataTool.getLight();
            if (nl > -1 && this.lightData.isLessThanForRGBAdd(nl, sl)) {
                this._RGBlightUpdateQue.push([x + 1, y, z]);
                this._nDataTool.setLight(this.lightData.getMinusOneForRGB(sl, nl)).commit();
            }
        }
        if (this._nDataTool.loadIn(x, y, z - 1)) {
            const nl = this._nDataTool.getLight();
            if (nl > -1 && this.lightData.isLessThanForRGBAdd(nl, sl)) {
                this._RGBlightUpdateQue.push([x, y, z - 1]);
                this._nDataTool.setLight(this.lightData.getMinusOneForRGB(sl, nl)).commit();
            }
        }
        if (this._nDataTool.loadIn(x, y, z + 1)) {
            const nl = this._nDataTool.getLight();
            if (nl > -1 && this.lightData.isLessThanForRGBAdd(nl, sl)) {
                this._RGBlightUpdateQue.push([x, y, z + 1]);
                this._nDataTool.setLight(this.lightData.getMinusOneForRGB(sl, nl)).commit();
            }
        }
        if (this._nDataTool.loadIn(x, y - 1, z)) {
            const nl = this._nDataTool.getLight();
            if (nl > -1 && this.lightData.isLessThanForRGBAdd(nl, sl)) {
                this._RGBlightUpdateQue.push([x, y - 1, z]);
                this._nDataTool.setLight(this.lightData.getMinusOneForRGB(sl, nl)).commit();
            }
        }
        if (this._nDataTool.loadIn(x, y + 1, z)) {
            const nl = this._nDataTool.getLight();
            if (nl > -1 && this.lightData.isLessThanForRGBAdd(nl, sl)) {
                this._RGBlightUpdateQue.push([x, y + 1, z]);
                this._nDataTool.setLight(this.lightData.getMinusOneForRGB(sl, nl)).commit();
            }
        }
        this.addToRebuildQue(x, y, z);
    }
}
export function runRGBFloodFillAt(x, y, z) {
    this._RGBlightUpdateQue.push([x, y, z]);
    this.runRGBFloodFill();
}
export function runRGBFloodRemoveAt(removeVoxel, x, y, z) {
    this._RGBlightRemovalQue.push([x, y, z]);
    if (removeVoxel) {
        this.runRGBFloodRemove({ x: x, y: y, z: z });
    }
    else {
        this.runRGBFloodRemove();
    }
}
export function runRGBFloodRemove(lightSource) {
    while (this._RGBlightRemovalQue.length != 0) {
        const node = this._RGBlightRemovalQue.shift();
        if (!node) {
            break;
        }
        const x = node[0];
        const y = node[1];
        const z = node[2];
        if (!this._sDataTool.loadIn(x, y, z))
            continue;
        const sl = this._sDataTool.getLight();
        if (this._nDataTool.loadIn(x - 1, y, z)) {
            const nl = this._nDataTool.getLight();
            const n1HasRGB = this.lightData.hasRGBLight(nl);
            if (n1HasRGB && this.lightData.isLessThanForRGBRemove(nl, sl)) {
                this._RGBlightRemovalQue.push([x - 1, y, z]);
            }
            else {
                if (n1HasRGB && this.lightData.isGreaterOrEqualThanForRGBRemove(nl, sl)) {
                    this._RGBlightUpdateQue.push([x - 1, y, z]);
                }
            }
        }
        if (this._nDataTool.loadIn(x + 1, y, z)) {
            const nl = this._nDataTool.getLight();
            const n1HasRGB = this.lightData.hasRGBLight(nl);
            if (n1HasRGB && this.lightData.isLessThanForRGBRemove(nl, sl)) {
                this._RGBlightRemovalQue.push([x + 1, y, z]);
            }
            else {
                if (n1HasRGB && this.lightData.isGreaterOrEqualThanForRGBRemove(nl, sl)) {
                    this._RGBlightUpdateQue.push([x + 1, y, z]);
                }
            }
        }
        if (this._nDataTool.loadIn(x, y, z - 1)) {
            const nl = this._nDataTool.getLight();
            const n1HasRGB = this.lightData.hasRGBLight(nl);
            if (n1HasRGB && this.lightData.isLessThanForRGBRemove(nl, sl)) {
                this._RGBlightRemovalQue.push([x, y, z - 1]);
            }
            else {
                if (n1HasRGB && this.lightData.isGreaterOrEqualThanForRGBRemove(nl, sl)) {
                    this._RGBlightUpdateQue.push([x, y, z - 1]);
                }
            }
        }
        if (this._nDataTool.loadIn(x, y, z + 1)) {
            const nl = this._nDataTool.getLight();
            const n1HasRGB = this.lightData.hasRGBLight(nl);
            if (n1HasRGB && this.lightData.isLessThanForRGBRemove(nl, sl)) {
                this._RGBlightRemovalQue.push([x, y, z + 1]);
            }
            else {
                if (n1HasRGB && this.lightData.isGreaterOrEqualThanForRGBRemove(nl, sl)) {
                    this._RGBlightUpdateQue.push([x, y, z + 1]);
                }
            }
        }
        if (this._nDataTool.loadIn(x, y - 1, z)) {
            const nl = this._nDataTool.getLight();
            const n1HasRGB = this.lightData.hasRGBLight(nl);
            if (n1HasRGB && this.lightData.isLessThanForRGBRemove(nl, sl)) {
                this._RGBlightRemovalQue.push([x, y - 1, z]);
            }
            else {
                if (n1HasRGB && this.lightData.isGreaterOrEqualThanForRGBRemove(nl, sl)) {
                    this._RGBlightUpdateQue.push([x, y - 1, z]);
                }
            }
        }
        if (this._nDataTool.loadIn(x, y + 1, z)) {
            const nl = this._nDataTool.getLight();
            const n1HasRGB = this.lightData.hasRGBLight(nl);
            if (n1HasRGB && this.lightData.isLessThanForRGBRemove(nl, sl)) {
                this._RGBlightRemovalQue.push([x, y + 1, z]);
            }
            else {
                if (n1HasRGB && this.lightData.isGreaterOrEqualThanForRGBRemove(nl, sl)) {
                    this._RGBlightUpdateQue.push([x, y + 1, z]);
                }
            }
        }
        this.addToRebuildQue(x, y, z);
        this._sDataTool.setLight(this.lightData.removeRGBLight(sl)).commit();
    }
    if (lightSource) {
        this._sDataTool.loadIn(lightSource.x, lightSource.y, lightSource.z);
        this._sDataTool.setBarrier().commit();
        this.runRGBFloodFill();
        this._sDataTool.loadIn(lightSource.x, lightSource.y, lightSource.z);
        this._sDataTool.setAir().commit();
    }
    else {
        this.runRGBFloodFill();
    }
}
