import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
	branch,
	clientId: "97f7881b-f3b2-4ced-b299-481d31c96e55", // Get this from tina.io
	token: "26294fb6c6080c25e494a9c703824c4fd00b9e2a", // Get this from tina.io
	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		tina: {
			mediaRoot: "",
			publicFolder: "public",
		},
	},
	schema: {
		collections: [
			{
				name: "post",
				label: "Posts",
				path: "content/blog",
				fields: [
					{
						type: "string",
						name: "title",
						label: "Title",
						isTitle: true,
						required: true,
					},
					{
						type: "datetime",
						name: "date",
						lable: "Date",
						required: false,
					},
					{
						type: "string",
						name: "location",
						label: "Location",
						required: false,
					},
					{
						type: "string",
						name: "tags",
						label: "Birds",
						list: true,
						required: false,
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
						templates: [
							{
								name: "image",
								label: "Image shortcode",
								match: {
									start: "{%",
									end: "%}",
								},
								fields: [
									{
										name: "_value",
										label: "uri",
										type: "string",
										required: true,
									},
									// {
									// 	name: "_value",
									// 	label: "alt",
									// 	type: "string",
									// 	required: true,
									// },
								],
							},
						],
					},
				],
			},
		],
	},
});
