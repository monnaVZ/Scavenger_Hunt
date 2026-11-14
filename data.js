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
    },

    // ---------- PRIZES (TODO: content from the prizes thread) ----------
    {
      code: "UBH3QX",
      type: "prize",
      name: "Prize 1 (TODO)",
      sponsor: "", // e.g. "Rhodes Hotel"
      prize: "TODO: What the player wins, e.g. 'A free coffee'",
      claim: "TODO: How to claim, e.g. 'Show this screen at the Rhodes Hotel bar before 5pm Sunday.'",
      limit: "", // optional, e.g. "First 20 players only"
    },
    { code: "98F74D", type: "prize", name: "Prize 2 (TODO)", sponsor: "", prize: "TODO", claim: "TODO", limit: "" },
    { code: "CU5FRW", type: "prize", name: "Prize 3 (TODO)", sponsor: "", prize: "TODO", claim: "TODO", limit: "" },
    { code: "UDMCR4", type: "prize", name: "Prize 4 (TODO)", sponsor: "", prize: "TODO", claim: "TODO", limit: "" },
  ],
};
