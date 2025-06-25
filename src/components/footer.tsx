import { Zap } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded flex items-center justify-center">
          <Zap className="h-4 w-4 text-white" />
        </div>
        <span className="text-sm font-medium">Dragon Runner</span>
      </div>
      <p className="text-xs text-gray-600 sm:ml-4">
        © {new Date().getFullYear()} Dragon Runner. Todos os direitos
        reservados.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/privacidade"
          className="text-xs hover:underline underline-offset-4 text-gray-600"
        >
          Privacidade
        </Link>
        <Link
          href="/termos"
          className="text-xs hover:underline underline-offset-4 text-gray-600"
        >
          Termos
        </Link>
        <Link
          href="/suporte"
          className="text-xs hover:underline underline-offset-4 text-gray-600"
        >
          Suporte
        </Link>
      </nav>
    </footer>
  );
}
