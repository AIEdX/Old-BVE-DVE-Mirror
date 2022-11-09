import { MaterialCreateData } from "Meta/Render/Materials/Material.types.js";
export declare const MagmaMaterial: {
    material: any;
    getMaterial(): any;
    time: number;
    updateFogOptions(data: any): void;
    updateMaterialSettings(settings: any): void;
    createMaterial(data: MaterialCreateData): any;
    runEffects(): void;
};
