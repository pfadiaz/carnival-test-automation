import { type Locator, type Page } from '@playwright/test'
import { environments } from '@config'

export class CruiseSearchPage {
  readonly page: Page
  readonly cookiePolicyBanner: Locator
  readonly tripResults: Locator
  readonly firstTripResultFromGrid: Locator
  readonly secondTripResultFromGrid: Locator
  readonly vacationBudgetOption: Locator
  readonly priceSliderBar: Locator
  readonly priceSliderMinLeft: Locator
  readonly priceSliderMaxRight: Locator
  readonly sortByPriceOption: Locator

  constructor(page: Page) {
    this.page = page
    this.tripResults = page.getByTestId('tripTilesContainer')
    this.cookiePolicyBanner = page.getByLabel('Close cookie policy')
    this.vacationBudgetOption = page.getByLabel('Vacation Budget')
    this.priceSliderBar = page.getByTestId('pricingSlider')
    this.priceSliderMaxRight = this.priceSliderBar.locator('span').nth(1)
    this.priceSliderMinLeft = this.priceSliderBar.locator('span').nth(2)
    this.sortByPriceOption = page.getByTestId('sortBySelect')
  }

  async nthResultFromGrid(index: number) {
    const selector =
      index === 0 ? await this.page.getByTestId('tripTile').first() : await this.page.getByTestId('tripTile').nth(index)

    return selector
  }

  async goTo() {
    await this.page.goto(`/${environments.cruiseResults}`)
    await this.page.waitForURL('**/cruise-search?**')
    await this.cookiePolicyBanner.first().click()
  }

  async filterPriceWithSlider() {
    await this.vacationBudgetOption.click()
    await this.priceSliderMaxRight.click()
  }

  async sortPriceHighToLow() {
    await this.sortByPriceOption.click()
    await this.sortByPriceOption.selectOption('fromprice desc')
  }
}
