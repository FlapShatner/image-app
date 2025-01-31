import { UTApi } from "uploadthing/server";

export type UploadFileResponse =
  | { data: UploadData; error: null }
  | { data: null; error: UploadError };

export type UploadData = {
  key: string;
  url: string;
  name: string;
  size: number;
};

type UploadError = {
  code: string;
  message: string;
  data: any;
};


export const utapi = new UTApi();
