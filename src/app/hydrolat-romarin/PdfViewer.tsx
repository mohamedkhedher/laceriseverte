'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// We use the CDN for the worker to avoid complex Webpack setup in Next.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
  file: string;
}

export default function PdfViewer({ file }: PdfViewerProps) {
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [numPages, setNumPages] = useState<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    handleResize(); // Initial resize call to set size
    window.addEventListener('resize', handleResize);
    
    // Give it a brief delay to handle any initial layout shifts
    const timeoutId = setTimeout(handleResize, 100);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div ref={containerRef} className="w-full h-full flex justify-center items-start overflow-auto bg-stone-100/50 py-4">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        className="flex flex-col items-center w-full gap-4"
        loading={
          <div className="flex items-center justify-center p-12 text-stone-500 font-medium">
            Chargement du document...
          </div>
        }
        error={
          <div className="flex items-center justify-center p-12 text-red-600 font-medium text-center">
            Erreur lors du chargement du PDF.<br/>
            Veuillez utiliser les boutons "Ouvrir" ou "Télécharger" ci-dessus.
          </div>
        }
      >
        {Array.from(new Array(numPages || 1), (el, index) => (
          <Page 
            key={`page_${index + 1}`}
            pageNumber={index + 1} 
            width={containerWidth ? containerWidth : undefined}
            renderTextLayer={false} 
            renderAnnotationLayer={false}
            className="shadow-sm border border-stone-200"
          />
        ))}
      </Document>
    </div>
  );
}
