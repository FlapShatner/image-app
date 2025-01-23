export function extractPathData(svgPath: string): string {
  const match = svgPath.match(/d="([^"]*)"/);
  return match ? match[1].trim() : '';
}
