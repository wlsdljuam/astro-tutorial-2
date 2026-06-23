// @ts-check
import { defineConfig } from "astro/config";

import metaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
  // 프로덕션 사이트 URL 지정 import.meta.env.SITE 로 사용할수 있음.
  site: "https://astrosj.mycafe24.com",

  // false = 빌드 결과물 html 을 보기좋게 포맷팅
  compressHTML: false,

  build: {
      format: "file", // 빌드 결과물을 ./dist/page.html 형식으로 출력
      inlineStylesheets: `never`,
      assets: "assets",
	},

  // css 선택자 규칙을 class name 기반으로 출력
  scopedStyleStrategy: "class",

  integrations: [metaTags()]
});