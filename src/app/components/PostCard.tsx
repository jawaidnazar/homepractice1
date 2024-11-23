import Image from "next/image"

export default function PostCard() {
    return (
        <div className="flex justify-center">
            <div
            className="fiex-col
            sm:w-full sm:flex
            sm:flex-cols-1
            md:flex-cols-2
            lg:flex-cols-3 gap-4">
                <Image src="/banner.png"
                alt="Image"
                width={150}
                height={80} />

                <Image src="/cool.png"
                alt="Image"
                width={150}
                height={80}
                className="md:flex w-5/12
                lg:flex w-5/12" />

                  <Image src="/item.png"
                alt="Image"
                width={150}
                height={80}
                className="lg:flex md:hidden " />

            </div>
        </div>
    );
}