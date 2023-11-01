const settings = {
  graphql: {
    uri: 'http://www.fingarden.ru',
  },
  meta: {
    rootUrl: 'http://www.fingarden.ru',
    title: 'Fingarden',
    description: 'Fingarden, где вы найдете удовольствие',
    social: {
      graphic:
        'https://cheatcode-assets.s3.amazonaws.com/default-social-graphic.png',
      twitter: '@fingarden',
    },
  },
  routes: {
    authenticated: {
      pathAfterFailure: '/',
    },
    public: {
      pathAfterFailure: '/',
    },
  },
};

export { settings };
