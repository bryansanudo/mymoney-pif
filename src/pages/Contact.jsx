import React from "react";
import Section from "@/components/common/Section";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://instagram.com",
      icon: <FaInstagram />,
    },
    {
      id: 2,
      link: "https://wa.me/579999999999 ",
      icon: <FaWhatsapp />,
    },
    {
      id: 3,
      link: "https://www.facebook.com",
      icon: <FaFacebook />,
    },
  ];

  return (
    <>
      <Section title="Contacto">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <div className="flex w-full items-center justify-evenly text-3xl">
            {SOCIAL.map(({ id, link, icon }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrerr"
                className="duration-300 hover:scale-150 hover:text-primary "
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="p-8 text-left md:w-[500px] w-[300px]">
            <form action="" method="POST">
              <div className="flex flex-col gap-4 w-full ">
                <input
                  type="text"
                  name="name"
                  className="input input-primary"
                  placeholder="Nombre"
                />

                <input
                  type="text"
                  name="phone"
                  className="input input-primary"
                  placeholder="Telefono"
                />

                <input
                  type="text"
                  name="email"
                  className="input input-primary"
                  placeholder="Correo"
                />

                <textarea
                  name="message"
                  rows="4"
                  className="textarea textarea-primary"
                  placeholder="Mensaje"
                />
              </div>

              <div className="flex items-center justify-center">
                <button className="btn btn-secondary mt-6 w-full capitalize">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
