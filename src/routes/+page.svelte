<svelte:head>
	<title>Tulana | Compare Big Tech AI Spending versus World Budgets</title>
	<meta name="title" content="Tulana | AI Spending versus World Budgets & Megaprojects" />
	<meta name="description" content="An interactive visualization of 2026 AI CapEx projections. Compare Big Tech infrastructure spending against 100+ national budgets and historic human projects" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://tulana.thatshubham.com" />
	<meta property="og:title" content="Tulana | The Scale of AI Spending" />
	<meta property="og:description" content="Visualize how AI spending compares to the Apollo Program, National Defense and Global Budgets" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://tulana.thatshubham.com" />
	<meta property="twitter:title" content="Tulana | The Scale of AI Spending" />
	<meta property="twitter:description" content="Visualize how AI spending compares to the Apollo Program, National Defense and Global Budgets" />
</svelte:head>

<script>
// @ts-nocheck
  
	import { techData, countryData } from '$lib/data';
	import { spring } from 'svelte/motion';
	import { domToPng } from 'modern-screenshot';
	import { Download, Search, Building2, Globe, Sun, Moon, Info } from 'lucide-svelte';

	let selectedTech = techData[0];
	let selectedCountry = countryData[0];
	let searchQuery = "";
	let isDarkMode = false;
	/**
	 * @type {HTMLDivElement}
	 */
	let captureZone;

	$: filtered = countryData.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));
	$: categories = [...new Set(countryData.map(c => c.type))];

	$: ratio = selectedTech.spend / selectedCountry.budget; // calculate ratio
	$: isHistorical = selectedCountry.isInflationAdjusted;
	$: isCommodity = selectedCountry.isCommodity;
	$: afterVerb = selectedCountry.afterVerb;
	$: comparisonVerb = ratio >= 1 ? "exceeds" : "represents";
	$: multiplierText = ratio >= 1 ? `${ratio.toFixed(1)}x the` : `${Math.round(ratio * 100)}% of`;

	const displayVal = spring(0, { stiffness: 0.1, damping: 0.6 });
	$: displayVal.set((selectedTech.spend / selectedCountry.budget) * 100);
	$: charCount = Math.round($displayVal).toLocaleString().length;
	$: dynamicFontSize = charCount <= 3 ? "clamp(4rem, 15vw, 9rem)" : charCount <= 5 ? "6rem" : "4rem";

	async function exportAsset() {
		const dataUrl = await domToPng(captureZone, { scale: 3, backgroundColor: isDarkMode ? '#000' : '#fff' });
		const link = document.createElement('a');
		link.download = `tulana-${selectedTech.name}-vs-${selectedCountry.name}.png`; /* custom name for the compared elements */
		link.href = dataUrl;
		link.click();
	}
	
</script>

