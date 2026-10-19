import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingActions from '@/components/FloatingActions';
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.biorajlab.co.in'),
  title: {
    default: 'Bioraj Laboratories | Environmental, Food & Soil Testing Laboratory Pune',
    template: '%s | Bioraj Laboratories',
  },
  description: 'Founded in 2015 by Dr. Raju R. Yadav (Ph.D., CSIR-NEERI). NABL / MoEFCC / FSSAI compliant testing laboratory in Warje, Pune specializing in stack emission, wastewater, food safety, soil fertility, and chemical analysis.',
  keywords: [
    'Bioraj Laboratories',
    'Environmental Testing Laboratory Pune',
    'Food Testing Lab Pune',
    'Soil Testing Lab Maharashtra',
    'Stack Emission Monitoring',
    'Effluent BOD COD Testing',
    'Dr. Raju Yadav CSIR NEERI',
    'NABL ISO 17025 Testing Lab',
    'FSSAI Food Analysis Lab',
    'Chemical Solvent Testing'
  ],
  authors: [{ name: 'Dr. Raju R. Yadav' }],
  creator: 'Bioraj Laboratories Pvt. Ltd.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.biorajlab.co.in',
    title: 'Bioraj Laboratories | Apex Analytical & Environmental Testing',
    description: 'Statutory compliance reports, stack air monitoring, wastewater analysis, and food microbial assays directed by Dr. Raju R. Yadav (CSIR-NEERI).',
    siteName: 'Bioraj Laboratories Pvt. Ltd.',
    images: [
      {
        url: '/BiorajLogo.png',
        width: 1200,
        height: 630,
        alt: 'Bioraj Laboratories Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bioraj Laboratories | Analytical Testing Laboratory',
    description: 'High-precision testing laboratory in Pune for environmental, food, soil, and chemical compliance.',
    images: ['/BiorajLogo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
