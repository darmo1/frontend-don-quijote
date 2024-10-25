import Link from "next/link";

export type ItemProp = {
  id: string;
  value: string;
  link?: string;
};

type ItemFooterProps = {
  items: ItemProp[];
  title: string;
  columns?: number;
};

export const ItemFooter = ({ items, title, columns }: ItemFooterProps) => {
  return (
    <div className={`mx-4 my-2 md:my-0 ${title === 'Propiedades' && 'hidden md:block'}`}>
      <h3 className="font-semibold">{title}</h3>
      <ul
        className={columns ? `columns-${columns} gap-4 w-[400px]` : undefined}
      >
        {items.map(({ id, link, value }) =>
          link ? (
            <Link href={link} key={id}>
              <li className="my-3 hover:underline">{value}</li>
            </Link>
          ) : (
            <li key={id} className="my-3">
              {value}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
