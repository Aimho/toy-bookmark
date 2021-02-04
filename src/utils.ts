import { TSearchEngine } from "./component/SearchBar/type";

export const faviconImgProps = (baseUrl: string) => ({
  src: `https://www.google.com/s2/favicons?sz=64&domain_url=${baseUrl}`,
  onError: (e: any) => {
    if (e.target.src.indexOf("favicon.ico") === -1) {
      return (e.target.src = `${baseUrl}/favicon.ico`);
    } else {
      return (e.target.src = require(`./styles/images/baseline_link_black_36dp.png`));
    }
  },
  onLoadCapture: (e: any) => {
    if (e.target.offsetWidth === 16) {
      e.target.src = `${baseUrl}/favicon.ico`;
      e.target.classList.add("resize");
    } else {
      e.target.classList.add("resize");
    }
  },
  onLoad: (e: any) => {
    e.target.classList.add("visible");
  },
});

export const openUrl = (url: string) => window.open(url);

export const getBaseUrl = (url: string) => {
  return new URL(url).origin;
};

export const getSearchUrl = (search_engine: TSearchEngine) => {
  switch (search_engine) {
    case "google":
      return `https://www.google.com/search?q=`;
    case "naver":
      return `https://search.naver.com/search.naver?&query=`;
    // youtube
    default:
      return "https://www.youtube.com/results?search_query=";
  }
};
