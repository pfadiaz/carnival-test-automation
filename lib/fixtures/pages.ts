import { test as base } from '@playwright/test'
import { HomePage, CruiseSearchPage, CruiseItineraryPage } from '../pages/index'

type ClinicPages = {
  homePage: HomePage
  cruiseSearchPage: CruiseSearchPage
  cruiseItinerary: CruiseItineraryPage
}

export const test = base.extend<ClinicPages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page))
  },
  cruiseSearchPage: async ({ page }, use) => {
    await use(new CruiseSearchPage(page))
  },
  cruiseItinerary: async ({ page }, use) => {
    await use(new CruiseItineraryPage(page))
  },
})

export { expect } from '@playwright/test'
