export const NAV_LINKS = {
  primary: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Sundays", href: "/sundays" },
    { label: "Stories", href: "/stories" },
    { label: "Coming Up", href: "/coming-up" },
    { label: "Connect", href: "/connect" },
    { label: "Giving", href: "/giving" },
  ],
  ministries: [
    { label: "Connect Groups", href: "/connect-groups" },
    { label: "Teams", href: "/teams" },
    { label: "Prayer", href: "/prayer" },
    { label: "Internship", href: "/internship" },
    { label: "Men", href: "/men" },
    { label: "Women", href: "/women" },
    { label: "C3 Kids", href: "/c3-kids" },
    { label: "Worship", href: "/worship" },
    { label: "Vision Builders", href: "/vision-builders" },
  ],
  mobile: [
    { label: "I'm New", href: "/im-new" },
    { label: "About", href: "/about" },
    { label: "Sundays", href: "/sundays" },
    { label: "Giving", href: "/giving" },
    { label: "Coming Up", href: "/coming-up" },
    { label: "Connect Groups", href: "/connect-groups" },
    { label: "Teams", href: "/teams" },
    { label: "Vision Builders", href: "/vision-builders" },
    { label: "Worship", href: "/worship" },
    { label: "Stories", href: "/stories" },
    { label: "C3 Kids", href: "/c3-kids" },
    { label: "Internship", href: "/internship" },
    { label: "Love This City", href: "/love-this-city" },
    { label: "Men", href: "/men" },
    { label: "Women", href: "/women" },
    { label: "Prayer", href: "/prayer" },
  ],
} as const;

export const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/C3ChurchToronto",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/c3toronto",
    icon: "instagram",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@C3Toronto",
    icon: "youtube",
  },
  {
    label: "Apple Podcasts",
    href: "https://podcasts.apple.com/ca/podcast/c3-toronto/id1483025957",
    icon: "podcast",
  },
] as const;

export const LOCATIONS = [
  {
    name: "Downtown",
    address: "12 Pauline Avenue, Toronto",
    times: "8:30, 10:00 & 11:45 AM",
    image:
      "https://cdn.prod.website-files.com/6450591b16d7622484e46a09/66a7079e13cc6e67d4fa8c05_Pauline%20Ext.jpeg",
    mapUrl:
      "https://www.google.com/maps/dir//12+Pauline+Ave,+Toronto,+ON",
  },
  {
    name: "Midtown",
    address: "25 Wanless Ave, Toronto",
    times: "9:00, 10:30 AM & 12:15 PM",
    image:
      "https://cdn.prod.website-files.com/6450591b16d7622484e46a09/66a707906e82ebbeef3d0864_IMG_4659.jpg",
    mapUrl:
      "https://www.google.com/maps/dir//25+Wanless+Ave,+Toronto,+ON",
  },
  {
    name: "Hamilton",
    address: "601 Burlington St E Unit A, Hamilton",
    times: "10:00 AM",
    image:
      "https://cdn.prod.website-files.com/6450591b16d7622484e46a09/66a708645af757122e10a718_Ham%20ext.jpg",
    mapUrl:
      "https://www.google.com/maps/dir//601+Burlington+St+E,+Hamilton,+ON",
  },
] as const;

