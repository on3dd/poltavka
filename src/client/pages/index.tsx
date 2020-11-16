import { NextPage } from 'next';
import Head from 'next/head';

import Styles from '../styles/home';
import GlobalStyle from '../styles/global';

const Home: NextPage = () => {
  return (
    <Styles.Container className="home">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Styles.Main className="home__main">
        <GlobalStyle />

        <Styles.Title className="home__title">
          Welcome to{' '}
          <Styles.TitleLink href="https://nextjs.org">
            Next.js!
          </Styles.TitleLink>
        </Styles.Title>

        <Styles.Description className="home__description">
          Get started by editing{' '}
          <Styles.Code className="home__code">
            pages/index.js
          </Styles.Code>
        </Styles.Description>

        <Styles.Grid className="home__grid">
          <Styles.Card
            href="https://nextjs.org/docs"
            className="home__card"
          >
            <Styles.CardHeading>
              Documentation &rarr;
            </Styles.CardHeading>
            <Styles.CardParagraph>
              Find in-depth information about Next.js
              features and API.
            </Styles.CardParagraph>
          </Styles.Card>

          <Styles.Card
            href="https://nextjs.org/learn"
            className="home__card"
          >
            <Styles.CardHeading>
              Learn &rarr;
            </Styles.CardHeading>
            <Styles.CardParagraph>
              Learn about Next.js in an interactive course
              with quizzes!
            </Styles.CardParagraph>
          </Styles.Card>

          <Styles.Card
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="home__card"
          >
            <Styles.CardHeading>
              Examples &rarr;
            </Styles.CardHeading>
            <Styles.CardParagraph>
              Discover and deploy boilerplate example
              Next.js projects.
            </Styles.CardParagraph>
          </Styles.Card>

          <Styles.Card
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="home__card"
          >
            <Styles.CardHeading>
              Deploy &rarr;
            </Styles.CardHeading>
            <Styles.CardParagraph>
              Instantly deploy your Next.js site to a public
              URL with Vercel.
            </Styles.CardParagraph>
          </Styles.Card>
        </Styles.Grid>
      </Styles.Main>

      <Styles.Footer className="home__footer">
        <Styles.FooterLink
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Styles.FooterImg
            src="/vercel.svg"
            alt="Vercel Logo"
            className="home__logo"
          />
        </Styles.FooterLink>
      </Styles.Footer>
    </Styles.Container>
  );
};

export default Home;
