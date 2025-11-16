import Image from "next/image";

export default function ProfilePicture() {
  return (
    <div className="flex items-center">
      <div
        className="
                relative
                after:content-['']
                after:absolute
                after:w-full
                after:h-full
                after:top-3
                after:left-3
                after:rounded-sm
                after:border-2
                after:border-[#63FFD9]
                after:-z-10
                after:transition-all
                hover:after:translate-[0.22em]
                after:duration-220
              "
      >
        <Image
          src={"/images/jasper_pfp.jpg"}
          alt="A nice photo of me :D"
          width={300}
          height={300}
          className="min-w-60 rounded-sm object-cover transition-all duration-220 overlay-[#63FFD9] hover:-translate-[0.22em]"
        />
      </div>
    </div>
  );
}