export const EVENTS = [
  {
    slug: "weekly-prayer",
    title: "Weekly Prayer",
    description:
      "Join us Thursday mornings at 6:00 AM as we pray together for our church and our cities.",
    date: "Every Thursday",
    time: "6:00 AM",
    location: "All locations",
    recurring: true,
  },
  {
    slug: "mens-weekly-prayer",
    title: "Men's Weekly Prayer",
    description:
      "Join in as we spur one another on, run like mighty men, and pray and believe for our city.",
    date: "Every Tuesday",
    time: "6:00 AM",
    location: "All locations",
    recurring: true,
  },
  {
    slug: "weekly-youth-services",
    title: "Weekly Youth Services",
    description: "Grades 6-12! Downtown at 10 AM, Midtown at 11:15 AM.",
    date: "Every Sunday",
    time: "10:00 AM",
    location: "Downtown & Midtown",
    recurring: true,
  },
  {
    slug: "all-in",
    title: "ALL IN",
    description:
      "This is your invitation to a powerful night of encounter with God and real, life-giving community at C3 Toronto across all our locations. Ps Jeff Kane from C3 Atlanta and oversight of C3 Americas Region, will be joining us to share an encouraging word. Come expectant because when faith fills the room, anything can happen.",
    date: "April 8, 2026",
    time: "6:30 PM doors, 7:00 PM service",
    location: "Downtown — 12 Pauline Avenue, Toronto",
    image:
      "https://cdn.prod.website-files.com/6450591b16d7622484e46a09/676426bcd3aeca67f66d8c36_C3_All_In_0807_Sabrina_Selected_HR-04.jpg",
    actionLabel: "Plan your visit",
    actionUrl: "/sundays",
  },
  {
    slug: "marketplace-dinner",
    title: "Marketplace Dinner",
    description:
      "Connect with like-minded leaders, gain fresh perspective, and be encouraged in how your influence in the marketplace can shape industries, cities, and lives. This upcoming Marketplace Dinner will be particularly special, as we hear from the visionary behind this gathering, our own Pastor Sam Picken.",
    date: "April 13, 2026",
    time: "6:30 PM – 8:30 PM (Doors at 6 PM)",
    location: "Hotel X — Princes' Gates Ballroom, 111 Princes' Blvd, Toronto",
    image:
      "https://cdn.prod.website-files.com/6450591b16d7622484e46a09/67f098a2b53da79425f222b3_MP%20dinner.png",
    actionLabel: "Register Now",
    actionUrl:
      "https://c3toronto.churchcenter.com/registrations/events/marketplace-dinner",
  },
  {
    slug: "hype-nights",
    title: "HYPE NIGHTS",
    description:
      "Once a month, we're opening the doors of C3 Toronto to throw the biggest party for junior high + high school students. A live DJ, actually fun games, wild prizes and free food you'll love. And in the middle of all the hype, we'll take time to talk about Jesus in a way that's real, relevant, and actually connects to your everyday life.",
    date: "April 17, 2026",
    time: "7:00 PM",
    location: "Downtown",
    image:
      "https://cdn.prod.website-files.com/6450591b16d7622484e46a09/69b1fdcce62806752b16aab5_hype.PNG",
    actionLabel: "RSVP",
    actionUrl: "https://partiful.com/e/hype-nights",
  },
  {
    slug: "pastors-leaders-conference",
    title: "Pastors and Leaders Conference",
    description:
      "Calling all C3 Pastors, Executive Teams and Key Leaders! You won't want to miss out on the transformative experience at C3 Canada's Pastors & Leaders Gathering. This gathering is a unique opportunity to connect, upskill, and align our efforts towards advancing the Kingdom across Canada.",
    date: "June 1, 2026",
    time: "TBD",
    location: "Downtown — 12 Pauline Avenue, Toronto",
    image:
      "https://cdn.prod.website-files.com/6450591b16d7622484e46a09/69c5e055f43fce7330b919c1_Gemini_Generated_Image_us52mhus52mhus52.png",
    actionLabel: "Register",
    actionUrl: "https://www.eventbrite.com/e/c3-pastors-leaders-conference",
  },
  {
    slug: "c3-conference-2026",
    title: "C3 Conference 2026",
    description:
      "Get ready for an unforgettable week as our church unifies across cities to encounter God in a powerful way. We believe this will be a marking moment — where faith is strengthened, lives are transformed, and Heaven touches earth. Come expectant, come hungry, and come ready to step into all that God has for you!",
    date: "June 3, 2026",
    time: "TBD",
    location: "Metro Toronto Convention Centre",
    image:
      "https://cdn.prod.website-files.com/6450591b16d7622484e46a09/68d59ec17d6b2c33c1a4f047_medium_image-1758122639057.jpg",
    actionLabel: "Register",
    actionUrl: "https://c3toconf26.com",
  },
  {
    slug: "c3-kids-camp-midtown",
    title: "C3 Kids Camp — Midtown Summer",
    description:
      "Think games, worship, creative projects, outdoor fun, splash pads, and tons of laughs. Our camps are a safe, faith-filled place where kids can make friends, grow, and enjoy an unforgettable summer. July 6–10 & July 13–17, 2026.",
    date: "July 6, 2026",
    time: "8:45 AM",
    location: "Midtown — 25 Wanless Ave, Toronto",
    image:
      "https://cdn.prod.website-files.com/6450591b16d7622484e46a09/695ece60888a25cc610ed03f_Photo%202025-07-28%2C%208%2044%2027%20PM%20(4).jpg",
    actionLabel: "Sign Up",
    actionUrl:
      "https://c3toronto.churchcenter.com/registrations/events/c3-kids-camp-midtown",
  },
  {
    slug: "c3-kids-camp-downtown",
    title: "C3 Kids Camp — Downtown Summer",
    description:
      "Think games, worship, creative projects, outdoor fun, splash pads, and tons of laughs. Our camps are a safe, faith-filled place where kids can make friends, grow, and enjoy an unforgettable summer. July 20–24 & July 27–31, 2026.",
    date: "July 20, 2026",
    time: "8:45 AM",
    location: "Downtown — 12 Pauline Ave, Toronto",
    image:
      "https://cdn.prod.website-files.com/6450591b16d7622484e46a09/69601e9fab960869c322413d_Photo%202025-07-14%2C%2014%2007%20232.jpeg",
    actionLabel: "Sign Up",
    actionUrl:
      "https://c3toronto.churchcenter.com/registrations/events/c3-kids-camp-downtown",
  },
  {
    slug: "c3-kids-camp-hamilton",
    title: "C3 Kids Camp — Hamilton Summer",
    description:
      "Think games, worship, creative projects, outdoor fun, splash pads, and tons of laughs. Our camps are a safe, faith-filled place where kids can make friends, grow, and enjoy an unforgettable summer. July 27–31, 2026.",
    date: "July 27, 2026",
    time: "8:45 AM",
    location: "Hamilton — 601 Burlington St E, Hamilton",
    image:
      "https://cdn.prod.website-files.com/6450591b16d7622484e46a09/695ecf32b01b9316d42b61fc_Photo%202025-07-14%2C%2013%2010%2028.jpg",
    actionLabel: "Sign Up",
    actionUrl:
      "https://c3toronto.churchcenter.com/registrations/events/c3-kids-camp-hamilton",
  },
] as const;

