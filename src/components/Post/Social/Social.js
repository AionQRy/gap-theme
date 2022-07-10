import React from 'react'

import { SocialWrapper } from './Social.styles';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    LineShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    TelegramIcon,
    LineIcon,
} from "react-share";

const shareUrl = 'http://github.com';
const title = 'GitHub';

const Social = () => {
  return (
    <SocialWrapper>
        <FacebookShareButton
        url={shareUrl}
        quote={title}
        className="Share-Button"
        >
        <FacebookIcon size={40} round />
        </FacebookShareButton>

        <LineShareButton
        url={shareUrl}
        title={title}
        className="Share-Button"
        >
        <LineIcon size={40} round />
        </LineShareButton>     

        <TwitterShareButton
        url={shareUrl}
        title={title}
        className="Share-Button"
        >
        <TwitterIcon size={40} round />
        </TwitterShareButton>

        <LinkedinShareButton url={shareUrl} className="Share-Button">
        <LinkedinIcon size={40} round />
        </LinkedinShareButton>

        <TelegramShareButton
        url={shareUrl}
        title={title}
        className="Share-Button"
        >
        <TelegramIcon size={40} round />
        </TelegramShareButton>

    </SocialWrapper>
  )
}

export default Social