import React from 'react';

import { VscGithub } from 'react-icons/vsc';

interface Footer {
  copyrightInfo: string;
}

const Footer: React.FC<CopytrightInfo> = ({ settings }) => {
  const { copyrightInfo, githubLink, githubLinkOpensInNewTab } = settings;

  return (
    <footer className=" flex flex-col items-center justify-center gap-4 p-2 md:p-4 h-30 shadow-lg bg-primary-800">
      <div className="copyright-info text-xxs">{copyrightInfo}</div>
      <div>
        {githubLink.length > 0 && (
          <a href={githubLink} target={githubLinkOpensInNewTab && '_blank'} className="text-white hover:text-companyColor" title="Visit the assignment on GitHub">
            <VscGithub />
          </a>
        )}
      </div>
    </footer>
  );
};

export default Footer;
