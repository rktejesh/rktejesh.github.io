import ReactGA from "react-ga";

const userAnalyticsEventTracker = (category="Portfolio category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default userAnalyticsEventTracker;
