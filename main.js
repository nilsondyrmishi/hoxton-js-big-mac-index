
let baseBigMackPrice = 5.66
let bigMackUsPrice = 5.66
let bigMackCanadaPrice = 6.77
let bigMackSwedenPrice = 52.00
let bigMackNorwayPrice = 57.00
let bigMackSwissPrice = 6.50
let bigMackIsraelPrice = 17.00

let swedenIndex =  bigMackSwedenPrice / baseBigMackPrice
let swissIndex = bigMackSwissPrice / baseBigMackPrice
let israelIndex =  bigMackIsraelPrice/  baseBigMackPrice
let norwayIndex =   bigMackNorwayPrice / baseBigMackPrice
let canadaIndex =  bigMackCanadaPrice / baseBigMackPrice


let swedenExchRate = (8.72 - swedenIndex) / swedenIndex *100
let canadaExchRate = (1.25- canadaIndex )/ canadaIndex * 100
let israelExchanRate = (3.30 -  israelIndex) / israelIndex *100
let norwayExchRate = (9.14 - norwayIndex ) / norwayIndex *100
let swissExchRate = (0.92- swissIndex ) / swissIndex * 100



console.log('USA Big Mac Prise is' + "US$" + bigMackUsPrice)
console.log('Switzerland Big Mac Prise is' + " SFR" +  bigMackSwissPrice + '& index  is: ' + swissExchRate.toFixed(0) )
console.log('Sweden Big Mac Prise is'+ " SKR" + bigMackSwedenPrice + ' & index  is: ' + swedenExchRate.toFixed(0))
console.log('Norway Big Mac Prise is' + " NKR" + bigMackNorwayPrice + ' & index  is:   ' + norwayExchRate.toFixed(0))
console.log('Canada  Big Mac Prise is' + " CAD" + bigMackCanadaPrice + ' & index is:  ' + canadaExchRate.toFixed(0))
console.log('Israel  Big Mac Prise is' + " ILS" +  bigMackIsraelPrice + ' & index is: ' + israelExchanRate.toFixed(0))
