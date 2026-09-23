// Self-contained vector artwork; animation is paused outside the viewport.
export function transferVisual(){return `<div class="asset-transfer" data-transfer-visual>
  <div class="asset-transfer-top"><span>BG WALLET</span><span>数字资产收付</span></div>
  <svg class="asset-transfer-scene" viewBox="0 0 640 410" fill="none" role="img" aria-label="代币沿发光路径从发送端流向接收端">
    <defs>
      <radialGradient id="at-aura"><stop stop-color="#9172ff" stop-opacity=".3"/><stop offset="1" stop-color="#7961c5" stop-opacity="0"/></radialGradient>
      <linearGradient id="at-silver" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff"/><stop offset=".18" stop-color="#cbcbdc"/><stop offset=".38" stop-color="#5d596e"/><stop offset=".61" stop-color="#d7d4e8"/><stop offset=".8" stop-color="#767387"/><stop offset="1" stop-color="#edeaff"/></linearGradient>
      <linearGradient id="at-face" x1="0" y1="0" x2=".8" y2="1"><stop stop-color="#454054"/><stop offset=".5" stop-color="#1c1b27"/><stop offset="1" stop-color="#3d305d"/></linearGradient>
      <linearGradient id="at-edge"><stop stop-color="#605a84"/><stop offset=".45" stop-color="#211e30"/><stop offset=".8" stop-color="#9b8dd0"/><stop offset="1" stop-color="#44345e"/></linearGradient>
      <linearGradient id="at-glass" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#68637d" stop-opacity=".66"/><stop offset=".5" stop-color="#292631" stop-opacity=".9"/><stop offset="1" stop-color="#453359" stop-opacity=".65"/></linearGradient>
      <linearGradient id="at-light"><stop stop-color="#90c8ff"/><stop offset=".46" stop-color="#c3b1ff"/><stop offset="1" stop-color="#aa7ff3"/></linearGradient>
      <radialGradient id="at-floor"><stop stop-color="#74618b" stop-opacity=".25"/><stop offset="1" stop-color="#403455" stop-opacity="0"/></radialGradient>
      <filter id="at-blur" x="-50%" y="-100%" width="200%" height="300%"><feGaussianBlur stdDeviation="7"/></filter>
      <filter id="at-soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.5"/></filter>
      <path id="at-route" d="M125 256C199 256 235 288 320 288S442 256 515 256"/>
      <g id="at-station">
        <path d="M-68 19L-4-13Q0-15 6-12L70 20V37Q70 43 63 47L7 75Q0 79-7 75L-62 47Q-68 44-68 38Z" fill="#17151f" stroke="#635572" stroke-opacity=".5"/>
        <path d="M-67 20L-5-12Q0-15 6-12L69 20L7 53Q0 56-7 53Z" fill="url(#at-glass)" stroke="#bfb4d8" stroke-opacity=".45"/>
        <path d="M-55 22L-3-4Q0-6 4-4L55 22L4 48Q0 50-4 48Z" fill="#17151f" stroke="#af92e7" stroke-opacity=".3"/>
        <path d="M-58 46L-6 71Q0 74 7 71L60 45" stroke="url(#at-light)" stroke-width="1.5" stroke-opacity=".6"/>
        <path d="M-22 22l21-11 22 11-22 11z" stroke="#c1b0e3" stroke-opacity=".5"/>
      </g>
      <g id="at-token"><circle r="10" fill="url(#at-silver)"/><circle r="8.5" fill="#373044"/><path d="M-4-3h8M0-3v8M-5 0Q0 3 5 0" stroke="#f4ebff" stroke-width="1.6" stroke-linecap="round"/></g>
    </defs>
    <ellipse cx="320" cy="220" rx="280" ry="185" fill="url(#at-aura)"/>
    <g stroke="#a098b8" stroke-opacity=".08" stroke-width=".7"><path d="M22 318L319 163 618 318M83 347L319 225 557 347M145 380L319 288 495 380M70 194L420 379M182 174L535 359M570 194L220 379M458 174L105 359"/></g>
    <ellipse cx="320" cy="325" rx="268" ry="56" fill="url(#at-floor)"/>
    <use href="#at-route" stroke="#70598c" stroke-width="27" stroke-opacity=".07"/>
    <use href="#at-route" stroke="url(#at-light)" stroke-width="1" stroke-opacity=".4"/>
    <use href="#at-route" class="at-beam at-beam-halo" stroke="url(#at-light)" stroke-width="7" filter="url(#at-blur)" pathLength="100"/>
    <path class="at-beam" d="M125 256C199 256 235 288 320 288S442 256 515 256" stroke="url(#at-light)" stroke-width="2" pathLength="100"/>
    <g transform="translate(125 236)"><use href="#at-station"/><ellipse class="at-send-glow" cx="0" cy="22" rx="45" ry="22" fill="#ad9bf6" opacity=".25" filter="url(#at-blur)"/></g>
    <g transform="translate(515 236)"><use href="#at-station"/><ellipse class="at-receive-glow" cx="0" cy="22" rx="45" ry="22" fill="#b5a3ff" opacity=".25" filter="url(#at-blur)"/></g>
    <g class="at-packet"><use href="#at-token"/></g><g class="at-packet at-packet-two"><use href="#at-token"/></g><g class="at-packet at-packet-three"><use href="#at-token"/></g>
    <ellipse class="at-coin-shadow" cx="322" cy="286" rx="61" ry="12" fill="#07070d" opacity=".55" filter="url(#at-blur)"/>
    <g class="at-coin">
      <ellipse cx="329" cy="167" rx="67" ry="73" fill="url(#at-edge)" stroke="#88769d" stroke-width=".8"/>
      <path d="M360 106l9 1m-5 4l9 2m-5 4l10 2m-6 4l10 2m-7 4l10 2m-8 4l11 2m-9 4l11 2m-10 4l11 2m-10 4l11 2m-11 4l11 2m-11 4l11 2m-11 4l11 2m-12 4l11 2m-12 4l11 2m-12 4l10 2m-12 4l10 2m-12 4l9 2m-12 4l9 1" stroke="#c0adce" stroke-opacity=".45"/>
      <ellipse cx="317" cy="164" rx="65" ry="73" fill="url(#at-silver)"/>
      <ellipse cx="317" cy="164" rx="59" ry="67" fill="url(#at-face)" stroke="#ded7f1" stroke-opacity=".65"/>
      <ellipse cx="317" cy="164" rx="54" ry="61" stroke="#aca0c7" stroke-opacity=".16"/>
      <path d="M289 135h55v10h-21v13h-12v-13h-22z" fill="#eee9ff"/>
      <path d="M316 152c-39 0-40 15 0 15s40-15 0-15" stroke="#eee9ff" stroke-width="3"/>
      <path d="M311 164h12v33h-12z" fill="#eee9ff"/>
      <path d="M279 126c9-15 20-21 37-23" stroke="#fff" stroke-opacity=".5" stroke-width="1.2" stroke-linecap="round"/>
      <ellipse cx="287" cy="119" rx="13" ry="3" transform="rotate(-48 287 119)" fill="#fff" opacity=".17" filter="url(#at-soft)"/>
    </g>
    <g class="at-endpoint at-from" transform="translate(125 186)"><rect x="-33" y="-26" width="66" height="54" rx="16" fill="url(#at-glass)" stroke="#d1c9e0" stroke-opacity=".48"/><path d="M0 13v-25m-9 9l9-9 9 9" stroke="#eae4ff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></g>
    <g class="at-endpoint at-to" transform="translate(515 186)"><rect x="-33" y="-26" width="66" height="54" rx="16" fill="url(#at-glass)" stroke="#d1c9e0" stroke-opacity=".48"/><path d="M0-12v25m-9-9l9 9 9-9" stroke="#eae4ff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></g>
    <g fill="#c8b2ef"><circle cx="220" cy="98" r="1.5" opacity=".5"/><circle cx="434" cy="138" r="1" opacity=".65"/><circle cx="390" cy="70" r="1.5" opacity=".3"/></g>
    <text x="125" y="354" text-anchor="middle" class="at-label">发送</text><text x="320" y="340" text-anchor="middle" class="at-ticker">USDT</text><text x="515" y="354" text-anchor="middle" class="at-label">接收</text>
  </svg>
  <div class="asset-transfer-bottom"><span>连接每一次资产收付</span><button type="button" class="asset-transfer-control" data-transfer-pause aria-label="暂停或播放资产传输动效" aria-pressed="false"><svg viewBox="0 0 16 16" aria-hidden="true"><path class="at-pause-icon" d="M5.5 4v8M10.5 4v8"/><path class="at-play-icon" d="M5 3.5l7 4.5-7 4.5z"/></svg></button></div>
</div>`;}
