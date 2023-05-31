import Link from "next/link";
import Image from "next/image";

type Props = {
  result: Result;
};

const Item = ({ result }: Props) => {
  const itemTextCol = (
    <div className="flex flex-col justify-center">
      <h2 className="text-xl font-bold text-blue-300">
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
        >
          {result.title}
        </Link>
      </h2>
      <p>{result.extract}</p>
    </div>
  );

  return result?.thumbnail?.source ? (
    <article className="max-w-lg m-4">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center">
          <Image
            src={result.thumbnail.source}
            alt={result.title}
            width={result.thumbnail.width}
            height={result.thumbnail.height}
            loading="lazy"
          />
        </div>
        {itemTextCol}
      </div>
    </article>
  ) : (
    <article className="max-w-lg m-4">{itemTextCol}</article>
  );
};

export default Item;
