"use client";
import Image from "next/image";
// svgs
import { User } from "../../../public/svg_components/user";
import { Lock } from "../../../public/svg_components/lock";
import illustration from "../../../public/register.svg";
// components
import { InputIcon } from "@/components/input_icon";
import { Label } from "@/components/label";
import { Button } from "@/components/button";
import Link from "next/link";

import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser() {
    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({ user, password }),
        credentials: 'include',
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Erro do servidor: ${response.status}`);
      }

      const data = await response.text();
      console.log("Usuário registrado com sucesso!", data);
    } catch (err) {
      console.error("Erro ao registrar usuário:", err);
    }
  }

  return (
    <div className="flex flex-col text-white items-center justify-center min-h-screen h-fit w-full gap-6">
      <div>
        <Image
          src={illustration}
          alt="ilustração de uma mulher ao lado de um notebook"
          height={300}
          width={300}
        />
      </div>
      <div className="text-white text-lg">
        <p className="text-center">
          Crie sua conta preenchendo todos os campos abaixo. <br />
          Lembre-se: O seu nome de usuário e senha diferencia entre
          <strong> minúscula e maiúscula</strong>.
        </p>
      </div>
      <div className="w-full h-fit items-center flex gap-3 flex-col">
        <div className="w-[30%] flex flex-col gap-2">
          <Label target="user" content="Usuário:" />
          <InputIcon
            placeholder="Digite o seu nome de usuário"
            id="user"
            onChange={(e) => setUser(e.target.value)}
            inputIcon={<User />}
            inputType="text"
          />
        </div>
        <div className="w-[30%] flex flex-col gap-2">
          <Label target="password" content="Senha:" />
          <InputIcon
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            id="password"
            inputIcon={<Lock />}
            inputType="text"
          />
        </div>
      </div>
      <div className="flex gap-2 justify-end w-[30%]">
        <Link href={"/"}>
          <Button
            activeColor="active:bg-orange-300"
            color="bg-orange-500"
            content="Tela principal"
            hoverColor="hover:bg-orange-400"
          />
        </Link>
        <Button
          onClick={registerUser}
          activeColor="active:bg-green-300"
          color="bg-green-500"
          hoverColor="hover:bg-green-400"
          content="Criar usuário"
        />
      </div>
    </div>
  );
}
