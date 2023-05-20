import Section from "@/components/common/Section";

const AddProduct = () => {
  return (
    <>
      <Section title="Crear Publicacion">
        <form className="shadow-md shadow-black rounded-xl p-6 w-full max-w-[800px] flex flex-col gap-4 items-center justify-center">
          <input type="file" className="file-input file-input-primary w-full" />
          <input
            type="text"
            className="input input-primary text-lg input-md w-full"
            placeholder="Titulo"
          />
          <input
            type="text"
            className="input input-primary text-lg input-md w-full"
            placeholder="Descripcion"
          />
          <textarea
            className="textarea textarea-primary text-lg w-full"
            placeholder="Contenido"
          />
          <input
            type="text"
            className="input input-primary text-lg input-md w-full"
            placeholder="Enlace Externo"
          />
          <button className="btn btn-primary w-full ">Crear</button>
        </form>
      </Section>
    </>
  );
};

export default AddProduct;
