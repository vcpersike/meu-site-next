import React, { useEffect, useState } from "react";
import {
  Navbar as MTNavbar,
  Typography,
  IconButton,
  Collapse,
} from "../../_shared/mods";
import {
  XMarkIcon,
  Bars3Icon,
  DocumentTextIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import Modal from "./modal";
import { createPortal } from "react-dom";

const NAV_MENU = [
  {
    name: "Apresentação",
    icon: VideoCameraIcon,
    type: "modal",
  },
  {
    name: "Currículo em PDF",
    icon: DocumentTextIcon,
    href: "https://persike-bucket.s3.sa-east-1.amazonaws.com/documentos/Currículo_Persike.pdf",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

function NavItem({ children, href, onClick }: NavItemProps) {
  console.log(href);
  return (
    <li onClick={onClick}>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        rel={href ? "noopener noreferrer" : undefined}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Typography color="blue-gray" className="text-lg font-bold">
          Minha Apresentação
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, type, href }) => (
            <NavItem
              key={name}
              href={href}
              onClick={type === "modal" ? () => setShowModal(true) : undefined}
            >
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
          {NAV_MENU.map(({ name, icon: Icon, type, href }) => (
            <NavItem
              key={name}
              href={href}
              onClick={type === "modal" ? () => setShowModal(true) : undefined}
            >
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
      <ModalApresentation showModal={showModal} setShowModal={setShowModal} />
    </MTNavbar>
  );
}

const ModalApresentation = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}) => {
  const [modalContainer, setModalContainer] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    const element = document.getElementById("modal");
    setModalContainer(element);
  }, []);

  if (!modalContainer) return null;

  return createPortal(
    <Modal show={showModal} onClose={() => setShowModal(false)}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/iov3KMSvtN4"
        title="Apresentação"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Modal>,
    modalContainer
  );
};
export default Navbar;
