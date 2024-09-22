import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitResults } from './tools/activitySlice';

export default function A1({id}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(submitResults(id, 100));
  }, [dispatch, id]);

  return (
    <>
      <h2>Credit Cards</h2>
      <h3>What even is that?</h3>
      <img src="https://th.bing.com/th/id/OIP.ULyyx56kCC6NRhYboKVTGwHaE8?rs=1&pid=ImgDetMain" />
      <p>
        Imagine this: a credit card, your handy little financial tool to help
        you cover monthly expenses—like a personal assistant in your wallet.
        <br />
        But here's the real kicker: it's more than just a way to pay. It's a
        chance to master the art of borrowing! Think of it as a warm-up for
        future goals, like buying a car, owning a home, or even starting a
        business.
        <br />
        Why not start now? With lower risk and manageable payments, you can
        build your credit and sharpen those money skills for the bigger
        financial leaps down the road!
      </p>
    </>
  );
}
