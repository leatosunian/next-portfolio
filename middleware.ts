import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Intercepta todo excepto archivos estáticos, _next y _vercel
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
};