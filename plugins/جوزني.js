const dir = [
  'https://telegra.ph/file/4f805281315d8ad33abfd.jpg', 
  'https://telegra.ph/file/1f00622efc787d6240b6b.jpg',     
  'https://telegra.ph/file/ff7036430eaa9aaabf8e4.jpg', 
  'https://telegra.ph/file/13c57628ef4b885161de2.jpg',     
  'https://telegra.ph/file/fa2fd146969ce49f4759b.jpg', 
  'https://telegra.ph/file/539bfd6b48a1d2e23035d.jpg', 
  'https://telegra.ph/file/b9fc47a89d3db3b833755.jpg', 
  'https://telegra.ph/file/ee5a73e8d3019b09d4144.jpg', 
  'https://telegra.ph/file/2b4327912ac66be55550d.jpg', 
  'https://telegra.ph/file/d13700835c5d478a6744d.jpg', 
  'https://telegra.ph/file/72a62110f705ee9c9550f.jpg', 
  'https://telegra.ph/file/f6f495f551f743651994e.jpg', 
  'https://telegra.ph/file/5a6f4c5cd255893b9d880.jpg', 
  'https://telegra.ph/file/c07b75c480b677b6253ff.jpg', 
  'https://telegra.ph/file/b693151f5e2c07eb0cf65.jpg', 
  'https://telegra.ph/file/e29d247dac13e90a4a600.jpg',     
  'https://telegra.ph/file/d59456c26505fb3e19c48.jpg', 
  'https://telegra.ph/file/4add2ad589a6631ec1372.jpg',     
  'https://telegra.ph/file/676d757c06476ec31f6ad.jpg', 
  'https://telegra.ph/file/0d9bf239d329884688177.jpg', 
  'https://telegra.ph/file/28e97c1932574767b3151.jpg', 
  'https://telegra.ph/file/8d8d130d31d7a5acccd74.jpg', 
  'https://telegra.ph/file/5aebd6fd0a76a62f755de.jpg', 
  'https://telegra.ph/file/65f2350d91471ec32ad97.jpg', 
  'https://telegra.ph/file/2fd3097f5c58a0db57f83.jpg', 
  'https://telegra.ph/file/77f4c26a24ad3e052eae7.jpg', 
  'https://telegra.ph/file/850653675e2dacccf7c58.jpg', 
  'https://telegra.ph/file/739a74745a21e169044d4.jpg', 
  'https://telegra.ph/file/5f2ef6f73473dd990e7c2.jpg', 
  'https://telegra.ph/file/e0a68c0963a1322c10500.jpg', 
  'https://telegra.ph/file/984a36325fe5717edbddb.jpg', 
  'https://telegra.ph/file/aef3ce6926fe1afcb83da.jpg', 
  'https://telegra.ph/file/02bbec479cc19afd2e140.jpg',      
  'https://telegra.ph/file/4b264dd9b818033b2c02f.jpg',     
  'https://telegra.ph/file/a29d72fc4c68b9a814690.jpg', 
  'https://telegra.ph/file/98fa23a0a29d7ffb529c5.jpg',     
  'https://telegra.ph/file/6c9b8e79447caa1d09630.jpg', 
  'https://telegra.ph/file/74e3f447dbd0eac3ff5e6.jpg', 
  'https://telegra.ph/file/b13706f2dfdf280f80b47.jpg', 
  'https://telegra.ph/file/3cc714543b5aff5d57c08.jpg', 
  'https://telegra.ph/file/2527636468cfce25e7251.jpg', 
  'https://telegra.ph/file/8b60d845c9eb58c639948.jpg', 
  'https://telegra.ph/file/36a02c184ef2864ddc8af.jpg', 
  'https://telegra.ph/file/336987561e8f1753588c1.jpg', 
  'https://telegra.ph/file/94c08233a7cb76c2321e7.jpg', 
  'https://telegra.ph/file/bccfda4f207f4286ad007.jpg', 
  'https://telegra.ph/file/5fe42bf0c71375e75acf3.jpg', 
  'https://telegra.ph/file/701f2ad3c7e9c57c0503e.jpg', 
  'https://telegra.ph/file/cb1d8f2430e5e424e272e.jpg', 
  'https://telegra.ph/file/9d588e1138cbf307f56e0.jpg', 
  'https://telegra.ph/file/b7131ec75f5e1ea7b3d21.jpg', 
  'https://telegra.ph/file/50f8bbd2246aba19e230c.jpg', 
  'https://telegra.ph/file/dac0efc8af84b5533a4f0.jpg', 
  'https://telegra.ph/file/4ac25f227c865d6dfba58.jpg', 
  'https://telegra.ph/file/88f984aac2f250acde62d.jpg', 
  'https://telegra.ph/file/da4b5110baa9c3204118c.jpg', 
  'https://telegra.ph/file/86518e9f28ddb48e3672f.jpg', 
  'https://telegra.ph/file/f2489369fddd2415d1a75.jpg', 
  'https://telegra.ph/file/34764db66c05102d39697.jpg', 
  'https://telegra.ph/file/d6b7b8211fc04c6bd68d0.jpg', 
  'https://telegra.ph/file/12234c5b0f35c47bdd1dc.jpg', 
  'https://telegra.ph/file/1545c70938af298a2b16f.jpg', 
  'https://telegra.ph/file/dcbd79fe5fe5cfecb7b64.jpg', 
  'https://telegra.ph/file/c443feb36c1d4b0957cd5.jpg', 
  'https://telegra.ph/file/a94c15f7b852c432ed72f.jpg', 
  'https://telegra.ph/file/9240bd7f8a330ab34ac30.jpg',
  'https://telegra.ph/file/e6b45546a19faab76bc16.jpg',
  'https://telegra.ph/file/c800d3658f5db3a398104.jpg',
  'https://telegra.ph/file/683dafb47c058e6d32b26.jpg',
  'https://telegra.ph/file/494d4b07a8e45ce7c41a4.jpg',
  'https://telegra.ph/file/255c587fee6831f028a66.jpg',
  'https://telegra.ph/file/c9f205336b511efda0c3d.jpg',
  'https://telegra.ph/file/481c1b82ac8ef6eb58bb5.jpg', 
  'https://telegra.ph/file/3d33ee2ed1a8e59aa4f18.jpg', 
  'https://telegra.ph/file/ec9d3dbb0bfa038e07efd.jpg', 
  'https://telegra.ph/file/3b329f77658cb05ca53f3.jpg', 
  'https://telegra.ph/file/768dabc86f621a45c5db0.jpg', 
  'https://telegra.ph/file/55401de2dccbbae00722f.jpg', 
  'https://telegra.ph/file/a556966880e7f8a107a74.jpg', 
  'https://telegra.ph/file/dc1d2848c4a8fa0b8c05d.jpg', 
  'https://telegra.ph/file/08fd42492b4483efc4381.jpg', 
  'https://telegra.ph/file/6fa917e16db56b2fd72ad.jpg', 
  'https://telegra.ph/file/9ae581a11f8272f021745.jpg', 
  'https://telegra.ph/file/8720f5557bacd08607758.jpg', 
  'https://telegra.ph/file/e7d9c4f3d180672d4b2c9.jpg', 
  'https://telegra.ph/file/0abd7a226f4558fe02d02.jpg', 
  'https://telegra.ph/file/479607dedbad4af8508d8.jpg',
  'https://telegra.ph/file/f116b29655abd552b628c.jpg',
  'https://telegra.ph/file/d32cff88c71ccd0787a8a.jpg',
  'https://telegra.ph/file/cd1ee777c38953ba7381e.jpg',
  'https://telegra.ph/file/39ba98d66c9a22f0494d2.jpg',
  'https://telegra.ph/file/b4ab2b75dc665c275cbe3.jpg',
  'https://telegra.ph/file/e8014193c734365b89b95.jpg',
  'https://telegra.ph/file/e20cb7135260d6cd98346.jpg', 
  'https://telegra.ph/file/3e9813c252d21917ed54e.jpg', 
  'https://telegra.ph/file/42fbcb3763c51deb669ec.jpg', 
  'https://telegra.ph/file/fa65a36616641d1ed292f.jpg', 
  'https://telegra.ph/file/58fc5987c67c654cebae4.jpg', 
  'https://telegra.ph/file/e33a6ca269ad5ce8f3071.jpg', 
  'https://telegra.ph/file/16ebe2aac10b74219f0f0.jpg', 
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '*🎀┃😂مـبـروك الـزواج┃🎀*', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['جوزني', 'dados'] 
export default handler