import * as enums from '@/enums'
export const bookingCruise = async () => {
  return {
    sailTo: {
      Bahamas: enums.SailToLocations.Bahamas
    },
    sailFrom: {
      Jacksonville: enums.SailFromLocations.Jacksonville,
      Miami: enums.SailFromLocations.Miami,
      Tampa: enums.SailFromLocations.Tampa,
    },
    dates: {
      begin: enums.Months.January,
      end: enums.Months.December
    },
    cruises: {
      fromTampa: enums.Cruises.fromTampa,
      fromTampa2: enums.Cruises.fromTampa,
      fromJacksonville: enums.Cruises.fromJacksonville
    }
  }
}
