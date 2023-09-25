import { readable } from 'svelte/store';

const QUERY = `
select distinct ?font ?fontLabel ?sample ?foundry ?foundryLabel ?countryOfOperation ?countryOfOperationLabel ?website
where {
  ?font wdt:P31/wdt:P279* wd:Q17451;
        wdt:P4586         ?foundry.
  
  optional { ?font    wdt:P18  ?sample. }
  optional { ?foundry wdt:P17  ?countryOfOperation. }
  optional { ?foundry wdt:P856 ?website. }
  
  service wikibase:label { bd:serviceParam wikibase:language "en". }
}
order by ?fontLabel
`;

async function getData() {
	const res = await fetch(`https://query.wikidata.org/sparql?format=json&query=${QUERY}`);
	const json = await res.json();
	return json.results.bindings as FontEntry[];
}

interface WkdUri {
	type: 'uri';
	value: string;
}
interface WkdLiteral {
	'xml:lang': 'en';
	type: 'literal';
	value: string;
}
interface FontEntry {
	font: WkdUri;
	sample: WkdUri;
	foundry: WkdUri;
	countryOfOperation: WkdUri;
	fontLabel: WkdLiteral;
	foundryLabel: WkdLiteral;
	countryOfOperationLabel: WkdLiteral;
	website: WkdUri;
}

export const wikifonts = readable(await getData());
export const isMissing = (col: WkdLiteral) => {
	return !col || /(http.*)|(Q[0-9]+)/.test(col.value);
};
export type { FontEntry };
