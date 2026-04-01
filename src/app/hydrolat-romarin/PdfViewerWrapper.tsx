'use client';

import dynamic from 'next/dynamic';

const PdfViewer = dynamic(() => import('./PdfViewer'), { 
  ssr: false,
  loading: () => <div className="w-full flex-1 flex items-center justify-center p-12 text-stone-500 bg-stone-50">Chargement de la visionneuse...</div>
});

export default function PdfViewerWrapper({ file }: { file: string }) {
  return <PdfViewer file={file} />;
}
