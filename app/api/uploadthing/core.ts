import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();


export const imageRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })  
    .onUploadComplete(async ({file }) => {
      return { url: file.url };
    }),
} satisfies FileRouter;

export type ImageRouter = typeof imageRouter;
