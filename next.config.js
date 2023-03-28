module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/slack/",
        destination: "https://slack.com/api/",
      },
    ];
  },
};
