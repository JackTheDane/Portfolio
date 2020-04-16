import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';

interface NavLinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  exact?: boolean;
  activeClassName?: string;
  as?: string;
}


export const NavLink = ({
  href,
  exact,
  as: linkAs,
  activeClassName,
  className,
  ...aTagProps
}: NavLinkProps): JSX.Element => {

  const router = useRouter();

  const linkProps: LinkProps = {
    href,
    as: linkAs
  };

  let aTagClassName: string = className || '';

  if (activeClassName && (
    !exact
      ? router.pathname.indexOf(linkAs || href) === 0
      : router.pathname.replace(linkAs || href, '') === ''
  )) {
    aTagClassName += ' ' + activeClassName;
  }

  return (
    <Link {...linkProps} >
      <a
        {...aTagProps}
        className={aTagClassName}
      />
    </Link>
  )
}
