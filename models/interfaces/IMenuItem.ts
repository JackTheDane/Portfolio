export interface IMenuItem {
  title: string;
  url: string;
  icon?: JSX.Element;
  subItems?: IMenuItem[];
  isExact?: boolean;
}
