export declare const SkyBoxMaterial: {
    material: any;
    context: CanvasRenderingContext2D | null;
    time: number;
    getMaterial(): any;
    updateFogOptions(data: any): void;
    setSunLightLevel(level: number): void;
    setBaseLevel(level: number): void;
    updateMaterialSettings(settings: any): void;
    createMaterial(scene: any): any;
    overrideMaterial(material: any): void;
    runEffects(): void;
};
