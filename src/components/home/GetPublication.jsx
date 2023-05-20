import { useState, useEffect } from "react";

import { db } from "@/configFirebase";
import { collection, getDocs } from "firebase/firestore";

import { v4 } from "uuid";
import { MdLibraryAdd } from "react-icons/md";

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
            className="shadow-md shadow-black rounded-xl p-4 flex flex-col gap-4"
          >
            <h2 className="text-3xl capitalize ">{publication.title}</h2>
            <img src={publication.urlImg} alt="" className="rounded-xl" />
            <p>{publication.description}</p>
            <button className="btn btn-primary">detalles</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetPublication;
