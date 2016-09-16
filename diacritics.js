var Diacritics = function() {

	var diacriticsMap = {
		"A" : "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ",
		"AA" : "Ꜳ",
		"AE" : "ÆǼǢ",
		"AO" : "Ꜵ",
		"AU" : "Ꜷ",
		"AV" : "ꜸꜺ",
		"AY" : "Ꜽ",
		"B" : "BⒷＢḂḄḆɃƂƁ",
		"C" : "CⒸＣĆĈĊČÇḈƇȻꜾ",
		"D" : "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ",
		"DZ" : "ǱǄ",
		"Dz" : "ǲǅ",
		"E" : "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ",
		"F" : "FⒻＦḞƑꝻ",
		"G" : "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ",
		"H" : "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ",
		"I" : "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ",
		"J" : "JⒿＪĴɈ",
		"K" : "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ",
		"L" : "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ",
		"LJ" : "Ǉ",
		"Lj" : "ǈ",
		"M" : "MⓂＭḾṀṂⱮƜ",
		"N" : "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ",
		"NJ" : "Ǌ",
		"Nj" : "ǋ",
		"O" : "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ",
		"OI" : "Ƣ",
		"OO" : "Ꝏ",
		"OU" : "Ȣ",
		"OE" : "Œ",
		"oe" : "œ",
		"P" : "PⓅＰṔṖƤⱣꝐꝒꝔ",
		"Q" : "QⓆＱꝖꝘɊ",
		"R" : "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ",
		"S" : "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ",
		"T" : "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ",
		"TZ" : "Ꜩ",
		"U" : "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ",
		"V" : "VⓋＶṼṾƲꝞɅ",
		"VY" : "Ꝡ",
		"W" : "WⓌＷẀẂŴẆẄẈⱲ",
		"X" : "XⓍＸẊẌ",
		"Y" : "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ",
		"Z" : "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ",
		"a" : "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ",
		"aa" : "ꜳ",
		"ae" : "æǽǣ",
		"ao" : "ꜵ",
		"au" : "ꜷ",
		"av" : "ꜹꜻ",
		"ay" : "ꜽ",
		"b" : "bⓑｂḃḅḇƀƃɓ",
		"c" : "cⓒｃćĉċčçḉƈȼꜿↄ",
		"d" : "dⓓｄḋďḍḑḓḏđƌɖɗꝺ",
		"dz" : "ǳǆ",
		"e" : "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ",
		"f" : "fⓕｆḟƒꝼ",
		"g" : "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ",
		"h" : "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ",
		"hv" : "ƕ",
		"i" : "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı",
		"j" : "jⓙｊĵǰɉ",
		"k" : "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ",
		"l" : "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ",
		"lj" : "ǉ",
		"m" : "mⓜｍḿṁṃɱɯ",
		"n" : "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ",
		"nj" : "ǌ",
		"o" : "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ",
		"oi" : "ƣ",
		"ou" : "ȣ",
		"oo" : "ꝏ",
		"p" : "pⓟｐṕṗƥᵽꝑꝓꝕ",
		"q" : "qⓠｑɋꝗꝙ",
		"r" : "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ",
		"s" : "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ",
		"t" : "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ",
		"tz" : "ꜩ",
		"u" : "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ",
		"v" : "vⓥｖṽṿʋꝟʌ",
		"vy" : "ꝡ",
		"w" : "wⓦｗẁẃŵẇẅẘẉⱳ",
		"x" : "xⓧｘẋẍ",
		"y" : "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ",
		"z" : "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
	};

    var replacements = {};
    for (var key of Object.keys(diacriticsMap)) {
		var chars = diacriticsMap[key]
		for (var i = 0; i < chars.length; i++) {
			replacements[chars[i]] = key;
		}
    }

	return {
		remove: function(str) {
			return str.replace(/[^\u0000-\u007E]/g, function(c){ 
			   return replacements[c] || c;
			});
		}
	};
	
}();
