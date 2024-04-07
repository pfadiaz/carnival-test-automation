import { type Locator, type Page } from '@playwright/test'
import * as enums from '@/enums'

export class HomePage {
  readonly page: Page
  readonly cookiePolicyBanner: Locator
  readonly sailToOption: Locator
  readonly sailToBahamas: Locator
  readonly sailFromOption: Locator
  readonly datesOption: Locator
  readonly dateStart: Locator
  readonly dateEnd: Locator
  readonly durationOption: Locator
  readonly searchCruisesButton: Locator
  readonly duration2To5Days: Locator
  readonly duration6To9Days: Locator
  readonly duration10PlusDays: Locator
  readonly offerBanner: Locator

  constructor(page: Page) {
    this.page = page
    this.offerBanner = page.getByLabel('Close offer Button')
    this.cookiePolicyBanner = page.getByLabel('Close cookie policy')
    this.sailToOption = page.locator('#cdc-destinations')
    this.sailToBahamas = page.locator('//*[@aria-label="The Bahamas "]')
    this.sailFromOption = page.locator('#cdc-ports')
    this.datesOption = page.locator('#cdc-dates')
    this.dateStart = page.locator('//*[@aria-label="January 2025 "]')
    this.dateEnd = page.locator('//*[@aria-label="December 2025 "]')
    this.durationOption = page.locator('#cdc-durations')
    this.searchCruisesButton = page.getByRole('button', { name: 'SEARCH CRUISES' })
    this.duration2To5Days = page.getByLabel('- 5 Days')
    this.duration6To9Days = page.getByLabel('- 9 Days')
    this.duration10PlusDays = page.getByLabel('+ Days')
  }

  async pickSailFromOption() {
    await this.sailFromOption.click()
    await this.page.getByLabel(enums.SailFromLocations.Tampa).click()
  }

  async pickSailToOption() {
    await this.sailToOption.click()
    await this.sailToBahamas.isVisible()

    await this.sailToBahamas.click()
  }

  async pickDateOption() {
    await this.datesOption.click()
    await this.dateStart.click()
    await this.dateEnd.click()
  }

  async pickDurationOption() {
    await this.durationOption.click()
    await this.duration6To9Days.click()
  }

  async searchForCruises() {
    await this.pickSailToOption()
    await this.pickSailFromOption()
    await this.pickDateOption()
    await this.pickDurationOption()

    await this.searchCruisesButton.click()
  }

  async goto() {
    await this.page.goto('/')
    const isOfferBannerVisible = await this.offerBanner.isVisible()
    if (isOfferBannerVisible) {
      await this.offerBanner.click()
    }
    await this.cookiePolicyBanner.first().click()
  }
}
