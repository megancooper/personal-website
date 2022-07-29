import Link from "next/link";
import cx from "classnames";
import {createStyles, Center, ActionIcon} from "@mantine/core";
import {Image} from "../../components/Image";
import Twitter from "../../svgs/twitter.svg";
import Github from "../../svgs/github.svg";
import StackOverflow from "../../svgs/stack-overflow.svg";
import Twitch from "../../svgs/twitch.svg";
import {getAllPosts, Post} from "../../utils/posts";

interface Props {
  posts: Post[];
}

const ICONS = [
  {fill: "#1DA1F2", icon: <Twitter />, link: "https://twitter.com/codeyams"},
  {fill: "#333333", icon: <Github />, link: "https://github.com/megancooper"},
  {
    fill: "#F48024",
    icon: <StackOverflow />,
    link: "https://stackoverflow.com/users/5965537/megan",
  },
  {fill: "#6441a5", icon: <Twitch />, link: "https://www.twitch.tv/codeyams"},
];

const useStyles = createStyles(theme => ({
  wrapper: {
    fontSpacing: "1.1px",
    marginTop: "3rem",
    [theme.fn.largerThan("sm")]: {
      "*": {
        fontSize: "1rem",
      },
    },
    [theme.fn.smallerThan("md")]: {
      padding: "0 1rem",
    },
  },
  profilePic: {borderRadius: "0.25rem"},
  blurb: {maxWidth: "30rem"},
  contact: {
    display: "flex",
    flexDirection: "column",
  },
  link: {
    color: "black",
    textDecoration: "none",
    borderBottom: "1px solid black",
    width: "fit-content",
  },
  blogLink: {
    borderBottom: "1px solid",
    cursor: "pointer",
  },
  section: {marginTop: "1rem"},
  list: {
    listStyle: "none",
    paddingLeft: "1rem",
    li: {
      marginTop: "0.5rem",
    },
  },
  icons: {
    display: "flex",
    alignItems: "center",
    borderRadius: "0.25rem",
    a: {
      width: "auto",
      height: "auto",
      padding: "1rem",
      ":hover": {
        backgroundColor: "#ECECEC",
      },
    },
    svg: {
      transform: "scale(1.8)",
    },
  },
}));

const Index = ({posts}: Props) => {
  const {classes} = useStyles();

  return (
    <Center className={classes.wrapper}>
      <div>
        <Image
          alt="Megan Cooper"
          className={classes.profilePic}
          width={240}
          height={160}
          imageId="profile_picture"
        />

        <p className={cx(classes.blurb, classes.section)}>
          Hello! I&apos;m Megan, a software engineer based in Portland, OR. I
          enjoy writing code and wearing wacky socks.
        </p>

        <div className={cx(classes.section, classes.icons)}>
          {ICONS.map(({fill, icon, link}) => {
            return (
              <ActionIcon
                key={link}
                component="a"
                target="_blank"
                href={link}
                styles={{
                  hover: {
                    ":hover": {
                      color: fill,
                    },
                  },
                }}
              >
                {icon}
              </ActionIcon>
            );
          })}
        </div>

        <div className={classes.contact}>
          <a
            href="https://drive.google.com/file/d/1fRVHauEzUkNUbLVnBCMSecJZ-B1lIflD/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
            className={cx(classes.link, classes.section)}
          >
            Resume
          </a>

          <a
            href="mailto: megancooper1000@gmail.com"
            className={cx(classes.link, classes.section)}
          >
            megancooper1000@gmail.com
          </a>
        </div>

        <div className={classes.section}>
          Current projects:
          <ul className={classes.list}>
            <li>
              »&nbsp;
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.melo-app.org"
                className={classes.link}
              >
                Melo
              </a>
              &nbsp; - A simple music player.
            </li>
            <li>
              »&nbsp;PilePost - A queueing service for blog posts. (coming soon)
            </li>
          </ul>
        </div>

        <div className={classes.section}>
          Blog posts: (ordered by most recent)
          <ul className={classes.list}>
            {posts.map(({slug, title}) => (
              <li key={slug}>
                »&nbsp;
                <Link href={`/blog/${slug}`}>
                  <span className={classes.blogLink}>{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Center>
  );
};

export default Index;

export const getStaticProps = async () => {
  const posts = getAllPosts(["slug", "title"]);
  return {
    props: {
      posts,
    },
  };
};
