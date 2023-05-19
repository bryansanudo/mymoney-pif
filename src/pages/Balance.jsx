import React, { useEffect } from "react";
import { db } from "@/configFirebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectEmail } from "@/redux/slice/authSlice";

const Balance = () => {
  const userEmail = useSelector(selectEmail);
  const fakeData = {
    spends: [],
    incomes: [],
  };
  const buscarDocumentoOCrearDocumento = async (idDocumento) => {
    //crear referencia al documento
    const docRef = doc(db, "usuarios", idDocumento);
    //buscar documento

    const consulta = await getDoc(docRef);
    //revissar si existe
    if (consulta.exists()) {
      //si si existe
      const infoDocu = consulta.data();

      return infoDocu.moves;
    } else {
      //si no existe
      await setDoc(docRef, { moves: { ...fakeData } });
      const consulta = await getDoc(docRef);
      const infoDocu = consulta.data();

      return infoDocu.moves;
    }
  };

  useEffect(() => {
    async function fetch() {
      const response = await buscarDocumentoOCrearDocumento(userEmail);
      console.log(response);
    }

    fetch();
  }, []);
  return <div>Balance</div>;
};

export default Balance;
