import CMS_API from "./cms_api";
export const getHomePageGlobal = async (): Promise<HomePageGlobal> => {
  // const { data } = await CMS_API.get('/api/globals/homepage?locale=undefined&draft=false&depth=1');
  try {
    const response = await fetch(
      `${process.env.CMS_URL}/api/globals/homepage?locale=undefined&draft=false&depth=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
        // next: {
        //   revalidate: 0

        // }
      }
    );
    const fetchData = await response.json();
    console.log(fetchData);
    return fetchData;
  } catch (e) {
    console.error("In CMS Method: " + e);
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
    };
  }
};
