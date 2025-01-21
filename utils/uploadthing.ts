import {
    generateUploadButton,
    generateUploadDropzone,
  } from "@uploadthing/react";
  import type { ImageRouter } from "@/app/api/uploadthing/core";
  export const UploadButton = generateUploadButton<ImageRouter>();
  export const UploadDropzone = generateUploadDropzone<ImageRouter>();