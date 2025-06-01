// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-biography",
          title: "Biography",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/biography/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-bits-amp-pieces",
          title: "Bits &amp; Pieces",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/bandp/index.html";
          },
        },{id: "nav-contact-me",
          title: "Contact Me",
          description: "If you&#39;re exploring a thoughtful collaboration, I invite you to send me an email at shakeel [at] outlook [dot] it — it’s the most direct way to starting a conversation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-how-to-perform-long-form-asr-with-ctc",
        
          title: 'How to Perform Long-Form ASR with CTC? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A scalable generative AI framework built for researchers and developers working on Large Language Models, Multimodal, and Speech AI (Automatic Speech Recognition and Text-to-Speech) - NeMo/tutorials/asr/Streaming_ASR.ipynb at main · NVIDIA/NeMo",
        section: "Posts",
        handler: () => {
          
            window.open("https://github.com/NVIDIA/NeMo/blob/main/tutorials/asr/Streaming_ASR.ipynb", "_blank");
          
        },
      },{id: "post-how-to-fine-tune-pre-trained-owsm",
        
          title: 'How to fine-tune pre-trained OWSM? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "End-to-End Speech Processing Toolkit. Contribute to espnet/espnet development by creating an account on GitHub.",
        section: "Posts",
        handler: () => {
          
            window.open("https://github.com/espnet/espnet/tree/master/egs2/TEMPLATE/s2t1#how-to-fine-tune-pre-trained-owsm", "_blank");
          
        },
      },{id: "honors-erasmus-mundus-scholarship",
          title: 'Erasmus Mundus Scholarship',
          description: "",
          section: "Honors",handler: () => {
              window.location.href = "/honors/honor_1/";
            },},{id: "honors-tohoku-university-exchange-programme",
          title: 'Tohoku University Exchange Programme',
          description: "",
          section: "Honors",handler: () => {
              window.location.href = "/honors/honor_2/";
            },},{id: "honors-fully-funded-ph-d-research-fellowship-mext",
          title: 'Fully funded Ph.D. Research Fellowship (MEXT)',
          description: "",
          section: "Honors",handler: () => {
              window.location.href = "/honors/honor_3/";
            },},{id: "honors-ieee-slt-best-paper-award-2024",
          title: 'IEEE SLT Best Paper Award (2024)',
          description: "",
          section: "Honors",handler: () => {
              window.location.href = "/honors/honor_4/";
            },},{id: "news-trophy-i-have-successfully-earned-my-ph-d-doctor-of-philosophy-in-systems-and-control-engineering-from-the-tokyo-institute-of-technology-this-milestone-marks-the-culmination-of-years-of-dedicated-research-and-academic-pursuit-i-m-grateful-for-the-support-of-my-advisors-collaborators-and-peers-throughout-this-journey",
          title: ':trophy: I have successfully earned my Ph.D. (Doctor of Philosophy) in Systems and...',
          description: "",
          section: "News",},{id: "news-man-office-worker-joining-honda-research-institute-japan-co-ltd-as-a-scientist",
          title: ':man_office_worker: Joining Honda Research Institute Japan Co., Ltd. as a Scientist',
          description: "",
          section: "News",},{id: "news-scroll-3-co-authored-papers-are-accepted-at-interspeech-2023",
          title: ':scroll: 3 co-authored papers are accepted at INTERSPEECH 2023',
          description: "",
          section: "News",},{id: "news-scroll-1-co-authored-paper-accepted-at-ieee-asru-2023",
          title: ':scroll: 1 co-authored paper accepted at IEEE ASRU 2023',
          description: "",
          section: "News",},{id: "news-scroll-1-co-authored-paper-accepted-at-icassp-2024",
          title: ':scroll: 1 co-authored paper accepted at ICASSP 2024',
          description: "",
          section: "News",},{id: "news-scroll-1-first-authored-paper-accepted-at-icassp-2024-satellite-workshop",
          title: ':scroll: 1 first-authored paper accepted at ICASSP 2024 Satellite Workshop',
          description: "",
          section: "News",},{id: "news-scroll-1-co-authored-paper-owsm-ctc-is-accpeted-at-acl-2024-main",
          title: ':scroll: 1 co-authored paper, OWSM-CTC, is accpeted at ACL 2024 (main)',
          description: "",
          section: "News",},{id: "news-scroll-2-papers-1-first-authored-are-accepted-at-interspeech-2024",
          title: ':scroll: 2 papers (1 first-authored) are accepted at INTERSPEECH 2024',
          description: "",
          section: "News",},{id: "news-scroll-1-co-authored-paper-is-accepted-at-ieee-slt-2024",
          title: ':scroll: 1 co-authored paper is accepted at IEEE SLT 2024',
          description: "",
          section: "News",},{id: "news-trophy-a-co-authored-paper-received-best-paper-award-at-slt-2024",
          title: ':trophy: A co-authored paper received Best Paper Award at SLT 2024',
          description: "",
          section: "News",},{id: "news-scroll-three-co-authored-papers-are-accepted-at-interspeech-2025",
          title: ':scroll: Three co-authored papers are accepted at INTERSPEECH 2025',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%61%6B%65%65%6C@%6F%75%74%6C%6F%6F%6B.%69%74", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shakeelmuhammad1", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/shak33l.bsky.social", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/m_shak33l", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
