import Link from "next/link";
import DefaultLogo from "@/public/images/uv-hvac-logo.png";
import StandWithUkraine from "@/public/images/stand-with-ukraine.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}

            <Image
              src={DefaultLogo}
              className="max-w-full"
              width="64"
              height="64"
              alt={"logo"}
            />
          </div>

          <div className="shrink-0">
            <Image
              src={StandWithUkraine}
              className="max-w-full"
              width="64"
              height="64"
              alt={"logo"}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
