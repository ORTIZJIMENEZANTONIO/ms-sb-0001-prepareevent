import { Logger } from "winston";
import { FileUtilService } from "./file-util.service";
export declare class FileUtilController {
    private readonly service;
    private readonly logger;
    constructor(service: FileUtilService, logger: Logger);
    createThirdFile(params: {
        eventId: number;
        fileName: string;
    }): Promise<{
        data: any;
        file: {
            name: string;
            base64: string;
        };
    } | {
        statusCode: number;
        message: string;
    }>;
    calculateGoodPrice(params: {
        eventId: number;
        lotId: number;
    }): Promise<{
        message: string;
    } | {
        statusCode: number;
        message: string;
    }>;
    createThirdBaseFile(params: {
        fileName: string;
        eventNumber: number;
        bankName: string;
    }): Promise<{
        data: any;
        file: {
            name: string;
            base64: string;
        };
    } | {
        statusCode: number;
        message: string;
    }>;
}
