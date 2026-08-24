"use client";

import { useEffect } from "react";
import { fetchAllCelulas } from "@/functions/GET/fetchAllCelulas";
import { fetchAllMinisters } from "@/functions/GET/fetchAllMinisters";
import { fetchAllVisitantes } from "@/functions/GET/fetchAllVisitantes";
import { fetchAllTrabalhadores } from "@/functions/GET/fetchAllTrabalhadores";
import { fetchAllEventos } from "@/functions/GET/fetchAllEventos";


export default function Test() {

  useEffect(() => {
    fetchAllCelulas();
    fetchAllMinisters();
    fetchAllEventos();
    fetchAllTrabalhadores();
    fetchAllVisitantes();
  }, []);

  useEffect(() => {

    function sigIn() {
        fetch("/api/register", {
          method: "POST",
          body: JSON.stringify({ email: "isa.desimonefernandes@gmail.com", senha: "Is@dmin01*" }),
      })
    }

    sigIn();
    
  }, []);

  return <div>Cadastrando novo usuário...</div>;
}