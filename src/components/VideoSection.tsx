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
    videoId: "-QhPmq_Jeqs",
    date: "28/04",
    time: "20hrs",
    liveUrl: "https://youtube.com/live/-QhPmq_Jeqs?feature=share",
    featured: true
  },
  {
    title: "Aula 02 – A CURA",
    theme: "Narcisismo, traumas e autoestima pela lente da Psicanálise.",
    videoId: "38HH7C3UAmM",
    date: "29/04",
    time: "20hrs",
    liveUrl: "https://youtube.com/live/38HH7C3UAmM?feature=share"
  },
  {
    title: "Aula 03 – A REVELAÇÃO",
    theme: "Pulsão de morte, estresse extremo e atos suicidas.",
    videoId: "pXdWEuPIeQA",
    date: "30/04",
    time: "20hrs",
    liveUrl: "https://youtube.com/live/pXdWEuPIeQA?feature=share"
  }
];

const VideoCard = ({ video }: { video: VideoData }) => {
  return (
    <div className="bg-white rounded-xl shadow-elegant p-4 md:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="mb-4">
        <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-2">
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
  const featuredVideo = videos.find(v => v.featured);
  const otherVideos = videos.filter(v => !v.featured);

  return (
    <section className="py-8 md:py-12 px-4 bg-slate-50/50">
      <div className="container mx-auto max-w-7xl">
        {/* Featured Video - Aula 1 */}
        {featuredVideo && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
                🎬 {featuredVideo.title}
              </h2>
              <div className="bg-brand-yellow text-brand-navy text-sm md:text-base font-bold px-6 py-2 rounded-full inline-block mb-4">
                ⭐ AULA PRINCIPAL - ASSISTA AGORA
              </div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                {featuredVideo.theme}
              </p>
              <div className="bg-brand-yellow/10 border border-brand-yellow/30 rounded-lg p-3 max-w-md mx-auto">
                <p className="text-sm md:text-base text-brand-navy font-semibold">
                  📅 {featuredVideo.date} às {featuredVideo.time}
                </p>
              </div>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="video-container mb-6 shadow-cta rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${featuredVideo.videoId}?rel=0&modestbranding=1`}
                  title={featuredVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href={featuredVideo.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-center inline-flex items-center justify-center gap-2"
                >
                  📺 Assistir Live Completa
                </a>
                
                <a
                  href="https://chat.whatsapp.com/HODTnsHqGUPLuk9VUv9z7C"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellow/90 text-brand-navy font-bold py-4 px-8 rounded-lg transition-colors text-center inline-flex items-center justify-center gap-2 animate-pulse"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
                  </svg>
                  Entrar no Grupo VIP
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Other Videos */}
        {otherVideos.length > 0 && (
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
                📚 Outras Aulas do Lançamento
              </h3>
              <p className="text-base md:text-lg text-muted-foreground">
                Continue sua jornada com as próximas aulas
              </p>
            </div>
            
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {otherVideos.map((video, index) => (
                <VideoCard key={index} video={video} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;