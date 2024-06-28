// app/layout.ts
import BottomDrawer from '@/components/Drawer';
import SuspenseWrapper from '@/components/SuspenseWrapper';
import BottomNav from '@/components/bottomBar';
import MobileNavBar from '@/components/mobileNavBar';
import theme from '@/components/theme';
import { Toaster } from '@/components/ui/toaster';
import GlobalContextProvider from '@/context/store';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const APP_NAME = 'F.R.T - SIADH and Hyponatremia Management';
const APP_DEFAULT_TITLE = 'Fluid Restriction Tracker';
const APP_TITLE_TEMPLATE = 'Fluid Restriction Tracker';
const APP_DESCRIPTION = 'A portal for SIADH and Hyponatremia Management';

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* <HeaderNav /> */}

        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <GlobalContextProvider>
              <MobileNavBar />
              {children}
              <Toaster />
              <SuspenseWrapper>
                <BottomDrawer />
              </SuspenseWrapper>
              <BottomNav />
            </GlobalContextProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
