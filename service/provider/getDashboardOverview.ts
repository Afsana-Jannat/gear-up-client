import { getMyGears } from './getMyGears';
import { getRentalRequests } from './getRentalRequest';

export async function getDashboardOverview() {
  const [gears, rentals] = await Promise.all([
    getMyGears(),
    getRentalRequests(),
  ]);

  return {
    totalGear: gears.length,

    pendingRequests: rentals.filter((r) => r.status === 'PLACED').length,

    activeRentals: rentals.filter((r) => r.status === 'PICKED_UP').length,

    returnedRentals: rentals.filter((r) => r.status === 'RETURNED').length,

    rentals,
  };
}
