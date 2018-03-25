const getOptions = {
  headers: {
    Accept: 'application/json',
  },
  method: 'GET',
};
const deleteOptions = {
  method: 'DELETE',
};
const postOptions = extraOptions => ({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  method: 'POST',
  ...extraOptions,
});

export default {
  get: getOptions,
  delete: deleteOptions,
  post: postOptions,
};
