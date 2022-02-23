import React from "react";
import { Route, Switch } from "react-router-dom";
import { AccountPage } from "./Account/Account.page";
import { ChannelsPage } from "./Channels/Channels.page";
import { HomePage } from "./Home/Home.page";
import { MoviesPage } from "./Movies/Movies.page";
import NotFoundPage from "./NotFound.page";
import { ShowsPage } from "./Shows/Shows.page";

const routes = {
  // link to Home Screen
  "/": <HomePage />,
  // link to Channels Screen, default channel playback
  // link to Channels Screen, with specified channel selected and playing back
  "/channels/:slug?": <ChannelsPage />,
  // link to Movies Lander
  // link to the specified movie PDP
  "/movies/:slug?": <MoviesPage />,
  // link to Shows Lander
  // link to the specified show PDP
  // link to the show PDP with the specified episode in focus. Note: The season the episode belongs to should be selected
  "/shows/:slug?/:season?/:episode?": <ShowsPage />,
  // link to the grid view of a specific movie genre
  "/movies/genre/:genre": <MoviesPage />,
  // link to the grid view of a specific show genre
  "/shows/genre/:genre": <MoviesPage />,
  // link into the Search Screen
  // link into the Search Screen and executes the specified search query. The search bar should have the query inside the text field.
  "/search/:query?": <div></div>,
  // link into the QR Code/Activation code screen for 10ft and the OTP flow for iOS. For Android Mobile, deep link to the Account Screen.
  "/login": <div></div>,
  // link into My Mix (current Home Screen)
  // link into a specific My Mix Segment
  "/my-mix/:slug?": <HomePage />,
  "/accounts": <AccountPage />,
} as const;

type RouteKeys = keyof typeof routes;

export const routeKeys = Object.keys(routes).reduce<Record<RouteKeys, string>>(
  (obj, curr) => {
    obj[curr as RouteKeys] = curr;
    return obj;
  },
  {} as Record<RouteKeys, string>
);

export const Pages = () => (
  <Switch>
    {Object.entries(routes).map(([path, component]) => (
      <Route key={path} path={path} exact={path === "/"}>
        {component}
      </Route>
    ))}
    <Route path="*">
      <NotFoundPage />
    </Route>
  </Switch>
);