export const IMG = {
  logo: "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/644f2bdd5dc704127ada4cd4_c3-logo.svg",
  heroAllIn:
    "https://cdn.prod.website-files.com/6450591b16d7622484e46a09/676426bcd3aeca67f66d8c36_C3_All_In_0807_Sabrina_Selected_HR-04.jpg",
  pastors:
    "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/68c075af3762fe27a36c4541_ThePickens_0177_web3.jpg",
  c3Global:
    "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/645afc10abb6e41b2f915fce_phil-and-chris-v3.webp",
  aboutCommunity:
    "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/65c90d084b6cb77326e53fbc_2024_Feb7_AllIn__Alannah_SELECTS-LR-138%20Large.avif",
  connectGroups:
    "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/6631843ab94200cd726357d9_2024_Feb7_AllIn__Alannah_SELECTS-LR-062.avif",
  teams:
    "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/645afdc9c1df3d6bd844b065_2023April9_Easter%20Sunday_Dominique_Selects-17.avif",
  prayer:
    "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/65a558a9df594d79d9cf5418_prayer.avif",
  sundays:
    "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/652946259dcdf7cd257eab3b_IMG_8987.avif",
  mensMinistry:
    "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/65a55a1f54d6e185932d5ef0_mens_brekky.avif",
  womensMinistry:
    "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/64628b96bf70fa5b5b14b1ee_Connect_Women.avif",
  internship:
    "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/65b6b7d234fea7cd17db0b64_Internship.avif",
  youth:
    "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/66316bb1525b2207823b41c2_c3_youth.avif",
  baptism:
    "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/66318d8bc3eac5257376a823_baptism.avif",
  giving:
    "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/67f6ebf0099346283fa66778_Photo%202025-03-23%2C%2010%2058%2037%20AM%20(7).avif",
  loveThisCity:
    "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/64b97d1c6f7c8b47f976dde6_lovethiscity-02%20Large.avif",
  textToGive:
    "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/64b99318c1db50f4e4e3ccea_text-give-1024x683.webp",
  newsletter:
    "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/64b99639e49bd627edae7f1e_645b70c12c2a71a17f755e8e_weekly_dose.avif",
  visionBuildersAltars:
    "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/Altar_Screens_MT-01.jpg",
  gearyUpdate:
    "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/GearyUpdatePic.avif",
} as const;
