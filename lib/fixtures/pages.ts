import { test as base } from '@playwright/test'
import { HomePage, CruiseSearchPage } from '../pages/index'

type ClinicPages = {
  homePage: HomePage
  cruiseSearchPage: CruiseSearchPage
}

export const test = base.extend<ClinicPages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page))
  },
  cruiseSearchPage: async ({ page }, use) => {
    await use(new CruiseSearchPage(page))
  },
})

export { expect } from '@playwright/test'
