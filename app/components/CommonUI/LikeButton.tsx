import Image from "next/image";

interface ButtonProps {
  title?: string;
  style?: string;
  svg?: string;
}

export default function LikeButton(props: ButtonProps) {
  const { title, style, svg } = props;

  return (
    <div className="w-fit ">
      <div
        className={`flex justify-center rounded-[70px] w-fit p-1 transiton duration-100 hover:scale-105 ${style}`}
      >
        {svg && (
          <Image
            alt="button icon"
            src={svg}
            className="max-w-4 max-h-4"
          />
        )}
        {title && <p className="text-sm"> {title}</p>}
      </div>
    </div>
  );
}
