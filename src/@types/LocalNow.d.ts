interface LocalNowPromotionsResponse {
  headline: [];
  dashboard: LocalNowDashboard[];
  tv: LocalNowDashboard[];
  movie: LocalNowDashboard[];
  live: LocalNowDashboard[];
}

interface LocalNowDashboard {
  title: string;
  imageUrl: string;
  imageThumbUrl: string;
  linkUrl: string;
  order: number;
  isEnabled: boolean;
  isArchived: boolean;
  startDate: string;
  endDate: string;
  isRelativeTime: boolean;
  isAllAppClients: boolean;
  isAllMarkets: boolean;
  isAllPages: boolean;
  promotionBannerAppClients: Array<{
    promotionBanner_Id: number;
    promotionBanner?: unknown;
    appClient_Id: number;
    appClient: {
      clientId: string;
      isDefault: boolean;
      termsOfUseUrl?: string;
      termsOfUseSlug?: string;
      termsOfUseTitle?: string;
      privacyPolicyUrl?: string;
      privacyPolicySlug?: string;
      privacyPolicyTitle?: string;
      feedbackUrl?: string;
      feedbackSlug?: string;
      feedbackTitle?: string;
      faqUrl?: string;
      faqSlug?: string;
      faqTitle?: string;
      aboutUrl?: string;
      aboutSlug?: string;
      aboutTitle?: string;
      accountUrl?: string;
      accountSlug?: string;
      accountTitle?: string;
      advertiseWithUsUrl?: string;
      advertiseWithUsSlug?: string;
      advertiseWithUsTitle?: string;
      enewsletterUrl?: string;
      enewsletterSlug?: string;
      enewsletterTitle?: string;
      currentVersion?: string;
      minimumVersion?: string;
      forceUpgradeMessage?: string;
      forceUpgradeUrl?: string;
      startupSection_Id?: number;
      appClientStartupSection?: unkown;
      authentication?: boolean;
      personalization?: unkown;
      weatherIconAssetsPath?: string;
      marketImageBaseUrl?: string;
      liveFeedEndpointUrl?: string;
      liveFeedRefreshSeconds?: number;
      liveFeedPlayingRefreshSeconds?: number;
      myMixPlaybackEndpointUrl?: string;
      videoPlaybackEndpointUrl?: string;
      videoReferralEndpointUrl?: string;
      dashboardSectionId?: number;
      sectionsEndpointUrl?: string;
      collectionsEndpointUrl?: string;
      promotionsEndpointUrl?: string;
      promotionsRefreshInterval?: number;
      pages?: unkown;
      advertisingUrl: string;
      maxAdIntervalSeconds?: number;
      getPreRollEndpointUrl?: string;
      adMode_Id?: number;
      adMode?: unkown;
      adIntervalSegments?: number;
      adIntervalSeconds?: number;
      segmentsBeforeFirstAd?: number;
      debugMode_Id?: number;
      debugMode?: unkown;
      cityEndpointUrl?: string;
      cityAutocompleteEndpointUrl?: string;
      citySearchEndpointUrl?: string;
      getCitiesEndpointUrl?: string;
      sessionTokenEndpointUrl?: string;
      metadataListUrl?: string;
      baseEntryGetPlaybackContextUrl?: string;
      timeoutSeconds?: number;
      authenticationQrCodeUrl?: string;
      privacyPolicyQrCodeUrl?: string;
      termsOfUseQrCodeUrl?: string;
      faqQrCodeUrl?: string;
      ccpaQrCodeUrl?: string;
      advertiseWithUsQrCodeUrl?: string;
      id: number;
    };
    id: number;
  }>;
  promotionBannerPages: Array<{
    promotionBanner_Id: number;
    promotionBanner?: unknown;
    page_Id: number;
    page: {
      displayName: string;
      name: string;
      id: number;
    };
    id: number;
  }>;
  promotionBannerMarkets: unkown[];
  promotionBannerTimeZones: unkown[];
  name: string;
  id: number;
}

