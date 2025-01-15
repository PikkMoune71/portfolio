import React from "react";

interface PdfViewerProps {
  src: string;
  width?: number;
  height?: number;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({ src, width, height }) => {
  return (
    <embed
      src={src}
      width={width ? width : 980}
      height={height ? height : 800}
      type="application/pdf"
    />
  );
};
