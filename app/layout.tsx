// app/layout.ts
import BottomDrawer from '@/components/Drawer';
import BottomNav from '@/components/bottomBar';
import GlobalContextProvider from '@/components/context/store';
import MobileNavBar from '@/components/mobileNavBar';
import theme from '@/components/theme';
import { Toaster } from '@/components/ui/toaster';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'PWA NextJS',
//   description: "It's a simple progressive web application made with NextJS",
//   generator: 'Next.js',
//   manifest: '/manifest.json',
//   keywords: ['nextjs', 'next14', 'pwa', 'next-pwa'],
//   authors: [
//     {
//       name: 'Magnus Sagerup',
//       url: 'https://www.linkedin.com/in/msagerup/',
//     },
//   ],
//   viewport:
//     'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
//   icons: [
//     { rel: 'apple-touch-icon', url: 'icons/icon-128x128.png' },
//     { rel: 'icon', url: 'icons/icon-128x128.png' },
//   ],
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* <HeaderNav /> */}

        <MobileNavBar />

        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <GlobalContextProvider>
              {children}
              <Toaster />
              <BottomDrawer />
              <BottomNav />
            </GlobalContextProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
