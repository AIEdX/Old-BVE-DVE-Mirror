import { MaterialCreateData } from "Meta/Render/Materials/Material.types.js";
export declare const FluidMaterial: {
    material: any;
    doEffects: boolean;
    time: number;
    getMaterial(): any;
    updateFogOptions(data: any): void;
    updateEffects(doEffects: boolean): void;
    setSunLightLevel(level: number): void;
    setBaseLevel(level: number): void;
    updateMaterialSettings(settings: any): void;
    createMaterial(data: MaterialCreateData): any;
    runEffects(): void;
};
