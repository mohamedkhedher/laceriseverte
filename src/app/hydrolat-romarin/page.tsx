import React from 'react';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PdfViewerWrapper from './PdfViewerWrapper';

export const metadata: Metadata = {
  title: 'Hydrolat Romarin | La Cerise Verte',
  description: 'Document détaillé sur l\'hydrolat de romarin de La Cerise Verte',
};

export default function HydrolatRomarinPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] py-4 sm:py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col h-[calc(100vh-2rem)] sm:h-[calc(100vh-4rem)]">
        
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-stone-500 hover:text-emerald-800 transition-colors w-fit"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">Retour au site</span>
          </Link>
          
          <h1 className="text-2xl sm:text-3xl font-serif text-emerald-950 text-center font-medium px-2">
            Hydrolat Romarin
          </h1>
          
          <div className="flex items-center justify-center sm:justify-end gap-3 w-full sm:w-auto">
            <a
              href="/postalcard.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 bg-white text-emerald-800 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors text-sm font-medium shadow-sm"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              <span>Ouvrir</span>
            </a>
            <a
              href="/postalcard.pdf"
              download
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 bg-emerald-800 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium shadow-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              <span>Télécharger</span>
            </a>
          </div>
        </div>

        {/* PDF Viewer Container */}
        <div className="flex-1 w-full bg-white rounded-xl sm:rounded-2xl shadow-sm border border-stone-200 overflow-hidden relative flex flex-col">
          <PdfViewerWrapper file="/postalcard.pdf" />
        </div>
      </div>
    </main>
  );
}
