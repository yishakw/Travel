import { useParams, useSearchParams } from "react-router-dom";

function Country() {
  const { idc } = useParams();
  console.log(idc);
  //eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const countr = searchParams.get("countr");
  console.log(countr);
  return (
    <div>
      <p>
        {idc} {countr}
      </p>
    </div>
  );
}

export default Country;