<div class={isDarkMode ? 'dark' : ''}>
	<main class="min-h-screen bg-orange-100/50  text-[#1D1B20]  transition-all p-4 md:p-8 font-sans">
		
		
		<nav class="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center mb-10 border-b pb-4 border-gray-300">
			<div class="flex items-baseline gap-2">
				<div class="w-10 h-10 rounded-2xl bg-indigo-700 text-white flex items-center justify-center font-black shadow-xl">T</div>
				<h1 class="text-2xl font-black italic tracking-tighter uppercase">Tulana</h1>
                <span class="text-xl font-base italic tracking-tighter">
                    by
                    </span>
                    <a href="https://thatshubham.com" target="_blank" class="text-gray-600 text-2xl font-bold italic tracking-tighter hover:underline">thatshubham</a>
			</div>
            <div class="flex items-center gap-2">
                <a href="https://github.com/thatshubham/tulana" target="_blank" class="text-gray-600 text-sm font-base italic tracking-tighter hover:underline">github</a>
                 <span class="text-sm font-base italic tracking-tighter">|</span>

                <span class="text-sm font-base italic tracking-tighter">Toggle dark mode for comparison</span>
                <button on:click={() => isDarkMode = !isDarkMode} class="p-3 rounded-2xl bg-black/5 dark:bg-white/10 hover:scale-110 transition-transform">
				{#if isDarkMode}<Sun size={20}/>{:else}<Moon size={20}/>{/if}
			</button>
             
            </div>
			
		</nav>

		<div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
			
		
			<div class="lg:col-span-3 space-y-3">
				<p class="text-[10px] font-black opacity-40 uppercase tracking-widest mb-4 flex items-center gap-2"><Building2 size={12}/> AI CapEx Projection for 2026</p>
				{#each techData as tech}
					<button 
						on:click={() => selectedTech = tech}
						class="w-full p-4 rounded-3xl border text-left transition-all 
						{selectedTech.id === tech.id ? 'bg-indigo-700 text-white border-indigo-700 shadow-xl scale-[1.02]' : 'bg-black/5 dark:bg-white/5 border-transparent hover:border-black/10'}">
						<span class="text-[10px] font-bold opacity-60 uppercase">{tech.name}</span>
						<span class="block text-xl font-black">${(tech.spend/1e9).toFixed(0)}B</span>
					</button>
				{/each}
			</div>

			
			<div class="lg:col-span-6 flex flex-col items-center gap-8">
				<div 
					bind:this={captureZone}
					class="w-full aspect-square rounded-[64px] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden transition-colors
					{isDarkMode ? 'bg-[#111] border text-white border-white/10' : 'bg-white border border-black/5 shadow-2xl shadow-purple-900/5'}">
					
					<div class="absolute top-6 left-6 md:top-12 md:left-12 opacity-30 font-black text-xs tracking-[0.4em]">TULANA</div>

					<div class="font-black tracking-tighter tabular-nums leading-[0.85] text-center" style="font-size: {dynamicFontSize}">
						{Math.round($displayVal).toLocaleString()}<span class="opacity-20 text-[0.4em] ml-1">%</span>
					</div>

					<div class="mt-8 max-w-md text-2xl leading-tight font-bold tracking-tight md:text-3xl">
						<span style="color: {selectedTech.color}">{selectedTech.name}'s</span>
						AI spend
						<span class="font-normal italic opacity-60">{comparisonVerb}</span>
						<span class="mt-1 font-black">{multiplierText}</span>
						<span class="opacity-80">{afterVerb}
							</span>
						<span>
							{isCommodity ? 'value' : 'budget expenditure'} of <br>	</span>
							
							<span class="text-orange-700">{selectedCountry.name}.</span>
					</div>

					<div class="mt-12 w-48 h-1.5 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
						<div class="h-full bg-indigo-700 transition-all duration-700" style="width: {Math.min(100, $displayVal)}%"></div>
					</div>
				</div>

				<button on:click={exportAsset} class="cursor-pointer px-12 py-5 bg-indigo-700 hover:bg-indigo-900 text-white rounded-full font-bold flex items-center gap-3 active:scale-95 transition-all">
					<Download size={20} /> Export PNG Asset
				</button>
			</div>

			<div class="lg:col-span-3 flex flex-col h-[85vh]">
				<p class="text-[10px] font-black opacity-40 uppercase tracking-widest mb-4 flex items-center gap-2"><Globe size={12}/> Global Context</p>
				<div class="relative mb-6">
					<Search class="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" size={16}/>
					<input bind:value={searchQuery} placeholder="Search items..." class="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-indigo-700 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none transition-all" />
				</div>
				
				<div class="overflow-y-auto space-y-1 pr-2 custom-scroll">
					{#each categories as category}
						{#if filtered.some(c => c.type === category)}
							<div class="bg-orange-200/25 rounded-xl p-2 mb-4">
								<h4 class="py-2 text-[10px] font-black text-indigo-600/60 uppercase tracking-widest mb-3 px-2">{category}</h4>
								<div class="space-y-6">
									{#each filtered.filter(c => c.type === category) as country}
										<button title={country.name}
											on:click={() => selectedCountry = country}
											class="w-full px-4 py-2 rounded-lg border transition-all text-left
											{selectedCountry.name === country.name ? 'text-xl bg-white border-indigo-300 shadow-md tracking-tight' : 'text-sm bg-transparent border-transparent hover:bg-black/5'}">
											<span class="font-bold block truncate">{country.name}</span>
											<span class="text-xs opacity-75 font-mono tracking-tighter">${(country.budget/1e9).toFixed(1)}B</span>
										</button>
									{/each}
								</div>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</main>
</div>

<style>
	.custom-scroll::-webkit-scrollbar { width: 3px; }
	.custom-scroll::-webkit-scrollbar-thumb { background: #6750A433; border-radius: 10px; }
</style>