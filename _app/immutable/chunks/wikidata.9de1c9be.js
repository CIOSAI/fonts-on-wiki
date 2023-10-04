import{w as t}from"./index.209aea34.js";function a(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}const u=t(!0),d=t(),w=t({font:"",foundry:"",country:""}),s=`
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
`;async function e(){return(await(await fetch(`https://query.wikidata.org/sparql?format=json&query=${s}`)).json()).results.bindings}const o=t([]);e().then(n=>{o.set(n)});const c=n=>!n||/(http.*)|(Q[0-9]+)/.test(n.value);export{a as e,w as f,c as i,d as p,u as v,o as w};
