/*
  @dest: 使用配置文件
  @Author: tree
 */
module.exports = {
	npmUrl: 'https://registry.npmjs.org/parcel-vue-cli',
	promptTypeList: [
		{
			type: 'list',
			message: 'Please select the template type to pull:',
			name: 'type',
			choices: [
				{
					name: 'parcel-vue-app@1.0.6',
					value: {
						url: 'https://github.com/maomincoding/parcel-vue-app.git',
						gitName: 'parcel-vue-app',
						val: 'parcel-vue-app',
					},
				},
			],
		},
	],
};
