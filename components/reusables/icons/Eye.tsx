import React from 'react'
import { BaseIcon } from './BaseIcon';
import svg from '@fortawesome/fontawesome-free/svgs/solid/eye.svg?include';

export const EyeIcon = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => <BaseIcon iconSvg={svg} {...props} />
