type ProductVisualProps = { image: string; name: string; eyebrow: string; icon: string; compact?: boolean };

export const ProductVisual = ({ image, name, eyebrow, icon, compact = false }: ProductVisualProps) => (
  <div className="group relative overflow-hidden rounded-[1.75rem] bg-[#071522] p-2 shadow-xl shadow-slate-900/10">
    <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(24,199,149,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(24,199,149,.12)_1px,transparent_1px)] [background-size:32px_32px]" />
    <div className="relative overflow-hidden rounded-[1.35rem]">
      <img src={image} alt={`${name} product illustration`} className={`${compact ? "aspect-[16/10]" : "aspect-[4/3]"} w-full object-cover transition duration-700 group-hover:scale-[1.025]`} loading="lazy" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#071522]/90 to-transparent" />
      <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-[#071522]/85 text-[#38e0af] shadow-lg backdrop-blur sm:left-5 sm:top-5"><span className="material-symbols-outlined">{icon}</span></div>
      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 sm:inset-x-5 sm:bottom-5"><div><p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#73f0ca]">Energy Data Network</p><p className="mt-1 text-base font-black text-white sm:text-lg">{name}</p></div>{!compact && <span className="hidden rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur sm:block">{eyebrow}</span>}</div>
    </div>
  </div>
);
