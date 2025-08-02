interface Resume {
  id: string;
  company: string;
  title: {
    en: string;
    id: string;
  };
  logo: any;
  start: {
    en: string;
    id: string;
  };
  end: {
    en: string;
    id: string;
  };
}

export const resumeList: Resume[] = [
  {
    id: "3",
    company: "Archsoft",
    title: {
      en: "Software Engineer",
      id: "Software Engineer",
    },
    logo: (
      <img
        src="/company/archsoft.png"
        className="h-9 w-9 rounded-full"
        alt="logo archsoft"
      />
    ),
    start: {
      en: "Dec 2022",
      id: "Des 2022",
    },
    end: {
      en: "Jul 2025",
      id: "Jul 2025",
    },
  },
  {
    id: "2",
    company: "Universitas Negeri Jakarta",
    title: {
      en: "Bachelor of computer science",
      id: "Sarjana Ilmu komputer",
    },
    logo: (
      <img
        src="/company/logo-unj.png"
        className="h-9 w-9 rounded-full"
        alt="logo unj"
      />
    ),
    start: {
      en: "",
      id: "",
    },
    end: {
      en: "Aug 2022",
      id: "Agt 2022",
    },
  },
  {
    id: "1",
    company: "Universitas Negeri Jakarta",
    title: {
      en: "Research assistant",
      id: "Asisten peneliti",
    },
    logo: (
      <img
        src="/company/logo-unj.png"
        className="h-9 w-9 rounded-full"
        alt="logo unj"
      />
    ),
    start: {
      en: "Aug 2020",
      id: "Agt 2020",
    },
    end: {
      en: "Oct 2020",
      id: "Okt 2020",
    },
  },
];
