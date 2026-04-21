"use client";

import { useEffect } from "react";
import { fetchAllCelulas } from "@/functions/GET/fetchAllCelulas";
import { fetchAllMinisters } from "@/functions/GET/fetchAllMinisters";


export default function Test() {

  useEffect(() => {
    fetchAllCelulas();
    fetchAllMinisters();
  }, []);

  return <div>Testando Supabase...</div>;
}