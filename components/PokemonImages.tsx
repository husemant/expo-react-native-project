const pokemonImages = [
  require("../assets/images/pokemon/0001 Bulbasaur.png"),
  require("../assets/images/pokemon/0002 Ivysaur.png"),
  require("../assets/images/pokemon/0003 Venusaur.png"),
  require("../assets/images/pokemon/0004 Charmander.png"),
  require("../assets/images/pokemon/0005 Charmeleon.png"),
  require("../assets/images/pokemon/0006 Charizard.png"),
  require("../assets/images/pokemon/0007 Squirtle.png"),
  require("../assets/images/pokemon/0008 Wartortle.png"),
  require("../assets/images/pokemon/0009 Blastoise.png"),
  require("../assets/images/pokemon/0010 Caterpie.png"),
  require("../assets/images/pokemon/0011 Metapod.png"),
  require("../assets/images/pokemon/0012 Butterfree.png"),
  require("../assets/images/pokemon/0013 Weedle.png"),
  require("../assets/images/pokemon/0014 Kakuna.png"),
  require("../assets/images/pokemon/0015 Beedrill.png"),
  require("../assets/images/pokemon/0016 Pidgey.png"),
  require("../assets/images/pokemon/0017 Pidgeotto.png"),
  require("../assets/images/pokemon/0018 Pidgeot.png"),
  require("../assets/images/pokemon/0019 Rattata.png"),
  require("../assets/images/pokemon/0020 Raticate.png"),
  require("../assets/images/pokemon/0021 Spearow.png"),
  require("../assets/images/pokemon/0022 Fearow.png"),
  require("../assets/images/pokemon/0023 Ekans.png"),
  require("../assets/images/pokemon/0024 Arbok.png"),
  require("../assets/images/pokemon/0025 Pikachu.png"),
  require("../assets/images/pokemon/0026 Raichu.png"),
  require("../assets/images/pokemon/0027 Sandshrew.png"),
  require("../assets/images/pokemon/0028 Sandslash.png"),
  require("../assets/images/pokemon/0029 Nidoran.png"),
  require("../assets/images/pokemon/0030 Nidorina.png"),
  require("../assets/images/pokemon/0031 Nidoqueen.png"),
  require("../assets/images/pokemon/0032 Nidoran.png"),
  require("../assets/images/pokemon/0033 Nidorino.png"),
  require("../assets/images/pokemon/0034 Nidoking.png"),
  require("../assets/images/pokemon/0035 Clefairy.png"),
  require("../assets/images/pokemon/0036 Clefable.png"),
  require("../assets/images/pokemon/0037 Vulpix.png"),
  require("../assets/images/pokemon/0038 Ninetales.png"),
  require("../assets/images/pokemon/0039 Jigglypuff.png"),
  require("../assets/images/pokemon/0040 Wigglytuff.png"),
  require("../assets/images/pokemon/0041 Zubat.png"),
  require("../assets/images/pokemon/0042 Golbat.png"),
  require("../assets/images/pokemon/0043 Oddish.png"),
  require("../assets/images/pokemon/0044 Gloom.png"),
  require("../assets/images/pokemon/0045 Vileplume.png"),
  require("../assets/images/pokemon/0046 Paras.png"),
  require("../assets/images/pokemon/0047 Parasect.png"),
  require("../assets/images/pokemon/0048 Venonat.png"),
  require("../assets/images/pokemon/0049 Venomoth.png"),
  require("../assets/images/pokemon/0050 Diglett.png"),
  require("../assets/images/pokemon/0051 Dugtrio.png"),
  require("../assets/images/pokemon/0052 Meowth.png"),
  require("../assets/images/pokemon/0053 Persian.png"),
  require("../assets/images/pokemon/0054 Psyduck.png"),
  require("../assets/images/pokemon/0055 Golduck.png"),
  require("../assets/images/pokemon/0056 Mankey.png"),
  require("../assets/images/pokemon/0057 Primeape.png"),
  require("../assets/images/pokemon/0058 Growlithe.png"),
  require("../assets/images/pokemon/0059 Arcanine.png"),
  require("../assets/images/pokemon/0060 Poliwag.png"),
  require("../assets/images/pokemon/0061 Poliwhirl.png"),
  require("../assets/images/pokemon/0062 Poliwrath.png"),
  require("../assets/images/pokemon/0063 Abra.png"),
  require("../assets/images/pokemon/0064 Kadabra.png"),
  require("../assets/images/pokemon/0065 Alakazam.png"),
  require("../assets/images/pokemon/0066 Machop.png"),
  require("../assets/images/pokemon/0067 Machoke.png"),
  require("../assets/images/pokemon/0068 Machamp.png"),
  require("../assets/images/pokemon/0069 Bellsprout.png"),
  require("../assets/images/pokemon/0070 Weepinbell.png"),
  require("../assets/images/pokemon/0071 Victreebel.png"),
  require("../assets/images/pokemon/0072 Tentacool.png"),
  require("../assets/images/pokemon/0073 Tentacruel.png"),
  require("../assets/images/pokemon/0074 Geodude.png"),
  require("../assets/images/pokemon/0075 Graveler.png"),
  require("../assets/images/pokemon/0076 Golem.png"),
  require("../assets/images/pokemon/0077 Ponyta.png"),
  require("../assets/images/pokemon/0078 Rapidash.png"),
  require("../assets/images/pokemon/0079 Slowpoke.png"),
  require("../assets/images/pokemon/0080 Slowbro.png"),
  require("../assets/images/pokemon/0081 Magnemite.png"),
  require("../assets/images/pokemon/0082 Magneton.png"),
  require("../assets/images/pokemon/0083 Farfetch'd.png"),
  require("../assets/images/pokemon/0084 Doduo.png"),
  require("../assets/images/pokemon/0085 Dodrio.png"),
  require("../assets/images/pokemon/0086 Seel.png"),
  require("../assets/images/pokemon/0087 Dewgong.png"),
  require("../assets/images/pokemon/0088 Grimer.png"),
  require("../assets/images/pokemon/0089 Muk.png"),
  require("../assets/images/pokemon/0090 Shellder.png"),
  require("../assets/images/pokemon/0091 Cloyster.png"),
  require("../assets/images/pokemon/0092 Gastly.png"),
  require("../assets/images/pokemon/0093 Haunter.png"),
  require("../assets/images/pokemon/0094 Gengar.png"),
  require("../assets/images/pokemon/0095 Onix.png"),
  require("../assets/images/pokemon/0096 Drowzee.png"),
  require("../assets/images/pokemon/0097 Hypno.png"),
  require("../assets/images/pokemon/0098 Krabby.png"),
  require("../assets/images/pokemon/0099 Kingler.png"),
  require("../assets/images/pokemon/0100 Voltorb.png"),
  require("../assets/images/pokemon/0101 Electrode.png"),
  require("../assets/images/pokemon/0102 Exeggcute.png"),
  require("../assets/images/pokemon/0103 Exeggutor.png"),
  require("../assets/images/pokemon/0104 Cubone.png"),
  require("../assets/images/pokemon/0105 Marowak.png"),
  require("../assets/images/pokemon/0106 Hitmonlee.png"),
  require("../assets/images/pokemon/0107 Hitmonchan.png"),
  require("../assets/images/pokemon/0108 Lickitung.png"),
  require("../assets/images/pokemon/0109 Koffing.png"),
  require("../assets/images/pokemon/0110 Weezing.png"),
  require("../assets/images/pokemon/0111 Rhyhorn.png"),
  require("../assets/images/pokemon/0112 Rhydon.png"),
  require("../assets/images/pokemon/0113 Chansey.png"),
  require("../assets/images/pokemon/0114 Tangela.png"),
  require("../assets/images/pokemon/0115 Kangaskhan.png"),
  require("../assets/images/pokemon/0116 Horsea.png"),
  require("../assets/images/pokemon/0117 Seadra.png"),
  require("../assets/images/pokemon/0118 Goldeen.png"),
  require("../assets/images/pokemon/0119 Seaking.png"),
  require("../assets/images/pokemon/0120 Staryu.png"),
  require("../assets/images/pokemon/0121 Starmie.png"),
  require("../assets/images/pokemon/0122 Mr. Mime .png"),
  require("../assets/images/pokemon/0123 Scyther.png"),
  require("../assets/images/pokemon/0124 Jynx.png"),
  require("../assets/images/pokemon/0125 Electabuzz.png"),
  require("../assets/images/pokemon/0126 Magmar.png"),
  require("../assets/images/pokemon/0127 Pinsir.png"),
  require("../assets/images/pokemon/0128 Tauros.png"),
  require("../assets/images/pokemon/0129 Magikarp.png"),
  require("../assets/images/pokemon/0130 Gyarados.png"),
  require("../assets/images/pokemon/0131 Lapras.png"),
  require("../assets/images/pokemon/0132 Ditto.png"),
  require("../assets/images/pokemon/0133 Eevee.png"),
  require("../assets/images/pokemon/0134 Vaporeon.png"),
  require("../assets/images/pokemon/0135 Jolteon.png"),
  require("../assets/images/pokemon/0136 Flareon.png"),
  require("../assets/images/pokemon/0137 Porygon.png"),
  require("../assets/images/pokemon/0138 Omanyte.png"),
  require("../assets/images/pokemon/0139 Omastar.png"),
  require("../assets/images/pokemon/0140 Kabuto.png"),
  require("../assets/images/pokemon/0141 Kabutops.png"),
  require("../assets/images/pokemon/0142 Aerodactyl.png"),
  require("../assets/images/pokemon/0143 Snorlax.png"),
  require("../assets/images/pokemon/0144 Articuno.png"),
  require("../assets/images/pokemon/0145 Zapdos.png"),
  require("../assets/images/pokemon/0146 Moltres.png"),
  require("../assets/images/pokemon/0147 Dratini.png"),
  require("../assets/images/pokemon/0148 Dragonair.png"),
  require("../assets/images/pokemon/0149 Dragonite.png"),
  require("../assets/images/pokemon/0150 Mewtwo.png"),
  require("../assets/images/pokemon/0151 Mew.png"),
];

export default pokemonImages;
