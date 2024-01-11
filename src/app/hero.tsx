"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Bem-vindo ao meu Portfólio como
            <br /> Desenvolvedor de Software!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            Com 9 anos de experiência na educação, concentrando-me na formação
            de professores e no ensino básico, tomei a decisão de criar uma
            plataforma Moodle em 2016 para treinar educadores em conteúdo
            digital. Em 2018, decidi fazer uma mudança de carreira devido às
            condições desafiadoras enfrentadas pelos profissionais da educação
            no país. Essa transição me levou ao desenvolvimento de software,
            onde acumulei experiência em Angular, React, Node.js, C#, Ionic,
            Moodle, MongoDB, SQL Server, Azure e AWS. Atualmente, estudo
            Go, e estou empenhado em buscar desafios e aprimorar minhas
            habilidades para contribuir com projetos inovadores no
            desenvolvimento de software.
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Receber meu currículo por e-mail?
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Digite seu e-mail" size="lg" />
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                Enviar
              </Button>
            </div>
          </div>
          <Typography variant="small" className="font-normal !text-gray-500">
            Veja como{" "}
            <a href="#" className="font-medium underline transition-colors">
              Receber meu currículo por e-mail
            </a>
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/avatar1.jpeg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
