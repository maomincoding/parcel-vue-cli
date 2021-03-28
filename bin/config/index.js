/*
  @dest: 使用配置文件
  @Author: tree
 */
module.exports = {
  npmUrl: "https://registry.npmjs.org/parcel-vue-cli",
  promptTypeList: [
    {
      type: "list",
      message: "请选择拉取的模版类型:",
      name: "type",
      choices: [
        {
          name: "parcel-vue-app",
          value: {
            url: "https://github.com/maomincoding/parcel-vue-app.git",
            gitName: "parcel-vue-app",
            val: "parcel-vue-app",
          },
        },
      ],
    },
  ],
};
