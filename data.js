/*
 * STOEPSIT FEES SCAVENGER HUNT — all content lives in this one file.
 *
 * Each "stop" is one QR code. The `code` is what goes in the QR link
 * (stop.html?c=CODE). Keep codes random so people can't guess the next one.
 * After adding/removing stops, re-run tools/make_qr.py to regenerate QR codes.
 *
 * type: "history"  → tells the story of a landmark
 * type: "prize"    → reveals a prize and how to claim it
 * clue              → (landmarks) hint shown to players who are looking for this stop next
 *
 * af                → Afrikaans version of the same fields (falls back to English if missing)
 *
 * A prize whose `prize` text still starts with "TODO" stays hidden: it is not counted,
 * and scanning its poster shows "not unlocked yet". Fill it in and it goes live.
 *
 * Poster locations are deliberately NOT in this file (it is public). See tools/make_qr.py.
 */
window.HUNT = {
  title: "Stoepsit Fees Scavenger Hunt",
  town: "Rhodes",
  intro:
    "Explore Rhodes this weekend as you hunt for QR codes hidden across town. " +
    "Scan each one to win a prize or uncover the stories behind our historic landmarks. " +
    "Grab your phone, gather your friends and discover Rhodes like never before!",
  dates: "This weekend", // or e.g. "Sat 21 – Sun 22 November"
  goatcounter: "", // optional visitor counter: your code from goatcounter.com, e.g. "rhodeshunt"
  af: {
    title: "Stoepsit Fees Skattejag",
    intro:
      "Verken Rhodes hierdie naweek terwyl jy soek na QR-kodes wat oral in die dorp weggesteek is. " +
      "Skandeer elkeen om 'n prys te wen of die stories agter ons historiese landmerke te ontdek. " +
      "Gryp jou foon, kry jou vriende bymekaar en ontdek Rhodes soos nog nooit tevore nie!",
    dates: "Hierdie naweek",
  },
  contact: "", // optional, e.g. "WhatsApp 082 000 0000 for help"

  stops: [
    // ---------- HISTORIC LANDMARKS (from the history thread, in walking order) ----------
    {
      code: "4Q8N57",
      type: "history",
      name: "Welcome to Rhodes",
      year: "Founded 1891",
      image: "",
      story: [
        "You're standing in a village that has been here since 16 September 1891. It was laid out on the farm Tintern, owned by Jim Vorster, who sold 100 plots and kept the rest as common grazing land, which is still open to walkers today. Rhodes was named after Cecil John Rhodes, then Prime Minister of the Cape. Sitting at about 1,840 m, just 16 km from Lesotho, it's one of the highest villages in South Africa. Snow has been recorded here in every month of the year, even on New Year's Day 2001.",
      ],
      funFact: "In 1997 the whole village was declared a Conservation Area to protect its old buildings.",
      clue: "Start where every visitor does: look for the village notice board near the way into Rhodes.",
      af: {
        name: "Welkom in Rhodes",
        year: "Gestig 1891",
        story: [
          "Jy staan in 'n dorpie wat al sedert 16 September 1891 hier is. Dit is uitgelê op die plaas Tintern van Jim Vorster, wat 100 erwe verkoop en die res as gemeenskaplike weiveld gehou het. Dié meent is vandag nog oop vir stappers. Rhodes is vernoem na Cecil John Rhodes, destyds Eerste Minister van die Kaap. Op sowat 1 840 m, net 16 km van Lesotho af, is dit een van die hoogste dorpies in Suid-Afrika. Sneeu is al in elke maand van die jaar hier aangeteken, selfs op Nuwejaarsdag 2001.",
        ],
        funFact: "In 1997 is die hele dorpie tot 'n Bewaringsgebied verklaar om sy ou geboue te beskerm.",
        clue: "Begin waar elke besoeker begin: soek die dorp se kennisgewingbord naby die ingang na Rhodes.",
      },
    },
    {
      code: "V3HULV",
      type: "history",
      name: "The Dutch Reformed Church",
      year: "Cornerstone laid 1892",
      image: "",
      story: [
        "The cornerstone of this church was laid on 15 June 1892, when only 250 to 300 people lived here. Its congregation was named Rossville after Reverend David Ross, a Scot who rode in on horseback from Lady Grey. He preached in English and Afrikaans every Sunday. During the Anglo-Boer War he was arrested and held in the camp at Aliwal North. He was released without shoes, walked barefoot all the way home to Lady Grey, and vowed never to preach in English again.",
      ],
      funFact: "Some locals say the village itself was once called Rossville, but historians have found no record of it.",
      clue: "Find the tall building where a cornerstone was laid in 1892 and the village gathers on Sundays.",
      af: {
        name: "Die NG Kerk",
        year: "Hoeksteen gelê 1892",
        story: [
          "Die hoeksteen van hierdie kerk is op 15 Junie 1892 gelê, toe net 250 tot 300 mense hier gewoon het. Die gemeente is Rossville genoem na dominee David Ross, 'n Skot wat te perd van Lady Grey af gekom het. Hy het elke Sondag in Engels en Afrikaans gepreek. Tydens die Anglo-Boereoorlog is hy gearresteer en in die kamp by Aliwal-Noord aangehou. Hy is sonder skoene vrygelaat, het kaalvoet al die pad terug na Lady Grey gestap, en het gesweer om nooit weer in Engels te preek nie.",
        ],
        funFact: "Party inwoners sê die dorpie self is eens Rossville genoem, maar geskiedkundiges het geen bewys daarvan gevind nie.",
        clue: "Soek die hoë gebou waar 'n hoeksteen in 1892 gelê is en die dorp Sondae bymekaarkom.",
      },
    },
    {
      code: "DWUHCH",
      type: "history",
      name: "The Old Court Room, Lock-up and Post Office",
      year: "Opened 1900",
      image: "",
      story: [
        "Before this building, sorting out paperwork meant a five to six hour horse-and-cart trip to Barkly East. The Cape government's Public Works Department built this combined court, jail and post office itself, because both builders' quotes came in too high. Work started in 1898, stalled when money ran short, and stopped again when Boer forces invaded the district in November 1899. It finally opened in August 1900. A newspaper of the time called it \"somewhat quaint in design\", and its gable and little turret still stand out today.",
      ],
      funFact: "It was built on budget, for £558 14s 10d.",
      clue: "Look for a quaint gable and a little turret, where letters were once posted and troublemakers locked up.",
      af: {
        name: "Die Ou Hofsaal, Tronk en Poskantoor",
        year: "Geopen 1900",
        story: [
          "Voor hierdie gebou het papierwerk 'n rit van vyf tot ses uur met perd en kar na Barkly-Oos beteken. Die Kaapse regering se Departement van Openbare Werke het hierdie gekombineerde hof, tronk en poskantoor self gebou, omdat albei bouers se kwotasies te hoog was. Die werk het in 1898 begin, gaan staan toe die geld opraak, en weer gestop toe Boeremagte die distrik in November 1899 binneval. Dit het uiteindelik in Augustus 1900 geopen. 'n Koerant van destyds het dit \"ietwat eienaardig van ontwerp\" genoem, en die gewel en torinkie val vandag nog op.",
        ],
        funFact: "Dit is binne die begroting gebou, vir £558 14s 10d.",
        clue: "Soek 'n eienaardige gewel en 'n klein torinkie, waar briewe eens gepos en moeilikheidmakers toegesluit is.",
      },
    },
    {
      code: "ZCJVTY",
      type: "history",
      name: "Rhodes Hotel and the De Wydeman Pub",
      year: "Opened 1899",
      image: "",
      story: [
        "The Rhodes Hotel opened in 1899, a comfortable base on what was then a wild frontier. Its pub, De Wydeman, was where traders and farmers from across the district met to drink, talk and gamble. Local lore says more than one fortune was won and lost across its tables. The pub has been restored and still feels much as it did over a century ago.",
      ],
      funFact: "The village was invaded 29 times during the Anglo-Boer War, between June 1901 and February 1902.",
      clue: "Thirsty? Head for the old pub where farmers and traders once gambled fortunes away.",
      af: {
        name: "Rhodes Hotel en die De Wydeman-kroeg",
        year: "Geopen 1899",
        story: [
          "Die Rhodes Hotel het in 1899 geopen, 'n gerieflike tuiste in wat toe 'n wilde grensgebied was. In sy kroeg, De Wydeman, het handelaars en boere van regoor die distrik bymekaargekom om te drink, te gesels en te dobbel. Volgens plaaslike oorlewering is meer as een fortuin oor dié tafels gewen en verloor. Die kroeg is gerestoureer en voel nog baie soos meer as 'n eeu gelede.",
        ],
        funFact: "Die dorpie is 29 keer tydens die Anglo-Boereoorlog binnegeval, tussen Junie 1901 en Februarie 1902.",
        clue: "Dors? Mik na die ou kroeg waar boere en handelaars eens fortuine weggedobbel het.",
      },
    },
    {
      code: "DT95R2",
      type: "history",
      name: "The Old Rhodes School",
      year: "Built 1924",
      image: "",
      story: [
        "School in Rhodes began in 1894 with 45 pupils. A year later it was the biggest school in the Barkly East district. This building was finished in 1924, and by 1928 it taught 112 pupils up to Standard 8. As farming declined, numbers shrank to just 20 by 1967, and the school closed in the 1970s. Legend says the famous architect Sir Herbert Baker designed it, but he had left South Africa by then, so it was more likely the firm Kendall and Morris.",
      ],
      funFact: "The old school became a protected heritage site in 1987.",
      clue: "Find the place where more than a hundred children once learned their lessons.",
      af: {
        name: "Die Ou Rhodes-skool",
        year: "Gebou 1924",
        story: [
          "Skool in Rhodes het in 1894 met 45 leerlinge begin. 'n Jaar later was dit die grootste skool in die Barkly-Oos-distrik. Hierdie gebou is in 1924 voltooi, en teen 1928 het dit 112 leerlinge tot standerd 8 onderrig. Soos die boerdery agteruitgegaan het, het die getalle teen 1967 tot net 20 gekrimp, en die skool het in die 1970's gesluit. Volgens legende het die beroemde argitek sir Herbert Baker dit ontwerp, maar hy het Suid-Afrika toe reeds verlaat, so dit was waarskynlik die firma Kendall en Morris.",
        ],
        funFact: "Die ou skool het in 1987 'n beskermde erfenisterrein geword.",
        clue: "Soek die plek waar meer as honderd kinders eens hul lesse geleer het.",
      },
    },
    {
      code: "9C5XGQ",
      type: "history",
      name: "Walkerbouts Inn: Hotel, Hostel, Hippie Haven",
      year: "Since 1905",
      image: "",
      story: [
        "Few buildings here have had as many lives as this one. It started as the Ginsberg Hotel, run by H. Venter from 1905. After a fire it was rebuilt as the hostel for the village boarding school. When the school closed it became a family home, and in the late 1970s and early 1980s it was a hub of the village's hippie era, when free spirits rediscovered a nearly empty Rhodes. It later housed the crew building the Tiffindell ski resort, and opened as Walkerbouts Inn in 1996.",
      ],
      funFact: "In 1970 some houses in Rhodes were simply given away, or sold for the unpaid rates.",
      clue: "Seek the inn that has been a hotel, a hostel and a hippie haven.",
      af: {
        name: "Walkerbouts Inn: Hotel, Koshuis, Hippie-hawe",
        year: "Sedert 1905",
        story: [
          "Min geboue hier het al soveel lewens gehad soos dié een. Dit het begin as die Ginsberg Hotel, wat H. Venter van 1905 af bedryf het. Ná 'n brand is dit herbou as die koshuis vir die dorp se kosskool. Toe die skool sluit, het dit 'n gesinswoning geword, en in die laat 1970's en vroeë 1980's was dit 'n spilpunt van die dorp se hippie-era, toe vrygeeste 'n byna leë Rhodes herontdek het. Later het die span wat die Tiffindell-ski-oord gebou het hier gebly, en in 1996 het dit as Walkerbouts Inn geopen.",
        ],
        funFact: "In 1970 is party huise in Rhodes sommer weggegee, of verkoop vir die onbetaalde erfbelasting.",
        clue: "Soek die herberg wat al 'n hotel, 'n koshuis en 'n hippie-hawe was.",
      },
    },
    {
      code: "V7VQLF",
      type: "history",
      name: "The Legend of the Pine Trees",
      year: "",
      image: "",
      story: [
        "Rhodes sits above the natural tree line, so every tall tree you see was planted. Legend says Cecil Rhodes was so pleased the village took his name that he sent a whole wagonload of pine trees as a thank-you, and in some versions £500, which vanished along with the official who received it. The records tell a duller story: the village paid the Barkly East Municipality £1 17s 3d for pine trees. Some of those trees still stand in the village today.",
      ],
      funFact: "The receipt lists the trees as \"Pinus insegnus\", probably a spelling slip for Pinus insignis, the Monterey pine.",
      clue: "Look up! Find the tall old trees that have no business growing this high in the mountains.",
      af: {
        name: "Die Legende van die Dennebome",
        year: "",
        story: [
          "Rhodes lê bo die natuurlike boomgrens, so elke hoë boom wat jy sien, is geplant. Volgens legende was Cecil Rhodes so in sy skik dat die dorpie sy naam gekry het dat hy 'n hele wavrag dennebome as dankie gestuur het, en in party weergawes ook £500, wat saam met die amptenaar wat dit ontvang het verdwyn het. Die rekords vertel 'n vaaler storie: die dorpie het die Barkly-Oos-munisipaliteit £1 17s 3d vir dennebome betaal. Party van daardie bome staan vandag nog in die dorp.",
        ],
        funFact: "Die kwitansie noem die bome \"Pinus insegnus\", waarskynlik 'n spelfout vir Pinus insignis, die Monterey-den.",
        clue: "Kyk op! Soek die hoë ou bome wat niks te soek het so hoog in die berge nie.",
      },
    },
    {
      code: "5LDK7E",
      type: "history",
      name: "Furrows, Cottages and Kerkhuisies",
      year: "Mostly built around 1900",
      image: "",
      story: [
        "Look down at the dirt streets: the water furrows beside them are lined with dressed stone and river rock. Look up and you'll see Victorian cottages, grand traders' houses and small flat-roofed kerkhuisies, or \"church houses\". Farmers rode in on horseback and kept these as town homes for church weekends and Communion. Most of the buildings went up around 1900, and about 15 were rated top-grade heritage buildings in a university survey.",
      ],
      funFact: "The village's most prosperous years were 1911 to 1945, and a 1950s wool boom paid a pound for a pound of wool.",
      clue: "Follow the water. Look for a stone-lined furrow running beside a main street.",
      af: {
        name: "Leivore, Kothuise en Kerkhuisies",
        year: "Meestal omstreeks 1900 gebou",
        story: [
          "Kyk af na die grondstrate: die leivore langsaan is met gekapte klip en rivierklip uitgevoer. Kyk op en jy sien Victoriaanse kothuise, deftige handelaarshuise en klein platdak-kerkhuisies. Boere het te perd ingekom en dié huisies as dorpshuise vir kerknaweke en Nagmaal aangehou. Die meeste geboue is omstreeks 1900 opgerig, en sowat 15 is in 'n universiteitsopname as topgraad-erfenisgeboue aangewys.",
        ],
        funFact: "Die dorpie se voorspoedigste jare was 1911 tot 1945, en in die wolhoogbloei van die 1950's is 'n pond vir 'n pond wol betaal.",
        clue: "Volg die water. Soek 'n klipvoor wat langs 'n hoofstraat loop.",
      },
    },
    {
      code: "FKME2A",
      type: "history",
      name: "Bell River and the Wild Trout",
      year: "",
      image: "",
      story: [
        "The Bell River forms the northern edge of the village. It is famous with fly-fishers for its wild trout. Every year the Wild Trout Festival brings anglers to fish the Bell and nearby streams, with about 180 km of running water within an hour's drive. Keep an eye on the sky too: a vulture feeding site on the commonage attracts the Cape vulture and the rare bearded vulture.",
      ],
      funFact: "Ben Macdhui, at 3,001 m the highest peak in the Eastern Cape, is just up the road.",
      clue: "Head for the sound of running water on the northern edge of the village, where the trout live.",
      af: {
        name: "Bellrivier en die Wilde Forelle",
        year: "",
        story: [
          "Die Bellrivier vorm die noordelike grens van die dorpie. Dit is beroemd onder vlieghengelaars vir sy wilde forelle. Elke jaar bring die Wild Trout Festival hengelaars om in die Bell en nabygeleë strome te kom visvang, met sowat 180 km lopende water binne 'n uur se ry. Hou ook die lug dop: 'n aasvoëlrestaurant op die meent lok die Kransaasvoël en die skaars Baardaasvoël.",
        ],
        funFact: "Ben Macdhui, met 3 001 m die hoogste piek in die Oos-Kaap, is net hier anderkant.",
        clue: "Mik na die geluid van lopende water aan die noordekant van die dorpie, waar die forelle bly.",
      },
    },
    {
      code: "H33D8J",
      type: "history",
      name: "Naudesnek Pass",
      year: "Completed 1905",
      image: "",
      story: [
        "The road over the mountains owes its name to Stephanus Naudé of the farm Dunley, the first person to cross the range by ox-wagon. On his advice, work on a proper pass began in 1895. Heavy snow and the Anglo-Boer War stopped construction, and engineer Alfred Bain finally finished it in 1905. Parts of the old wagon track can still be seen. Today it is one of the highest road passes in South Africa, and Rhodes sits at the centre of eight mountain passes.",
      ],
      funFact: "Barkly East is only 60 km away, but in the 1890s the trip took five to six hours by horse and cart.",
      clue: "Take the road that leads out towards the mountains and the high pass.",
      af: {
        name: "Naudesnekpas",
        year: "Voltooi 1905",
        story: [
          "Die pad oor die berge het sy naam te danke aan Stephanus Naudé van die plaas Dunley, die eerste mens wat die bergreeks met 'n ossewa oorgesteek het. Op sy aanbeveling het werk aan 'n behoorlike pas in 1895 begin. Swaar sneeu en die Anglo-Boereoorlog het die bouwerk gestop, en ingenieur Alfred Bain het dit uiteindelik in 1905 voltooi. Dele van die ou wapad is nog sigbaar. Vandag is dit een van die hoogste padpasse in Suid-Afrika, en Rhodes lê in die middel van agt bergpasse.",
        ],
        funFact: "Barkly-Oos is net 60 km ver, maar in die 1890's het die rit vyf tot ses uur met perd en kar geduur.",
        clue: "Vat die pad wat uit die dorp na die berge en die hoë pas lei.",
      },
    },

    // ---------- PRIZES (EXAMPLES from the prizes thread — replace with the real prizes) ----------
    // placeholder: true shows an "example prize" banner on the page. Remove it once the prize is real.
    {
      code: "UBH3QX", type: "prize", placeholder: true,
      name: "Coffee and rusks",
      sponsor: "Sponsor to be confirmed",
      prize: "A free coffee and a rusk",
      claim: "Show this screen at the sponsor's counter before 4pm Sunday.",
      limit: "First 20 players only",
      af: { name: "Koffie en beskuit", prize: "'n Gratis koffie en 'n beskuit", claim: "Wys hierdie skerm by die borg se toonbank voor 16:00 Sondag.", limit: "Slegs die eerste 20 spelers", sponsor: "Borg moet nog bevestig word" },
    },
    {
      code: "98F74D", type: "prize", placeholder: true,
      name: "R100 shop voucher",
      sponsor: "Sponsor to be confirmed",
      prize: "A R100 voucher to spend at the sponsor's shop",
      claim: "Show this screen at the sponsor's shop before 4pm Sunday.",
      limit: "First 5 players only",
      af: { name: "R100-winkelbewys", prize: "'n Bewys van R100 om by die borg se winkel te spandeer", claim: "Wys hierdie skerm by die borg se winkel voor 16:00 Sondag.", limit: "Slegs die eerste 5 spelers", sponsor: "Borg moet nog bevestig word" },
    },
    {
      code: "CU5FRW", type: "prize", placeholder: true,
      name: "Stoepsit Fees T-shirt",
      sponsor: "Stoepsit Fees",
      prize: "An official Stoepsit Fees T-shirt",
      claim: "Show this screen at the Stoepsit Fees info stand before 4pm Sunday.",
      limit: "First 10 players only",
      af: { name: "Stoepsit Fees-T-hemp", prize: "'n Amptelike Stoepsit Fees-T-hemp", claim: "Wys hierdie skerm by die Stoepsit Fees-inligtingstalletjie voor 16:00 Sondag.", limit: "Slegs die eerste 10 spelers" },
    },
    {
      code: "UDMCR4", type: "prize", placeholder: true,
      name: "Grand prize: weekend away",
      sponsor: "Sponsor to be confirmed",
      prize: "A night for two at a Rhodes guesthouse",
      claim: "Show this screen at the Stoepsit Fees info stand before 4pm Sunday.",
      limit: "First player only",
      af: { name: "Hoofprys: naweek weg", prize: "'n Nag vir twee by 'n gastehuis in Rhodes", claim: "Wys hierdie skerm by die Stoepsit Fees-inligtingstalletjie voor 16:00 Sondag.", limit: "Slegs die eerste speler", sponsor: "Borg moet nog bevestig word" },
    },
  ],
};
