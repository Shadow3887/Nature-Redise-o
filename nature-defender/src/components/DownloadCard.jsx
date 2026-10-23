import { Download } from "lucide-react";

function DownloadCard({ title, icon, file }) {
  return (
    <div className="bg-surface p-8 rounded-2xl
      text-center border border-green-900
      hover:border-green-400 transition">

      <div className="text-green-400 flex
        justify-center mb-5">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-5">
        {title}
      </h3>

      <a
        href={file}
        download
        className="inline-flex items-center gap-2
          bg-green-500 text-black font-bold
          px-6 py-3 rounded-xl hover:bg-green-400"
      >
        <Download size={20} />
        Descargar
      </a>
    </div>
  );
}

export default DownloadCard;