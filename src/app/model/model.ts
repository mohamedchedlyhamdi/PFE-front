export class DownloadFileRequest {
    constructor(
      public username: string,
      public password: string,
      public host: string,
      public remoteFilePath: string,
      public description: string
    ) {}
  }
  