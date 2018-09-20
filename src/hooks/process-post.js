
// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { data } = context;

    if(!data.text) {
      throw new Error('A message must have a text');
    }

    const user = context.params.user;
    const text = context.data.text.substring(0, 400);

    context.data = {
      text,
      email: user.email,
      createdAt: new Date()
    };

    return context;
  };
};
