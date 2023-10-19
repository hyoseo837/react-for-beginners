import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const getDetails = async () => {
    const json = await (
      await fetch("https://yts.mx/api/v2/movie_details.json?movie_id=" + id)
    ).json();
    setDetails(json);
    setLoading(false);
  };
  const { id } = useParams();
  useEffect(() => {
    getDetails();
  });
  return loading ? (
    <strong>loading...</strong>
  ) : (
    <div>
      <h1>Detail of movie #{id}</h1>
      <Link to={details.data.movie.url}> link!</Link>
    </div>
  );
}

export default Detail;
