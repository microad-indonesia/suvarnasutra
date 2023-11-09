import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import siteConfig from "~/lib/site-config";

const meta = {
  siteName: siteConfig.site_name,
  title: `${siteConfig.site_tagline} | ${siteConfig.site_name}`,
  tagline: siteConfig.site_tagline,
  description: siteConfig.site_description,
  url: siteConfig.site_url,
};

export default function Head({ router }: AppProps) {
  return (
    <>
      <title>Suvanasutra</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/logo-ss.png" />
      <DefaultSeo
        canonical={`${meta.url}${router.asPath || "/"}`}
        // description={meta.description}
        openGraph={{
          type: "website",
          locale: "id",
          title: meta.title,
          description: meta.description,
          site_name: meta.siteName,
          // images: [
          //   {
          //     url: "/assets/images/web-banner.svg",
          //     alt: meta.siteName,
          //     width: 394,
          //     height: 456,
          //   },
          // ],
        }}
        // title={meta.tagline}
        titleTemplate={`%s | ${meta.siteName}`}
        facebook={{ appId: "suvarnasutra" }}
      />
    </>
  );
}
