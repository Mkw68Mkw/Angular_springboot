
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23960, hash: 'eba354107a1e3904e9ad0fe39aa78d840c954e64b2afde57b318bd72a075364c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17139, hash: 'b890eb9d06277d2a6546f09ce212cd79d6e307f587112ed265edba2dbde5769b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-EDNCRAYW.css': {size: 7534, hash: '5gqSTbB9SEQ', text: () => import('./assets-chunks/styles-EDNCRAYW_css.mjs').then(m => m.default)}
  },
};
