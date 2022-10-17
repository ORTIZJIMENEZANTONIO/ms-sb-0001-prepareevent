export declare class File {
    static makeFile(data: any, path: any): Promise<{
        data: {
            campo1: string[];
        }[];
        file: {
            name: string;
            base64: string;
        };
    }>;
}
