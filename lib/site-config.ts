import siteConfig from "./site-config.json";

export type SiteConfig = {
  readonly site_name: string;
  readonly site_tagline: string;
  readonly site_description: string;
  readonly site_url: string;
  readonly whatsapp_contact_url?: string;
};

export default siteConfig as SiteConfig;
