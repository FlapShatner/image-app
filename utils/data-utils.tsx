export function extractPathData(svgPath: string): string {
  const match = svgPath.match(/d="([^"]*)"/);
  return match ? match[1].trim() : '';
}


export function base64ToFile(base64String: string, fileName: string = 'image.png', mimeType: string = 'image/png'): File {
  // Remove data URL prefix if it exists
  const base64WithoutPrefix = base64String.replace(/^data:image\/\w+;base64,/, '');
  console.log(base64WithoutPrefix);
  // Convert base64 to binary
  const binaryString = atob(base64WithoutPrefix);
  const bytes = new Uint8Array(binaryString.length);
  console.log(bytes);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  console.log(bytes);
  // Create Blob from binary data
  const blob = new Blob([bytes], { type: mimeType });
  console.log(blob);
  // Create File from Blob
  return new File([blob], fileName, { type: mimeType });

}