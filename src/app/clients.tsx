"use client";

import Image from "next/image";
import { Typography } from "../../_shared/mods";

const CLIENTS = [
  "AR3Capital",
  "Usucapeao",
  "Totvs",
  "SaudeOne",
  "Ingram",
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
        Meus clientes incríveis
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-40"
              src={`/logos/logo-${logo}.svg`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
