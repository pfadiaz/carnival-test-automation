import { test, expect } from '@/fixtures/pages'
import { bookingCruise } from '@/test-data/booking-flow'
import * as enums from '@/enums'

test('TC-001: Validate that a user can run a search for trips to Bahamas between 6 to 9 days', async ({
  page,
  homePage,
  cruiseSearchPage,
}) => {
  await homePage.goto()
  const bookingData = await bookingCruise()
  await homePage.searchForCruises()
  await page.waitForURL('**/cruise-search?**')
  await expect(await cruiseSearchPage.tripResults).toBeVisible()
  await expect(await cruiseSearchPage.nthResultFromGrid(enums.Consecutives.First)).toContainText(
    bookingData.cruises.fromTampa
  )
  await expect(await cruiseSearchPage.nthResultFromGrid(enums.Consecutives.Second)).toContainText(
    bookingData.cruises.fromTampa2
  )
})

test('TC-002: Validate that a user can filter by price, using the slider bar ', async ({ cruiseSearchPage }) => {
  await cruiseSearchPage.goTo()
  await cruiseSearchPage.filterPriceWithSlider()
  const bookingData = await bookingCruise()
  await expect(await cruiseSearchPage.nthResultFromGrid(enums.Consecutives.First)).toContainText(
    bookingData.cruises.fromTampa
  )
  await expect(await cruiseSearchPage.nthResultFromGrid(enums.Consecutives.Second)).toContainText(
    bookingData.cruises.fromTampa2
  )
  await expect(await cruiseSearchPage.nthResultFromGrid(enums.Consecutives.Third)).not.toBeVisible()
})

test('TC-003: Validate that a user can sort by price hight to low and low to high', async ({ cruiseSearchPage }) => {
  const bookingData = await bookingCruise()
  await cruiseSearchPage.goTo()
  await expect(await cruiseSearchPage.tripResults).toBeVisible()
  await expect(await cruiseSearchPage.nthResultFromGrid(enums.Consecutives.First)).toContainText(
    bookingData.cruises.fromTampa
  )
  await expect(await cruiseSearchPage.nthResultFromGrid(enums.Consecutives.Second)).toContainText(
    bookingData.cruises.fromTampa2
  )
  await expect(await cruiseSearchPage.nthResultFromGrid(enums.Consecutives.Third)).toContainText(
    bookingData.cruises.fromJacksonville
  )
  await cruiseSearchPage.sortPriceHighToLow()
  await expect(await cruiseSearchPage.nthResultFromGrid(enums.Consecutives.First)).toContainText(
    bookingData.cruises.fromJacksonville
  )
  await expect(await cruiseSearchPage.nthResultFromGrid(enums.Consecutives.Second)).toContainText(
    bookingData.cruises.fromTampa2
  )
  await expect(await cruiseSearchPage.nthResultFromGrid(enums.Consecutives.Third)).toContainText(
    bookingData.cruises.fromTampa
  )
})
