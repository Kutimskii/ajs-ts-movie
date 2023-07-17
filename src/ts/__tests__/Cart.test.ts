import Cart from '../service/Cart';
import Movie from '../domain/Movie';
test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('add card Movie', () => {
  const cart = new Cart();
  cart.add(new Movie(1009, 'The Avengers', 2012, 'USA','Avengers Assemble!','fantasy', 137, 2500));
  expect(cart.items.length).toBe(1);
});