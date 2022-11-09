export declare const TextureCreator: {
    context: CanvasRenderingContext2D | null;
    imgWidth: number;
    imgHeight: number;
    defineTextureDimensions(width: number, height: number): void;
    setUpImageCreation(): void;
    createMaterialTexture(name: string, scene: any, images: string[], width?: number, height?: number): Promise<any>;
    _loadImages(imgPath: string, width: number, height: number): Promise<Uint8ClampedArray>;
    _combineImageData(totalLength: number, arrays: Uint8ClampedArray[]): Uint8ClampedArray;
    getTextureBuffer(imgPath: string, width?: number, height?: number): Promise<Uint8ClampedArray>;
};
