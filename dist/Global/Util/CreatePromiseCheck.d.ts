export declare const CreatePromiseCheck: (data: {
    check: () => boolean;
    onReady?: (() => any) | undefined;
    checkInterval: number;
    failTimeOut?: number | undefined;
    onFail?: (() => any) | undefined;
}) => Promise<boolean>;
