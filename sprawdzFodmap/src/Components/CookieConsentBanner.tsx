import { CookieConsent } from "cookie-consent-react";
import { loadGoogleAnalytics } from "./../analytics/google-analytics.ts";
import { useEffect, useState } from "react";

const COOKIE_CONSENT_STORAGE_KEY = "sprawdzfodmap_cookie_consent";

export default function CookieConsentBanner(disclaimerModalState: {
  disclaimerModalState: boolean;
}) {
  const [cookieConsentBannerIsOpened, setCookieConsentBannerIsOpened] =
    useState(false);

  useEffect(() => {
    const disclaimerSeenStatus: string | null =
      localStorage.getItem("disclaimer-seen");
    const savedCookieConsent = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);

    if (disclaimerSeenStatus === "true" && savedCookieConsent === null) {
      setCookieConsentBannerIsOpened(true);
    }
  }, [disclaimerModalState]);

  const handleLoadAnalyticsTags = () => {
    loadGoogleAnalytics();
    console.log("Google Analytics tags have been appended.");

    if (cookieConsentBannerIsOpened === true) {
      setCookieConsentBannerIsOpened(false);
    }
  };

  return (
    <CookieConsent
      mode="banner"
      handlerFunctions={[
        { category: "analytics", function: handleLoadAnalyticsTags },
      ]}
      customColors={{ primary: "#3f6d3b" }}
      language="pl"
      customStorageKey={COOKIE_CONSENT_STORAGE_KEY}
      componentIsOpen={cookieConsentBannerIsOpened}
    />
  );
}
