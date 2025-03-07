import Image from "next/image";
import { Button } from "@/components/button";
import illustration from "../../public/account.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="w-full h-screen gap-10 flex items-center justify-center flex-col">
        <div>
          <Image
            src={illustration}
            alt="illustration in svg of woman looking at some prompts"
            height={500}
            width={500}
          />
        </div>
        <div className="text-white text-lg">
          <p>
            Olá, bem vindo ao seu Dashboard! Se você já possui uma conta,
            <br />
            clique no botão: <strong>“Entrar”</strong>, caso contrário clique no
            botão <strong>“criar”</strong>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <Link href={"/register"}>
              <Button
                content="Criar"
                color="bg-blue-500"
                activeColor="active:bg-blue-300"
                hoverColor="hover:bg-blue-400"
              />
            </Link>
          </div>
          <div>
            <Link href={"/login"}>
              <Button
                content="Entrar"
                color="bg-blue-500"
                activeColor="active:bg-blue-300"
                hoverColor="hover:bg-blue-400"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
