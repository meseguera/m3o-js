export declare class FileService {
    private client;
    constructor(token: string);
    list(request: ListRequest): Promise<ListResponse>;
    save(request: SaveRequest): Promise<SaveResponse>;
}
export interface File {
    created?: number;
    fileContents?: string;
    isDirectory?: boolean;
    name?: string;
    path?: string;
    project?: string;
    updated?: number;
}
export interface ListRequest {
    path?: string;
    project?: string;
}
export interface ListResponse {
    file?: {
        created?: number;
        fileContents?: string;
        isDirectory?: boolean;
        name?: string;
        path?: string;
        project?: string;
        updated?: number;
    }[];
}
export interface SaveRequest {
    file?: {
        created?: number;
        fileContents?: string;
        isDirectory?: boolean;
        name?: string;
        path?: string;
        project?: string;
        updated?: number;
    }[];
}
export interface SaveResponse {
}
