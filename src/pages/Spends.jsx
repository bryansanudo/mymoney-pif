import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/configFirebase";
import { useSelector } from "react-redux";
import { selectEmail } from "@/redux/slice/authSlice";

const Spends = () => {
  const userEmail = useSelector(selectEmail);
  const [spend, setSpend] = useState({
    id: "",
    titulo: "",
    valor: "",
  });
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    setSpend({ ...spend, [e.target.name]: e.target.value, id: +new Date() });
  };

  async function eliminarTarea(idTareaAeliminar) {
    //crear nuevo array de tareas
    const nvoArrayTareas = data.moves.spends.filter(
      (objetoTarea) => objetoTarea.id !== idTareaAeliminar
    );

    console.log(nvoArrayTareas);

    const x = data;
    delete x.moves.spends;
    console.log(x);
    x.moves.spends = nvoArrayTareas;
    console.log(data);

    // actualizar bd

    const docRef = doc(db, "usuarios", userEmail);
    updateDoc(docRef, data);
  }

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
  }, [data]);
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
              <button onClick={() => eliminarTarea(r.id)}>eliminar</button>
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
