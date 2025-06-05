import Image from "next/image";
import Link from "next/link";

type ResultsCardProps = {  
    strResult: string,  
    strResultThumb: string,
    strInstructions: string,
    strResultId: number
}

export default function SearchResultsCard( props: ResultsCardProps ) {
    return (
        <div className="relative">
            <h2 className="text-white">{props.strResult}</h2>
            <div className="card-wrapper max-w-[350px] bg-white text-black rounded-xl">
                <div className="ImgWrapper">
                    <Image
                        className="rounded-t-xl"
                        src={props.strResultThumb}
                        alt={`Image of ${props.strResult}`}
                        width={350}
                        height={350}
                        priority
                    />
                </div>
                <div className="cardDataWrapper px-3 pb-4">
                    {/* <div className="tagWrapper mt-6 mb-3">
                        <p className="text-green-700 bg-green-50 border-green-200 px-2 py-1 w-min border-2 rounded-full">Interior</p>
                    </div> */}
                    <div className="copyWrapper flex flex-col gap-4">
                        <p className="blogTitle font-semibold text-lg ">{props.strResult}</p>
                        {/* <p className="blogExcerpt text-neutral-600">Curated vibrants colors for your living, make it pop & calm in the same time.</p> */}
                    </div>

                    <Link role="button" className="is-layout-stretched-link flex items-center gap-4 text-indigo-700 font-medium pt-5" href={`/recipes/${props.strResultId}`}>Read More</Link>
                </div>
            </div>
        </div>
    );
}