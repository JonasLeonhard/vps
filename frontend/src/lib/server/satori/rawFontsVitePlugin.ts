import fs from 'fs';

/**
 * Vite plugin to load raw fonts, required for renderComponentToPng to work
 * @example
 * ```typescript
 * const config = {
 * plugins: [sveltekit(), rawFonts(['.ttf'])],
 *  optimizeDeps: {
 *    exclude: ['@vercel/og']
 *  }
 * };
 * ```
 */
const rawFonts = (ext: string[]) => {
  return {
    name: 'vite-plugin-raw-fonts',
    resolveId(id: any) {
      return ext.some((e) => id.endsWith(e)) ? id : null;
    },
    transform(_code: string, id: string) {
      if (ext.some((e) => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return { code: `export default ${JSON.stringify(buffer)}`, map: null };
      }
    }
  };
};

export default rawFonts;
