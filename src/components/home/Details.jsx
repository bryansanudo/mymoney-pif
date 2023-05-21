import { Link, useParams } from "react-router-dom";
import Section from "@/components/common/Section";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/configFirebase";
import { FaInstagram, FaArrowLeft } from "react-icons/fa";

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
        <div className="shadow-lg shadow-black p-10 rounded-xl flex flex-col gap-6 items-center">
          <img
            src={details.urlImg}
            className="rounded-xl shadow-md shadow-primary h-full lg:h-[500px] object-contain"
          />

          <p>{details.contend}</p>
          <div className="flex justify-between w-full">
            <Link to="/">
              <FaArrowLeft className="text-4xl animate-pulse" />
            </Link>
            <a href={details.link} target="_blank">
              <FaInstagram className="animate-pulse text-4xl" />
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Details;
