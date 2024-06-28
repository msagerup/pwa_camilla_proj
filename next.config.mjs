// next.config.mjs
import withPWAInit from '@ducanh2912/next-pwa';


const withPWA = withPWAInit({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

export default withPWA({
  // Your Next.js config
});

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true, // Enable React strict mode for improved error handling
//   swcMinify: true, // Enable SWC minification for improved performance
//   compiler: {
//     removeConsole: process.env.NODE_ENV !== 'development', // Remove console.log in production
//   },
// };

// export default withPWA({
//   dest: 'public', // destination directory for the PWA files
//   // disable: process.env.NODE_ENV === 'development', // disable PWA in the development environment
//   register: true, // register the PWA service worker
//   skipWaiting: true, // skip waiting for service worker activation
// })(nextConfig);
