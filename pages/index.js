import Image from "next/image";

function HomePage() {
  return (
    <h1 className="title">
      <Image
        src="/shiba.jpg"
        layout="fill"
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
    </h1>
  );
}

export default HomePage;
