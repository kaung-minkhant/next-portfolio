interface ExperienceCollection{
  docs: ExperienceType[],
  // docs: [
  //   {
  //     "id": "644a5c24cc1383022535fc7c",
  //     "title": "Home",
  //     "content": "REST API examples",
  //     "slug": "home",
  //     "createdAt": "2023-04-27T11:27:32.419Z",
  //     "updatedAt": "2023-04-27T11:27:32.419Z"
  //   }
  // ],
  totalDocs?: number,
  limit?: number,
  totalPages?: number,
  page?: number,
  pagingCounter?: number,
  hasPrevPage?: boolean,
  hasNextPage?: boolean,
  // prevPage: null,
  // nextPage: null
}