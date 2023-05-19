import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/configFirebase";
import { useSelector } from "react-redux";
import { selectEmail } from "@/redux/slice/authSlice";

const Spends = () => {
  const userEmail = useSelector(selectEmail);
  const [spend, setSpend] = useState({
    titulo: "",
    valor: "",
  });
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    setSpend({ ...spend, [e.target.name]: e.target.value });
  };

  const addDb = async (e) => {
    e.preventDefault();
    const x = data.moves.spends;
    x.push(spend);

    await setDoc(doc(db, "usuarios", userEmail), data);
    setSpend({ titulo: "", valor: "" });
  };

  const getData = async () => {
    const docRef = doc(db, "usuarios", userEmail);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <form className="pt-40">
        <h1>listar requirimientos</h1>
        <input
          type="text"
          placeholder="titulo"
          name="titulo"
          onChange={handleChange}
          value={spend.titulo}
        />
        <input
          type="text"
          placeholder="valor"
          name="valor"
          onChange={handleChange}
          value={spend.valor}
        />
        <button onClick={addDb}>agregar requirimiento</button>
      </form>
      {data ? (
        <div>
          <h1>mostrar requirimientos</h1>

          {data.moves.spends?.map((r, index) => (
            <div key={index}>
              <div>{r.titulo}</div>
              <div>{r.valor}</div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Spends;
