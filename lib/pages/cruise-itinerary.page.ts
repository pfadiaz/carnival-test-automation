import { expect, type Locator, type Page } from '@playwright/test'
import { environments } from '@config'

export class CruiseItineraryPage {
  readonly page: Page
  readonly itineraryList: Locator
  readonly cookiePolicyBanner: Locator
  readonly bookNowButton: Locator

  constructor(page: Page) {
    this.page = page
    this.itineraryList = page.getByTestId('dayTileSection')
    this.cookiePolicyBanner = page.getByLabel('Close cookie policy')
    this.bookNowButton = page.getByTestId('startBooking')
  }

  async goTo() {
    await this.page.goto(`/${environments.cruiseItinerary}`)
    await this.page.waitForURL('**/itinerary/**')
    await this.cookiePolicyBanner.first().click()
  }

  async reviewAll(bookingData) {
    await Promise.all(
      bookingData.itinerary.map(async (day, index) => {
        await expect(await this.page.getByTestId(`dayTile${index}RightContainer`)).toContainText(day.description)
      })
    )
  }
}
