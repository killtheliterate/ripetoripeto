import analytics from 'universal-ga'

export function thenTrackEvent({
  action = 'form submit',
  category = 'ripeto',
  label = null
}) {
  return data => {
    // feeling superstitious
    if (label) {
      analytics.event(category, action, label)
    } else {
      analytics.event(category, action)
    }

    return data
  }
}

export function trackEvent({
  action = 'form submit',
  category = 'ripeto',
  label = null
}) {
  // feeling superstitious
  if (label) {
    analytics.event(category, action, label)
  } else {
    analytics.event(category, action)
  }
}

export default trackEvent
