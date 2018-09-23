import React, { Component } from "react";
import {
  TwitterShareButton,
  RedditShareButton,
  TwitterIcon,
  RedditIcon,
  RedditShareCount
} from "react-share";
import config from "../../../data/SiteConfig";
import "./SocialLinks.scss";

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const url = config.siteUrl + postPath;
    const iconSize = mobile ? 36 : 48;
    const filter = count => (count > 0 ? count : "");

    return (
      <div className="social-links">
        <RedditShareButton url={encodeURI(url)} title={post.title}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </RedditShareCount>
        </RedditShareButton>
        <TwitterShareButton
          url={encodeURI(url)}
          title={post.title + " :: kdxu dev blog"}
        >
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
      </div>
    );
  }
}

export default SocialLinks;
