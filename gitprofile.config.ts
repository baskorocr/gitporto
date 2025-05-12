// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'baskorocr', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 40, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        // projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    // external: {
    //   header: 'My Projects',
    //   // To hide the `External Projects` section, keep it empty.
    //   projects: [
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //   ],
    // },
  },
  seo: {
    title: 'Portfolio of Mahesa Putra Baskoro',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Mahesa Putra Baskoro',
    mastodon: '',
    researchGate: '',
    facebook: 'Mahesa Putra Baskoro',
    instagram: 'syncbas_',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '6289654825055',
    website: 'https://www.syncbas.xyz',
    phone: '6289654825055',
    email: 'baskorocr@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Vue.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Java',
    'Android Studio',
    'CSS',
    'Python',
    'Firebase',
    'MongoDb',
    'C',
    'C#',
    'C++',
    'HTML5',
    'Wordpress',
    'Arduino',
    'ESP',
    'Kotlin',
    'Corel',
    'Next.js',
  ],
  experiences: [
    {
      company: 'Dharma Polimetal Tbk.',
      position: 'IT Development (Fullstack)',
      from: '2023',
      to: 'Present',
      companyLink: 'https://dharmagroup.co.id',
    },
    {
      company: 'Culturobio',
      position: 'Intern Programmer and IOT Research',
      from: '2023',
      to: '2023',
      companyLink: 'https://culturobio.co.id/',
    },
    {
      company: 'Assistant Forum Amikom University',
      position: 'Member and Assistant Forum Vice Chair',
      from: '2021',
      to: '2023',
      companyLink: 'https://forumasisten.or.id/',
    },
    {
      company: '',
      position: 'Freelance Project Manager',
      from: '2019',
      to: '2020',
      companyLink: '',
    },
  ],
  certifications: [
    { name: '2nd Winner of Improvement (KIDP XVIII) Dharma Polimetal Tbk.', body: '', year: '2025', link: '', }, 
    { name: 'Coordinating Industrial Transformation 4.0 BNSP', body: '', year: '2025', link: 'https://drive.google.com/file/d/1xf5zyBjRYnE92RpTLL8TJsDITGNGgdXF/view', }, 
    { name: 'COMPETENCY BASED TECHNICAL GUIDANCE INDUSTRY TRANSFORMATION MANAGER 4.0 BY KEMENPERIN', body: '', year: '2025', link: 'https://drive.google.com/file/d/1N1CSXNJBpHB-dhQYHbPO596sV_81r1ZJ/view', },
    {
      name: '1nd Winner of AI and IoT  Category in AMICTA',
      body: 'Research healt System for AI and IoT ',
      year: '2023',
      link: 'https://drive.google.com/file/d/1nqziOn_qTCE09d_TvtaD4Mkgo9Z2u4Ka/view',
    },
    {
      name: 'Certificate of Achievement Toefl',
      body: '',
      year: '2023',
      link: 'https://www.linkedin.com/in/mahesa-putra-baskoro-cahyo-ramadhan-0ab7a6207/details/certifications/1707461547885/single-media-viewer?type=DOCUMENT&profileId=ACoAADSe1wMBzd5ANSF_hozZjzgjwnR9fPFfJxI&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BaiElJOr6Su6xhN%2FRCSBtuA%3D%3D',
    },
    {
      name: '1nd Software Development - GKM AMIKOM',
      body: 'Monitoring System for infusion',
      year: '2023',
      link: 'https://drive.google.com/file/d/1atQD4e3UDmEzUd1T3TGD_xd6EN3SA_iu/view?usp=sharing',
    },
    {
      name: '1nd Favorite Project Internet of Things - GKM AMIKOM',
      body: 'SiFis (website Minitoring)',
      year: '2023',
      link: 'https://drive.google.com/drive/u/1/folders/1zGd0Ll0x9lrtyOqoA3QfslwvKAdKva63',
    },
    {
      name: '2nd Favorite Project Internet of Things - GKM AMIKOM',
      body: 'Smart Agriculture IoT',
      year: '2023',
      link: 'https://drive.google.com/drive/u/3/folders/1zGd0Ll0x9lrtyOqoA3QfslwvKAdKva63',
    },

    {
      name: '2nd College student Inovation of Yogyakarta',
      body: 'LOKKY (Smart Locker)',
      year: '2022',
      link: 'https://drive.google.com/file/d/1CJtU0akqgCrHD2lbLNHElR80hdRMHihu/view?usp=sharing',
    },

    {
      name: 'Practical Assistant of Microcontroller',
      body: '',
      year: '2022',
      link: 'https://drive.google.com/file/d/1e9bYGhNqr9fc6-hRjL197Mdr4-MHMZht/view?usp=sharing',
    },
    {
      name: 'Practical Assistant of Hardware Software 2',
      body: '',
      year: '2022',
      link: 'https://drive.google.com/file/d/1MF0U1VTgAAYOdtNEOlTPaK7emehIFXcd/view?usp=sharing',
    },
    {
      name: 'Practical Assistant of Comunication Data',
      body: '',
      year: '2021',
      link: 'https://drive.google.com/file/d/1GbhyhxT93gRs8aYdwFWd9bT6kDkdZgsm/view?usp=sharing',
    },

    {
      name: 'Practical Assistant of Hardware Software 1',
      body: '',
      year: '2021',
      link: 'https://drive.google.com/file/d/1CI2WVB1dWkjjfjkxjv9TGSLA1O1gGJi0/view?usp=sharing',
    },
    {
      name: 'Certificate Netwoek Associate Industrial',
      body: 'Cisco CCNA 1',
      year: '2021',
      link: 'https://drive.google.com/file/d/1GdrUa3l9Ft9J1qHWP3_UTtsKIxFvdwRu/view?usp=sharing',
    },

    {
      name: 'Creation Registration Letter By Kementerian HAM RI',
      body: 'Smart Lock Motorcycle',
      year: '2020',
      link: 'https://drive.google.com/file/d/1e9bYGhNqr9fc6-hRjL197Mdr4-MHMZht/view?usp=sharing',
    },
    {
      name: 'Nominee IoT Amicta',
      body: 'Smart Lock Motorcycle',
      year: '2020',
      link: 'https://drive.google.com/file/d/1w3EOK4I6d8_OETYkaFU30CEmpb_l6QTY/view?usp=sharing',
    },
    {
      name: 'Courses PHP',
      body: 'Sololearn : 1059-18744230',
      year: '2020',
      link: '',
    },
    {
      name: 'IT Essentials',
      body: 'Cisco',
      year: '2019',
      link: 'https://drive.google.com/file/d/1QMv9GC0JB-AytaHAY3fYSWJZebazQukC/view?usp=sharing',
    },
    {
      name: 'Internet of Things Online Workship',
      body: 'SEAMEO SEAMOLEC',
      year: '2019',
      link: 'https://drive.google.com/file/d/1cO6HxNt6U3gXi6FsYaq-YFKIRZupML_K/view?usp=sharing',
    },
  ],
  educations: [
    {
      institution: 'University Amikom Yogyakarta',
      degree: 'S.Kom',
      from: '2019',
      to: '2023',
    },
    {
      institution: 'Senior High School 1 Cibarusah',
      degree: '',
      from: '2018',
      to: '2016',
    },
  ],
  publications: [
    {
      title:
        'Design of a Patient Room Infusion Fluid Drip and Capacity Monitoring System Using a Website-Based ESP8266 with the Laravel Framework',
      conferenceName: '',
      journalName: 'JURIKOM (Jurnal Riset Komputer)',
      authors: 'Mahesa Putra Baskoro',
      link: 'https://garuda.kemdikbud.go.id/documents/detail/3451510',
      description:
        'Excessive nurse workload will result in errors in carrying out their duties, including during infusion. Late replacement of infusion fluids can be fatal for the patient, therefore a monitoring system is needed. The aims and objectives of this research are to realize the drip monitoring system program and patient room infusion capacity on the device using the Arduino IDE programming and website with the Laravel framework. This research used qualitative research with experimental methods on the NodeMCU ESP8266 Microcontroller, Photoelectric Speed Count Correlation Sensor (LM393), 168x64 OLED, Push Button and Load Cell sensors. Experimental research was also carried out on the design of tool system software or on the monitoring system. Researchers use the percentage error formula to find the error rate of the sensor. The results of error findings on the Correlation Photoelectric Speed Count sensor which were carried out 5 times obtained an error error of 0.56%, and on the Load Cell sensor an error error of 0.27% was obtained. In the results of testing the entire system that was built, the percentage results were 100%. From the test results, the Correlation Photoelectric Speed Count sensor and load cell work well on the programmed NodeMCU. This is proven in testing the tool for 1 hour with a set load cell weight factor that has been determined where the Correlation Photoelectric Speed Count sensor can read the drops of infusion fluids properly, namely the tpm value will decrease slowly according to the time the drops drop due to the air inside. bags of infusion fluids continue to decrease, as well as movement and blockages in the infusion set needles. In addition, the weight of the infusion bag will continue to decrease as the infusion of fluids to the patient progresses',
    },
  ],
  // // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/baskorocr"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
