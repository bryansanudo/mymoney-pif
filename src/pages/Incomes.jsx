import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/configFirebase";
import { useSelector } from "react-redux";
import { selectEmail } from "@/redux/slice/authSlice";
import Section from "@/components/common/Section";
import { MdDeleteForever } from "react-icons/md";

const Incomes = () => {
  const userEmail = useSelector(selectEmail);
  const [income, setIncome] = useState({
    id: "",
    titulo: "",
    valor: "",
  });
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value, id: +new Date() });
  };
  async function eliminarTarea(idTareaAeliminar) {
    //crear nuevo array de tareas
    const nvoArrayTareas = data.moves.incomes.filter(
      (objetoTarea) => objetoTarea.id !== idTareaAeliminar
    );

    console.log(nvoArrayTareas);

    const x = data;
    delete x.moves.incomes;
    console.log(x);
    x.moves.incomes = nvoArrayTareas;
    console.log(data);

    // actualizar bd

    const docRef = doc(db, "usuarios", userEmail);
    updateDoc(docRef, data);
  }

  const addDb = async (e) => {
    e.preventDefault();
    const x = data.moves.incomes;
    x.push(income);

    await setDoc(doc(db, "usuarios", userEmail), data);
    setIncome({ titulo: "", valor: "" });
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
      <Section title="Mis Ingresos">
        <div className="container px-5  mx-auto flex flex-col items-center justify-between">
          <form className="mb-10 flex flex-col md:flex-row items-center gap-2">
            <input
              type="text"
              className="input input-primary input-sm"
              placeholder="titulo"
              name="titulo"
              onChange={handleChange}
              value={income.titulo}
            />
            <input
              type="text"
              className="input input-primary input-sm"
              placeholder="valor"
              name="valor"
              onChange={handleChange}
              value={income.valor}
            />
            <button
              className="flex items-center justify-center gap-4 text-white bg-black  py-1 px-4  focus:outline-none  hover:scale-105 duration-300 rounded-md"
              onClick={addDb}
            >
              agregar ingreso
            </button>
          </form>
          {data ? (
            <div className="max-w-[1000px] w-full flex flex-col shadow-lg  shadow-black p-10 rounded-xl gap-16">
              {data.moves.incomes?.map((r, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row p-4 rounded-xl justify-between items-center shadow-green-500 shadow-md gap-4"
                >
                  <span className="capitalize font-bold text-lg">
                    {r.titulo}
                  </span>

                  <div className="flex text-lg font-bold">
                    <span> $</span>
                    <span>{r.valor}</span>
                  </div>
                  <button onClick={() => eliminarTarea(r.id)}>
                    <MdDeleteForever className="text-4xl hover:scale-110 duration-300" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </Section>
    </>
  );
};

export default Incomes;
