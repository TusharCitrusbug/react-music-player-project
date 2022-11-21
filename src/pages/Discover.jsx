import { Error, Loader, SongCard } from "../components";
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { useDispatch, useSelector } from "react-redux";
const Discover = () => {
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const { data, error, isLoading } = useGetTopChartsQuery();

    const genereTitle = 'Pop'
    if (isLoading) {
        return <Loader title="Loading songs......." />
    }
    if (error) {
        return <Error title="Something Error occured while loading songs Please try again......." />
    }
    return (

        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover {genereTitle}</h2>
                <select className="bg-black text-white p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5" onChange={() => { }} value=''>
                    {genres.map((genre) => <option key={genre.value}>{genre.title}</option>
                    )}
                </select>

            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.map((song, i) => (
                    <SongCard key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} i={i} data={data} />
                ))}
            </div>
        </div>
    )
}

export default Discover;
