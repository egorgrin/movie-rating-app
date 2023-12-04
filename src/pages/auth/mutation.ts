export const mutationLogin = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/authentication/guest_session/new', {
      headers: {
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTc5ZDYzZjY1MzUyNjNiNzIxZGNiMjNhMTFlOGE2OCIsInN1YiI6IjY1Njc5M2I5MTU2Y2M3MDE0ZTY2YTVlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hzyOZih4-QfOzVD-xCaCFA1ugVVZeYEpG0Qre4tVIL4',
      },
    });

    return await response.json();
  } catch (error) {
    console.error('Ошибка запроса:', error);
    throw error;
  }
};
