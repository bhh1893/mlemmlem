export const notifyAdded = ''

export const notifyDup = () => toast('Already have a restaurant with this name!', {
  duration: 1200,
  position: 'top-center',
});

export const notifyEmpty = () => toast('Must add a restaurant name!', {
  duration: 1200,
  position: 'top-center',
});

export const notifyDelete = (errMessage) => toast(errMessage, {
  duration: 1200,
  position: 'top-center',
});

export const notifyUpdate = (editMessage) => toast(editMessage, {
  duration: 1200,
  position: 'top-center',
});