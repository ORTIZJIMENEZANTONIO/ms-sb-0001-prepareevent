import { Logger } from "winston";
import { FileUtilService } from "./file-util.service";
export declare class FileUtilController {
    private readonly service;
    private readonly logger;
    constructor(service: FileUtilService, logger: Logger);
    createXlsx(): Promise<{
        data: {
            campo1: string[];
        }[];
        file: {
            name: string;
            base64: string;
        };
    }> | {
        statusCode: number;
        message: string;
    };
}
