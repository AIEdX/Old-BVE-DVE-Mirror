import { MaterialCreateData } from "Meta/Render/Materials/Material.types.js";
export declare const SolidMaterial: {
    material: any;
    time: number;
    getMaterial(): any;
    updateFogOptions(data: any): void;
    setSunLightLevel(level: number): void;
    setBaseLevel(level: number): void;
    updateMaterialSettings(settings: any): void;
    createMaterial(data: MaterialCreateData): any;
    overrideMaterial(material: any): void;
    runEffects(): void;
};
