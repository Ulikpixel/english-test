export interface ContentStoryblok {
  list: (ContentStoryblok | TitleStoryblok)[];
  _uid: string;
  component: 'content';
  [k: string]: any;
}

export interface TitleStoryblok {
  title: string;
  _uid: string;
  component: 'title';
  [k: string]: any;
}
