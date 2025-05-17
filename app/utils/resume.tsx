interface Resume {
  id: string;
  company: string;
  title: string;
  logo: any;
  start: string;
  end: string;
}

export const resumeList: Resume[] = [
  {
    id: "3",
    company: "Archsoft",
    title: "Software Engineer",
    logo: (
      <img
        src="/company/archsoft.png"
        className="w-9 h-9 rounded-full"
        alt="logo archsoft"
      />
    ),
    start: "2022",
    end: "Present",
  },
  {
    id: "2",
    company: "Universitas Negeri Jakarta",
    title: "Bachelor of computer science",
    logo: (
      <img
        src="/company/logo-unj.png"
        className="w-9 h-9 rounded-full"
        alt="logo unj"
      />
    ),
    start: "",
    end: "2022",
  },
  {
    id: "1",
    company: "Universitas Negeri Jakarta",
    title: "Research assistant",
    logo: (
      <img
        src="/company/logo-unj.png"
        className="w-9 h-9 rounded-full"
        alt="logo unj"
      />
    ),
    start: "",
    end: "2020",
  },
];
