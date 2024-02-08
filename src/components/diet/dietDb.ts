
const dietDB = [
      {
        "name": "Miód malinowy",
        "fodmap mon": "low",
        "max_use": "2 łyżki",
        "category": "cukry",
        "id": "f_001"
      },
      {
        "name": "Miód koniczynowy",
        "fodmap mon": "low",
        "max_use": "2 łyżki",
        "category": "cukry",
        "id": "f_002"
      },
      {
        "name": "Miód z bawełny",
        "fodmap mon": "low",
        "max_use": "2 łyżki",
        "category": "cukry",
        "id": "f_003"
      },
      {
        "name": "Miód ",
        "fodmap mon": "high",
        "category": "cukry",
        "id": "f_004"
      },
      {
        "name": "Cukier trzcinowy",
        "sub-title": "Cukier brązowy",
        "fodmap mon": "high",
        "category": "cukry",
        "id": "f_005"
      },
      {
        "name": "Cukier",
        "fodmap mon": "high",
        "category": "cukry",
        "id": "f_006"
      },
      {
        "name": "Syrop klonowy",
        "fodmap mon": "high",
        "category": "cukry",
        "id": "f_007"
      },
      {
        "name": "Syrop z agawy",
        "fodmap mon": "high",
        "category": "cukry",
        "id": "f_008"
      },
      {
        "name": "Aspartam",
        "fodmap mon": "low",
        "category": "cukry",
        "id": "f_009"
      },
      {
        "name": "Stewia (bez inuliny)",
        "fodmap mon": "low",
        "category": "cukry",
        "id": "f_010"
      },
      {
        "name": "Glukoza",
        "fodmap mon": "low",
        "category": "cukry",
        "id": "f_011"
      },
      {
        "name": "Syrop ryżowy",
        "fodmap mon": "low",
        "category": "cukry",
        "id": "f_012"
      },
      {
        "name": "Cukier kokosowy",
        "fodmap mon": "mid",
        "max_use": "14g",
        "category": "cukry",
        "id": "f_013"
      },
      {
        "name": "Musztarda ",
        "sub-title": "(sklepowa)",
        "fodmap mon": "high",
        "category": "dodatki",
        "id": "f_014"
      },
      {
        "name": "Musztarda",
        "sub-title": "(domowej roboty / bez składników highFODMAP)",
        "fodmap mon": "low",
        "category": "dodatki",
        "id": "f_015"
      },
      {
        "name": "Majonez ",
        "sub-title": "(domowej roboty / bez składników highFODMAP)",
        "fodmap mon": "low",
        "category": "dodatki",
        "id": "f_016"
      },
      {
        "name": "Majonez \"sklepowy\"",
        "fodmap mon": "high",
        "category": "dodatki",
        "id": "f_017"
      },
      {
        "name": "Sos Tabasco",
        "fodmap mon": "low",
        "category": "dodatki",
        "id": "f_018"
      },
      {
        "name": "Wasabi",
        "fodmap mon": "low",
        "category": "dodatki",
        "id": "f_019"
      },
      {
        "name": "Ocet",
        "fodmap mon": "low",
        "category": "dodatki",
        "id": "f_020"
      },
      {
        "name": "Ocet jabłkowy",
        "fodmap mon": "low",
        "category": "dodatki",
        "id": "f_021"
      },
      {
        "name": "Ocet winny",
        "fodmap mon": "low",
        "category": "dodatki",
        "id": "f_022"
      },
      {
        "name": "Ocet balsamiczny",
        "fodmap mon": "high",
        "category": "dodatki",
        "id": "f_023"
      },
      {
        "name": "Sos sojowy",
        "fodmap mon": "high",
        "category": "dodatki",
        "id": "f_024"
      },
      {
        "name": "Korzeń cykorii",
        "fodmap mon": "high",
        "category": "dodatki",
        "id": "f_025"
      },
      {
        "name": "Przyprawy ",
        "sub-title": "(z wyjątkiem czosnku i cebuli)",
        "fodmap mon": "low",
        "category": "dodatki",
        "id": "f_026"
      },
      {
        "name": "Bazylia",
        "fodmap mon": "low",
        "category": "dodatki",
        "id": "f_027"
      },
      {
        "name": "Chilli",
        "sub-title": "(Papryczka Chili/Czili), Jalapeño, Habanero",
        "fodmap mon": "low",
        "category": "dodatki",
        "id": "f_028"
      },
      {
        "name": "Curry",
        "fodmap mon": "low",
        "category": "dodatki",
        "id": "f_029"
      },
      {
        "name": "Czosnek niedźwiedzi",
        "fodmap mon": "low",
        "category": "dodatki",
        "id": "f_030"
      },
      {
        "name": "Pieprz",
        "fodmap mon": "low",
        "category": "dodatki",
        "id": "f_031"
      },
      {
        "name": "Mak",
        "fodmap mon": "low",
        "category": "dodatki",
        "id": "f_032"
      },
      {
        "name": "Lawenda",
        "fodmap mon": "low",
        "category": "dodatki",
        "id": "f_033"
      },
      {
        "name": "Lukrecja",
        "fodmap mon": "low",
        "category": "dodatki",
        "id": "f_034"
      },
      {
        "name": "Sezam",
        "fodmap mon": "low",
        "category": "dodatki",
        "id": "f_035"
      },
      {
        "name": "Szczypiorek",
        "fodmap mon": "low",
        "category": "dodatki",
        "id": "f_036"
      },
      {
        "name": "Czekolada gorzka",
        "fodmap mon": "mid",
        "max_use": "80g",
        "category": "dodatki",
        "id": "f_037"
      },
      {
        "name": "Czekolada mleczna",
        "fodmap mon": "high",
        "category": "dodatki",
        "histamine": "mid",
        "id": "f_038"
      },
      {
        "name": "Bekon",
        "fodmap mon": "low",
        "category": "mieso",
        "id": "f_039"
      },
      {
        "name": "Bekon ",
        "sub-title": "(dosładzany fruktozą)",
        "fodmap mon": "high",
        "category": "mieso",
        "id": "f_040"
      },
      {
        "name": "Drób",
        "sub-title": "Mięso drobiowe: kurczak, gęś, kaczka, indyk, perliczka",
        "fodmap mon": "low",
        "category": "mieso",
        "id": "f_041"
      },
      {
        "name": "Wołowina",
        "sub-title": "Mięso wołowe, cielęcina",
        "fodmap mon": "low",
        "category": "mieso",
        "id": "f_042"
      },
      {
        "name": "Jaja",
        "sub-title": "Jajka",
        "fodmap mon": "low",
        "category": "mieso",
        "histamine": "mid",
        "id": "f_043"
      },
      {
        "name": "Ryba konserwowa",
        "sub-title": "Tuńczyk, Łosoś",
        "fodmap mon": "high",
        "category": "mieso",
        "histamine": "high",
        "id": "f_044"
      },
      {
        "name": "Ryby",
        "sub-title": "Łosoś, Pstrąg, Halibut, Miętus, Karp, Mintaj, Dorsz, Tuńczyk",
        "fodmap mon": "low",
        "category": "mieso",
        "histamine": "high",
        "id": "f_045"
      },
      {
        "name": "Jagnięcina",
        "fodmap mon": "low",
        "category": "mieso",
        "id": "f_046"
      },
      {
        "name": "Wieprzowina",
        "fodmap mon": "low",
        "category": "mieso",
        "id": "f_047"
      },
      {
        "name": "Owoce morza",
        "sub-title": "Mule, Krewetki, Ostrygi, Raki",
        "fodmap mon": "low",
        "category": "mieso",
        "histamine": "mid",
        "id": "f_048"
      },
      {
        "name": "Szynki ",
        "sub-title": "(i inne mięsa wysokoprzetworzone)",
        "fodmap mon": "high",
        "category": "mieso",
        "histamine": "high",
        "id": "f_049"
      },
      {
        "name": "Maślanka",
        "fodmap mon": "high",
        "category": "nabial",
        "id": "f_050"
      },
      {
        "name": "Ser camembert",
        "fodmap mon": "low",
        "category": "nabial",
        "id": "f_051"
      },
      {
        "name": "Serek śmietankowy",
        "fodmap mon": "high",
        "category": "nabial",
        "id": "f_052"
      },
      {
        "name": "Ser feta",
        "fodmap mon": "high",
        "category": "nabial",
        "id": "f_053"
      },
      {
        "name": "Ser kozi",
        "fodmap mon": "high",
        "category": "nabial",
        "id": "f_054"
      },
      {
        "name": "Ser haloumi",
        "fodmap mon": "mid",
        "max_use": "50g",
        "category": "nabial",
        "id": "f_055"
      },
      {
        "name": "Ser mozzarella",
        "fodmap mon": "high",
        "category": "nabial",
        "id": "f_056"
      },
      {
        "name": "sery Żółte i dojrzewające",
        "sub-title": "(z wyłączeniem pleśniowych)",
        "fodmap mon": "low",
        "category": "nabial",
        "histamine": "high",
        "id": "f_057"
      },
      {
        "name": "Ser ricotta",
        "fodmap mon": "high",
        "category": "nabial",
        "id": "f_058"
      },
      {
        "name": "Śmietana",
        "fodmap mon": "high",
        "category": "nabial",
        "id": "f_059"
      },
      {
        "name": "Budyń",
        "fodmap mon": "high",
        "category": "nabial",
        "id": "f_060"
      },
      {
        "name": "Lody",
        "fodmap mon": "high",
        "category": "nabial",
        "id": "f_061",
        "notes": "Dozwolone sorbety/lody z produktów low FODMAP"
      },
      {
        "name": "Kefir",
        "fodmap mon": "high",
        "category": "nabial",
        "id": "f_062"
      },
      {
        "name": "Masło",
        "fodmap mon": "low",
        "category": "nabial",
        "id": "f_063"
      },
      {
        "name": "Mleko",
        "fodmap mon": "high",
        "category": "nabial",
        "histamine": "low",
        "id": "f_064"
      },
      {
        "name": "Mleko bez laktozy",
        "fodmap mon": "mid",
        "category": "nabial",
        "histamine": "low",
        "id": "f_065"
      },
      {
        "name": "Jogurt",
        "sub-title": "(sklepowy)",
        "fodmap mon": "high",
        "category": "nabial",
        "id": "f_066"
      },
      {
        "name": "Mleko migdałowe",
        "sub-title": "Napój migdałowy",
        "fodmap mon": "low",
        "category": "nabial",
        "id": "f_067"
      },
      {
        "name": "Mleczko kokosowe",
        "fodmap mon": "low",
        "category": "nabial",
        "id": "f_068"
      },
      {
        "name": "Mleko kokosowe",
        "sub-title": "Napój kokosowy",
        "fodmap mon": "mid",
        "max_use": "120g",
        "category": "nabial",
        "id": "f_069"
      },
      {
        "name": "Mleko z konopii",
        "sub-title": "Napój z konopii",
        "fodmap mon": "mid",
        "max_use": "240g",
        "category": "nabial",
        "id": "f_070"
      },
      {
        "name": "Mleko owsiane",
        "sub-title": "Napój owsiany",
        "fodmap mon": "mid",
        "max_use": "30g",
        "category": "nabial",
        "id": "f_071"
      },
      {
        "name": "Mleko ryżowe",
        "sub-title": "Napój ryżowy",
        "fodmap mon": "mid",
        "max_use": "200g",
        "category": "nabial",
        "id": "f_072"
      },
      {
        "name": "Mleko sojowe",
        "sub-title": "Napój sojowy",
        "fodmap mon": "high",
        "category": "nabial",
        "id": "f_073"
      },
      {
        "name": "Kawa czarna",
        "sub-title": "(w tym: decaf, rozpuszczalna)",
        "fodmap mon": "low",
        "category": "napoje",
        "id": "f_074"
      },
      {
        "name": "Kakao",
        "fodmap mon": "low",
        "category": "napoje",
        "id": "f_075"
      },
      {
        "name": "Sok pomarańczowy",
        "fodmap mon": "high",
        "max_use": "75ml",
        "category": "napoje",
        "id": "f_076"
      },
      {
        "name": "Soki owocowe",
        "sub-title": "(w tym m.in.: sok jabłkowy, sok pomarańczowy)",
        "fodmap mon": "high",
        "category": "napoje",
        "id": "f_078"
      },
      {
        "name": "Woda kokosowa",
        "fodmap mon": "mid",
        "max_use": "100g",
        "category": "napoje",
        "id": "f_079"
      },
      {
        "name": "Sok żurawinowy",
        "fodmap mon": "low",
        "category": "napoje",
        "id": "f_080"
      },
      {
        "name": "Herbata czarna",
        "sub-title": "(dozwolona tylko lekka)",
        "fodmap mon": "low",
        "category": "napoje",
        "id": "f_081"
      },
      {
        "name": "Herbata oolong",
        "fodmap mon": "high",
        "category": "napoje",
        "id": "f_082"
      },
      {
        "name": "Rumianek",
        "sub-title": "Napar z rumianku",
        "fodmap mon": "high",
        "category": "napoje",
        "id": "f_083"
      },
      {
        "name": "Rooibos",
        "sub-title": "Herbata rooibos",
        "fodmap mon": "low",
        "category": "napoje",
        "id": "f_084"
      },
      {
        "name": "Herbata biała",
        "fodmap mon": "low",
        "category": "napoje",
        "id": "f_085"
      },
      {
        "name": "Napar miętowy",
        "sub-title": "Mięta, herbata miętowa",
        "fodmap mon": "low",
        "category": "napoje",
        "id": "f_086"
      },
      {
        "name": "Herbata zielona",
        "fodmap mon": "low",
        "category": "napoje",
        "id": "f_087"
      },
      {
        "name": "Napar z miodokrzewu",
        "sub-title": "Honeybush",
        "fodmap mon": "low",
        "category": "napoje",
        "id": "f_088"
      },
      {
        "name": "Piwo",
        "fodmap mon": "high",
        "category": "napoje",
        "histamine": "high",
        "id": "f_089"
      },
      {
        "name": "Gin",
        "fodmap mon": "low",
        "category": "napoje",
        "id": "f_090"
      },
      {
        "name": "Rum",
        "fodmap mon": "high",
        "category": "napoje",
        "id": "f_091"
      },
      {
        "name": "Wódka",
        "fodmap mon": "low",
        "category": "napoje",
        "id": "f_092"
      },
      {
        "name": "Whiskey",
        "sub-title": "Whisky",
        "fodmap mon": "low",
        "category": "napoje",
        "id": "f_093"
      },
      {
        "name": "Tequila",
        "fodmap mon": "high",
        "category": "napoje",
        "id": "f_094"
      },
      {
        "name": "Wino czerwone",
        "fodmap mon": "low",
        "category": "napoje",
        "histamine": "high",
        "id": "f_095"
      },
      {
        "name": "Wino musujące",
        "fodmap mon": "high",
        "category": "napoje",
        "histamine": "high",
        "id": "f_096"
      },
      {
        "name": "Wino, deserowe",
        "fodmap mon": "high",
        "category": "napoje",
        "histamine": "high",
        "id": "f_097"
      },
      {
        "name": "Wino słodkie",
        "fodmap mon": "high",
        "category": "napoje",
        "histamine": "high",
        "id": "f_098"
      },
      {
        "name": "Wino białe",
        "fodmap mon": "low",
        "category": "napoje",
        "id": "f_099"
      },
      {
        "name": "Brandy",
        "fodmap mon": "high",
        "category": "napoje",
        "id": "f_100"
      },
      {
        "name": "Migdały",
        "fodmap mon": "mid",
        "max_use": "12g",
        "category": "orzechy",
        "histamine": "mid",
        "id": "f_101"
      },
      {
        "name": "Orzechy nerkowca",
        "sub-title": "Nerkowce",
        "fodmap mon": "high",
        "category": "orzechy",
        "histamine": "mid",
        "id": "f_102"
      },
      {
        "name": "Kasztany",
        "fodmap mon": "mid",
        "max_use": "168g",
        "category": "orzechy",
        "histamine": "mid",
        "id": "f_103"
      },
      {
        "name": "Kasztany",
        "sub-title": "(pieczone)",
        "fodmap mon": "mid",
        "max_use": "84g",
        "category": "orzechy",
        "histamine": "mid",
        "id": "f_104"
      },
      {
        "name": "Orzechy laskowe",
        "fodmap mon": "mid",
        "max_use": "15g",
        "category": "orzechy",
        "histamine": "mid",
        "id": "f_105"
      },
      {
        "name": "Oczechy makadamia",
        "fodmap mon": "low",
        "category": "orzechy",
        "histamine": "mid",
        "id": "f_106"
      },
      {
        "name": "Orzechy brazylijskie",
        "fodmap mon": "mid",
        "max_use": "40g",
        "category": "orzechy",
        "histamine": "mid",
        "id": "f_107"
      },
      {
        "name": "Orzeszki ziemne",
        "sub-title": "Orzeszki arachidowe",
        "fodmap mon": "low",
        "category": "orzechy",
        "histamine": "mid",
        "id": "f_108"
      },
      {
        "name": "Orzechy pecan",
        "fodmap mon": "mid",
        "max_use": "20g",
        "category": "orzechy",
        "histamine": "mid",
        "id": "f_109"
      },
      {
        "name": "Oreszki piniowe",
        "fodmap mon": "mid",
        "max_use": "14g",
        "category": "orzechy",
        "histamine": "mid",
        "id": "f_110"
      },
      {
        "name": "Pistacje",
        "fodmap mon": "high",
        "category": "orzechy",
        "histamine": "mid",
        "id": "f_111"
      },
      {
        "name": "Nasiona chia",
        "fodmap mon": "mid",
        "max_use": "24g",
        "category": "orzechy",
        "id": "f_112"
      },
      {
        "name": "Mak",
        "fodmap mon": "low",
        "category": "orzechy",
        "id": "f_113"
      },
      {
        "name": "Pestki dyni",
        "fodmap mon": "mid",
        "max_use": "23g",
        "category": "orzechy",
        "id": "f_114"
      },
      {
        "name": "Sezam",
        "fodmap mon": "mid",
        "max_use": "11g",
        "category": "orzechy",
        "id": "f_115"
      },
      {
        "name": "Pestki  słonecznika",
        "fodmap mon": "mid",
        "max_use": "6g",
        "category": "orzechy",
        "id": "f_116"
      },
      {
        "name": "Orzechy włoskie",
        "fodmap mon": "mid",
        "max_use": "30g",
        "category": "orzechy",
        "histamine": "mid",
        "id": "f_117"
      },
      {
        "name": "Falafel",
        "fodmap mon": "high",
        "category": "orzechy",
        "id": "f_118"
      },
      {
        "name": "Kotlet z fasoli",
        "fodmap mon": "high",
        "category": "orzechy",
        "histamine": "mid",
        "id": "f_119"
      },
      {
        "name": "Quorn",
        "fodmap mon": "low",
        "category": "orzechy",
        "histamine": "mid",
        "id": "f_120"
      },
      {
        "name": "Tempeh, bez dodatków",
        "fodmap mon": "mid",
        "max_use": "100g",
        "category": "orzechy",
        "id": "f_121"
      },
      {
        "name": "Tofu, twarde",
        "fodmap mon": "low",
        "category": "orzechy",
        "id": "f_122"
      },
      {
        "name": "Tofu jedwabiste",
        "fodmap mon": "high",
        "category": "orzechy",
        "id": "f_123"
      },
      {
        "name": "Jabłka",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_124"
      },
      {
        "name": "Morela",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_125"
      },
      {
        "name": "Awokado",
        "fodmap mon": "mid",
        "max_use": "20g",
        "category": "owoce",
        "histamine": "mid",
        "id": "f_126"
      },
      {
        "name": "Banan",
        "fodmap mon": "low",
        "category": "owoce",
        "histamine": "mid",
        "id": "f_127"
      },
      {
        "name": "Jeżyny",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_128"
      },
      {
        "name": "Borówki",
        "fodmap mon": "mid",
        "max_use": "20g",
        "category": "owoce",
        "id": "f_129"
      },
      {
        "name": "Breadfruit",
        "sub-title": "Chlebowiec",
        "fodmap mon": "low",
        "category": "owoce",
        "id": "f_130"
      },
      {
        "name": "Melon kantalupa",
        "fodmap mon": "mid",
        "max_use": "90g",
        "category": "owoce",
        "id": "f_131"
      },
      {
        "name": "Carambola",
        "fodmap mon": "low",
        "category": "owoce",
        "id": "f_132"
      },
      {
        "name": "Wiśnie",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_133"
      },
      {
        "name": "Czereśnie",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_134"
      },
      {
        "name": "Klementynki",
        "fodmap mon": "low",
        "category": "owoce",
        "histamine": "high",
        "id": "f_135"
      },
      {
        "name": "Kokos",
        "fodmap mon": "mid",
        "max_use": "48g",
        "category": "owoce",
        "id": "f_136"
      },
      {
        "name": "Kumkwat",
        "fodmap mon": "mid",
        "max_use": "88g",
        "category": "owoce",
        "id": "f_137"
      },
      {
        "name": "Czerymoja",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_138"
      },
      {
        "name": "Pitaja",
        "sub-title": "Dragon fruit, Smoczy owoc",
        "fodmap mon": "low",
        "category": "owoce",
        "id": "f_139"
      },
      {
        "name": "Durian",
        "fodmap mon": "low",
        "category": "owoce",
        "id": "f_140"
      },
      {
        "name": "Figi, świeże",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_141"
      },
      {
        "name": "Grejpfrut",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_143"
      },
      {
        "name": "Winogrona",
        "fodmap mon": "low",
        "category": "owoce",
        "id": "f_145"
      },
      {
        "name": "Guava, dojrzała",
        "fodmap mon": "low",
        "category": "owoce",
        "id": "f_146"
      },
      {
        "name": "Kiwi, zielone",
        "fodmap mon": "mid",
        "max_use": "150g",
        "category": "owoce",
        "histamine": "mid",
        "id": "f_147"
      },
      {
        "name": "Cytryna",
        "fodmap mon": "low",
        "category": "owoce",
        "histamine": "high",
        "id": "f_148"
      },
      {
        "name": "Limonka",
        "fodmap mon": "low",
        "category": "owoce",
        "histamine": "high",
        "id": "f_149"
      },
      {
        "name": "Liczi",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_150"
      },
      {
        "name": "Mandarynka",
        "fodmap mon": "low",
        "category": "owoce",
        "histamine": "high",
        "id": "f_151"
      },
      {
        "name": "Mango",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_152"
      },
      {
        "name": "Melon miodowy",
        "fodmap mon": "mid",
        "max_use": "90g",
        "category": "owoce",
        "id": "f_153"
      },
      {
        "name": "Nektarynka",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_154"
      },
      {
        "name": "Pomarańcze",
        "fodmap mon": "low",
        "category": "owoce",
        "histamine": "high",
        "id": "f_155"
      },
      {
        "name": "Marakuja",
        "fodmap mon": "mid",
        "max_use": "23g",
        "category": "owoce",
        "histamine": "high",
        "id": "f_156"
      },
      {
        "name": "Brzoskwinia",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_157"
      },
      {
        "name": "Grusza chińska",
        "sub-title": "Nashi",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_158"
      },
      {
        "name": "Papaja",
        "fodmap mon": "low",
        "category": "owoce",
        "id": "f_159"
      },
      {
        "name": "Kaki",
        "sub-title": "Persymona",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_160"
      },
      {
        "name": "Ananas",
        "fodmap mon": "low",
        "category": "owoce",
        "id": "f_161"
      },
      {
        "name": "Plantan",
        "sub-title": "Banan warzywny",
        "fodmap mon": "low",
        "category": "owoce",
        "id": "f_162"
      },
      {
        "name": "Śliwka",
        "fodmap mon": "high",
        "category": "owoce",
        "histamine": "mid",
        "id": "f_163"
      },
      {
        "name": "Granat",
        "fodmap mon": "mid",
        "max_use": "38g",
        "category": "owoce",
        "id": "f_164"
      },
      {
        "name": "Rambutan",
        "fodmap mon": "mid",
        "max_use": "31g",
        "category": "owoce",
        "id": "f_165"
      },
      {
        "name": "Malina",
        "fodmap mon": "mid",
        "max_use": "45g",
        "category": "owoce",
        "id": "f_166"
      },
      {
        "name": "Rabarbar",
        "fodmap mon": "low",
        "category": "owoce",
        "id": "f_167"
      },
      {
        "name": "Karambola",
        "fodmap mon": "low",
        "category": "owoce",
        "id": "f_168"
      },
      {
        "name": "Truskawka",
        "fodmap mon": "low",
        "category": "owoce",
        "histamine": "high",
        "id": "f_169"
      },
      {
        "name": "Tamarillo",
        "sub-title": "Pomidor drzewiasty, Cyfomandra grubolistna",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_170"
      },
      {
        "name": "Tamaryndowiec",
        "sub-title": "Tamarynd",
        "fodmap mon": "mid",
        "max_use": "8g",
        "category": "owoce",
        "id": "f_171"
      },
      {
        "name": "Arbuz",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_172"
      },
      {
        "name": "Jabłka suszone",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_173"
      },
      {
        "name": "Morele suszone",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_174"
      },
      {
        "name": "Banan suszony",
        "fodmap mon": "mid",
        "max_use": "20g",
        "category": "owoce",
        "histamine": "mid",
        "id": "f_175"
      },
      {
        "name": "Kokos suszony",
        "sub-title": "Czipsy z kokosa",
        "fodmap mon": "mid",
        "max_use": "18g",
        "category": "owoce",
        "id": "f_176"
      },
      {
        "name": "Żyrawina, suszona",
        "fodmap mon": "mid",
        "max_use": "13g",
        "category": "owoce",
        "id": "f_177"
      },
      {
        "name": "Porzeczka",
        "fodmap mon": "mid",
        "max_use": "13g",
        "category": "owoce",
        "id": "f_178"
      },
      {
        "name": "Daktyle",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_179"
      },
      {
        "name": "Figi",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_180"
      },
      {
        "name": "Jagody Goji",
        "sub-title": "(suszone)",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_181"
      },
      {
        "name": "Guava",
        "sub-title": "(w syropie)",
        "fodmap mon": "mid",
        "max_use": "27g",
        "category": "owoce",
        "id": "f_182"
      },
      {
        "name": "Mango suszone",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_184"
      },
      {
        "name": "Mangostan",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_185"
      },
      {
        "name": "Gruszka",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_186"
      },
      {
        "name": "Ananas suszony",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_187"
      },
      {
        "name": "Śliwka suszony",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_188"
      },
      {
        "name": "Rodzynki",
        "fodmap mon": "mid",
        "max_use": "13g",
        "category": "owoce",
        "id": "f_189"
      },
      {
        "name": "Rodzynki sułtanki",
        "sub-title": "Rodzynki sułtańskie",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_190"
      },
      {
        "name": "Konfitury kupne",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_191"
      },
      {
        "name": "dżemy kupne",
        "fodmap mon": "high",
        "category": "owoce",
        "id": "f_192"
      },
      {
        "name": "Konfitury domowe",
        "sub-title": "(bez cukru)",
        "fodmap mon": "low",
        "category": "owoce",
        "id": "f_193"
      },
      {
        "name": "Dżemy domowe ",
        "sub-title": "(bez cukru)",
        "fodmap mon": "low",
        "category": "owoce",
        "id": "f_194"
      },
      {
        "name": "Fasolka po bretońsku",
        "fodmap mon": "high",
        "category": "straczki",
        "id": "f_195"
      },
      {
        "name": "Fasola czarna",
        "sub-title": "(gotowana oraz z puszki)",
        "fodmap mon": "high",
        "category": "straczki",
        "id": "f_196",
        "notes": "W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych."
      },
      {
        "name": "Fasola żurawinowa",
        "sub-title": "(z puszki)",
        "fodmap mon": "high",
        "category": "straczki",
        "id": "f_197",
        "notes": "W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych."
      },
      {
        "name": "Fasola biała półksiężycowata",
        "sub-title": "(z puszki)",
        "fodmap mon": "mid",
        "max_use": "35g",
        "category": "straczki",
        "id": "f_198",
        "notes": "W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych."
      },
      {
        "name": "Ciecierzyca Chana Dal",
        "sub-title": "(gotowana)",
        "fodmap mon": "low",
        "category": "straczki",
        "id": "f_199",
        "notes": "W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych."
      },
      {
        "name": "Ciecierzyca",
        "sub-title": "(z puszki)",
        "fodmap mon": "mid",
        "max_use": "42g",
        "category": "straczki",
        "id": "f_200",
        "notes": "W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych."
      },
      {
        "name": "Fasola biała Haricot",
        "sub-title": "(gotowana)",
        "fodmap mon": "high",
        "category": "straczki",
        "id": "f_202",
        "notes": "W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych."
      },
      {
        "name": "Soczewica, ",
        "sub-title": "(z puszki)",
        "fodmap mon": "low",
        "category": "straczki",
        "histamine": "low",
        "id": "f_203",
        "notes": "W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych."
      },
      {
        "name": "Soczewica, zielona",
        "sub-title": "(gotowana)",
        "fodmap mon": "mid",
        "max_use": "23g",
        "category": "straczki",
        "histamine": "low",
        "id": "f_204",
        "notes": "W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych."
      },
      {
        "name": "Soczewica, czerwona",
        "sub-title": "(gotowana)",
        "fodmap mon": "mid",
        "max_use": "23g",
        "category": "straczki",
        "id": "f_205",
        "notes": "W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych."
      },
      {
        "name": "Fasola biała półksiężycowata",
        "sub-title": "(gotowana)",
        "fodmap mon": "mid",
        "max_use": "39g",
        "category": "straczki",
        "id": "f_206",
        "notes": "W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych."
      },
      {
        "name": "Fasola Mung",
        "fodmap mon": "mid",
        "max_use": "53g",
        "category": "straczki",
        "id": "f_207",
        "notes": "W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych."
      },
      {
        "name": "Fasola czerwona",
        "sub-title": "(gotowana)",
        "fodmap mon": "high",
        "category": "straczki",
        "id": "f_208",
        "notes": "W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych."
      },
      {
        "name": "Soja gotowana",
        "fodmap mon": "high",
        "category": "straczki",
        "histamine": "low",
        "id": "f_209",
        "notes": "W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych."
      },
      {
        "name": "Gorch łuskany",
        "sub-title": "(gotowany)",
        "fodmap mon": "high",
        "category": "straczki",
        "id": "f_210",
        "notes": "W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych."
      },
      {
        "name": "Fasola Urid Dal",
        "sub-title": "(gotowana)",
        "fodmap mon": "low",
        "category": "straczki",
        "id": "f_211",
        "notes": "W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych."
      },
      {
        "name": "Olej palmowy",
        "fodmap mon": "low",
        "category": "tluszcze",
        "id": "f_212",
        "notes": "W celu minimalizacji  objawów, wskazuje się ograniczenie spożycia produktów strączkowych."
      },
      {
        "name": "Olej kokosowy",
        "fodmap mon": "low",
        "category": "tluszcze",
        "id": "f_213"
      },
      {
        "name": "Oliwa z oliwek",
        "fodmap mon": "low",
        "category": "tluszcze",
        "id": "f_214"
      },
      {
        "name": "Smalec",
        "fodmap mon": "low",
        "category": "tluszcze",
        "id": "f_215"
      },
      {
        "name": "Oleje słonecznikowy",
        "fodmap mon": "low",
        "category": "tluszcze",
        "id": "f_216"
      },
      {
        "name": "Oleje roślinne",
        "fodmap mon": "low",
        "category": "tluszcze",
        "id": "f_217"
      },
      {
        "name": "Pieczarki",
        "fodmap mon": "high",
        "category": "warzywa",
        "histamine": "low",
        "id": "f_218"
      },
      {
        "name": "Grzyby Shiitake",
        "fodmap mon": "high",
        "category": "warzywa",
        "histamine": "low",
        "id": "f_220"
      },
      {
        "name": "Okra",
        "fodmap mon": "mid",
        "max_use": "60g",
        "category": "warzywa",
        "id": "f_221"
      },
      {
        "name": "Cebula",
        "fodmap mon": "high",
        "category": "warzywa",
        "id": "f_222"
      },
      {
        "name": "Pasternak",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_223"
      },
      {
        "name": "Groszek cukrowy",
        "fodmap mon": "mid",
        "max_use": "17g",
        "category": "warzywa",
        "id": "f_224"
      },
      {
        "name": "Groszek cukrowy odmiany Snap Pea",
        "fodmap mon": "high",
        "category": "warzywa",
        "id": "f_225"
      },
      {
        "name": "Groszek, mrożony",
        "fodmap mon": "high",
        "category": "warzywa",
        "id": "f_226"
      },
      {
        "name": "Ziemniak",
        "fodmap mon": "high",
        "category": "warzywa",
        "id": "f_227"
      },
      {
        "name": "Batat",
        "sub-title": "Słodki ziemniak",
        "fodmap mon": "high",
        "max_use": "70g",
        "category": "warzywa",
        "id": "f_228",
        "notes": "Sprzeczne informacje na temat zawartości FODMAP w źródłach."
      },
      {
        "name": "Dynia piżmowa ",
        "sub-title": "Butternut",
        "fodmap mon": "mid",
        "max_use": "30g",
        "category": "warzywa",
        "id": "f_229"
      },
      {
        "name": "Dynia japońska",
        "sub-title": "Hokkaido",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_230"
      },
      {
        "name": "Rzodkiew",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_231"
      },
      {
        "name": "Brukiew",
        "fodmap mon": "mid",
        "max_use": "65g",
        "category": "warzywa",
        "id": "f_232"
      },
      {
        "name": "Burak liściowy",
        "sub-title": "Boćwina",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_233"
      },
      {
        "name": "Szpinak",
        "fodmap mon": "mid",
        "max_use": "38g",
        "category": "warzywa",
        "histamine": "high",
        "id": "f_234"
      },
      {
        "name": "Patison",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_235"
      },
      {
        "name": "Dynia makaronowa",
        "fodmap mon": "mid",
        "max_use": "155g",
        "category": "warzywa",
        "id": "f_236"
      },
      {
        "name": "Taro",
        "fodmap mon": "mid",
        "max_use": "82g",
        "category": "warzywa",
        "id": "f_237"
      },
      {
        "name": "Pomidorki cherry",
        "fodmap mon": "low",
        "max_use": "68g",
        "category": "warzywa",
        "histamine": "high",
        "id": "f_238"
      },
      {
        "name": "Pomidory",
        "fodmap mon": "low",
        "category": "warzywa",
        "histamine": "high",
        "id": "f_239"
      },
      {
        "name": "Rzepa",
        "fodmap mon": "mid",
        "max_use": "65g",
        "category": "warzywa",
        "id": "f_240"
      },
      {
        "name": "Yam",
        "fodmap mon": "mid",
        "max_use": "164g",
        "category": "warzywa",
        "id": "f_241"
      },
      {
        "name": "Jukka",
        "fodmap mon": "mid",
        "max_use": "69g",
        "category": "warzywa",
        "id": "f_242"
      },
      {
        "name": "Cukinia",
        "fodmap mon": "mid",
        "max_use": "66g",
        "category": "warzywa",
        "id": "f_243"
      },
      {
        "name": "Pędy bambusa, z puszki",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_244"
      },
      {
        "name": "Edamame",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_245"
      },
      {
        "name": "Ogórki konserwowe",
        "sub-title": "Ogórki kiszone",
        "fodmap mon": "high",
        "category": "warzywa",
        "id": "f_246"
      },
      {
        "name": "Ogórki konserwowe bez cukru i czosnku",
        "sub-title": "Ogórki kiszone bez cukru i czosnku",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_247"
      },
      {
        "name": "Pieczarki z puszki",
        "fodmap mon": "mid",
        "max_use": "110g",
        "category": "warzywa",
        "histamine": "low",
        "id": "f_248"
      },
      {
        "name": "Grzyby Shiitake, suszone",
        "fodmap mon": "mid",
        "max_use": "7g",
        "category": "warzywa",
        "id": "f_249"
      },
      {
        "name": "Oliwki, zielone, bez pestek",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_250"
      },
      {
        "name": "Cebula marynowana",
        "fodmap mon": "high",
        "category": "warzywa",
        "id": "f_251"
      },
      {
        "name": "Kluski ziemniaczane, pyzy",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_252"
      },
      {
        "name": "Dynia, z puszki",
        "fodmap mon": "mid",
        "max_use": "60g",
        "category": "warzywa",
        "id": "f_253"
      },
      {
        "name": "Wodorosty nori",
        "fodmap mon": "high",
        "category": "warzywa",
        "id": "f_254"
      },
      {
        "name": "Pomidor, z puszki",
        "fodmap mon": "high",
        "category": "warzywa",
        "id": "f_255"
      },
      {
        "name": "Pomidor, suszony",
        "fodmap mon": "mid",
        "max_use": "8g",
        "category": "warzywa",
        "id": "f_256"
      },
      {
        "name": "Kapusta kiszona",
        "fodmap mon": "mid",
        "max_use": "20g",
        "category": "warzywa",
        "id": "f_257"
      },
      {
        "name": "Alfalfa",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_258"
      },
      {
        "name": "Rukola",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_259"
      },
      {
        "name": "Karczoch, cały",
        "fodmap mon": "high",
        "category": "warzywa",
        "id": "f_260"
      },
      {
        "name": "Serca karczocha, z puszki",
        "fodmap mon": "mid",
        "max_use": "28g",
        "category": "warzywa",
        "id": "f_261"
      },
      {
        "name": "Szparag",
        "fodmap mon": "high",
        "category": "warzywa",
        "id": "f_262"
      },
      {
        "name": "Bakłażan",
        "fodmap mon": "mid",
        "max_use": "41g",
        "category": "warzywa",
        "id": "f_263"
      },
      {
        "name": "Pędy bambusa,  świeżę",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_264"
      },
      {
        "name": "Pędy fasoli",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_265"
      },
      {
        "name": "Fasolka zielona",
        "fodmap mon": "mid",
        "max_use": "86g",
        "category": "warzywa",
        "id": "f_266"
      },
      {
        "name": "Burak",
        "fodmap mon": "mid",
        "max_use": "20g",
        "category": "warzywa",
        "id": "f_267"
      },
      {
        "name": "Papryka, zielona",
        "fodmap mon": "mid",
        "max_use": "52g",
        "category": "warzywa",
        "id": "f_268"
      },
      {
        "name": "Papryka, czerwona",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_269"
      },
      {
        "name": "Kapusta chińska",
        "fodmap mon": "mid",
        "max_use": "85g",
        "category": "warzywa",
        "id": "f_270"
      },
      {
        "name": "Brokuł",
        "fodmap mon": "mid",
        "max_use": "47g",
        "category": "warzywa",
        "id": "f_271"
      },
      {
        "name": "Brukselka",
        "fodmap mon": "mid",
        "max_use": "38g",
        "category": "warzywa",
        "id": "f_272"
      },
      {
        "name": "Kapusta",
        "fodmap mon": "mid",
        "max_use": "94g",
        "category": "warzywa",
        "id": "f_273"
      },
      {
        "name": "Marchew",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_274"
      },
      {
        "name": "Cassava",
        "sub-title": "Maniok jadalny",
        "fodmap mon": "mid",
        "max_use": "69g",
        "category": "warzywa",
        "id": "f_275"
      },
      {
        "name": "Kalafior",
        "fodmap mon": "high",
        "category": "warzywa",
        "id": "f_276"
      },
      {
        "name": "Seler korzeniowy",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_277"
      },
      {
        "name": "Seler naciowy",
        "fodmap mon": "mid",
        "max_use": "12g",
        "category": "warzywa",
        "id": "f_278"
      },
      {
        "name": "Chili, zielone",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_279"
      },
      {
        "name": "Chili, czerwone",
        "fodmap mon": "mid",
        "max_use": "28g",
        "category": "warzywa",
        "id": "f_280"
      },
      {
        "name": "Szczypiorek",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_281"
      },
      {
        "name": "Kapusta galicyjska",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_282"
      },
      {
        "name": "Kukurydza cukrowa",
        "fodmap mon": "mid",
        "max_use": "43g",
        "category": "warzywa",
        "id": "f_283"
      },
      {
        "name": "Kabaczek",
        "fodmap mon": "mid",
        "max_use": "66g",
        "category": "warzywa",
        "id": "f_284"
      },
      {
        "name": "Ogórek",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_285"
      },
      {
        "name": "Brokuł chiński",
        "sub-title": "Gai lan",
        "fodmap mon": "mid",
        "max_use": "68g",
        "category": "warzywa",
        "id": "f_286"
      },
      {
        "name": "Czosnek",
        "fodmap mon": "high",
        "category": "warzywa",
        "id": "f_287"
      },
      {
        "name": "Imbir",
        "sub-title": "(korzeń)",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_288"
      },
      {
        "name": "Jarmuż",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_289"
      },
      {
        "name": "Por, bulwa",
        "fodmap mon": "high",
        "category": "warzywa",
        "id": "f_290"
      },
      {
        "name": "Por, liście",
        "fodmap mon": "mid",
        "max_use": "28g",
        "category": "warzywa",
        "id": "f_291"
      },
      {
        "name": "Sałata maślana",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_292"
      },
      {
        "name": "Sałata lodowa",
        "fodmap mon": "low",
        "category": "warzywa",
        "id": "f_293"
      },
      {
        "name": "Cykoria radicchio",
        "sub-title": "Cykoria czerwona, sałatowa",
        "fodmap mon": "mid",
        "max_use": "35g",
        "category": "warzywa",
        "id": "f_294"
      },
      {
        "name": "Groch cukrowy",
        "fodmap mon": "mid",
        "max_use": "17g",
        "category": "warzywa",
        "id": "f_295"
      },
      {
        "name": "Otręby pszenne",
        "fodmap mon": "mid",
        "max_use": "5g",
        "category": "zboza",
        "id": "f_296"
      },
      {
        "name": "Kasza gryczana",
        "fodmap mon": "low",
        "category": "zboza",
        "id": "f_297"
      },
      {
        "name": "Gryka",
        "fodmap mon": "mid",
        "max_use": "27g",
        "category": "zboza",
        "id": "f_298"
      },
      {
        "name": "Kuskus",
        "fodmap mon": "mid",
        "max_use": "37g",
        "category": "zboza",
        "id": "f_299"
      },
      {
        "name": "Kasza jaglana",
        "fodmap mon": "low",
        "category": "zboza",
        "id": "f_300"
      },
      {
        "name": "Płatki owsiane",
        "sub-title": "(nie błyskawiczne)",
        "fodmap mon": "mid",
        "max_use": "60g",
        "category": "zboza",
        "id": "f_301"
      },
      {
        "name": "Polenta ",
        "fodmap mon": "low",
        "category": "zboza",
        "id": "f_302"
      },
      {
        "name": "Quinoa",
        "fodmap mon": "low",
        "category": "zboza",
        "id": "f_303"
      },
      {
        "name": "Wafle ryżowe",
        "fodmap mon": "high",
        "category": "zboza",
        "id": "f_304"
      },
      {
        "name": "Ryż",
        "sub-title": "biały, basmati, jaśminowy",
        "fodmap mon": "low",
        "category": "zboza",
        "id": "f_305"
      },
      {
        "name": "Orkisz",
        "fodmap mon": "high",
        "category": "zboza",
        "id": "f_306"
      },
      {
        "name": "Mąka migdałowa",
        "fodmap mon": "mid",
        "max_use": "24g",
        "category": "zboza",
        "id": "f_307"
      },
      {
        "name": "Mąka z amarantusa",
        "fodmap mon": "high",
        "category": "zboza",
        "id": "f_308"
      },
      {
        "name": "Mąka jęczmienna",
        "fodmap mon": "high",
        "category": "zboza",
        "id": "f_309"
      },
      {
        "name": "Mąka gryczana",
        "fodmap mon": "low",
        "category": "zboza",
        "id": "f_310"
      },
      {
        "name": "Mąka kukurydziana",
        "fodmap mon": "low",
        "category": "zboza",
        "id": "f_311"
      },
      {
        "name": "Mąka z pszenicy samopsza",
        "fodmap mon": "high",
        "category": "zboza",
        "id": "f_312"
      },
      {
        "name": "Płatki kukurydziane",
        "fodmap mon": "mid",
        "category": "zboza",
        "id": "f_313"
      },
      {
        "name": "Mąka kamut",
        "fodmap mon": "high",
        "category": "zboza",
        "id": "f_314"
      },
      {
        "name": "Mąka łubinowa",
        "fodmap mon": "high",
        "category": "zboza",
        "id": "f_315"
      },
      {
        "name": "Mąka jaglana",
        "fodmap mon": "low",
        "category": "zboza",
        "id": "f_316"
      },
      {
        "name": "Mąka z Qinoa",
        "fodmap mon": "low",
        "category": "zboza",
        "id": "f_317"
      },
      {
        "name": "Mąka ryżowa",
        "fodmap mon": "low",
        "category": "zboza",
        "id": "f_318"
      },
      {
        "name": "Mąka żytnia",
        "fodmap mon": "high",
        "category": "zboza",
        "id": "f_319"
      },
      {
        "name": "Mąka z sorgo",
        "fodmap mon": "low",
        "category": "zboza",
        "id": "f_320"
      },
      {
        "name": "Mąka orkiszowa",
        "fodmap mon": "high",
        "category": "zboza",
        "id": "f_321"
      },
      {
        "name": "Płatki kukurydziane bez glutenu",
        "fodmap mon": "low",
        "category": "zboza",
        "id": "f_322"
      },
      {
        "name": "Mąka teff",
        "fodmap mon": "low",
        "category": "zboza",
        "id": "f_323"
      },
      {
        "name": "Mąka pszenna",
        "fodmap mon": "high",
        "category": "zboza",
        "id": "f_324"
      },
      {
        "name": "Mąka z pochrzynu",
        "fodmap mon": "low",
        "category": "zboza",
        "id": "f_325"
      },
      {
        "name": "Skrobia kukurydziana",
        "fodmap mon": "low",
        "category": "zboza",
        "id": "f_326"
      },
      {
        "name": "Skrobia ziemniaczana",
        "fodmap mon": "low",
        "category": "zboza",
        "id": "f_327"
      },
      {
        "name": "Skrobia z tapioki",
        "fodmap mon": "low",
        "category": "zboza",
        "id": "f_328"
      },
      {
        "name": "Musli",
        "fodmap mon": "high",
        "category": "zboza",
        "id": "f_329"
      },
      {
        "name": "Ryż prażony",
        "fodmap mon": "mid",
        "category": "zboza",
        "id": "f_330"
      },
      {
        "name": "Otręby pszenne",
        "fodmap mon": "high",
        "category": "zboza",
        "id": "f_331"
      },
      {
        "name": "Kasza pęczak",
        "fodmap mon": "high",
        "category": "zboza",
        "id": "f_332"
      },
      {
        "name": "Kasza bulgur",
        "fodmap mon": "mid",
        "max_use": "44g",
        "category": "zboza",
        "id": "f_333"
      }
    ]
  

    export default dietDB;