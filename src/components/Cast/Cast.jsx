import { useState, useEffect } from "react";
import * as apiService from "../../service/apiService";

const Cast = ({ location, match }) => {
  const [actorsList, setActorsList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const actorsCast = () => {
      const splitUrl = match.url.split("/");
      const id = splitUrl[splitUrl.length - 2];
      apiService
        .Cast(location.state?.id || id)
        .then((cast) => setActorsList(cast))
        .catch((error) => setError(error.message));
    };
    actorsCast();
  }, [location.state?.id, match.url]);

  const isShowCast = actorsList.length > 0;

  return (
    <>
      {isShowCast && (
        <ul>
          {actorsList.map((actor) => (
            <li key={actor.id}>
              <img
                src={`http://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={`Actor: ${actor.name}`}
                width="200"
              />
              <h3>{actor.name}</h3>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
