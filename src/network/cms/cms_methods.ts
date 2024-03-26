// import CMS_API from "./cms_api";
const baseUrl = `${process.env.CMS_URL}/api`;
export const getHomePageGlobal = async (): Promise<HomePageGlobal> => {
  try {
    throw new Error("");
    const response = await fetch(
      `${baseUrl}/globals/homepage?locale=undefined&draft=false&depth=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );
    const fetchData = await response.json();
    return fetchData;
  } catch (e) {
    console.error("In CMS Method (getHomePageGlobal): " + JSON.stringify(e));
    return {
      name: "Kaung Min Khant",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellat saepe doloremque ipsa fugit commodi esse, alias necessitatibus hic modi. CMS required",
      position: [
        {
          title: "cms",
        },
        {
          title: "required",
        },
      ],
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. CMS Required",
    };
  }
};

export const getEducationGlobal = async (): Promise<EducationGlobal> => {
  try {
    throw new Error("");
    // const response = await fetch(
    //   `${baseUrl}/globals/education?locale=undefined&draft=false&depth=1`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     cache: "no-store",
    //   }
    // );
    // const fetchData = await response.json();
    // return fetchData;
  } catch (e) {
    console.error("In CMS Method(getEducationGlobal): " + JSON.stringify(e));
    return {
      transitionLength: 30,
      transitionDuration: 1,
      stepWidth: 20,
      stepHeight: 20,
      mobileHeight: 850,
      steps: [
        {
          id: "0",
          type: "STEP",
          transitionDuration: 0.5,
          contentOnAnimate: "CMS Required",
          mainContent:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla ratione ullam explicabo esse ipsum perferendis numquam id. Quo aliquid doloremque nesciunt accusamus eos cupiditate quidem officia praesentium minima neque!",
          contentOnAnimatePostion: "top",
          mobileTimelinePosition: 220,
          mobileScrollPosition: 0.18,
        },
        {
          id: "1",
          type: "STEP",
          contentOnAnimate: "CMS Required",
          mainContent:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla ratione ullam explicabo esse ipsum perferendis numquam id. Quo aliquid doloremque nesciunt accusamus eos cupiditate quidem officia praesentium minima neque!",
          contentOnAnimatePostion: "bottom",
          mobileTimelinePosition: 480,
          mobileScrollPosition: 0.45,
        },
        {
          id: "2",
          type: "STEP",
          contentOnAnimate: "CMS Required",
          mainContent:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla ratione ullam explicabo esse ipsum perferendis numquam id. Quo aliquid doloremque nesciunt accusamus eos cupiditate quidem officia praesentium minima neque!",
          contentOnAnimatePostion: "top",
          mobileTimelinePosition: 730,
          mobileScrollPosition: 0.7,
        },
      ],
    };
  }
};

export const getExperienceCollection = async (): Promise<ExperienceCollection> => {
  try {
    const response = await fetch(
      `${baseUrl}/experience`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );
    const fetchData = await response.json();
    return fetchData;
  } catch (e) {
    console.error("In CMS Method(getExperienceCollection): " + JSON.stringify(e));
    return {
      docs: [
        {
          id: '1',
          name: "Ackaya Tech Co. Ltd",
          position: "Full Stack Web Developer",
          fromDate: "Sept 2023",
          toDate: "March 2024",
          content:
            "This is some lengthy content. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quia molestiae quo dolore impedit magnam sunt incidunt! Culpa, porro facilis.",
          links: [
            {
              label: "Facebook",
              url: "www.google.com",
            },
          ],
        },
        {
          id: '2',
          name: "Ackaya Tech Co. Ltd",
          position: "Full Stack Web Developer",
          fromDate: "Sept 2023",
          toDate: "March 2024",
          content:
            "This is some lengthy content. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quia molestiae quo dolore impedit magnam sunt incidunt! Culpa, porro facilis.",
          links: [
            {
              label: "Facebook",
              url: "www.google.com",
            },
          ],
        },
        {
          id: '3',
          name: "Ackaya Tech Co. Ltd",
          position: "Full Stack Web Developer",
          fromDate: "Sept 2023",
          toDate: "March 2024",
          content:
            "This is some lengthy content. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          links: [
            {
              label: "Facebook",
              url: "www.google.com",
            },
          ],
        },
        {
          id: '4',
          name: "Ackaya Tech Co. Ltd",
          position: "Full Stack Web Developer",
          fromDate: "Sept 2023",
          toDate: "March 2024",
          content:
            "This is some lengthy content. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quia molestiae quo dolore impedit magnam sunt incidunt! Culpa, porro facilis.",
          links: [
            {
              label: "Facebook",
              url: "www.google.com",
            },
          ],
        },
      ],
    };
  }
};
