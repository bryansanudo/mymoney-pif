import Section from "@/components/common/Section";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/configFirebase";
import { MdLibraryAdd } from "react-icons/md";
import { toast } from "react-toastify";
import { storage } from "@/configFirebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const AddProduct = () => {
  const [file, setFile] = useState({
    title: "",
    description: "",
    contend: "",
    link: "",
    urlImg: "",
  });
  const [upload, setUpload] = useState(null);

  const handleChange = (e) => {
    setFile({ ...file, [e.target.name]: e.target.value });
  };

  const uploadFile = async (file) => {
    const storageRef = ref(storage, v4());

    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  };

  const postFile = async (e) => {
    e.preventDefault();

    const url = await uploadFile(upload);
    const newObj = { ...file, urlImg: url };
    console.log(newObj);

    try {
      await addDoc(collection(db, "publicaciones"), newObj);
      toast.success("Publicacion guardada en base de datos");
    } catch (error) {
      console.log(error.message);
    }

    setFile({
      title: "",
      description: "",
      contend: "",
      link: "",
      urlImg: "",
    });
  };
  return (
    <>
      <Section title="Crear Publicacion">
        <form
          onSubmit={postFile}
          className="shadow-md shadow-black rounded-xl p-6 w-full max-w-[800px] flex flex-col gap-4 items-center justify-center"
        >
          <input
            type="file"
            className="file-input file-input-primary w-full"
            name="urlImg"
            onChange={(e) => setUpload(e.target.files[0])}
          />
          <input
            type="text"
            className="input input-primary text-lg input-md w-full"
            placeholder="Titulo"
            name="title"
            onChange={handleChange}
            value={file.title}
          />
          <input
            type="text"
            className="input input-primary text-lg input-md w-full"
            placeholder="Descripcion"
            name="description"
            onChange={handleChange}
            value={file.description}
          />
          <textarea
            className="textarea textarea-primary text-lg w-full"
            placeholder="Contenido"
            name="contend"
            onChange={handleChange}
            value={file.contend}
          />
          <input
            type="text"
            className="input input-primary text-lg input-md w-full"
            placeholder="Enlace Externo"
            name="link"
            onChange={handleChange}
            value={file.link}
          />
          <button className="btn btn-primary w-full">Crear</button>
        </form>
      </Section>
    </>
  );
};

export default AddProduct;
