import { WithErrorImage } from "@/components/common/fallback-image";


export const CarouselImage = ({ src }: { src: string }) => {
    return (
        <div className="rounded-xl cursor-pointer relative border overflow-clip w-[200px] h-[80px]">
            <WithErrorImage
                src={src}
                alt={"@capconsSage"}
                errorText={"Capcons Sage"}
                fill
                className=" object-cover object-center h-full w-full"
            />
        </div>
    );
};

export const imageUrls1 = [
    `https://storage.googleapis.com/capcons.com/landing/beta/masonry/footballmatch.webp`,
    `https://storage.googleapis.com/capcons.com/landing/beta/masonry/friends.webp`,
    `https://storage.googleapis.com/capcons.com/landing/beta/masonry/gamergirl.webp`,
    `https://storage.googleapis.com/capcons.com/landing/beta/masonry/partyboy.webp`,
    `https://storage.googleapis.com/capcons.com/landing/beta/masonry/partygirl.webp`,
    `https://storage.googleapis.com/capcons.com/landing/beta/masonry/people.webp`,
    `https://storage.googleapis.com/capcons.com/landing/beta/masonry/podcast.webp`,
    `https://storage.googleapis.com/capcons.com/landing/beta/masonry/sunrise.webp`,
];

export const imageUrls2 = [
    `https://storage.googleapis.com/capcons.com/landing/beta/masonry/space.webp`,
    `https://storage.googleapis.com/capcons.com/landing/beta/masonry/space.webp`,
    `https://storage.googleapis.com/capcons.com/landing/beta/masonry/cyberpunkgirl.webp`,
    `https://storage.googleapis.com/capcons.com/landing/beta/masonry/drinking.webp`,
    `https://storage.googleapis.com/capcons.com/landing/beta/masonry/fitness.webp`,
    `https://storage.googleapis.com/capcons.com/landing/beta/masonry/peoplewalking.webp`,
    `https://storage.googleapis.com/capcons.com/landing/beta/masonry/secretsociety.webp`,
    `https://storage.cloud.google.com/capcons.com/landing/beta/masonry/summer.webp`,
    `https://storage.cloud.google.com/capcons.com/landing/beta/masonry/swim.webp`,
];

export const imageUrls3 = [
    `https://storage.cloud.google.com/capcons.com/landing/beta/masonry/car.webp`,
    `https://storage.cloud.google.com/capcons.com/landing/beta/masonry/dj.webp`,
    `https://storage.cloud.google.com/capcons.com/landing/beta/masonry/dog.webp`,
    `https://storage.cloud.google.com/capcons.com/landing/beta/masonry/jesus.webp`,
    `https://storage.cloud.google.com/capcons.com/landing/beta/masonry/landscape.webp`,
    `https://storage.cloud.google.com/capcons.com/landing/beta/masonry/mountains.webp`,
    `https://storage.cloud.google.com/capcons.com/landing/beta/masonry/petrol.webp`,
    `https://storage.cloud.google.com/capcons.com/landing/beta/masonry/spaceship.webp`,
];
