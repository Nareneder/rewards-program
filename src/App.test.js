import { calculatePoints } from './utils/rewards';

describe('Reward Points Calculation', () => {
  test('calculates 90 points for a $120 purchase', () => {
    expect(calculatePoints(120)).toBe(90);
  });

  test('calculates 0 points for a $50 purchase', () => {
    expect(calculatePoints(50)).toBe(0);
  });

  test('calculates 25 points for a $75 purchase', () => {
    expect(calculatePoints(75)).toBe(25);
  });

  test('handles decimal values correctly (100.2 -> 50 pts)', () => {
    expect(calculatePoints(100.2)).toBe(50);
  });

  test('handles values over 100 with decimals (120.9 -> 90 pts)', () => {
    expect(calculatePoints(120.9)).toBe(90);
  });
});