import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
  @media all and (min-width: 320px) and (max-width: 500px) {
    padding: 150px 20px 20px 20px;
  }
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => (
  <>
    <Helmet>
      <title>영화 | Yeflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Helmet>
          <title>영화 | Yeflix</title>
        </Helmet>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="현재작">
            {nowPlaying.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title="상영예정작">
            {upcoming.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="인기작">
            {popular.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;