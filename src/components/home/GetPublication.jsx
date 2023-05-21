import { useState, useEffect } from "react";

import { db } from "@/configFirebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { IoMdMore } from "react-icons/io";

const GetPublication = () => {
  const [data, setData] = useState([]);

  const getFiles = async () => {
    const x = [];

    try {
      const querySnapshot = await getDocs(collection(db, "publicaciones"));
      querySnapshot.forEach((doc) => {
        const y = doc.data();
        y["id"] = doc.id;
        x.push(y);
      });
      setData(x);
    } catch (error) {
      error.message;
    }
  };

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((publication) => (
          <div
            key={publication.id}
            className="shadow-lg shadow-black rounded-xl p-4 flex flex-col gap-4"
          >
            <div className="flex justify-between">
              <h2 className="text-3xl capitalize ">{publication.title}</h2>
              <Link to={`/publication/${publication.id}`}>
                <IoMdMore className="text-4xl animate-pulse text-primary font-bold" />
              </Link>
            </div>
            <img
              src={publication.urlImg}
              alt=""
              className="rounded-xl h-[200px] object-contain shadow-md shadow-primary "
            />
            <p>{publication.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetPublication;
