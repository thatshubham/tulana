const individualTech = [
	{ id: 'msft', name: 'Microsoft', spend: 115e9, color: '#00A4EF' },
	{ id: 'goog', name: 'Alphabet', spend: 185e9, color: '#EA4335' },
	{ id: 'amzn', name: 'Amazon', spend: 200e9, color: '#FF9900' },
	{ id: 'meta', name: 'Meta', spend: 115e9, color: '#0668E1' },
	{ id: 'orcl', name: 'Oracle', spend: 50e9, color: '#585858' },
	{ id: 'openai', name: 'Open AI', spend: 45e9, color: '#76B900' }
];

const techSum = individualTech.reduce((acc, curr) => acc + curr.spend, 0);

export const techData = [
	{ id: 'all', name: 'Big Tech (Combined)', spend: techSum, color: '#6750A4', isAggregate: true },
	...individualTech
];

export const countryData = [
	// HISTORIC PROJECTS (inflation adjusted?)
	{ name: 'Apollo Program (USA)', budget: 257e9, type: 'Historic', isInflationAdjusted: true },

	{
		name: 'ISS (Total Build Cost)',
		budget: 150e9 /* https://en.wikipedia.org/wiki/International_Space_Station_program#Cost */,
		type: 'Historic',
		isInflationAdjusted: true
	},

	// NATIONAL DEPARTMENTS
	{
		name: 'USA: Military (2026)',
		budget: 961e9 /* https://en.wikipedia.org/wiki/Military_budget_of_the_United_States */,
		type: 'Department'
	},
	{
		name: 'China: Military (2026)',
		budget: 542e9 /* https://www.lowyinstitute.org/the-interpreter/solving-puzzle-china-s-defence-spending */,
		type: 'Department'
	},
	{ name: 'India: Military', budget: 86e9, type: 'Department' },

	// GLOBAL GOALS (to put it in perspective)
	{
		name: 'End Global Malaria (Total)',
		budget: 120e9,
		type: 'Global Goal'
	} /* https://share.google/aimode/aHuC6tbbnT0qG6iKl */,
	{
		name: 'End World Hunger (Yearly)',
		budget: 93e9,
		/* https://news.un.org/en/story/2025/11/1166397 */ type: 'Global Goal'
	},


    // INFRA
	{ name: '3nm Chip Fab (Single Plant)', budget: 20e9, type: 'Infrastructure' },
    { name: 'CERN Operating Budget (Yearly)', budget: 1.5e9, type: 'Infrastructure' },

	// COUNTRIES BUDGETS EXPENDITURES
	{
		name: 'Germany',
		budget: 607e9,
		type: 'Country (Budget Expenditure)'
	} /* https://uk.finance.yahoo.com/news/factbox-highlights-germanys-2026-budget-083235164.html */,
	{
		name: 'Japan',
		budget: 780e9,
		type: 'Country (Budget Expenditure)'
	} /* https://www3.nhk.or.jp/nhkworld/en/news/20251226_07/ */,
	{ name: 'France', budget: 996e9, type: 'Country (Budget Expenditure)' },
	{
		name: 'India',
		budget: 630e9,
		type: 'Country (Budget Expenditure)'
	} /* https://en.wikipedia.org/wiki/Union_budget_of_India */,
	{
		name: 'UK',
		budget: 1900e9,
		type: 'Country (Budget Expenditure)'
	} /* https://en.wikipedia.org/wiki/Budget_of_the_United_Kingdom#List_of_budgets */
];
