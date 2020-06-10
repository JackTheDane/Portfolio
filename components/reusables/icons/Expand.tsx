import React from 'react'
import { BaseIcon } from './BaseIcon';
import svg from '@fortawesome/fontawesome-free/svgs/solid/expand.svg?include';

export const ExpandIcon = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => <BaseIcon iconSvg={svg} {...props} />
