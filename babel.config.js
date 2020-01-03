module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  // presets: [
  //   [
  //     "@vue/app",
  //     {
  //       useBuiltIns: "entry"
  //     }
  //   ]
  // ],
  // presets: [
  //   [
  //     "@vue/app",
  //     {
  //       polyfills: ["es6.promise", "es6.symbol"]
  //     }
  //   ]
  // ],
  // iview的配置
  // plugins: [
  //   [
  //     "import",
  //     {
  //       libraryName: "view-design",
  //       libraryDirectory: "src/components"
  //     }
  //   ]
  // ]
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true
      },
      "vant"
    ]
  ]
};
