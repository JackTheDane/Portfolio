import React from 'react'
import { BaseIcon } from './BaseIcon';
import svg from '@fortawesome/fontawesome-free/svgs/solid/link.svg?include';

export const LinkIcon = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => <BaseIcon iconSvg={svg} {...props} />
