export declare const AnimationManager: {
    animatedMaterials: Record<import("../../../Meta/index").TextureTypes, any>;
    animCount: number;
    animations: {
        uniformShaderId: string;
        keys: number[];
        currentFrame: number;
        currentCount: number;
        keyCounts: number[];
        substance: import("../../../Meta/index").TextureTypes;
    }[];
    /**# Register Animations
     * ---
     * Given the data from the texture creator it will generate
     * the needed shader code for each material.
     * It will also add the all animations into its anim que.
     * @param voxelSubstanceType
     * @param animations
     * @returns
     */
    registerAnimations(voxelSubstanceType: import("../../../Meta/index").TextureTypes, animations: number[][], animationTimes: number[][], overlay?: boolean): {
        uniforms: string[];
        uniformRegisterCode: string;
        animationFunctionCode: string;
    };
    registerMaterial(voxelSubstanceType: import("../../../Meta/index").TextureTypes, material: any): void;
    startAnimations(): void;
};
