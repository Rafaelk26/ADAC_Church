"use client";

import { useEffect } from "react";
import { fetchAllCelulas } from "@/functions/fetchAllCelulas";
import { fetchAllMinisters } from "@/functions/fetchAllMinisters";


export default function Test() {

  useEffect(() => {
    fetchAllCelulas();
    fetchAllMinisters();
  }, []);

  return <div>Testando Supabase...</div>;
}