// dependencies
import comingSoonIcon from "../assets/icons/commingSoon.svg";
import favouriteIcon from "../assets/icons/favourite.svg";
import newReleaseIcon from "../assets/icons/newRelease.svg";
import trendingIcon from "../assets/icons/trending.svg";
import watchLaterIcon from "../assets/icons/watchLater.svg";

// component
const Sidebar = () => {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <img src={trendingIcon} width={24} height={24} alt="tendingImg" />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={newReleaseIcon}
              width={24}
              height={24}
              alt="newReleaseImg"
            />
            <span>New Releases</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={comingSoonIcon}
              width={24}
              height={24}
              alt="comingSoonImg"
            />
            <span>Coming Soon</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={favouriteIcon}
              width={24}
              height={24}
              alt="favouriteImg"
            />
            <span>Favourites</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={watchLaterIcon}
              width={24}
              height={24}
              alt="watchLaterImg"
            />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
