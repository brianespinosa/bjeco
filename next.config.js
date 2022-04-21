module.exports = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        destination: '/calc/cutting-board',
        permanent: true,
        source: '/calc',
      },
    ];
  },
};
