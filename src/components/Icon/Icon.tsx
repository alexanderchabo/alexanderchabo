import * as React from 'react';

import GithubIcon from 'assets/svgs/github.svg';
import LinkedinIcon from 'assets/svgs/linkedin.svg';
import MessengerIcon from 'assets/svgs/messenger.svg';

type IconType = 'github' | 'messenger' | 'instagram' | 'linkedin' | 'skype';

interface Icon {
  type: IconType;
  element: JSX.Element;
}

const icons: Icon[] = [
  {
    type: 'github',
    element: <GithubIcon style={{ fill: 'white' }} />
  },
  {
    type: 'linkedin',
    element: <LinkedinIcon />
  },
  {
    type: 'messenger',
    element: <MessengerIcon />
  }
];

interface IconProps {
  icon: IconType;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  const foundIcon = icons.find(({ type }) => type === icon);

  return foundIcon ? foundIcon.element : null;
};

export default Icon;
