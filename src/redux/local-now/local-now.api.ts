import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from '..';

const marketId = 'txHouston';
const clientId = 'vizio';

const localNowApi = createApi({
  reducerPath: 'local-now-api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://qa.localnowapi.com',
    prepareHeaders: async (headers) => {
      headers.set('x-api-key', 'k8rU06bTYP2cXTu3q6YB19GiB9phBFUN5ypjSO9S');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getConfiguration: builder.query<LocalNowConfigResponse, void>({
      query: () => `/vod/api/v2/Configuration?ClientId=${clientId}`,
    }),
    getCity: builder.query<LocalNowCityResponse, void>({
      query: () => `/gis/api/v2/City`,
    }),
    getPromotions: builder.query<LocalNowPromotionsResponse, void>({
      query: () => `/vod/api/v2/Promotion?marketId=${marketId}&clientId=${clientId}`,
    }),
    getMyMix: builder.query<LocalNowVideoResponse, void>({
      query: () => {
        const experienceId = store.getState()['local-now'].experienceId;
        const params = new URLSearchParams();
        params.set('MarketId', marketId);
        params.set('MixPercentage', '1');
        params.set('NumberOfItems', '3');
        params.set('UserId', 'undefined');
        if (experienceId) {
          params.set('experienceId', experienceId);
        }
        return `/vod/api/v2/Video/GetMyMix?${params.toString()}`;
      },
    }),
    getPlayback: builder.query<LocalNowPlaybackResponse, string>({
      query: (assetId) => `/vod/api/v2/Video/GetPlayback?AssetId=${assetId}`,
    }),
    // TODO: needs VMAP parsing
    getPreRoll: builder.query<string, string>({
      query: () =>
        `https://qa.localnowapi.com/vo/api/v2/Advertising/GetPreRoll?Video_Id=Global_Recipe_Monday_1&Device_DeviceType=vizio&Device_Model=&Device_Id_Type=dpid&Device_Ifa=none-provided&App_Name=Local+Now&App_Version=5.5.3&Dnt=0&Cb=1645511136388&player_width=1920&player_height=1080&user_sga=txHouston&app_version=5.5.3`,
    }),
  }),
});

export default localNowApi;