interface LocalNowConfigResponse {
  clientId: string;
  localNow: {
    termsOfUseUrl: string;
    termsOfUseSlug: string;
    termsOfUseTitle: string;
    privacyPolicyUrl: string;
    privacyPolicySlug: string;
    privacyPolicyTitle: string;
    feedBackUrl: string;
    feedBackSlug: string;
    feedBackTitle: string;
    faqUrl: string;
    faqSlug: string;
    faqTitle: string;
    aboutUrl: string;
    aboutSlug: string;
    aboutTitle: string;
    accountUrl: string;
    accountSlug: string;
    accountTitle: string;
    advertiseWithUsUrl: string;
    advertiseWithUsSlug: string;
    advertiseWithUsTitle: string;
    enewsletterUrl?: unkown;
    enewsletterSlug?: unkown;
    enewsletterTitle?: unkown;
    currentVersion: string;
    minimumVersion: string;
    forceUpgradeMessage: string;
    forceUpgradeUrl: string;
    promotion?: unkown;
    promotionsEndpointUrl: string;
    promotionsRefreshInterval: number;
    playback: {
      liveFeedEndpointUrl: string;
      liveFeedRefreshSeconds: number;
      liveFeedPlayingRefreshSeconds: number;
      myMixPlaybackEndpointUrl: string;
      videoPlaybackEndpointUrl: string;
      videoReferralEndpointUrl: string;
      sectionUrl: string;
      collectionUrl: string;
      dashboardSectionId: number;
    };
    advertising: {
      advertisingUrl: string;
      maxAdIntervalSeconds: number;
      getPreRollEndpointUrl: string;
      adMode: string;
      adIntervalSegments: number;
      adIntervalSeconds: number;
      segmentsBeforeFirstAd: number;
      debugMode?: unkown;
    };
    geography: {
      cityEndpointUrl: string;
      cityAutocompleteEndpointUrl: string;
      citySearchEndpointUrl: string;
      getCitiesEndpointUrl: string;
    };
    qrCodes: {
      authentication: string;
      privacyPolicy: string;
      termsOfUse: string;
      faq: string;
      ccpa: string;
      advertiseWithUs: string;
    };
    startupSection: string;
    pages: LocalNowPage[];
    tabs: LocalNowPage[];
    featureToggles: {
      'josh-stringTest-1202': string;
      rokuDemandApiFloorPrice: number;
      s: boolean;
      rokuDemandApiEnabled: boolean;
      rokuDemandApiMyMixMaxAds: number;
      rokuDemandApiEpgMaxAds: number;
      rokuDemandApiAvodMaxAds: number;
      rokuDemandApiTimeout: number;
    };
    authentication: boolean;
    personalization: boolean;
    weatherIconAssetsPath: string;
    marketImageBaseUrl: string;
  };
  kaltura: {
    sessionTokenEndpointUrl: string;
    metadataListUrl: string;
    baseEntryGetPlaybackContextUrl: string;
    timeoutSeconds: number;
  };
  id: number;
}

interface LocalNowPage {
  name: string;
  displayName: string;
  isEnabled: boolean;
}

interface LocalNowCityResponse {
  autoLocation: {
    userAgent: string;
    ip: string;
    latitude: string;
    longitude: string;
    zip: string;
    city: string;
  };
  city: {
    id: number;
    name: string;
    cityStateName?: unkown;
    stateCode?: unkown;
    zipCode?: unkown;
    market: string;
    timeZone?: unkown;
    zipDma?: unkown;
    deviceDma?: unkown;
    dmaId: number;
    geoPoint?: unkown;
  };
}

interface LocalNowVideoResponse {
  experienceId: string;
  videos: Array<{
    recommendationId?: string;
    advertisingContext?: string;
    assetId: string;
    playbackContext: string;
    season: string;
    episode: string;
    imageUrl: string;
    imageThumbUrl: string;
    categories: string;
    tags: string;
    marketId: string;
    playlistId?: unkown;
    playlistGroupId?: unkown;
    playlistGroupTemplateId?: unkown;
    contentBlock: string;
    chapterTitle: string;
    rating: number;
    series?: unkown;
    version: number;
    clientUrl?: unkown;
    isAdvertisement: boolean;
    expirationTimeUtc: string;
    currentTimeUtc: string;
    durationSeconds: number;
    title: string;
    description: string;
  }>;
}

interface LocalNowPlaybackResponse {
  url: string;
  expirationTimeUtc: string;
  currentTimeUtc: string;
  durationSeconds: number;
  title: string;
  description: string;
}
