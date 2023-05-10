// if( "fonts" in document ) {
//     var f1_medium = new FontFace("Inter", "url(Inter-Medium-hint-all.woff2) format('woff2'), url(Inter-Medium-hint-all.woff) format('woff')", { weight: "500" });
//     var f1_semiBold = new FontFace("Inter", "url(Inter-SemiBold-hint-all.woff2) format('woff2'), url(Inter-SemiBold-hint-all.woff) format('woff')", { weight: "600" });
//     var f1_bold = new FontFace("Inter", "url(Inter-Bold-hint-all.woff2) format('woff2'), url(Inter-Bold-hint-all.woff) format('woff')", { weight: "700" });

//     var f2_regular =  new FontFace("Koulen", "url(Koulen-Regular-hint-all.woff2) format('woff2'), url(Koulen-Regular-hint-all.woff) format('woff')", { weight: "400" });

//     Promise.all([ f1_medium.load(), f1_semiBold.load(), f1_bold.load(), f2_regular.load() ]).then(function(fonts) {
//         fonts.forEach(function(font) {
//             document.fonts.add(font);
//         });
//     });
// }