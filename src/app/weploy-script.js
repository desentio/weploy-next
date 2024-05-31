"use client";

export default function WeployScript() {
  return (
    <>
      <link href="https://unpkg.com/weploy-translate/dist/weploy-translate.css" rel="stylesheet" />
      <script src="https://unpkg.com/weploy-translate/dist/weploy-translate.js" 
      data-weploy-key={process.env.KEY}
      data-use-browser-language="true" 
      data-original-language="fr"
      data-allowed-languages="en, es, it, pt, sw, de, zh, el, ja, ru" 
      data-exclude-classes=""></script>
    </>
  )
}
