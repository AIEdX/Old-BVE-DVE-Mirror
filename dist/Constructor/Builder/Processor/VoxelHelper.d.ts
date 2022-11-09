export declare const VoxelHelper: {
    substanceMap: Record<any, number>;
    substanceRules: Record<string, boolean>;
    ruleMap: Record<number, boolean>;
    $INIT(): void;
    substanceRuleCheck(voxel: any, neightborVoxel: any): boolean;
};
