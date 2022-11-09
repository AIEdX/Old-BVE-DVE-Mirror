import { MaterialCreateData } from "Meta/Render/Materials/Material.types.js";
export declare const ItemMaterial: {
    material: any;
    context: CanvasRenderingContext2D | null;
    time: number;
    updateFogOptions(data: any): void;
    getMaterial(): any;
    setSunLightLevel(level: number): void;
    setBaseLevel(level: number): void;
    updateMaterialSettings(settings: any): void;
    createMaterial(data: MaterialCreateData): any;
    overrideMaterial(material: any): void;
    runEffects(): void;
};
