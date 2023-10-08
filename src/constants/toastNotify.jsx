import toast, { Toaster } from 'react-hot-toast';

export const notifyAdded = () => toast('Rating Added!', {
  duration: 750,
  position: 'top-center',
});

export const notifyDup = () => toast('Already have a restaurant with this name!', {
  duration: 750,
  position: 'top-center',
});

export const notifyEmpty = () => toast('Must add a restaurant name!', {
  duration: 750,
  position: 'top-center',
});