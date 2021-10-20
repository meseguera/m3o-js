import * as m3o from '@m3o/m3o-node';

export class FileService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Delete a file by project name/path
  delete(request: FileDeleteRequest): Promise<FileDeleteResponse> {
    return this.client.call(
      'file',
      'Delete',
      request
    ) as Promise<FileDeleteResponse>;
  }
  // List files by their project and optionally a path.
  list(request: FileListRequest): Promise<FileListResponse> {
    return this.client.call(
      'file',
      'List',
      request
    ) as Promise<FileListResponse>;
  }
  // Read a file by path
  read(request: FileReadRequest): Promise<FileReadResponse> {
    return this.client.call(
      'file',
      'Read',
      request
    ) as Promise<FileReadResponse>;
  }
  // Save a file
  save(request: FileSaveRequest): Promise<FileSaveResponse> {
    return this.client.call(
      'file',
      'Save',
      request
    ) as Promise<FileSaveResponse>;
  }
}

export interface FileBatchSaveRequest {
  files?: Record<string, unknown>[];
}

export interface FileBatchSaveResponse {}

export interface FileDeleteRequest {
  // Path to the file
  path?: string;
  // The project name
  project?: string;
}

export interface FileDeleteResponse {}

export interface FileListRequest {
  // Defaults to '/', ie. lists all files in a project.
  // Supply path to a folder if you want to list
  // files inside that folder
  // eg. '/docs'
  path?: string;
  // Project, required for listing.
  project?: string;
}

export interface FileListResponse {
  files?: Record<string, unknown>[];
}

export interface FileReadRequest {
  // Path to the file
  path?: string;
  // Project name
  project?: string;
}

export interface FileReadResponse {
  // Returns the file
  file?: Record<string, unknown>;
}

export interface FileRecord {
  // File contents
  content?: string;
  // Time the file was created e.g 2021-05-20T13:37:21Z
  created?: string;
  // Any other associated metadata as a map of key-value pairs
  metadata?: { [key: string]: string };
  // Path to file or folder eg. '/documents/text-files/file.txt'.
  path?: string;
  // A custom project to group files
  // eg. file-of-mywebsite.com
  project?: string;
  // Time the file was updated e.g 2021-05-20T13:37:21Z
  updated?: string;
}

export interface FileSaveRequest {
  file?: Record<string, unknown>;
}

export interface FileSaveResponse {}
