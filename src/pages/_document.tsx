import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <!-- Open Graph Meta tags -->
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Site Raartsu" />
        <meta property="og:url" content="https://raartsu.vercel.app" />
        <meta property="og:image" content="https://raartsu-i4xylkugi-klayverxd.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.5e7c49e0.png&w=384&q=75" />
        <meta property="og:description" content="Landing page Raartsu" />
        <meta property="og:site_name" content="Raartsu 🍌" />
        <meta property="og:locale" content="pt_BR" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* <meta property="og:video" content="https://www.seusite.com/video.mp4" />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />
        <meta property="og:audio" content="https://www.seusite.com/audio.mp3" />
        <meta property="og:audio:type" content="audio/mpeg" /> */}

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@klayverxdx" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
