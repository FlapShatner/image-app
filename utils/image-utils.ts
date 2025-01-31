import { ImageTracerBrowser } from "@image-tracer-ts/browser";
import { Options } from "@image-tracer-ts/core";

export const traceImage = async (imageBuffer: ArrayBuffer) => {
    const svgString = await ImageTracerBrowser.fromBuffer(imageBuffer, Options.Presets.posterized1);
    return svgString;
}