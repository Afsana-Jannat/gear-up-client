import { getMyPayments } from '../payment/getMyPayments';
import { getMyRentals } from '../rental/getMyRentals';

export async function getCustomerOverview() {
  const [rentalRes, payments] = await Promise.all([
    getMyRentals(),
    getMyPayments(),
  ]);

  const rentals = rentalRes.data ?? [];

  const totalRentals = rentals.length;

  const activeRentals = rentals.filter(
    (r: any) => !['RETURNED', 'CANCELLED'].includes(r.status)
  ).length;

  const completedRentals = rentals.filter(
    (r: any) => r.status === 'RETURNED'
  ).length;

  const totalSpent = payments
    .filter((p) => p.status === 'COMPLETED')
    .reduce((sum, p) => sum + Number(p.amount), 0);

  return {
    rentals,
    totalRentals,
    activeRentals,
    completedRentals,
    totalSpent,
  };
}
