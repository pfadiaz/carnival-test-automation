import * as enums from '@/enums'
export const bookingCruise = async () => {
  return {
    sailTo: {
      Bahamas: enums.SailToLocations.Bahamas,
    },
    sailFrom: {
      Jacksonville: enums.SailFromLocations.Jacksonville,
      Miami: enums.SailFromLocations.Miami,
      Tampa: enums.SailFromLocations.Tampa,
    },
    dates: {
      begin: enums.Months.January,
      end: enums.Months.December,
    },
    cruises: {
      fromTampa: enums.Cruises.fromTampa,
      fromTampa2: enums.Cruises.fromTampa,
      fromJacksonville: enums.Cruises.fromJacksonville,
    },
    itinerary:
      [{
        title: "Day 1: Tampa",
        description: 'Set sail from Florida’s Gulf Coast and you’ll discover just how convenient — and action-packed — cruises out of Tampa can be. Welcome to one of Florida’s busiest ports — where the historically Cuban district'
      },
      {
        title: "Day 2: Fun Day at Sea",
        description: 'No port today! It’s a great time to explore your ship and its exciting entertainment, food and activities! Or take it easy at the pool, spa, or... if you book a room with a balcony, enjoy the waves.'
      },
      {
        title: "Day 3: Key West",
        description: 'Cruises to Key West are packed with coastal-town energy and layers of American history just waiting to be discovered. Enjoy a laidback Caribbean vibe with a dash of the high life on Carnival cruises'
      },
      {
        title: "Day 4: Celebration Key",
        description: `Now — for the first time ever! — we're building a new destination from the ground-up. And this one, nestled on the south side of Grand Bahama island, is designed exclusively for Carnival guests. It's`
      },
      {
        title: "Day 5: Nassau",
        description: `Sightseeing, swimming and soaking up the island flavor — it's all yours for the taking on a Carnival cruise to Nassau, Bahamas. Boasting balmy breezes and jumping to a bouncy calypso beat, Nassau promises`
      },
      {
        title: "Day 6: Fun Day at Sea",
        description: 'No port today! It’s a great time to explore your ship and its exciting entertainment, food and activities! Or take it easy at the pool, spa, or... if you book a room with a balcony, enjoy the waves'
      }]
  }
}
