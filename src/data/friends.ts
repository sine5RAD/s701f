// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Alumopper",
		imgurl: "https://www.alumopper.top/assets/images/avatar.png",
		desc: "Alumopper的个人博客，她是一只可爱的猫猫狐",
		siteurl: "https://www.alumopper.top/",
		tags: ["Friend", "Blog"],
	},
	{
		id: 2,
		title: "言子的博客",
		imgurl: "https://www.maincand.top/favicon.svg",
		desc: " Hello World\nLet's change the world",
		siteurl: "https://www.maincand.top/",
		tags: ["Friend", "Blog"],
	},
	{
		id: 3,
		title: "HongLiu的小站",
		imgurl: "https://hongliu.icu/image/avator_1.jpg",
		desc: "做自己所爱的事，爱自己所做的事。",
		siteurl: "https://hongliu.icu",
		tags: ["Blog"],
	},
	{
		id: 4,
		title: "探求者",
		imgurl: "https://spartan-x125.github.io/avatar/avatar.jpg",
		desc: "23届的工大学长qwq",
		siteurl: "https://spartan-x125.github.io/",
		tags: ["Blog"],
	},
	{
		id: 5,
		title: "小涵Naiwenel",
		imgurl: "https://github.com/yuhan2680/yuhan2680/blob/main/%E5%A4%B4%E5%83%8F.jpg",
		desc: "以一灯燃百千灯，直至万灯皆明",
		siteurl: "https://naiwenel.com",
		tags: ["Friend", "Blog"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
