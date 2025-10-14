interface VideoData {
  title: string;
  theme: string;
  videoId: string;
  date: string;
  time: string;
  liveUrl: string;
  featured?: boolean;
}

const videos: VideoData[] = [
  {
    title: "Aula 01 – O DESPERTAR",
    theme: "Teoria do aparelho psíquico, estrutura e as portas do inconsciente.",
    videoId: "i4aAA0EObC0",
    date: "14/10",
    time: "20hrs",
    liveUrl: "https://youtube.com/live/i4aAA0EObC0?feature=share",
    featured: true
  },
  {
    title: "Aula 02 – A CURA", 
    theme: "Narcisismo, traumas e autoestima pela lente da Psicanálise.",
    videoId: "kZ3rbwazMZo",
    date: "15/10",
    time: "20hrs",
    liveUrl: "https://youtube.com/live/kZ3rbwazMZo?feature=share"
  },
  {
    title: "Aula 03 – A REVELAÇÃO",
    theme: "Pulsão de morte, estresse extremo e atos suicidas.",
    videoId: "2PRUWCWZ4HE",
    date: "16/10",
    time: "20hrs",
    liveUrl: "https://youtube.com/live/2PRUWCWZ4HE?feature=share"
  }
];

const VideoCard = ({ video }: { video: VideoData }) => {
  return (
    <div className={`bg-white rounded-xl shadow-elegant p-4 md:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
      video.featured ? 'ring-2 ring-brand-yellow shadow-cta' : ''
    }`}>
      {video.featured && (
        <div className="bg-brand-yellow text-brand-navy text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
          ⭐ AULA PRINCIPAL
        </div>
      )}
      <div className="mb-4">
        <h3 className={`font-bold text-brand-navy mb-2 ${video.featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}>
          {video.title}
        </h3>
        <div className="bg-brand-yellow/10 border border-brand-yellow/30 rounded-lg p-2 mb-3">
          <p className="text-xs md:text-sm text-brand-navy font-semibold text-center">
            📅 {video.date} às {video.time}
          </p>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{video.theme}</p>
      </div>
      
      <div className="video-container mb-4" style={{ paddingBottom: window.innerWidth < 768 ? '65%' : '56.25%' }}>
        <iframe
          src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
      </div>
      
      <a 
        href={video.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
      >
        📺 Assistir Live Completa
      </a>
    </div>
  );
};

const VideoSection = () => {
  return (
    <section className="py-8 md:py-12 px-4 bg-slate-50/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            🎬 Aulas do Lançamento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acesse gratuitamente as 3 aulas fundamentais para começar sua jornada na Psicanálise
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;