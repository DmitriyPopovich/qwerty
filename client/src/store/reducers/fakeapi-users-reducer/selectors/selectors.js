export const getUserStatus = (state) => state?.fakeapi?.status || false;
export const getUserError = (state) => state?.fakeapi?.error || false;
export const getUsersData = (state) => state?.fakeapi?.users || [];
export const getCartData = (state) => state?.fakeapi?.cartUsers || [];
export const getCartTotal = (state) =>
  state?.fakeapi?.cartUsers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.count;
  }, 0) || 0;
