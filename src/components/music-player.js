import PauseIcon from "@mui/icons-material/Pause";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
export default function MusicPlayer({playMusic, play, showTitle}){

  return(
    <div className="flex items-center fixed right-4 top-4 z-40">
        <div className="flex items-center shadow-lg rounded-full">
          <button
            onClick={() => {
              playMusic(play);
            }}
            className={`w-10 h-10 flex items-center justify-center transition-all duration-300 rounded-full relative z-10 cursor-pointer bg-white ${
              play && "animate-spin-slow"
            }`}
          >
            {!play ? (
              <PauseIcon fontSize="medium" />
            ) : (
              <MusicNoteIcon fontSize="medium" />
            )}
          </button>

          <div
            className={`flex items-center -translate-x-2 rounded shadow-xl transition-all overflow-hidden duration-300 bg-white ${
              showTitle ? "h-6 px-5" : "h-0 w-0"
            }`}
          >
            <p className="text-xs min-w-fit">Seizari - It's You</p>
          </div>
        </div>

        <audio className="hidden" loop >
          <source
            src={require("../assets/music/music-1.mp3")}
            type="audio/mpeg"
          />
        </audio>
      </div>
  );
};