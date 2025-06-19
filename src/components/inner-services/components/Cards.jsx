// import { Button } from "@/components/ui/button";
import Link from "next/link"; // or use react-router-dom's Link if needed

export default function WorkCard({ title, description, href, image }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <div className="p-6 border">
        <h3 className="font-bold text-lg mb-2 text-[#00aceb]">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <button variant="outline" size="sm" asChild>
          <Link href={href}>View Project</Link>
        </button>
      </div>
    </div>
  );
}
