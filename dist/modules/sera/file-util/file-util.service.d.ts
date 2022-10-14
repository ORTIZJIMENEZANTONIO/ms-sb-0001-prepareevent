import { Logger } from "@nestjs/common";
import { Counter } from "prom-client";
export declare class FileUtilService {
    private readonly logger;
    counter: Counter<string>;
    constructor(logger: Logger, counter: Counter<string>);
    private path;
    makeFile(data: any): Promise<{
        data: {
            campo1: string[];
        }[];
        file: {
            name: string;
            base64: string;
        };
    }>;
}
