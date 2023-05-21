import { useState, useEffect } from "react";

import { db } from "@/configFirebase";
import { collection, getDocs } from "firebase/firestore";
import Section from "@/components/common/Section";

const Home = () => {
  const [data, setData] = useState([]);
  const getFiles = async () => {
    const x = [];

    try {
      const querySnapshot = await getDocs(collection(db, "usuarios"));
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
      <Section title="Usuarios Registrados">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((user) => (
            <div
              key={user.id}
              className="shadow-lg shadow-black rounded-xl p-4 flex flex-col gap-4"
            >
              <h2 className="text-lg capitalize ">{user.id}</h2>
              <img src="/vite.svg" alt="" className="rounded-xl h-[30px]  " />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Home;
