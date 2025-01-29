import { Helmet } from "react-helmet-async";
import FusCards from "src/sections/helmets/cards/FusCards";

// import FusView from "src/sections/helmets/fus";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: FUS</title>
      </Helmet>

      {/* <FusView /> */}
      <FusCards />
    </>
  );
}
