// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "javascript",
		name: "JavaScript",
		description: "JavaScript",
		icon: "logos:javascript",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 6 },
		projects: ["造梦谷"],
		color: "#F7DF1E",
	},
	{
		id: "typescript",
		name: "TypeScript",
		description: "类型安全的JS",
		icon: "logos:typescript-icon",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 6 },
		projects: ["造梦谷"],
		color: "#3178C6",
	},
	{
		id: "vue",
		name: "Vue.js",
		description:
			"A progressive JavaScript framework that is easy to learn and use, suitable for rapid development.",
		icon: "logos:vue",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 9 },
		projects: ["这个网站"],
		color: "#4FC08D",
	},
	{
		id: "python",
		name: "Python",
		description:
			"A general-purpose programming language suitable for web development, data analysis, machine learning, and more.",
		icon: "logos:python",
		category: "backend",
		level: "beginner",
		experience: { years: 5, months: 1 },
		color: "#3776AB",
	},
	{
		id: "java",
		name: "Java",
		description: "垃圾语言，毁我青春",
		icon: "logos:java",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: [],
		color: "#ED8B00",
	},
	{
		id: "csharp",
		name: "C#",
		description:
			"A modern object-oriented programming language developed by Microsoft, suitable for the .NET ecosystem.",
		icon: "devicon:csharp",
		category: "backend",
		level: "advanced",
		experience: { years: 1, months: 6 },
		projects: ["长夜难明", "The War of Mystery"],
		color: "#239120",
	},
	{
		id: "cpp",
		name: "C++",
		description: "下辈子再也不打算竞了",
		icon: "logos:c-plusplus",
		category: "backend",
		level: "intermediate",
		experience: { years: 7, months: 9 },
		projects: [],
		color: "#00599C",
	},
	{
		id: "c",
		name: "C",
		description: "同C++",
		icon: "logos:c",
		category: "backend",
		level: "intermediate",
		experience: { years: 7, months: 9 },
		projects: [],
		color: "#A8B9CC",
	},
	// Tools
	{
		id: "unity",
		name: "Unity",
		description: "沉没成本，49入国军",
		icon: "logos:unity",
		category: "tools",
		level: "advanced",
		experience: { years: 1, months: 6 },
		projects: ["长夜难明", "The War of Mystery"],
		color: "#000000",
	},
	{
		id: "git",
		name: "Git",
		description:
			"A distributed version control system, an essential tool for code management and team collaboration.",
		icon: "logos:git-icon",
		category: "tools",
		level: "advanced",
		experience: { years: 1, months: 5 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"A lightweight but powerful code editor with a rich plugin ecosystem.",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 9 },
		color: "#007ACC",
	},
	{
		id: "intellij",
		name: "IntelliJ IDEA",
		description: "别让我用java，求你了",
		icon: "logos:intellij-idea",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["java-enterprise", "spring-boot-app"],
		color: "#616161", // 更改为深灰色，避免纯黑色
	},
	{
		id: "nginx",
		name: "Nginx",
		description: "A high-performance web server and reverse proxy server.",
		icon: "logos:nginx",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 1 },
		projects: ["这个网站"],
		color: "#009639",
	},
	{
		id: "linux",
		name: "Linux",
		description:
			"An open-source operating system, the preferred choice for server deployment and development environments.",
		icon: "logos:linux-tux",
		category: "tools",
		level: "beginner",
		experience: { years: 2, months: 0 },
		projects: ["这个网站"],
		color: "#FCC624",
	},
	{
		id: "photoshop",
		name: "Photoshop",
		description: "我也要画画嘛",
		icon: "logos:adobe-photoshop",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 4 },
		projects: ["长夜难明"],
		color: "#31A8FF",
	},

	// Other Skills
	{
		id: "jialichuang",
		name: "嘉立创EDA",
		description: "画板子的",
		icon: "logos:circuit",
		category: "other",
		level: "beginner",
		experience: { years: 0, months: 3 },
		projects: ["电赛的小车？"],
		color: "#FF6F61",
	},
];
