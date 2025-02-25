// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-sobre",
    title: "Sobre",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projetos",
          title: "Projetos",
          description: "Um coleção crescentes dos meus projetos",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositórios",
          title: "Repositórios",
          description: "Lista seleta dos meus projetos interessantes",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-currículo",
          title: "Currículo",
          description: "Uma amostra da minha jornada até o atual momento!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-certificados",
          title: "Certificados",
          description: "Certificados relevantes adquiridos na minha trajetória incessante na busca de conhecimentos!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/certificates/";
          },
        },{id: "dropdown-novidades",
              title: "Novidades",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-artigos-e-referências",
              title: "Artigos e Referências",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "certificates-outras-certificações-dev",
          title: 'Outras Certificações Dev',
          description: "",
          section: "Certificates",handler: () => {
              window.location.href = "/certificates/other_courses/";
            },},{id: "certificates-powerbi-tomando-decisões-baseadas-em-dados",
          title: 'PowerBI - Tomando Decisões Baseadas em Dados',
          description: "Description of the certificate.",
          section: "Certificates",},{id: "certificates-machine-learning-com-python",
          title: 'Machine Learning com Python',
          description: "Description of the certificate.",
          section: "Certificates",},{id: "certificates-coding-a-chatgpt-style-language-model-from-scratch-in-pytorch",
          title: 'Coding a ChatGPT-style Language Model from Scratch in PyTorch',
          description: "Description of the certificate.",
          section: "Certificates",},{id: "news-estou-em-busca-de-um-novo-emprego-novas-oportunidades-novos-horizontes-ainda-não-explorados-por-mim",
          title: 'Estou em busca de um novo emprego, novas oportunidades, novos horizontes ainda não...',
          description: "",
          section: "News",},{id: "news-aperfeiçoando-meu-projeto-na-personalidade-do-assistente-pessoal",
          title: 'Aperfeiçoando meu projeto na personalidade do assistente pessoal',
          description: "",
          section: "News",},{id: "news-lançado-a-última-versão-estável-do-portifólio-sparkles",
          title: 'Lançado a última versão estável do portifólio :sparkles:',
          description: "",
          section: "News",},{id: "projects-book-judge",
          title: 'Book Judge',
          description: "Sentiment Analysis algorithm to determine how good is a book judging only by its cover",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-brazilian-sign-language-detection",
          title: 'Brazilian Sign Language Detection',
          description: "Using Deep Learning to recognize gestures in LIBRAS (Língua Brasileira de Sinais).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-data-analysis-client-vm",
          title: 'Data Analysis: Client VM',
          description: "Data insights for a client",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%67%75%69%61%72%62%72%61%7A%6D@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/the-mauricio-aguiar", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MauricioAguiar", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/mauricioaguiar", "_blank");
        },
      },{
        id: 'social-telegram',
        title: 'telegram',
        section: 'Socials',
        handler: () => {
          window.open("https://telegram.me/ankokudsura", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/ankokudsura.bsky.social", "_blank");
        },
      },{
        id: 'social-whatsapp',
        title: 'whatsapp',
        section: 'Socials',
        handler: () => {
          window.open("https://wa.me/55 51 981313987", "_blank");
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
