import React from 'react'
import { BaseIcon } from './BaseIcon';
import svg from '@fortawesome/fontawesome-free/svgs/solid/user.svg?include';

export const UserIcon = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => <BaseIcon iconSvg={svg} {...props} />
