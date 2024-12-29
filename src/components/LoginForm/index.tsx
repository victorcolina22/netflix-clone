"use client";

import { useState } from "react";
import Link from "next/link";

export function LoginForm() {
  const [form, setForm] = useState({
    identification: "",
    password: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form
      className="bg-transparent-card w-full max-w-[450px] flex flex-col gap-5 p-14  rounded-sm xl:mt-48 lg:mt-40 mt-32"
      onSubmit={handleSubmit}
    >
      <p className="text-[32px] font-bold">Iniciar sesión</p>

      <input
        autoComplete="off"
        className="w-full bg-transparent border border-gray-500 rounded-sm p-4"
        name="identification"
        placeholder="Email o número de teléfono"
        type="text"
        onChange={handleOnChange}
        value={form.identification}
      />
      <input
        autoComplete="off"
        className="w-full bg-transparent border border-gray-500 rounded-sm p-4"
        name="password"
        placeholder="Contraseña"
        type="password"
        onChange={handleOnChange}
        value={form.password}
      />

      <button
        className="bg-brand-red hover:bg-brand-red-hover p-2 rounded-md font-bold transition-colors"
        type="submit"
      >
        Iniciar sesión
      </button>

      {/* TODO: Add forgot password page */}
      <Link href="" className="text-center">
        ¿Olvidaste tu contraseña?
      </Link>
    </form>
  );
}
