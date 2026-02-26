export interface Partner {
  name: string;
  logo: string;
  darkLogo?: string;
  url?: string;
}

export const partners: Partner[] = [
  {
    name: "Ethio Telecom",
    logo: "/partners/ethiotelecom_logo.png",
    darkLogo: "/partners/ethiotelecom_logo_dark.png",
  },
  {
    name: "Noble",
    logo: "/partners/noble_logo.svg",
  },
  {
    name: "WebSprix",
    logo: "/partners/websprix_logo.png",
  },
  {
    name: "Yehulu Saccos",
    logo: "/partners/yehulusaccos_logo.png",
    darkLogo: "/partners/yehulusaccos_logo_dark.png",
  },
];
