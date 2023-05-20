import { Link, useParams } from "react-router-dom";
import Section from "@/components/common/Section";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/configFirebase";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const { title } = details;

  const getData = async () => {
    const docRef = doc(db, "publicaciones", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setDetails(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Section title={title}>
        <div>
          <img src={details.urlImg} />
          <p>{details.description}</p>
          <p>{details.contend}</p>
          <p>{details.link}</p>
        </div>

        <Link to="/">
          <button>volver</button>
        </Link>
      </Section>
    </>
  );
};

export default Details;
