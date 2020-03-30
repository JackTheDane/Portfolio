export interface IMenuItem {
  title: string;
  url: string;
  icon?: string;
  subItems?: IMenuItem[];
  isExact?: boolean;
}
