import { findPropertyId, PropertyProps } from "@/app/result-properties/utils";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data, error }: PropertyProps = await findPropertyId({ id });

  const { address, available, description, price, type } = data[0] ?? {};

  if (error) {
    return <div>Algo ha ocurrido 💥💥 Intente más tarde</div>;
  }

  const Field = ({
    title,
    value,
  }: {
    title: string;
    value: string | number | null;
  }) => {
    return (
      <div>
        <h2 className="text-md font-semibold mt-3">{title}</h2>
        <p className="text-md font-light mb-3">{value}</p>
      </div>
    );
  };

  return (
    <main className="max-w-7xl mx-auto">
      <div className="text-center font-semibold h-16 w-full bg-green-500 rounded-xl flex justify-center items-center">
        Vida de lujo en un exclusivo sector
      </div>
      <div className="my-8">
        <h1>Caracteristicas</h1>
        <div className="columns-2">
          {" "}
          <Field title="Precio" value={price} />
          <Field title="Habitaciones" value={price} />
          <Field title="Garaje" value={price} />
          <Field title="Administración" value={price} />
          <Field title="Área" value={price} />
          <Field title="Estrato" value={price} />
          <Field title="Closet" value={price} />
          <Field title="Sala comedor" value={price} />
          <Field title="Tipo de propiedad" value={price} />
          <Field title="Baños" value={price} />
          <Field title="Cocina" value={price} />
        </div>
      </div>

      <h1>Ubicacion</h1>
    </main>
  );
}
