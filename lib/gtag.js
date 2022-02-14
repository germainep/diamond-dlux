export const GA_TRACKING_ID = 'G-BR8BW1ZEMC' // This is your GA Tracking ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
