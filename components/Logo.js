import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex gap-1">
      <img
        className="w-[150px] md:w-[200px]"
        src="https://maquinac.com/wp-content/uploads/2021/05/Maxion-Montich-logo.png"
        alt="Maxion Montich"
      />
    </Link>
  );
}
