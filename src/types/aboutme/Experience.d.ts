interface ExperienceType {
  name: string;
  id?: string;
  position: string;
  fromDate: string;
  toDate: string;
  content: string;
  links: [
    {
      label: string;
      url: string;
    }
  ];
}