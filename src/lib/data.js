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

	{
		name: 'USA Interstate Highway System (Total Build Cost)',
		budget: 634e9,
		type: 'Historic',
		isInflationAdjusted: true
	},

	{
		name: 'Global Coffee Market (Value)',
		budget: 285e9,
		type: 'Historic',
		isCommodity: true
	},
	{
		name: 'Global Video Game Market (Value)',
		budget: 560e9,
		type: 'Historic',
		isCommodity: true
	},

	{
		name: 'Kashagan Oil Field - The most expensive offshore oil project',
		budget: 116e9,
		type: 'Historic',
		isInflationAdjusted: true
	},
	{
		name: 'Rio Olympic Games (Summer 2016)',
		budget: 20e9,
		type: 'Historic',
		isInflationAdjusted: true
	},
	{
		name: 'FIFA World Cup in Qatar (2022)',
		budget: 220e9,
		type: 'Historic',
		isInflationAdjusted: true
	},

	{
		name: 'Panama Canal (Construction)',
		budget: 15e9,
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
	{ name: 'India: Military (2026)', budget: 86e9, type: 'Department' },

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
	{
		name: 'Universal Access to Safe Water & Sanitation',
		budget: 140e9,
		type: 'Global Goal'
	},

	// INFRA
	{ name: '3nm Chip Fab (Single Plant)', budget: 20e9, type: 'infrastructure'},
	{ name: 'CERN Operating Budget', budget: 1.5e9, type: 'Global Goal' },

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
	} /* https://en.wikipedia.org/wiki/Budget_of_the_United_Kingdom#List_of_budgets */,
	{
		name: 'China',
		budget: 6100e9 /* https://en.wikipedia.org/wiki/List_of_countries_by_government_budget onwards */,
		type: 'Country (Budget Expenditure)'
	},
	{
		name: 'Russia',
		budget: 815e9,
		type: 'Country (Budget Expenditure)'
	},
	{
		name: 'Brazil',
		budget: 1200e9,
		type: 'Country (Budget Expenditure)'
	},
	{
		name: 'Canada',
		budget: 420e9,
		type: 'Country (Budget Expenditure)'
	},
	{
		name: 'Spain',
		budget: 215e9,
		type: 'Country (Budget Expenditure)'
	},
	{
		name: 'Australia',
		budget: 500e9,
		type: 'Country (Budget Expenditure)'
	},
	{
		name: 'Mexico',
		budget: 547e9,
		type: 'Country (Budget Expenditure)'
	},
	{
		name: 'Turkey',
		budget: 452e9,
		type: 'Country (Budget Expenditure)'
	},
	{
		name: 'South Korea',
		budget: 498e9,
		type: 'Country (Budget Expenditure)'
	},
	,
	{
		name: 'Poland',
		budget: 224e9,
		type: 'Country (Budget Expenditure)'
	},

	{
		name: 'Belgium',
		budget: 200e9,
		type: 'Country (Budget Expenditure)'
	},
	{
		name: 'Saudi Arabia',
		budget: 350e9,
		type: 'Country (Budget Expenditure)'
	},
	{
		name: 'Switzerland',
		budget: 107e9,
		type: 'Country (Budget Expenditure)'
	},
	{
		name: 'Sweden',
		budget: 164e9,
		type: 'Country (Budget Expenditure)'
	},
	{
		name: 'Austria',
		budget: 123e9,
		type: 'Country (Budget Expenditure)'
	},
	{
		name: 'Indonesia',
		budget: 236e9,
		type: 'Country (Budget Expenditure)'
	},
	{
		name: 'Norway',
		budget: 200e9,
		type: 'Country (Budget Expenditure)'
	},
	{
		name: 'India',
		budget: 650e9,
		type: 'Country (Budget Expenditure)'
	}
];
