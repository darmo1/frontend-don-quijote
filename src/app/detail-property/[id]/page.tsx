import { CardWhatsapp } from "@/app/_components/card-whatsapp";
import { findPropertyId, PropertyProps } from "@/app/result-properties/utils";
import { SliderProperties } from "./_components/SliderProperties";
import { SuggestionsProperty } from "./_components/suggestionsProperty";

type SearchParamsProps = {
  city?: string;
  property?: string;
  rooms?: number;
};

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: SearchParamsProps;
}) {
  const { id } = params;
  const { city } = searchParams;
  const {
    data: { property = [], suggestedProperties = [] },
    error,
  }: PropertyProps = await findPropertyId({ id, city });
console.log({ property, suggestedProperties })
  const {
    address,
    available,
    description,
    price,
    type,
    images,
    administration,
    area,
    bathroom,
    closet,
    departments,
    dinningroom,
    garage,
    kitchen,
    location,
    municipality,
    reference,
    rooms,
    socialClass,
  } = property[0] ?? {};

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
      <div className="w-1/3 ">
        <h2 className="text-md font-semibold mt-3  w-full">{title}:</h2>
        <p className="text-md font-light mb-3 w-full">{value}</p>
      </div>
    );
  };

  return (
    <main className="max-w-6xl mx-auto">
      <SliderProperties images={images} />
      <div className="text-center font-semibold h-16 w-full bg-[#49A02F] rounded-xl flex justify-center items-center text-white">
        Vida de lujo en un exclusivo sector
      </div>
      <div className="my-8">
        <h1 className="font-semibold text-center text-xl">Caracteristicas</h1>
        <div className="flex flex-wrap max-w-2xl mx-auto border">
          <Field title="Precio" value={price} />
          <Field title="Área" value={area} />
          <Field title="Tipo de propiedad" value={type} />
          <Field title="Habitaciones" value={rooms} />
          <Field title="Estrato" value={socialClass} />
          <Field title="Baños" value={bathroom} />
          <Field title="Garaje" value={garage} />
          <Field title="Closet" value={closet} />
          <Field title="Cocina" value={kitchen} />
          <Field title="Administración" value={administration} />
          <Field title="Sala comedor" value={dinningroom} />
        </div>
      </div>

      <h1 className="font-semibold text-center text-2xl">Ubicacion</h1>

       <div>
        <CardWhatsapp />
      </div> 

      {suggestedProperties.length > 0 && (
        <div>
          <h1 className="font-semibold text-center text-xl">
            Otras propiedades que te puedan interesar:
          </h1>
          <SuggestionsProperty suggestions={suggestedProperties} />
        </div>
      )}
    </main>
  );
}
