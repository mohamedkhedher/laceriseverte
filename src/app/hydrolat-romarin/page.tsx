import React from 'react';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

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
          
          {/* Mobile Overlay Fallback - Visible mainly if iframe fails, but also gives a clear call to action on very small screens */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-50 p-6 z-0">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <ExternalLink className="w-8 h-8 text-emerald-800" />
            </div>
            <p className="text-stone-600 text-center mb-6 max-w-md">
              Pour une meilleure expérience de lecture sur mobile, nous vous recommandons d'ouvrir le document en plein écran ou de le télécharger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="/postalcard.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-800 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-sm w-full sm:w-auto"
              >
                Ouvrir le PDF
              </a>
            </div>
          </div>

          {/* We use an object to display the PDF natively. z-10 puts it over the fallback if it loads successfully */}
          <object 
            data="/postalcard.pdf#toolbar=0&view=FitH" 
            type="application/pdf"
            className="w-full h-full relative z-10"
            style={{ minHeight: '100%' }}
          >
            {/* If object fails (e.g., iPhone Safari block), it falls back to the content underneath inherently, but we also put an iframe just in case. */}
            <iframe 
              src="/postalcard.pdf#toolbar=0&view=FitH" 
              className="w-full h-full border-0 absolute inset-0 z-10"
              title="Hydrolat Romarin PDF Document"
            />
          </object>
        </div>
      </div>
    </main>
  );
}
