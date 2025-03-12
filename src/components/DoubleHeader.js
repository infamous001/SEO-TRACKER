import Link from "next/link";

export default function DoubleHeader({ preTitle, mainTitle, preTitleLink }) {
  return (
    <div>
      {preTitleLink && (
        <Link
          href={preTitleLink}
          className="block text-gray-400 text-lg uppercase"
        >
          {preTitle}
        </Link>
      )}
      {!preTitleLink && (
        <h3 className="block text-gray-500 text-2xl uppercase">{preTitle}</h3>
      )}
      <h2 className="font-bold text-4xl mb-4 leading-tight text-gray-800">{mainTitle}</h2>
    </div>
  );
}
