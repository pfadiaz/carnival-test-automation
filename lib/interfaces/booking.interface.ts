import { SailToLocations, SailFromLocations, Months } from '@/enums'

export interface CruiseOptions {
  cruises: {
    fromTampa: string
    fromTampa2: string
    fromJacksonville: string
  }
  sailTo?: {
    Bahamas: SailToLocations
  }
  sailFrom?: {
    Jacksonville: SailFromLocations
    Miami: SailFromLocations
    Tampa: SailFromLocations
  }
  dates?: {
    begin: Months
    end: Months
  }
}
