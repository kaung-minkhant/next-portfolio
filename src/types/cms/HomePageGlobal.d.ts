interface Position {
  title: string;
}

interface HomePageGlobal {
  name: string;
  shortDescription: string;
  position: Position[];
  longDescription: string;
  globalType?: string;
}
