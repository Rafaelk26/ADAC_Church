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

  return <div>Testando Supabase...</div>;
}